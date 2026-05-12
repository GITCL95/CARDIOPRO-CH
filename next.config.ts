import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "motion/react"],
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
