"use client"

import { useEffect, useState } from "react"
import { useInView } from "motion/react"
import * as React from "react"

interface NumberTickerProps {
  value: number
  suffix?: string
  duration?: number
}

export function NumberTicker({ value, suffix = "", duration = 1200 }: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let frame = 0
    const totalFrames = Math.max(1, Math.round(duration / 16))
    const timer = window.setInterval(() => {
      frame += 1
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3)
      setDisplay(Math.round(value * progress))
      if (frame >= totalFrames) {
        setDisplay(value)
        window.clearInterval(timer)
      }
    }, 16)

    return () => window.clearInterval(timer)
  }, [duration, isInView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString("fr-CH").replace(",", " ")}
      {suffix}
    </span>
  )
}
