import Link from "next/link"
import { Heart, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "oklch(0.12 0.022 260)" }}>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart size={24} fill="oklch(0.62 0.22 25)" style={{ color: "oklch(0.62 0.22 25)" }} />
          <span className="font-display text-xl font-bold text-white">
            Cardio<span style={{ color: "oklch(0.62 0.22 25)" }}>Pro</span>
          </span>
        </div>
        <h1 className="font-display text-8xl font-bold text-white/10 mb-4">404</h1>
        <p className="text-white/60 mb-8">Page introuvable / Seite nicht gefunden</p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/fr/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))" }}
          >
            <ArrowLeft size={14} />
            Français
          </Link>
          <Link
            href="/de/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-all"
          >
            Deutsch
          </Link>
        </div>
      </div>
    </div>
  )
}
