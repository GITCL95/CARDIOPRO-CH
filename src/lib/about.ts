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

export interface AboutStat {
  value: string
  label: string
  text: string
}

export interface AboutValue {
  title: string
  text: string
}

export interface AboutContent {
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
  missionEyebrow: string
  missionTitle: string
  missionParagraphs: string[]
  missionPoints: string[]
  statsEyebrow: string
  statsTitle: string
  statsSubtitle: string
  stats: AboutStat[]
  valuesEyebrow: string
  valuesTitle: string
  values: AboutValue[]
  ctaEyebrow: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
  contactHref: string
}

const fr: AboutContent = {
  lang: "fr",
  canonical: "https://www.cardiopro.ch/fr/a-propos/",
  metaTitle: "À propos de CardioPro Suisse | Spécialiste défibrillateur",
  metaDescription:
    "CardioPro Suisse, spécialiste de la vente et location de défibrillateurs depuis 2017. +20 000 clients équipés, livraison 48h, formation FR/DE partout en Suisse.",
  ogTitle: "À propos — CardioPro Suisse",
  ogDescription:
    "Découvrez CardioPro Suisse : expert DAE/AED, distributeur agréé, accompagnement defikarte.ch et intervention sous 72h.",
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "À propos",
  heroBadge: "À propos",
  heroTitle: "CardioPro Suisse, spécialiste du défibrillateur",
  heroSub:
    "Depuis 2017, nous équipons entreprises, communes et établissements recevant du public en Suisse romande et alémanique. Notre mission : rendre le DAE accessible à tous.",
  missionEyebrow: "Notre mission",
  missionTitle: "Sauver des vies grâce à l'accessibilité du DAE",
  missionParagraphs: [
    "Chez CardioPro Suisse, notre philosophie est claire : démocratiser l'accès au défibrillateur automatique pour sauver des vies. La Suisse enregistre environ 8 000 arrêts cardiaques par an ; chaque minute compte avant l'arrivée des secours.",
    "Nous accompagnons nos clients de A à Z : conseil, livraison sous 48h, formation en français et en allemand, maintenance et enregistrement sur defikarte.ch. Que vous choisissiez l'achat ou la location, nous adaptons la solution à votre budget et à votre contexte.",
  ],
  missionPoints: [
    "Appareils certifiés CE Médical",
    "Formation français / allemand",
    "Livraison et installation sous 48h",
    "Accompagnement defikarte.ch",
  ],
  statsEyebrow: "En chiffres",
  statsTitle: "L'urgence cardiaque en Suisse",
  statsSubtitle: "Pourquoi équiper votre établissement dès aujourd'hui",
  stats: [
    { value: "8 000", label: "arrêts cardiaques / an", text: "En Suisse, un arrêt cardiaque survient toutes les heures." },
    { value: "5%", label: "taux de survie", text: "Sans défibrillation précoce, les chances de survie chutent de 10 % par minute." },
    { value: "85%", label: "de survie avec DAE", text: "Avec un DAE accessible et utilisé dans les 3 premières minutes." },
    { value: "10 min", label: "délai moyen secours", text: "Le temps d'intervention des secours en zone urbaine — le DAE comble ce délai." },
  ],
  valuesEyebrow: "Nos engagements",
  valuesTitle: "Pourquoi choisir CardioPro Suisse ?",
  values: [
    { title: "Produits certifiés CE Médical", text: "Conformes aux normes suisses et européennes — garantie jusqu'à 8 ans." },
    { title: "Permanence technique 7j/7", text: "Notre équipe technique est joignable 7 jours sur 7 par téléphone." },
    { title: "Maintenance sous 72h", text: "Service de maintenance réactif sur tout le territoire suisse." },
    { title: "Suivi personnalisé", text: "Un conseiller dédié vous accompagne de la commande à l'installation." },
    { title: "Veille législative SUVA", text: "ArGV 3, SUVA, Fondation Suisse de Cardiologie : nous vous tenons informés." },
    { title: "Achat ou location", text: "Une offre flexible adaptée à votre budget et à la durée de votre besoin." },
  ],
  ctaEyebrow: "Équipez-vous",
  ctaTitle: "Prêt à équiper votre établissement ?",
  ctaText: "Obtenez un devis personnalisé sous 24h. Livraison 48h partout en Suisse.",
  ctaButton: "Demander un devis",
  contactHref: "/fr/contact/",
}

const de: AboutContent = {
  lang: "de",
  canonical: "https://www.cardiopro.ch/de/ueber-uns/",
  metaTitle: "Über CardioPro Schweiz | Defibrillator-Spezialist",
  metaDescription:
    "CardioPro Schweiz, Spezialist für Verkauf und Miete von Defibrillatoren seit 2017. Über 20 000 ausgestattete Kunden, Lieferung 48h, Schulung DE/FR in der ganzen Schweiz.",
  ogTitle: "Über uns — CardioPro Schweiz",
  ogDescription:
    "CardioPro Schweiz: AED-Experte, autorisierter Händler, defikarte.ch-Unterstützung und Einsatz innerhalb 72h.",
  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Über uns",
  heroBadge: "Über uns",
  heroTitle: "CardioPro Schweiz, Defibrillator-Spezialist",
  heroSub:
    "Seit 2017 statten wir Unternehmen, Gemeinden und öffentlich zugängliche Einrichtungen in der West- und Deutschschweiz aus. Unsere Mission: AED für alle zugänglich machen.",
  missionEyebrow: "Unsere Mission",
  missionTitle: "Leben retten durch zugängliche AED",
  missionParagraphs: [
    "Bei CardioPro Schweiz ist unsere Philosophie klar: den Zugang zu automatischen Defibrillatoren demokratisieren, um Leben zu retten. Die Schweiz verzeichnet rund 8 000 Herzstillstände pro Jahr — jede Minute zählt vor Eintreffen der Rettungsdienste.",
    "Wir begleiten unsere Kunden von A bis Z: Beratung, Lieferung innerhalb 48h, Schulung auf Deutsch und Französisch, Wartung und Registrierung auf defikarte.ch. Ob Kauf oder Miete — wir passen die Lösung an Ihr Budget und Ihren Kontext an.",
  ],
  missionPoints: [
    "CE-zertifizierte Medizinprodukte",
    "Schulung Deutsch / Französisch",
    "Lieferung + Installation innerhalb 48h",
    "Unterstützung defikarte.ch",
  ],
  statsEyebrow: "In Zahlen",
  statsTitle: "Herzstillstand in der Schweiz",
  statsSubtitle: "Warum Sie Ihre Einrichtung heute ausstatten sollten",
  stats: [
    { value: "8 000", label: "Herzstillstände / Jahr", text: "In der Schweiz tritt stündlich ein Herzstillstand auf." },
    { value: "5%", label: "Überlebensrate", text: "Ohne frühe Defibrillation sinken die Überlebenschancen um 10 % pro Minute." },
    { value: "85%", label: "Überleben mit AED", text: "Mit einem zugänglichen AED in den ersten 3 Minuten." },
    { value: "10 Min", label: "Ø Rettungsdienst", text: "Einsatzzeit in städtischen Gebieten — der AED überbrückt diese Lücke." },
  ],
  valuesEyebrow: "Unsere Verpflichtungen",
  valuesTitle: "Warum CardioPro Schweiz?",
  values: [
    { title: "CE-zertifizierte Medizinprodukte", text: "Konform mit Schweizer und europäischen Normen — Garantie bis 8 Jahre." },
    { title: "Technische Bereitschaft 7 Tage/Woche", text: "Unser Technikteam ist 7 Tage die Woche telefonisch erreichbar." },
    { title: "Wartung innerhalb 72h", text: "Reaktiver Wartungsservice in der ganzen Schweiz." },
    { title: "Persönliche Betreuung", text: "Ein dedizierter Berater begleitet Sie von der Bestellung bis zur Installation." },
    { title: "SUVA-Rechtsüberwachung", text: "ArGV 3, SUVA, Schweizerische Herzstiftung — wir halten Sie informiert." },
    { title: "Kauf oder Miete", text: "Ein flexibles Angebot für Ihr Budget und Ihre Laufzeit." },
  ],
  ctaEyebrow: "Jetzt ausstatten",
  ctaTitle: "Bereit, Ihre Einrichtung auszustatten?",
  ctaText: "Persönliches Angebot innerhalb 24h. Lieferung 48h in der ganzen Schweiz.",
  ctaButton: "Angebot anfordern",
  contactHref: "/de/kontakt/",
}

export const aboutContent: Record<Locale, AboutContent> = { fr, de }

export function buildAboutJsonLd(c: AboutContent) {
  const inLanguage = c.lang === "fr" ? "fr-CH" : "de-CH"
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(c.lang),
      buildWebsiteSchema(),
      {
        "@type": "AboutPage",
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
