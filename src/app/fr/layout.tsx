import type { Metadata } from "next"

export const metadata: Metadata = {
  other: { "theme-color": "#021647" },
}

export default function FrLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
