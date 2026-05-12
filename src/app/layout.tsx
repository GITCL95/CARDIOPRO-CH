import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cardiopro.ch"),
  title: {
    template: "%s | CardioPro Suisse",
    default: "CardioPro Suisse — Défibrillateurs en Suisse",
  },
  description:
    "Vente et location de défibrillateurs en Suisse. Appareils certifiés CE, formation incluse, livraison sous 48h.",
  icons: {
    icon: "/images/favicon.ico",
  },
  verification: {
    google: "S9AwTiXqZ5ggiiFWtzFoQOEaeBmpfc-4_25R0nSiBE0",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
