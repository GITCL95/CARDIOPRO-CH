import type { Locale } from "@/lib/translations"

export const ORGANIZATION_ID = "https://www.cardiopro.ch/#organization"
export const WEBSITE_ID = "https://www.cardiopro.ch/#website"

export const CONTENT_DATE_PUBLISHED = "2026-04-01"
export const CONTENT_DATE_MODIFIED = "2026-07-12"

const MONTHS_FR = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
] as const

const MONTHS_DE = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
] as const

/** Libellé footer aligné sur `dateModified` du JSON-LD. */
export function formatSiteLastUpdated(lang: Locale): string {
  const [year, month] = CONTENT_DATE_MODIFIED.split("-")
  const monthIndex = Number(month) - 1
  if (lang === "fr") {
    return `© 2026 CardioPro Suisse — Une marque CardioPro · Dernière mise à jour : ${MONTHS_FR[monthIndex]} ${year}`
  }
  return `© 2026 CardioPro Schweiz — Eine Marke von CardioPro · Letzte Aktualisierung: ${MONTHS_DE[monthIndex]} ${year}`
}

/** Texte brut pour JSON-LD (pas de HTML). */
export function schemaText(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
}

export function buildWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: "https://www.cardiopro.ch",
    name: "CardioPro Suisse",
    inLanguage: ["fr-CH", "de-CH"],
    publisher: { "@id": ORGANIZATION_ID },
  }
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
    sameAs: [
      "https://www.linkedin.com/company/cardiopro",
      "https://www.cardiopro.fr",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.2044,
      longitude: 6.1432,
    },
    priceRange: "CHF 1090–5490",
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

export function buildProductOfferExtras() {
  return {
    priceValidUntil: "2026-12-31",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "CH",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 14,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
    },
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
