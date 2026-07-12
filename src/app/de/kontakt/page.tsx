import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import { buildContactJsonLd, contactPageContent } from "@/lib/contact-page"
import ContactPage from "@/components/sections/ContactPage"

const c = contactPageContent.de

export const metadata: Metadata = {
  title: { absolute: c.metaTitle },
  description: c.metaDescription,
  robots: { index: true, follow: true },
  alternates: {
    canonical: c.canonical,
    languages: {
      "fr-CH": "https://www.cardiopro.ch/fr/contact/",
      "de-CH": "https://www.cardiopro.ch/de/kontakt/",
      "x-default": "https://www.cardiopro.ch/fr/contact/",
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

const jsonLd = buildContactJsonLd(c)

const speculationRules = {
  prerender: [
    { where: { href_matches: "/de/ueber-uns/" }, eagerness: "moderate" },
  ],
  prefetch: [
    { where: { href_matches: "/de/*" }, eagerness: "conservative" },
  ],
}

export default function KontaktDe() {
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
<ContactPage t={translations.de} c={c} />
    </>
  )
}
