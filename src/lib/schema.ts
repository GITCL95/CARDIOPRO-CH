import type { Locale } from "@/lib/translations"

export const ORGANIZATION_ID = "https://www.cardiopro.ch/#organization"

/** Texte brut pour JSON-LD (pas de HTML). */
export function schemaText(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
}

export function buildOrganizationSchema(lang: Locale) {
  return {
    "@type": ["Organization", "MedicalBusiness"],
    "@id": ORGANIZATION_ID,
    name: lang === "fr" ? "CardioPro Suisse" : "CardioPro Schweiz",
    url: "https://www.cardiopro.ch",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cardiopro.ch/images/og-cardiopro-ch.jpg",
    },
    foundingDate: "2017",
    areaServed: { "@type": "Country", name: "Switzerland" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+41225180936",
      contactType: "sales",
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
  }
}

export function buildBreadcrumbSchema(
  canonical: string,
  homeLabel: string,
  currentLabel: string,
  lang: Locale,
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: `https://www.cardiopro.ch/${lang}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLabel,
        item: canonical,
      },
    ],
  }
}

export function buildFaqSchema(
  canonical: string,
  lang: Locale,
  faq: { q: string; a: string }[],
) {
  return {
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    inLanguage: lang === "fr" ? "fr-CH" : "de-CH",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: schemaText(item.a) },
    })),
  }
}
