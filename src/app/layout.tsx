import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://cardiopro.fr" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
