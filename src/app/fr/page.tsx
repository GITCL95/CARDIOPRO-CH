import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import InstitutionalSite from "@/components/sections/InstitutionalSite"
import {
  buildFaqSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/schema"

const t = translations.fr

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: "https://www.cardiopro.ch/fr/",
    languages: {
      "fr-CH": "https://www.cardiopro.ch/fr/",
      "de-CH": "https://www.cardiopro.ch/de/",
      "x-default": "https://www.cardiopro.ch/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.cardiopro.ch/fr/",
    title: t.ogTitle,
    description: t.ogDescription,
    images: [{ url: "https://www.cardiopro.ch/images/og-cardiopro-ch.jpg" }],
    locale: "fr_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: t.ogTitle,
    description: t.ogDescription,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...buildOrganizationSchema("fr"),
      slogan: "Spécialiste du défibrillateur en Suisse",
    },
    buildWebsiteSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.cardiopro.ch/fr/#webpage",
      url: "https://www.cardiopro.ch/fr/",
      name: t.metaTitle,
      description: t.metaDescription,
      inLanguage: "fr-CH",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": "https://www.cardiopro.ch/fr/#service" },
    },
    buildFaqSchema("https://www.cardiopro.ch/fr/", "fr", [
      { q: t.faq1Q, a: t.faq1A },
      { q: t.faq2Q, a: t.faq2A },
      { q: t.faq3Q, a: t.faq3A },
      { q: t.faq4Q, a: t.faq4A },
      { q: t.faq5Q, a: t.faq5A },
    ]),
    {
      "@type": "Service",
      "@id": "https://www.cardiopro.ch/fr/#service",
      name: "Défibrillateur en Suisse : vente, location et formation",
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "Country", name: "Switzerland" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "45",
        highPrice: "5490",
        priceCurrency: "CHF",
        offerCount: "35",
      },
    },
  ],
}

export default function FrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
<InstitutionalSite t={t} />
    </>
  )
}
