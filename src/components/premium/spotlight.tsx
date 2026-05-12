import { cn } from "@/lib/utils"

interface SpotlightProps {
  className?: string
}

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_42%,transparent_70%)]",
        className
      )}
    />
  )
}
