"use client"

import { motion } from "motion/react"
import { Shield, ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Translations } from "@/lib/translations"

interface SafetySectionProps {
  t: Translations
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export default function SafetySection({ t }: SafetySectionProps) {
  const certifications = ["SUVA recommandé", "CE Médical", "Swiss RC", "ISO 9001"]

  return (
    <section
      id="entreprise"
      className="relative py-32 overflow-hidden noise-bg"
      aria-labelledby="safety-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10"
          style={{ background: "oklch(0.62 0.22 25)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-8"
          style={{ background: "oklch(0.50 0.18 260)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main visual container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
              style={{ background: "linear-gradient(135deg, oklch(0.17 0.018 260), oklch(0.14 0.015 260))" }}>
              {/* Stats grid inside */}
              <div className="p-8 grid grid-cols-2 gap-4">
                {[
                  { n: "8 000", s: t.stat1Sub, c: "oklch(0.62 0.22 25)" },
                  { n: "5%", s: t.stat2Sub, c: "oklch(0.72 0.18 160)" },
                  { n: "85%", s: t.stat3Sub, c: "oklch(0.70 0.15 250)" },
                  { n: "48h", s: "Livraison Suisse", c: "oklch(0.80 0.12 60)" },
                ].map(({ n, s, c }) => (
                  <div key={n} className="rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors"
                    style={{ background: "oklch(0.20 0.016 260)" }}>
                    <p className="text-3xl font-display font-bold" style={{ color: c }}>{n}</p>
                    <p className="text-xs text-white/50 mt-1 leading-snug">{s}</p>
                  </div>
                ))}
              </div>

              {/* Bottom label */}
              <div className="px-8 pb-8">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5"
                  style={{ background: "oklch(0.20 0.016 260)" }}>
                  <Shield size={18} style={{ color: "oklch(0.62 0.22 25)" }} aria-hidden="true" />
                  <span className="text-sm text-white/70">
                    Conforme aux recommandations SUVA & Fondation Suisse de Cardiologie
                  </span>
                </div>
              </div>
            </div>

            {/* Certification badges */}
            <div className="absolute -bottom-5 -right-5 flex gap-2 flex-wrap justify-end">
              {certifications.map((cert) => (
                <div key={cert}
                  className="glass px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 shadow-lg">
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-7 order-1 lg:order-2"
          >
            <motion.div variants={itemVariants}>
              <span className="section-tag">
                <Shield size={10} aria-hidden="true" />
                {t.safetyTag}
              </span>
            </motion.div>

            <motion.h2
              id="safety-title"
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight"
            >
              {t.safetyTitle}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-white/60 leading-relaxed">
              {t.safetyP1}
            </motion.p>

            <motion.p variants={itemVariants} className="text-white/60 leading-relaxed">
              {t.safetyP2}
            </motion.p>

            {/* Key points */}
            <motion.ul variants={itemVariants} className="space-y-3">
              {[
                "Appareils certifiés CE Médical — garantie 8 ans",
                "Formation incluse (FR & DE) selon SRC",
                "Livraison et installation sous 48h ouvrées",
                "Maintenance et suivi permanent",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "oklch(0.72 0.18 160)" }}
                    aria-hidden="true"
                  />
                  <span className="text-white/70 text-sm">{point}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#offres"
                className={cn(
                  "group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm",
                  "text-white transition-all duration-300 hover:scale-105 active:scale-95",
                  "shadow-[0_0_20px_oklch(var(--accent)/0.3)] hover:shadow-[0_0_32px_oklch(var(--accent)/0.5)]"
                )}
                style={{
                  background: "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
                }}
              >
                {t.safetyCta1}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-all duration-300 hover:bg-white/5"
              >
                {t.safetyCta2}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
