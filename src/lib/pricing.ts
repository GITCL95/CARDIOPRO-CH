import type { Locale } from "@/lib/translations"
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildProductOfferExtras,
  buildWebsiteSchema,
  CONTENT_DATE_MODIFIED,
  CONTENT_DATE_PUBLISHED,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/schema"
import { productsDe, productsFr, pricingRangeChf } from "@/lib/pricing-products"

/**
 * Grille tarifaire CHF CardioPro Suisse.
 * Alignée sur les prix affichés sur cardiopro.ch (accueil, footer, FAQ).
 */
export const priceCurrency = "CHF"
export const currencySymbol = "CHF"

/** Affichage suisse : CHF 1 090.– */
export function formatChfPrice(value: number): string {
  return `CHF ${value.toLocaleString("fr-CH").replace(/\u00a0/g, " ")}.–`
}

const { minPrice, maxPrice, minCost4y, maxCost4y } = pricingRangeChf
const cost4yRangeLabel = `${formatChfPrice(minCost4y)} et ${formatChfPrice(maxCost4y)}`
const cost4yRangeLabelDe = `${formatChfPrice(minCost4y)} und ${formatChfPrice(maxCost4y)}`

const linkClass = 'class="font-semibold text-[#0E3A82] hover:underline"'

export interface PricingProduct {
  id: string
  model: string
  brand: string
  type: "DAE" | "DSA"
  typeLabel: string
  tagline: string
  price: number
  cost4y: number
  warranty: number
  ip: string
  weight: string
  features: string[]
  image: string
  electrodesLabel: string
  batteryLabel: string
}

export interface FaqItem {
  q: string
  /** Réponse en HTML (liens internes autorisés). */
  a: string
}

export interface WhyBlock {
  title: string
  text: string
}

export interface ComparisonRow {
  label: string
  /** 9 valeurs dans l'ordre `comparisonOrder`. */
  values: string[]
  highlight?: boolean
}

export interface PricingContent {
  lang: Locale
  langAlt: Locale
  langAltLabel: string
  langAltHref: string

  // SEO
  metaTitle: string
  metaDescription: string
  canonical: string
  ogTitle: string
  ogDescription: string

  // Breadcrumb
  breadcrumbHome: string
  breadcrumbCurrent: string
  breadcrumbCurrentShort: string

  // Hero
  heroBadge: string
  heroTitleLine1: string
  heroTitleHighlight: string
  heroSub: string
  heroTrust: string[]
  introTitle: string

  // Form (hero)
  formTitle: string
  formSubtitle: string
  formName: string
  formPhone: string
  formEmail: string
  formModel: string
  formModelAdvice: string
  formSubmit: string
  formLegal: string
  formSubject: string

  // Distributors
  distributorTitle: string
  distributors: string[]

  // Grid + filters
  gridTitle: string
  gridSubtitle: string
  filterTitle: string
  filterBudget: string
  filterType: string
  typeAll: string
  filterWarranty: string
  warrantyAll: string
  filterBrand: string
  brandAll: string
  filterSort: string
  sortDefault: string
  sortPriceAsc: string
  sortPriceDesc: string
  sortCost4Asc: string
  sortWarrantyDesc: string
  filterReset: string
  resultsOne: string
  /** Doit contenir le marqueur {n}. */
  resultsMany: string
  noResults: string
  cardWarranty: string
  cardCost4y: string
  cardCta: string
  priceVat: string

  products: PricingProduct[]

  // Why buy
  whyTitle: string
  why: WhyBlock[]

  // Comparison table
  comparisonTitle: string
  comparisonNote: string
  comparisonCriteria: string
  comparisonOrder: string[]
  comparison: ComparisonRow[]

  // Choose
  chooseTitle: string
  choose: WhyBlock[]

  // References + certifications
  referencesTitle: string
  referencesIntro: string
  references: string[]
  certificationsTitle: string
  certifications: string[]

  // FAQ
  faqTitle: string
  faqSubtitle: string
  faq: FaqItem[]

  // Final CTA
  ctaEyebrow: string
  ctaTitleLine1: string
  ctaTitleLine2: string
  ctaText: string
  ctaButton: string
  ctaPhone: string
  ctaTrust: string[]

  comparisonFootnote: string
}

/* -------------------------------------------------------------------------- */
/*                                  FRANÇAIS                                   */
/* -------------------------------------------------------------------------- */

const fr: PricingContent = {
  lang: "fr",
  langAlt: "de",
  langAltLabel: "DE",
  langAltHref: "/de/defibrillator-kaufen/",

  metaTitle: "Prix défibrillateur Suisse : dès CHF 1 090.– HT | CardioPro",
  metaDescription:
    "Acheter un défibrillateur en Suisse dès CHF 1 090.– hors TVA. Comparez 31 DAE et DSA, coût total sur 4 ans calculé. Livraison 48h. Devis gratuit sous 24h.",
  canonical: "https://www.cardiopro.ch/fr/defibrillateur-prix/",
  ogTitle: "Prix défibrillateur Suisse : dès CHF 1 090.– HT | CardioPro",
  ogDescription:
    "Acheter un défibrillateur en Suisse dès CHF 1 090.– hors TVA. Comparez 31 DAE et DSA, coût total sur 4 ans calculé. Livraison 48h. Devis gratuit sous 24h.",

  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Prix défibrillateur",
  breadcrumbCurrentShort: "Prix défibrillateur",

  heroBadge: "Comparatif 2026 · Suisse",
  heroTitleLine1: "Acheter un défibrillateur en Suisse :",
  heroTitleHighlight: "prix dès CHF 1 090.– hors TVA",
  heroSub:
    "Un défibrillateur coûte de CHF 1 090.– à CHF 5 490.– hors TVA en Suisse à l'achat. Sur 4 ans, consommables compris, le coût réel se situe entre CHF 1 180.– et CHF 5 790.– : c'est ce chiffre qu'il faut comparer, pas le prix d'achat seul. Fort de 8 ans d'expérience et de plus de 20 000 installations, CardioPro distribue 31 DAE et DSA professionnels en Suisse romande et alémanique — comparatif transparent, sans engagement.",
  heroTrust: [
    "+20 000 clients",
    "Certifié CE & FDA",
    "Livraison 48h",
    "Garantie jusqu'à 10 ans",
  ],
  introTitle: "31 modèles comparés, prix en CHF hors TVA, coût total sur 4 ans",

  formTitle: "Devis gratuit sous 24h",
  formSubtitle: "Sans engagement · Réponse garantie",
  formName: "Nom",
  formPhone: "Téléphone",
  formEmail: "Email",
  formModel: "Modèle souhaité",
  formModelAdvice: "Je souhaite un conseil",
  formSubmit: "Obtenir mon devis gratuit",
  formLegal: "Réponse sous 24h · Sans engagement",
  formSubject: "Devis CardioPro Suisse — Prix défibrillateur (FR)",

  distributorTitle: "Distributeur agréé de défibrillateurs en Suisse",
  distributors: [
    "HeartSine",
    "Mediana",
    "ZOLL",
    "Bexen",
    "Noah Medical",
    "Schiller",
    "Philips",
    "Mindray",
    "Cardiac Science",
    "Primedic",
    "Progetti",
    "Defibtech",
    "Stryker",
  ],

  gridTitle: "Nos 31 défibrillateurs et leurs prix",
  gridSubtitle: `De ${formatChfPrice(minPrice)} à ${formatChfPrice(maxPrice)} HT · Livraison offerte · Garantie 4 à 10 ans · 31 DAE et <a href="/fr/location-defibrillateur/" ${linkClass}>DSA</a> certifiés CE & FDA`,
  filterTitle: "Filtrer",
  filterBudget: "Budget hors TVA",
  filterType: "Type",
  typeAll: "Tous",
  filterWarranty: "Garantie min.",
  warrantyAll: "Toutes",
  filterBrand: "Marque",
  brandAll: "Toutes",
  filterSort: "Tri",
  sortDefault: "Ordre par défaut",
  sortPriceAsc: "Prix croissant",
  sortPriceDesc: "Prix décroissant",
  sortCost4Asc: "Coût total 4 ans croissant",
  sortWarrantyDesc: "Garantie décroissante",
  filterReset: "Réinitialiser",
  resultsOne: "1 défibrillateur correspond à vos critères",
  resultsMany: "{n} défibrillateurs correspondent à vos critères",
  noResults: "Aucun défibrillateur ne correspond à ces critères.",
  cardWarranty: "Garantie",
  cardCost4y: "Coût total 4 ans",
  cardCta: "Devis gratuit",
  priceVat: "HT",

  products: productsFr,

  whyTitle: "Pourquoi acheter votre défibrillateur chez CardioPro ?",
  why: [
    {
      title: "Livraison 48h offerte",
      text: "Commande expédiée sous 48h ouvrées partout en Suisse, accessoires inclus : boîtier, signalétique, électrodes et batterie. Installation simple, assistance téléphonique si besoin.",
    },
    {
      title: "Achat ou location",
      text: `31 modèles à l'achat, ou <a href="/fr/location-defibrillateur/" ${linkClass}>en location dès CHF 45.–/mois</a>, maintenance et consommables inclus. Devis gratuit sous 24h ouvrées.`,
    },
    {
      title: "Certifiés CE & FDA",
      text: "Tous nos DAE sont certifiés CE médical et FDA, conformes aux normes suisses et européennes. Garantie de 4 à 10 ans selon le modèle.",
    },
    {
      title: "+20 000 clients équipés",
      text: "Depuis 2017, CardioPro accompagne entreprises, communes et établissements recevant du public. Distributeur agréé HeartSine, ZOLL et Mediana. SAV avec intervention sous 72h.",
    },
  ],

  comparisonTitle: "Comparatif : coût total sur 4 ans",
  comparisonNote:
    "Le coût total inclut l'appareil, la livraison et les consommables (électrodes, batterie) à renouveler sur 4 ans. Tous les montants en CHF HT.",
  comparisonCriteria: "Critère",
  comparisonOrder: [],
  comparison: [],

  chooseTitle: "Bien choisir son défibrillateur : les étapes essentielles",
  choose: [
    {
      title: "DAE ou DSA : lequel choisir ?",
      text: "Le DAE (automatique) est recommandé pour les lieux accessibles au public et les entreprises à fort effectif : il délivre le choc seul, sans formation préalable. Le DSA (semi-automatique) convient si du personnel formé est présent : l'utilisateur appuie sur un bouton pour délivrer le choc.",
    },
    {
      title: "Achat ou location ?",
      text: `La <a href="/fr/location-defibrillateur/" ${linkClass}>location dès CHF 45.–/mois maintenance incluse</a> lisse le budget sur 5 ans avec consommables inclus. L'achat amortit l'investissement sur le long terme : sur 5 ans, le coût total est souvent comparable selon le modèle.`,
    },
    {
      title: "Livraison 48h + prise en main",
      text: "La livraison est offerte sous 48h ouvrées partout en Suisse. Le pack complet comprend DAE, électrodes, batterie, boîtier et signalétique conforme SUVA, avec guide d'utilisation et vidéo de prise en main.",
    },
    {
      title: "Maintenance & consommables",
      text: `Comptez CHF 150.– à CHF 300.– par an hors TVA pour la vérification et les consommables. <a href="/fr/location-defibrillateur/" ${linkClass}>En location, tout est inclus</a>. À prévoir à l'achat : électrodes tous les 2 à 4 ans, batterie tous les 4 à 5 ans.`,
    },
  ],

  referencesTitle: "Nos références : professionnels et collectivités équipés",
  referencesIntro:
    "Depuis 2017, plus de 20 000 professionnels nous font confiance pour la sécurité de leurs équipes et de leur public.",
  references: [
    "Communes et administrations",
    "Établissements de santé et cabinets",
    "Entreprises (PME et grands comptes)",
    "Hôtels, commerces et centres sportifs",
  ],
  certificationsTitle: "Nos certifications sur les DAE",
  certifications: [
    "Produits sélectionnés sur des critères de qualité, conformes aux normes en vigueur",
    "Permanence technique téléphonique 7 jours/7",
    "Service maintenance avec intervention en moins de 72h",
    "Équipe réactive et suivi personnalisé de votre commande",
    "Veille permanente de la législation suisse (SUVA, Fondation Suisse de Cardiologie, SRC)",
    "Une offre qui s'adapte à votre situation (achat ou location)",
  ],

  faqTitle: "FAQ : prix défibrillateur en Suisse",
  faqSubtitle:
    "Tout ce que vous devez savoir sur le prix et l'achat d'un défibrillateur en Suisse.",
  faq: [
    {
      q: "Combien coûte un défibrillateur en 2026 ?",
      a: `Le prix d'un défibrillateur varie de ${formatChfPrice(minPrice)} à ${formatChfPrice(maxPrice)} HT selon le modèle. Un DAE automatique coûte en moyenne CHF 1 400.–. Le coût total sur 4 ans, consommables inclus, se situe entre ${cost4yRangeLabel}.`,
    },
    {
      q: "Quel défibrillateur acheter pour moins de CHF 1 200.– ?",
      a: "L'iAED-S1 à CHF 1 090.– HT est l'un des DAE les moins chers du marché : garantie 4 ans, détection pacemaker, temps de charge inférieur à 7 secondes. Le HeartSine 360P, au même prix, offre une garantie 10 ans avec PadPak intégré.",
    },
    {
      q: "Quel défibrillateur offre le meilleur rapport qualité-prix ?",
      a: "L'iAED-S1 offre un excellent rapport qualité-prix. Avantage unique : électrodes adultes et pédiatriques intégrées dans le même set, ce qui évite l'achat d'électrodes enfant séparées. Son coût total sur 4 ans est le plus bas de notre comparatif.",
    },
    {
      q: "Quel budget prévoir pour équiper une entreprise en Suisse ?",
      a: "Comptez environ CHF 1 090.– à CHF 1 600.– HT par défibrillateur, boîtier mural et signalétique inclus. En Suisse, il n'existe pas d'obligation fédérale, mais la SUVA et la Fondation Suisse de Cardiologie recommandent vivement un DAE dans les entreprises à fort effectif.",
    },
    {
      q: "Que comprend le prix d'achat d'un défibrillateur ?",
      a: "Le prix d'achat inclut l'appareil, les électrodes adultes et la batterie initiales. La livraison est offerte. Les consommables de remplacement (électrodes, batterie) sont à prévoir tous les 2 à 5 ans selon le modèle.",
    },
    {
      q: "Pourquoi les prix des défibrillateurs varient autant ?",
      a: "Les écarts dépendent de la durée de garantie (4 à 10 ans), du type DAE ou DSA, des fonctionnalités (feedback RCP, écran LCD, WiFi) et de l'indice de protection IP. Un modèle premium inclut l'assistance au massage cardiaque en temps réel.",
    },
    {
      q: "Combien coûte la maintenance annuelle d'un défibrillateur ?",
      a: `La maintenance annuelle coûte entre CHF 150.– et CHF 300.– hors TVA selon le niveau de service : vérification de l'appareil, remplacement des consommables périmés et mises à jour. En <a href="/fr/location-defibrillateur/" ${linkClass}>location défibrillateur</a>, la maintenance est incluse.`,
    },
    {
      q: "Vaut-il mieux acheter ou louer un défibrillateur ?",
      a: `L'achat convient aux structures souhaitant amortir sur le long terme. La <a href="/fr/location-defibrillateur/" ${linkClass}>location défibrillateur</a> (dès CHF 45.–/mois) offre un budget lissé avec maintenance et consommables inclus.`,
    },
    {
      q: "Quels critères vérifier avant d'acheter un DAE professionnel ?",
      a: "Vérifiez la certification CE obligatoire, une garantie minimum de 5 ans, l'indice IP55 minimum (IP56 pour l'extérieur), le coût des consommables sur 4 ans et la disponibilité du SAV. Privilégiez un distributeur agréé établi en Suisse.",
    },
    {
      q: "L'achat d'un défibrillateur est-il déductible fiscalement en Suisse ?",
      a: "Pour les entreprises, l'achat d'un DAE constitue un investissement amortissable et une charge déductible du résultat. Les modalités exactes dépendent de votre canton et de votre régime fiscal : renseignez-vous auprès de votre fiduciaire.",
    },
    {
      q: "Quelle garantie exiger pour acheter un défibrillateur ?",
      a: "Exigez une garantie minimum de 5 ans, idéalement de 8 à 10 ans (HeartSine, Mediana, Schiller FRED PA-1). La garantie doit couvrir l'appareil et les défauts de fabrication. Vérifiez la disponibilité des pièces sur 10 ans.",
    },
    {
      q: "Où acheter un défibrillateur certifié en Suisse ?",
      a: "Achetez auprès d'un distributeur agréé comme CardioPro, garantissant des DAE certifiés CE et FDA. Les avantages : conseil personnalisé, livraison 48h dans toute la Suisse, formation en français et en allemand, et service maintenance dédié aux professionnels.",
    },
  ],

  ctaEyebrow: "Devis gratuit",
  ctaTitleLine1: "Ensemble, faisons battre",
  ctaTitleLine2: "les cœurs plus longtemps.",
  ctaText:
    "Plus de 20 000 entreprises, communes et établissements nous font confiance en Suisse. Rejoignez-les et sécurisez votre établissement dès aujourd'hui.",
  ctaButton: "Demander un devis gratuit",
  ctaPhone: "+41 22 518 09 36",
  ctaTrust: [
    "Communes & collectivités",
    "Entreprises & ERP",
    "Distributeur agréé CE & FDA",
  ],

  comparisonFootnote:
    "* FRED PA-1 : batterie 6 ans = pas de remplacement sur 4 ans · Livraison offerte sur tous les modèles",
}

/* -------------------------------------------------------------------------- */
/*                                   DEUTSCH                                   */
/* -------------------------------------------------------------------------- */

const de: PricingContent = {
  lang: "de",
  langAlt: "fr",
  langAltLabel: "FR",
  langAltHref: "/fr/defibrillateur-prix/",

  metaTitle: "Defibrillator kaufen Schweiz: ab CHF 1 090.– netto | CardioPro",
  metaDescription:
    "Defibrillator in der Schweiz kaufen ab CHF 1 090.– exkl. MwSt. Vergleichen Sie 31 AED und halbautomatische Geräte, Gesamtkosten über 4 Jahre berechnet. Lieferung 48h. Angebot in 24h.",
  canonical: "https://www.cardiopro.ch/de/defibrillator-kaufen/",
  ogTitle: "Defibrillator kaufen Schweiz: ab CHF 1 090.– netto | CardioPro",
  ogDescription:
    "Defibrillator in der Schweiz kaufen ab CHF 1 090.– exkl. MwSt. Vergleichen Sie 31 AED und halbautomatische Geräte, Gesamtkosten über 4 Jahre berechnet. Lieferung 48h. Angebot in 24h.",

  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Defibrillator kaufen",
  breadcrumbCurrentShort: "Defibrillator kaufen",

  heroBadge: "Vergleich 2026 · Schweiz",
  heroTitleLine1: "Defibrillator in der Schweiz kaufen:",
  heroTitleHighlight: "Preise ab CHF 1 090.– exkl. MwSt.",
  heroSub:
    "Ein Defibrillator kostet in der Schweiz beim Kauf zwischen CHF 1 090.– und CHF 5 490.– exkl. MwSt. Über 4 Jahre inklusive Verbrauchsmaterial liegen die realen Kosten zwischen CHF 1 180.– und CHF 5 790.–: diesen Wert sollten Sie vergleichen, nicht nur den Kaufpreis. Mit 8 Jahren Erfahrung und über 20 000 Installationen vertreibt CardioPro 31 professionelle AED und halbautomatische Geräte in der Romandie und Deutschschweiz — transparenter Vergleich, unverbindlich.",
  heroTrust: [
    "+20 000 Kunden",
    "CE & FDA zertifiziert",
    "Lieferung 48h",
    "Garantie bis 10 Jahre",
  ],
  introTitle: "31 Modelle verglichen, Preise in CHF exkl. MwSt., Gesamtkosten über 4 Jahre",

  formTitle: "Kostenloses Angebot innerhalb 24h",
  formSubtitle: "Unverbindlich · Antwort garantiert",
  formName: "Name",
  formPhone: "Telefon",
  formEmail: "E-Mail",
  formModel: "Gewünschtes Modell",
  formModelAdvice: "Ich wünsche eine Beratung",
  formSubmit: "Kostenloses Angebot erhalten",
  formLegal: "Antwort innerhalb 24h · Unverbindlich",
  formSubject: "Angebot CardioPro Schweiz — Defibrillator-Preis (DE)",

  distributorTitle: "Autorisierter Defibrillator-Händler in der Schweiz",
  distributors: [
    "HeartSine",
    "Mediana",
    "ZOLL",
    "Bexen",
    "Noah Medical",
    "Schiller",
    "Philips",
    "Mindray",
    "Cardiac Science",
    "Primedic",
    "Progetti",
    "Defibtech",
    "Stryker",
  ],

  gridTitle: "Unsere 31 Defibrillatoren und ihre Preise",
  gridSubtitle: `Von ${formatChfPrice(minPrice)} bis ${formatChfPrice(maxPrice)} netto · Kostenlose Lieferung · Garantie 4 bis 10 Jahre · 31 AED und <a href="/de/defibrillator-mieten/" ${linkClass}>halbautomatische Geräte</a> · CE & FDA zertifiziert`,
  filterTitle: "Filtern",
  filterBudget: "Budget exkl. MwSt.",
  filterType: "Typ",
  typeAll: "Alle",
  filterWarranty: "Garantie min.",
  warrantyAll: "Alle",
  filterBrand: "Marke",
  brandAll: "Alle",
  filterSort: "Sortierung",
  sortDefault: "Standardreihenfolge",
  sortPriceAsc: "Preis aufsteigend",
  sortPriceDesc: "Preis absteigend",
  sortCost4Asc: "Gesamtkosten 4 Jahre aufsteigend",
  sortWarrantyDesc: "Garantie absteigend",
  filterReset: "Zurücksetzen",
  resultsOne: "1 Defibrillator entspricht Ihren Kriterien",
  resultsMany: "{n} Defibrillatoren entsprechen Ihren Kriterien",
  noResults: "Kein Defibrillator entspricht diesen Kriterien.",
  cardWarranty: "Garantie",
  cardCost4y: "Gesamtkosten 4 Jahre",
  cardCta: "Kostenloses Angebot",
  priceVat: "exkl. MwSt.",

  products: productsDe,

  whyTitle: "Warum Ihren Defibrillator bei CardioPro kaufen?",
  why: [
    {
      title: "Lieferung in 48h gratis",
      text: "Bestellung innerhalb von 48 Werkstunden in die ganze Schweiz versandt, Zubehör inklusive: Gehäuse, Beschilderung, Elektroden und Batterie. Einfache Installation, telefonische Unterstützung bei Bedarf.",
    },
    {
      title: "Kauf oder Miete",
      text: `31 Modelle zum Kauf oder zur <a href="/de/defibrillator-mieten/" ${linkClass}>Miete ab CHF 45.–/Monat</a>, Wartung und Verbrauchsmaterial inklusive. Kostenloses Angebot innerhalb von 24h.`,
    },
    {
      title: "CE- & FDA-zertifiziert",
      text: "Alle unsere AED sind CE-medizinisch und FDA-zertifiziert, konform mit Schweizer und europäischen Normen. Garantie von 4 bis 10 Jahren je nach Modell.",
    },
    {
      title: "+20 000 ausgestattete Kunden",
      text: "Seit 2017 begleitet CardioPro Unternehmen, Gemeinden und öffentlich zugängliche Einrichtungen. Autorisierter Händler von HeartSine, ZOLL und Mediana. Kundendienst mit Einsatz innerhalb von 72h.",
    },
  ],

  comparisonTitle: "Vergleich: Gesamtkosten über 4 Jahre",
  comparisonNote:
    "Die Gesamtkosten umfassen das Gerät, die Lieferung und das über 4 Jahre zu erneuernde Verbrauchsmaterial (Elektroden, Batterie). Alle Beträge in CHF netto.",
  comparisonCriteria: "Kriterium",
  comparisonOrder: [],
  comparison: [],

  chooseTitle: "Den richtigen Defibrillator wählen: die wichtigsten Schritte",
  choose: [
    {
      title: "AED oder halbautomatisch: was wählen?",
      text: "Der vollautomatische AED ist für öffentlich zugängliche Orte und Betriebe mit vielen Mitarbeitenden empfohlen: er gibt den Schock selbst ab, ohne Vorkenntnisse. Das halbautomatische Gerät eignet sich, wenn geschultes Personal vor Ort ist: der Anwender drückt eine Taste zur Schockabgabe.",
    },
    {
      title: "Kauf oder Miete?",
      text: `Die <a href="/de/defibrillator-mieten/" ${linkClass}>Miete ab CHF 45.–/Monat inklusive Wartung</a> glättet das Budget über 5 Jahre mit inklusivem Verbrauchsmaterial. Der Kauf amortisiert die Investition langfristig: über 5 Jahre sind die Gesamtkosten je nach Modell oft vergleichbar.`,
    },
    {
      title: "Lieferung 48h + Einführung",
      text: "Die Lieferung ist innerhalb von 48 Werkstunden in die ganze Schweiz kostenlos. Das Komplettpaket umfasst AED, Elektroden, Batterie, Gehäuse und SUVA-konforme Beschilderung, mit Bedienungsanleitung und Einführungsvideo.",
    },
    {
      title: "Wartung & Verbrauchsmaterial",
      text: `Rechnen Sie mit CHF 150.– bis CHF 300.– pro Jahr exkl. MwSt. für Prüfung und Verbrauchsmaterial. <a href="/de/defibrillator-mieten/" ${linkClass}>Bei Miete ist alles inklusive</a>. Beim Kauf einplanen: Elektroden alle 2 bis 4 Jahre, Batterie alle 4 bis 5 Jahre.`,
    },
  ],

  referencesTitle: "Unsere Referenzen: ausgestattete Profis und Gemeinden",
  referencesIntro:
    "Seit 2017 vertrauen über 20 000 Profis auf uns für die Sicherheit ihrer Teams und ihres Publikums.",
  references: [
    "Gemeinden und Verwaltungen",
    "Gesundheitseinrichtungen und Praxen",
    "Unternehmen (KMU und Grosskunden)",
    "Hotels, Geschäfte und Sportzentren",
  ],
  certificationsTitle: "Unsere Zertifizierungen für AED",
  certifications: [
    "Produkte nach Qualitätskriterien ausgewählt, konform mit den geltenden Normen",
    "Technische telefonische Bereitschaft 7 Tage/Woche",
    "Wartungsservice mit Einsatz innerhalb von 72h",
    "Reaktives Team und persönliche Betreuung Ihrer Bestellung",
    "Ständige Überwachung der Schweizer Gesetzgebung (SUVA, Schweizerische Herzstiftung, SRC)",
    "Ein Angebot, das sich Ihrer Situation anpasst (Kauf oder Miete)",
  ],

  faqTitle: "FAQ: Defibrillator-Preis in der Schweiz",
  faqSubtitle:
    "Alles, was Sie über den Preis und den Kauf eines Defibrillators in der Schweiz wissen müssen.",
  faq: [
    {
      q: "Was kostet ein Defibrillator im Jahr 2026?",
      a: `Der Preis eines Defibrillators liegt je nach Modell zwischen ${formatChfPrice(minPrice)} und ${formatChfPrice(maxPrice)} netto. Ein vollautomatischer AED kostet durchschnittlich CHF 1 400.–. Die Gesamtkosten über 4 Jahre inklusive Verbrauchsmaterial liegen zwischen ${cost4yRangeLabelDe}.`,
    },
    {
      q: "Welchen Defibrillator für unter CHF 1 200.– kaufen?",
      a: "Der iAED-S1 für CHF 1 090.– netto ist einer der günstigsten AED auf dem Markt: 4 Jahre Garantie, Schrittmacher-Erkennung, Ladezeit unter 7 Sekunden. Der HeartSine 360P bietet zum gleichen Preis 10 Jahre Garantie mit integriertem PadPak.",
    },
    {
      q: "Welcher Defibrillator bietet das beste Preis-Leistungs-Verhältnis?",
      a: "Der iAED-S1 bietet ein hervorragendes Preis-Leistungs-Verhältnis. Einzigartiger Vorteil: Erwachsenen- und Kinderelektroden im selben Set integriert, wodurch der separate Kauf von Kinderelektroden entfällt. Seine Gesamtkosten über 4 Jahre sind die niedrigsten in unserem Vergleich.",
    },
    {
      q: "Welches Budget für die Ausstattung eines Unternehmens in der Schweiz?",
      a: "Rechnen Sie mit etwa CHF 1 090.– bis CHF 1 600.– netto pro Defibrillator, inklusive Wandgehäuse und Beschilderung. In der Schweiz besteht keine Bundespflicht, aber die SUVA und die Schweizerische Herzstiftung empfehlen einen AED in Betrieben mit vielen Mitarbeitenden nachdrücklich.",
    },
    {
      q: "Was umfasst der Kaufpreis eines Defibrillators?",
      a: "Der Kaufpreis umfasst das Gerät, die Erwachsenenelektroden und die anfängliche Batterie. Die Lieferung ist kostenlos. Ersatz-Verbrauchsmaterial (Elektroden, Batterie) ist je nach Modell alle 2 bis 5 Jahre einzuplanen.",
    },
    {
      q: "Warum variieren die Preise von Defibrillatoren so stark?",
      a: "Die Unterschiede hängen von der Garantiedauer (4 bis 10 Jahre), dem Typ (vollautomatisch oder halbautomatisch), den Funktionen (Reanimations-Feedback, LCD-Display, WiFi) und der IP-Schutzart ab. Ein Premium-Modell bietet Echtzeit-Unterstützung bei der Herzdruckmassage.",
    },
    {
      q: "Was kostet die jährliche Wartung eines Defibrillators?",
      a: `Die jährliche Wartung kostet je nach Serviceniveau zwischen CHF 150.– und CHF 300.– exkl. MwSt.: Geräteprüfung, Austausch abgelaufenen Verbrauchsmaterials und Updates. Bei <a href="/de/defibrillator-mieten/" ${linkClass}>Defibrillator-Miete</a> ist die Wartung inklusive.`,
    },
    {
      q: "Ist es besser, einen Defibrillator zu kaufen oder zu mieten?",
      a: `Der Kauf eignet sich für Strukturen, die langfristig amortisieren möchten. Die <a href="/de/defibrillator-mieten/" ${linkClass}>Defibrillator-Miete</a> (ab CHF 45.–/Monat) bietet ein geglättetes Budget mit inklusiver Wartung und Verbrauchsmaterial.`,
    },
    {
      q: "Welche Kriterien vor dem Kauf eines professionellen AED prüfen?",
      a: "Prüfen Sie die obligatorische CE-Zertifizierung, eine Garantie von mindestens 5 Jahren, die Schutzart mindestens IP55 (IP56 für den Aussenbereich), die Kosten des Verbrauchsmaterials über 4 Jahre und die Verfügbarkeit des Kundendienstes. Bevorzugen Sie einen in der Schweiz ansässigen autorisierten Händler.",
    },
    {
      q: "Ist der Kauf eines Defibrillators in der Schweiz steuerlich absetzbar?",
      a: "Für Unternehmen ist der Kauf eines AED eine abschreibungsfähige Investition und ein vom Ergebnis abzugsfähiger Aufwand. Die genauen Modalitäten hängen von Ihrem Kanton und Ihrem Steuerregime ab: Erkundigen Sie sich bei Ihrem Treuhänder.",
    },
    {
      q: "Welche Garantie für den Kauf eines Defibrillators verlangen?",
      a: "Verlangen Sie eine Garantie von mindestens 5 Jahren, idealerweise 8 bis 10 Jahre (HeartSine, Mediana, Schiller FRED PA-1). Die Garantie muss das Gerät und Herstellungsfehler abdecken. Prüfen Sie die Verfügbarkeit von Ersatzteilen über 10 Jahre.",
    },
    {
      q: "Wo einen zertifizierten Defibrillator in der Schweiz kaufen?",
      a: "Kaufen Sie bei einem autorisierten Händler wie CardioPro, der CE- und FDA-zertifizierte AED garantiert. Die Vorteile: persönliche Beratung, Lieferung in 48h in die ganze Schweiz, Schulung auf Deutsch und Französisch sowie ein eigener Wartungsservice für Profis.",
    },
  ],

  ctaEyebrow: "Kostenloses Angebot",
  ctaTitleLine1: "Gemeinsam lassen wir",
  ctaTitleLine2: "Herzen länger schlagen.",
  ctaText:
    "Über 20 000 Unternehmen, Gemeinden und Einrichtungen in der Schweiz vertrauen uns. Sichern Sie Ihre Einrichtung noch heute ab.",
  ctaButton: "Kostenloses Angebot anfordern",
  ctaPhone: "+41 22 518 09 36",
  ctaTrust: [
    "Gemeinden & Verwaltungen",
    "Unternehmen & ERP",
    "Autorisierter Händler CE & FDA",
  ],

  comparisonFootnote:
    "* FRED PA-1: Batterie 6 Jahre = kein Austausch über 4 Jahre · Kostenlose Lieferung für alle Modelle",
}

export const pricingContent: Record<Locale, PricingContent> = { fr, de }

/**
 * Construit le bloc JSON-LD (@graph) de la page prix.
 */
export function buildPricingJsonLd(c: PricingContent) {
  const low = Math.min(...c.products.map((p) => p.price))
  const high = Math.max(...c.products.map((p) => p.price))
  const inLanguage = c.lang === "fr" ? "fr-CH" : "de-CH"
  const offerExtras = buildProductOfferExtras()

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(c.lang),
      buildWebsiteSchema(),
      {
        "@type": "WebPage",
        "@id": `${c.canonical}#webpage`,
        url: c.canonical,
        name: c.metaTitle,
        description: c.metaDescription,
        inLanguage,
        datePublished: CONTENT_DATE_PUBLISHED,
        dateModified: CONTENT_DATE_MODIFIED,
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": `${c.canonical}#breadcrumb` },
        mainEntity: { "@id": `${c.canonical}#service` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".hero-intro"],
        },
      },
      buildBreadcrumbSchema(
        c.canonical,
        c.breadcrumbHome,
        c.breadcrumbCurrentShort,
        c.lang,
      ),
      ...c.products.map((p) => ({
        "@type": "Product",
        "@id": `${c.canonical}#${p.id}`,
        name: p.model,
        brand: { "@type": "Brand", name: p.brand },
        category: p.typeLabel,
        description: p.features.join(" · "),
        image: p.image,
        url: c.canonical,
        offers: {
          "@type": "Offer",
          price: String(p.price),
          priceCurrency,
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": ORGANIZATION_ID },
          ...offerExtras,
        },
      })),
      {
        "@type": "Service",
        "@id": `${c.canonical}#service`,
        name:
          c.lang === "fr"
            ? "Achat défibrillateur en Suisse"
            : "Defibrillator kaufen in der Schweiz",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: "Switzerland" },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: String(low),
          highPrice: String(high),
          priceCurrency,
          offerCount: String(c.products.length),
        },
      },
      buildFaqSchema(c.canonical, c.lang, c.faq),
    ],
  }
}
