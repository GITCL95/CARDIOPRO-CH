"use client"

import { motion } from "motion/react"
import {
  ShieldCheck,
  Phone,
  Wrench,
  Users,
  BookOpen,
  CreditCard,
  Heart,
} from "lucide-react"
import type { Translations } from "@/lib/translations"

interface AdvantagesSectionProps {
  t: Translations
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function AdvantagesSection({ t }: AdvantagesSectionProps) {
  const advantages = [
    {
      icon: ShieldCheck,
      title: t.adv1Title,
      text: t.adv1Text,
      color: "oklch(0.72 0.18 160)",
      bg: "oklch(0.72 0.18 160 / 0.1)",
    },
    {
      icon: Phone,
      title: t.adv2Title,
      text: t.adv2Text,
      color: "oklch(0.62 0.22 25)",
      bg: "oklch(0.62 0.22 25 / 0.1)",
    },
    {
      icon: Wrench,
      title: t.adv3Title,
      text: t.adv3Text,
      color: "oklch(0.70 0.15 250)",
      bg: "oklch(0.70 0.15 250 / 0.1)",
    },
    {
      icon: Users,
      title: t.adv4Title,
      text: t.adv4Text,
      color: "oklch(0.80 0.12 60)",
      bg: "oklch(0.80 0.12 60 / 0.1)",
    },
    {
      icon: BookOpen,
      title: t.adv5Title,
      text: t.adv5Text,
      color: "oklch(0.75 0.16 310)",
      bg: "oklch(0.75 0.16 310 / 0.1)",
    },
    {
      icon: CreditCard,
      title: t.adv6Title,
      text: t.adv6Text,
      color: "oklch(0.72 0.18 160)",
      bg: "oklch(0.72 0.18 160 / 0.1)",
    },
  ]

  return (
    <section
      id="solutions"
      className="relative py-32 overflow-hidden noise-bg"
      aria-labelledby="adv-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.72 0.18 160 / 0.3), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-8"
          style={{ background: "oklch(0.62 0.22 25)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">
            <ShieldCheck size={10} aria-hidden="true" />
            {t.advTag}
          </span>
          <h2
            id="adv-title"
            className="font-display text-3xl sm:text-4xl font-bold text-white mt-6"
          >
            {t.advTitle}
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {advantages.map(({ icon: Icon, title, text, color, bg }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative rounded-2xl p-6 border border-white/8 hover:border-white/16 transition-all duration-500 overflow-hidden"
              style={{ background: "oklch(0.17 0.018 260)" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at 0% 0%, ${color}/0.06, transparent 60%)`,
                }}
                aria-hidden="true"
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
                style={{ background: bg }}
                aria-hidden="true"
              >
                <Icon size={18} style={{ color }} />
              </div>
              <h3 className="font-semibold text-white mb-2 leading-snug">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-10 border border-white/8 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.17 0.022 260), oklch(0.15 0.018 260))",
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-20 pointer-events-none"
            style={{ background: "oklch(0.62 0.22 25)" }}
            aria-hidden="true"
          />

          <Heart
            size={32}
            className="mx-auto mb-6 heart-pulse fill-[oklch(0.62_0.22_25)]"
            style={{ color: "oklch(0.62 0.22 25)" }}
            aria-hidden="true"
          />

          <blockquote className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <p className="text-white/50 text-sm mb-8">{t.quoteSubtext}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+41225180936"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_oklch(0.62_0.22_25/0.4)]"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
              }}
            >
              <Phone size={14} aria-hidden="true" />
              +41 22 518 09 36
            </a>
            <a
              href="mailto:contact@cardiopro.ch"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              contact@cardiopro.ch
            </a>
          </div>

          {/* Emergency note */}
          <p className="mt-6 text-xs text-white/25">
            {t.emergency}{" "}
            <strong className="text-white/50">{t.emergencyNumber}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
