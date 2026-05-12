import type { Metadata } from "next"
import { translations } from "@/lib/translations"
import InstitutionalSite from "@/components/sections/InstitutionalSite"

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
      "@type": ["Organization", "MedicalBusiness"],
      "@id": "https://www.cardiopro.ch/#organization",
      name: "CardioPro Suisse",
      url: "https://www.cardiopro.ch",
      slogan: "Spécialiste du défibrillateur en Suisse",
      foundingDate: "2026",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+41225180936",
        contactType: "customer service",
        email: "contact@cardiopro.ch",
        areaServed: "CH",
        availableLanguage: ["French", "German"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue du Rhône 14",
        addressLocality: "Genève",
        postalCode: "1204",
        addressCountry: "CH",
      },
      telephone: "+41225180936",
      openingHours: "Mo-Fr 09:00-18:00",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.cardiopro.ch/fr/#faq",
      inLanguage: "fr-CH",
      mainEntity: [
        { "@type": "Question", name: t.faq1Q, acceptedAnswer: { "@type": "Answer", text: t.faq1A } },
        { "@type": "Question", name: t.faq2Q, acceptedAnswer: { "@type": "Answer", text: t.faq2A } },
        { "@type": "Question", name: t.faq3Q, acceptedAnswer: { "@type": "Answer", text: t.faq3A } },
        { "@type": "Question", name: t.faq4Q, acceptedAnswer: { "@type": "Answer", text: t.faq4A } },
        { "@type": "Question", name: t.faq5Q, acceptedAnswer: { "@type": "Answer", text: t.faq5A } },
      ],
    },
    {
      "@type": "Service",
      name: "Défibrillateur en Suisse : vente, location et formation",
      provider: { "@id": "https://www.cardiopro.ch/#organization" },
      areaServed: { "@type": "Country", name: "Switzerland" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "45",
        highPrice: "1390",
        priceCurrency: "CHF",
        offerCount: "4",
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:font-semibold"
        style={{ background: "oklch(0.62 0.22 25)" }}
      >
        {t.skipLink}
      </a>
      <InstitutionalSite t={t} />
    </>
  )
}
