"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E3A82] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[slot=button]:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#E63946] text-white shadow-sm hover:scale-105 hover:bg-[#d72f3b] active:scale-95",
        secondary:
          "bg-white text-[#0E3A82] border border-gray-200 shadow-sm hover:scale-105 hover:shadow-md active:scale-95",
        outline:
          "border border-gray-200 bg-white text-[#0E3A82] hover:scale-105 hover:bg-[#F8F9FC] active:scale-95",
        ghost: "text-[#0E3A82] hover:bg-[#F8F9FC]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
