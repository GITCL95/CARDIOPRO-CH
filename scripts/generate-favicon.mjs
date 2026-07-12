import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { execSync } from "child_process"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const svgPath = path.join(root, "public", "images", "favicon.svg")
const pngPath = path.join(root, "public", "images", "favicon-32.png")
const icoTargets = [
  path.join(root, "public", "favicon.ico"),
  path.join(root, "public", "images", "favicon.ico"),
  path.join(root, "src", "app", "favicon.ico"),
]
const applePath = path.join(root, "public", "images", "apple-touch-icon.png")

execSync(
  `npx --yes sharp-cli resize 32 32 --input "${svgPath}" --output "${pngPath}"`,
  { stdio: "inherit", cwd: root },
)
execSync(
  `npx --yes sharp-cli resize 180 180 --input "${svgPath}" --output "${applePath}"`,
  { stdio: "inherit", cwd: root },
)

const png = fs.readFileSync(pngPath)
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(1, 4)

const entry = Buffer.alloc(16)
entry[0] = 32
entry[1] = 32
entry[2] = 0
entry[3] = 0
entry[4] = 1
entry[5] = 0
entry[6] = 32
entry[7] = 0
entry.writeUInt32LE(png.length, 8)
entry.writeUInt32LE(22, 12)

const ico = Buffer.concat([header, entry, png])
for (const target of icoTargets) {
  fs.writeFileSync(target, ico)
}

fs.unlinkSync(pngPath)
console.log("Favicon ICO généré:", icoTargets.join(", "))
console.log("Apple touch icon généré:", applePath)
