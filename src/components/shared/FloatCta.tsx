"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MessageSquare } from "lucide-react"
import type { Translations } from "@/lib/translations"

interface FloatCtaProps {
  t: Translations
}

export default function FloatCta({ t }: FloatCtaProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50"
          aria-label={t.floatCta}
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white shadow-[0_8px_32px_oklch(var(--accent)/0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_oklch(var(--accent)/0.7)] active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.62 0.22 25), oklch(0.52 0.20 15))",
            }}
          >
            <MessageSquare size={16} aria-hidden="true" />
            {t.floatCta}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
