import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import { buildRentalJsonLd, rentalContent } from "@/lib/rental"
import RentalPage from "@/components/sections/RentalPage"

const c = rentalContent.de

export const metadata: Metadata = {
  title: { absolute: c.metaTitle },
  description: c.metaDescription,
  robots: { index: true, follow: true },
  alternates: {
    canonical: c.canonical,
    languages: {
      "fr-CH": "https://www.cardiopro.ch/fr/location-defibrillateur/",
      "de-CH": "https://www.cardiopro.ch/de/defibrillator-mieten/",
      "x-default": "https://www.cardiopro.ch/fr/location-defibrillateur/",
    },
  },
  openGraph: {
    type: "website",
    url: c.canonical,
    title: c.ogTitle,
    description: c.ogDescription,
    images: [{ url: "https://www.cardiopro.ch/images/og-cardiopro-ch.jpg" }],
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: c.ogTitle,
    description: c.ogDescription,
  },
}

const jsonLd = buildRentalJsonLd(c)

const speculationRules = {
  prerender: [
    { where: { href_matches: "/de/defibrillator-kaufen/" }, eagerness: "moderate" },
  ],
  prefetch: [
    { where: { href_matches: "/de/*" }, eagerness: "conservative" },
  ],
}

export default function DefibrillatorMietenDe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
      />
<RentalPage t={translations.de} c={c} />
    </>
  )
}
