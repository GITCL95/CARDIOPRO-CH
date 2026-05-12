import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Marquee({ className, children, ...props }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4">
        {children}
        {children}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
