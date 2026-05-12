"use client"

import { motion } from "motion/react"

interface TextGenerateEffectProps {
  text: string
  className?: string
}

export function TextGenerateEffect({ text, className }: TextGenerateEffectProps) {
  return (
    <span className={className}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {word}
          {index < text.split(" ").length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </span>
  )
}
