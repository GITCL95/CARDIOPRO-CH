const fs = require("fs")
const path = require("path")

const sourceDir = path.join(__dirname, "..", "out")
const targetDir = path.join(__dirname, "..")

function copyRecursive(src, dest) {
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true })
      copyRecursive(srcPath, destPath)
      continue
    }

    fs.copyFileSync(srcPath, destPath)
  }
}

if (!fs.existsSync(sourceDir)) {
  console.error("Build output introuvable: dossier out/")
  process.exit(1)
}

copyRecursive(sourceDir, targetDir)
console.log("Build statique publie a la racine pour Vercel.")
