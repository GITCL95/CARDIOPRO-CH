"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Translations } from "@/lib/translations"

interface FaqSectionProps {
  t: Translations
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function FaqSection({ t }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
  ]

  return (
    <section
      id="faq"
      className="relative py-32 overflow-hidden"
      aria-labelledby="faq-title"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.62 0.22 25 / 0.3), transparent)",
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-8"
          style={{ background: "oklch(0.70 0.15 250)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-6 inline-flex">
            <HelpCircle size={10} aria-hidden="true" />
            {t.faqTag}
          </span>
          <h2
            id="faq-title"
            className="font-display text-3xl sm:text-4xl font-bold text-white mt-6 mb-3"
          >
            {t.faqTitle}
          </h2>
          <p className="text-white/50">{t.faqSubtitle}</p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-3"
          role="list"
        >
          {faqs.map(({ q, a }, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              role="listitem"
            >
              <div
                className={cn(
                  "rounded-2xl border overflow-hidden transition-all duration-300",
                  openIdx === idx
                    ? "border-[oklch(0.62_0.22_25/0.4)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                    : "border-white/8 hover:border-white/14"
                )}
                style={{ background: "oklch(0.17 0.018 260)" }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left focus-visible:outline-none"
                  aria-expanded={openIdx === idx}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  <span
                    className={cn(
                      "font-semibold text-base leading-snug transition-colors",
                      openIdx === idx ? "text-white" : "text-white/80"
                    )}
                  >
                    {q}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                      openIdx === idx
                        ? "shadow-[0_0_12px_oklch(0.62_0.22_25/0.5)]"
                        : "bg-white/5"
                    )}
                    style={
                      openIdx === idx
                        ? {
                            background:
                              "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
                          }
                        : undefined
                    }
                    aria-hidden="true"
                  >
                    {openIdx === idx ? (
                      <Minus size={14} className="text-white" />
                    ) : (
                      <Plus size={14} className="text-white/60" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-7 pb-6">
                        <div
                          className="w-full h-px mb-5"
                          style={{
                            background:
                              "linear-gradient(90deg, oklch(0.62 0.22 25 / 0.3), transparent)",
                          }}
                          aria-hidden="true"
                        />
                        <p className="text-white/60 leading-relaxed text-sm">{a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
