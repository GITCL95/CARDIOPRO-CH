import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-xl border border-gray-200 bg-[#F8F9FC] px-4 text-sm text-[#1A1D23] shadow-none transition-colors placeholder:text-gray-400 focus:border-[#0E3A82] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E3A82]/10",
        className
      )}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
