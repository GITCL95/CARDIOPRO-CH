import sharp from "sharp"
import { readFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const productsDir = join(root, "public/images/products")
const outPath = join(root, "public/images/hero-aed-studio.webp")

const WIDTH = 1200
const HEIGHT = 900
const BG = { r: 248, g: 249, b: 252 }

const layout = [
  { file: "iaed-s1.webp", x: 70, y: 300, w: 210 },
  { file: "heartsine-360p.webp", x: 250, y: 250, w: 230 },
  { file: "fred-pa1.webp", x: 470, y: 210, w: 250 },
  { file: "heartsine-500p.webp", x: 710, y: 250, w: 230 },
  { file: "zoll-aed3.webp", x: 910, y: 290, w: 220 },
]

async function loadResized(file, width) {
  const buffer = readFileSync(join(productsDir, file))
  const img = sharp(buffer)
    .flatten({ background: "#ffffff" })
    .trim({ threshold: 18 })
    .resize({ width, withoutEnlargement: true })
  const meta = await img.metadata()
  const data = await img.png().toBuffer()
  return { data, width: meta.width ?? width, height: meta.height ?? width }
}

const backdrop = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="50%" stop-color="#f8f9fc"/>
        <stop offset="100%" stop-color="#eef1f6"/>
      </linearGradient>
      <radialGradient id="spot" cx="50%" cy="38%" r="60%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
        <stop offset="100%" stop-color="#f8f9fc" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <ellipse cx="600" cy="780" rx="500" ry="70" fill="#d7dee8" opacity="0.25"/>
    <ellipse cx="600" cy="400" rx="520" ry="240" fill="url(#spot)"/>
  </svg>`,
)

let composite = await sharp({
  create: { width: WIDTH, height: HEIGHT, channels: 3, background: BG },
})
  .composite([{ input: backdrop, top: 0, left: 0 }])
  .png()
  .toBuffer()

for (const item of layout) {
  const { data, width, height } = await loadResized(item.file, item.w)
  const pad = 24
  const shadowPlate = await sharp(data)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .blur(14)
    .linear(1, -40)
    .png()
    .toBuffer()

  const top = item.y + Math.round((280 - height) / 2)
  const left = item.x + Math.round((item.w - width) / 2)

  composite = await sharp(composite)
    .composite([
      { input: shadowPlate, top: top + 10, left: left + 6, blend: "multiply" },
      { input: data, top, left },
    ])
    .png()
    .toBuffer()
}

await sharp(composite).webp({ quality: 90 }).toFile(outPath)
console.log("Created", outPath)
