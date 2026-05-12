"use client"

import { motion } from "motion/react"
import { ArrowRight, Heart, Package, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Translations } from "@/lib/translations"

interface HeroSectionProps {
  t: Translations
}

function EcgLine() {
  return (
    <svg
      viewBox="0 0 600 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      <path
        d="M0,50 L60,50 L75,50 L80,20 L90,80 L100,15 L110,85 L120,50 L140,50 L160,50 L175,50 L180,30 L190,70 L200,25 L210,75 L220,50 L260,50 L280,50 L295,50 L300,30 L310,70 L320,25 L330,75 L340,50 L380,50 L420,50 L440,50 L455,50 L460,30 L470,70 L480,25 L490,75 L500,50 L540,50 L600,50"
        stroke="oklch(0.62 0.22 25)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-path"
        style={{ strokeDasharray: 1200, strokeDashoffset: 1200 }}
      />
    </svg>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HeroSection({ t }: HeroSectionProps) {
  const products = [
    { icon: Heart, label: t.heroProduct1, color: "oklch(0.62 0.22 25)" },
    { icon: Zap, label: t.heroProduct2, color: "oklch(0.72 0.18 160)" },
    { icon: Package, label: t.heroProduct3, color: "oklch(0.70 0.15 250)" },
  ]

  return (
    <section
      id="produits"
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
      aria-labelledby="hero-title"
    >
      {/* Background radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: "oklch(0.62 0.22 25)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{ background: "oklch(0.50 0.18 260)" }} />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Tag */}
            <motion.div variants={itemVariants}>
              <span className="section-tag">
                <Heart size={10} fill="currentColor" aria-hidden="true" />
                {t.heroTag}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white"
            >
              {t.heroTitle.split(" ").slice(0, 3).join(" ")}{" "}
              <span className="gradient-text">
                {t.heroTitle.split(" ").slice(3).join(" ")}
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/60 leading-relaxed max-w-lg"
            >
              {t.heroParagraph}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#offres"
                className={cn(
                  "group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm",
                  "text-white transition-all duration-300",
                  "hover:scale-105 active:scale-95",
                  "shadow-[0_0_24px_oklch(var(--accent)/0.4)] hover:shadow-[0_0_40px_oklch(var(--accent)/0.6)]"
                )}
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
                }}
              >
                <Heart size={16} fill="currentColor" aria-hidden="true" />
                {t.heroCta1}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#contact"
                className={cn(
                  "flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm",
                  "border border-white/15 text-white/80 hover:text-white hover:border-white/30",
                  "transition-all duration-300 hover:bg-white/5",
                  "active:scale-95"
                )}
              >
                {t.heroCta2}
              </a>
            </motion.div>

            {/* Product pills */}
            <motion.div variants={itemVariants} className="flex gap-3 flex-wrap">
              {products.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 transition-colors"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}/0.15` }}
                    aria-hidden="true"
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="text-sm text-white/70 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
              style={{ background: "oklch(0.17 0.018 260)" }}>
              {/* Hero image placeholder — premium defibrillator visual */}
              <div className="aspect-[4/3] flex items-center justify-center relative">
                {/* Device mockup */}
                <div className="relative w-64 h-64 float-anim">
                  {/* Device body */}
                  <div className="absolute inset-0 rounded-3xl shadow-2xl border border-white/10"
                    style={{ background: "linear-gradient(145deg, oklch(0.25 0.01 260), oklch(0.20 0.01 260))" }}>
                    {/* Screen */}
                    <div className="absolute top-8 left-8 right-8 bottom-20 rounded-2xl overflow-hidden"
                      style={{ background: "oklch(0.12 0.02 260)" }}>
                      <div className="p-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[9px] text-white/40 font-mono">AED READY</span>
                        </div>
                        <div className="h-[2px] bg-white/5 mb-3" />
                        {/* Mini ECG on screen */}
                        <svg viewBox="0 0 100 30" className="w-full" aria-hidden="true">
                          <path
                            d="M0,15 L15,15 L18,5 L22,25 L26,3 L30,27 L34,15 L100,15"
                            stroke="oklch(0.72 0.18 160)"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Buttons */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "oklch(0.62 0.22 25/0.9)" }}>
                      <Zap size={18} className="text-white" aria-hidden="true" />
                    </div>
                    {/* Brand text */}
                    <div className="absolute top-4 left-0 right-0 text-center">
                      <span className="text-[8px] font-bold tracking-widest text-white/40 uppercase">CardioPro</span>
                    </div>
                  </div>
                </div>

                {/* Glow behind device */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 rounded-full blur-3xl opacity-30"
                    style={{ background: "oklch(0.62 0.22 25)" }} />
                </div>
              </div>

              {/* ECG Line at bottom */}
              <div className="px-8 pb-6 pt-2">
                <EcgLine />
              </div>

              {/* Badges overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 border border-white/10"
                  style={{ background: "oklch(0.20 0.01 260/0.9)" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
                  CE Médical
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 border border-white/10"
                  style={{ background: "oklch(0.20 0.01 260/0.9)" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.62 0.22 25)" }} aria-hidden="true" />
                  8 ans garantie
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-8 glass rounded-2xl px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
            >
              <p className="text-2xl font-display font-bold text-white">
                CHF <span style={{ color: "oklch(0.72 0.18 160)" }}>45.–</span>
              </p>
              <p className="text-xs text-white/50 mt-0.5">Location / mois HT</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-6 -right-4 glass rounded-2xl px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.62 0.22 25/0.2)" }}>
                  <Heart size={14} fill="oklch(0.62 0.22 25)" style={{ color: "oklch(0.62 0.22 25)" }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Livraison 48h</p>
                  <p className="text-xs text-white/40">Toute la Suisse</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom ECG ribbon — mobile only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="lg:hidden mt-12 opacity-40"
          aria-hidden="true"
        >
          <EcgLine />
        </motion.div>
      </div>
    </section>
  )
}
