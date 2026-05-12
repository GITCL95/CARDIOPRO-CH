import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ShimmerButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden bg-[#E63946] before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent)] before:transition-transform before:duration-700 hover:before:translate-x-full",
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Button>
  )
}
