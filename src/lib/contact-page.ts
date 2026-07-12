import type { Locale } from "@/lib/translations"
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  CONTENT_DATE_MODIFIED,
  CONTENT_DATE_PUBLISHED,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/schema"

export interface ContactPageContent {
  lang: Locale
  canonical: string
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ogDescription: string
  breadcrumbHome: string
  breadcrumbCurrent: string
  heroBadge: string
  heroTitle: string
  heroSub: string
  responseTitle: string
  responseText: string
  responseHours: string
  mapLabel: string
}

const fr: ContactPageContent = {
  lang: "fr",
  canonical: "https://www.cardiopro.ch/fr/contact/",
  metaTitle: "Contact CardioPro Suisse | Devis défibrillateur gratuit",
  metaDescription:
    "Contactez CardioPro Suisse pour un devis défibrillateur gratuit. +41 22 518 09 36, contact@cardiopro.ch. Réponse sous 24h, livraison 48h en Suisse.",
  ogTitle: "Contact — CardioPro Suisse",
  ogDescription: "Demandez votre devis défibrillateur gratuit. Réponse garantie sous 24h ouvrées.",
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Contact",
  heroBadge: "Contact",
  heroTitle: "Contactez CardioPro Suisse",
  heroSub:
    "Notre équipe vous répond sous 24h ouvrées. Devis gratuit, conseil personnalisé et livraison sous 48h partout en Suisse.",
  responseTitle: "Réponse sous 24h ouvrées",
  responseText: "Disponible du lundi au vendredi",
  responseHours: "Lun–Ven 9h00–18h00",
  mapLabel: "Rue du Rhône 14, 1204 Genève, Suisse",
}

const de: ContactPageContent = {
  lang: "de",
  canonical: "https://www.cardiopro.ch/de/kontakt/",
  metaTitle: "Kontakt CardioPro Schweiz | Kostenloses Defibrillator-Angebot",
  metaDescription:
    "Kontaktieren Sie CardioPro Schweiz für ein kostenloses Defibrillator-Angebot. +41 22 518 09 36, contact@cardiopro.ch. Antwort innerhalb 24h, Lieferung 48h.",
  ogTitle: "Kontakt — CardioPro Schweiz",
  ogDescription: "Fordern Sie Ihr kostenloses Defibrillator-Angebot an. Antwort garantiert innerhalb 24 Werktunden.",
  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Kontakt",
  heroBadge: "Kontakt",
  heroTitle: "Kontaktieren Sie CardioPro Schweiz",
  heroSub:
    "Unser Team antwortet innerhalb von 24 Werktunden. Kostenloses Angebot, persönliche Beratung und Lieferung innerhalb 48h in der ganzen Schweiz.",
  responseTitle: "Antwort innerhalb 24h",
  responseText: "Verfügbar Montag bis Freitag",
  responseHours: "Mo–Fr 9:00–18:00",
  mapLabel: "Rue du Rhône 14, 1204 Genf, Schweiz",
}

export const contactPageContent: Record<Locale, ContactPageContent> = { fr, de }

export function buildContactJsonLd(c: ContactPageContent) {
  const inLanguage = c.lang === "fr" ? "fr-CH" : "de-CH"
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(c.lang),
      buildWebsiteSchema(),
      {
        "@type": "ContactPage",
        "@id": `${c.canonical}#webpage`,
        url: c.canonical,
        name: c.metaTitle,
        description: c.metaDescription,
        inLanguage,
        datePublished: CONTENT_DATE_PUBLISHED,
        dateModified: CONTENT_DATE_MODIFIED,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        breadcrumb: { "@id": `${c.canonical}#breadcrumb` },
      },
      buildBreadcrumbSchema(c.canonical, c.breadcrumbHome, c.breadcrumbCurrent, c.lang),
    ],
  }
}
