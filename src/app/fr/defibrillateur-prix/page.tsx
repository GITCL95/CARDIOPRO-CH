import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import { buildPricingJsonLd, pricingContent } from "@/lib/pricing"
import PricingPage from "@/components/sections/PricingPage"

const c = pricingContent.fr

export const metadata: Metadata = {
  title: { absolute: c.metaTitle },
  description: c.metaDescription,
  robots: { index: true, follow: true },
  alternates: {
    canonical: c.canonical,
    languages: {
      "fr-CH": "https://www.cardiopro.ch/fr/defibrillateur-prix/",
      "de-CH": "https://www.cardiopro.ch/de/defibrillator-kaufen/",
      "x-default": "https://www.cardiopro.ch/fr/defibrillateur-prix/",
    },
  },
  openGraph: {
    type: "website",
    url: c.canonical,
    title: c.ogTitle,
    description: c.ogDescription,
    images: [{ url: "https://www.cardiopro.ch/images/og-cardiopro-ch.jpg" }],
    locale: "fr_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: c.ogTitle,
    description: c.ogDescription,
  },
}

const jsonLd = buildPricingJsonLd(c)

const speculationRules = {
  prerender: [
    { where: { href_matches: "/fr/location-defibrillateur/" }, eagerness: "moderate" },
  ],
  prefetch: [
    { where: { href_matches: "/fr/*" }, eagerness: "conservative" },
  ],
}

export default function DefibrillateurPrixFr() {
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
<PricingPage t={translations.fr} c={c} />
    </>
  )
}
