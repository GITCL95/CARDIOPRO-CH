import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        "min-h-28 w-full rounded-xl border border-gray-200 bg-[#F8F9FC] px-4 py-3 text-sm text-[#1A1D23] transition-colors placeholder:text-gray-400 focus:border-[#0E3A82] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E3A82]/10",
        className
      )}
      {...props}
    />
  )
)
Textarea.displayName = "Textarea"

export { Textarea }
