"use client"

import { motion } from "motion/react"
import { Heart, TrendingDown, MapPin, Clock } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface StatsSectionProps {
  t: Translations
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function StatsSection({ t }: StatsSectionProps) {
  const stats = [
    {
      number: t.stat1Number,
      sub: t.stat1Sub,
      text: t.stat1Text,
      icon: Heart,
      color: "oklch(0.62 0.22 25)",
      bg: "oklch(0.62 0.22 25 / 0.1)",
    },
    {
      number: t.stat2Number,
      sub: t.stat2Sub,
      text: t.stat2Text,
      icon: TrendingDown,
      color: "oklch(0.72 0.18 160)",
      bg: "oklch(0.72 0.18 160 / 0.1)",
    },
    {
      number: t.stat3Number,
      sub: t.stat3Sub,
      text: t.stat3Text,
      icon: MapPin,
      color: "oklch(0.70 0.15 250)",
      bg: "oklch(0.70 0.15 250 / 0.1)",
    },
    {
      number: t.stat4Number,
      sub: t.stat4Sub,
      text: t.stat4Text,
      icon: Clock,
      color: "oklch(0.80 0.12 60)",
      bg: "oklch(0.80 0.12 60 / 0.1)",
    },
  ]

  return (
    <section
      id="chiffres"
      className="relative py-28 overflow-hidden"
      aria-labelledby="stats-title"
    >
      {/* Divider gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.62 0.22 25 / 0.4), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.17 0.018 260), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="section-tag mb-6 inline-flex">
            <Heart size={10} fill="currentColor" aria-hidden="true" />
            {t.statsTag}
          </span>
          <h2
            id="stats-title"
            className="font-display text-3xl sm:text-4xl font-bold text-white mt-6 mb-4"
          >
            {t.statsTitle}
          </h2>
          <p className="text-white/50 text-lg">{t.statsSubtitle}</p>
        </motion.div>

        {/* Stats Grid — Bento */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map(({ number, sub, text, icon: Icon, color, bg }) => (
            <motion.div
              key={number}
              variants={itemVariants}
              className="group relative rounded-3xl p-7 border border-white/8 hover:border-white/16 transition-all duration-500 cursor-default overflow-hidden"
              style={{ background: "oklch(0.17 0.018 260)" }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}/0.08, transparent 70%)` }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: bg }}
                aria-hidden="true"
              >
                <Icon size={20} style={{ color }} />
              </div>

              {/* Number */}
              <p
                className="font-display text-4xl font-bold leading-none mb-2"
                style={{ color }}
              >
                {number}
              </p>

              {/* Sub */}
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                {sub}
              </p>

              {/* Text */}
              <p className="text-sm text-white/55 leading-relaxed">{text}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divider gradient bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.18 160 / 0.3), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
