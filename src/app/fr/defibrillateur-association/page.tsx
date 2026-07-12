import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import { associationContent, buildAssociationJsonLd } from "@/lib/association"
import AssociationPage from "@/components/sections/AssociationPage"

const c = associationContent.fr

export const metadata: Metadata = {
  title: { absolute: c.metaTitle },
  description: c.metaDescription,
  robots: { index: true, follow: true },
  alternates: {
    canonical: c.canonical,
    languages: {
      "fr-CH": "https://www.cardiopro.ch/fr/defibrillateur-association/",
      "de-CH": "https://www.cardiopro.ch/de/defibrillator-vereine/",
      "x-default": "https://www.cardiopro.ch/fr/defibrillateur-association/",
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
    images: ["https://www.cardiopro.ch/images/og-cardiopro-ch.jpg"],
  },
}

const jsonLd = buildAssociationJsonLd(c)

const speculationRules = {
  prerender: [
    { where: { href_matches: "/fr/location-defibrillateur/" }, eagerness: "moderate" },
  ],
  prefetch: [
    { where: { href_matches: "/fr/*" }, eagerness: "conservative" },
  ],
}

export default function DefibrillateurAssociationFr() {
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
      <AssociationPage t={translations.fr} c={c} />
    </>
  )
}
