import type { Locale } from "@/lib/translations"

/**
 * ⚠️ PRIX_CHF NON CONFIRMÉ
 * Les montants ci-dessous reprennent la grille EUR du gabarit FR
 * (cardiopro.fr/defibrillateur-prix). Tant que la grille CHF officielle
 * n'est pas fournie, on garde les valeurs EUR comme placeholders.
 * → Remplacer `price` / `cost4y` / `priceCurrency` / `currencySymbol`
 *   et toutes les valeurs du tableau comparatif (champ `comparison`).
 * NE JAMAIS inventer de prix suisses.  // TODO CHF
 */
export const priceCurrency = "EUR" // TODO CHF → "CHF"
export const currencySymbol = "€" // TODO CHF → "CHF"

export interface PricingProduct {
  id: string
  model: string
  brand: string
  type: "DAE" | "DSA"
  typeLabel: string
  tagline: string
  price: number // TODO CHF
  cost4y: number // TODO CHF
  warranty: number
  ip: string
  weight: string
  features: string[]
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
  heroTitle: string
  heroSub: string

  // Intro + form
  introTitle: string
  introBody: string
  formTitle: string
  formSubtitle: string
  formName: string
  formCompany: string
  formPhone: string
  formEmail: string
  formMessage: string
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
  ctaTitle: string
  ctaText: string
  ctaButton: string
  ctaPhone: string
}

/* -------------------------------------------------------------------------- */
/*                                  FRANÇAIS                                   */
/* -------------------------------------------------------------------------- */

const productsFr: PricingProduct[] = [
  {
    id: "iaed-s1",
    model: "iAED-S1",
    brand: "Noah Medical",
    type: "DAE",
    typeLabel: "DAE automatique",
    tagline: "Le moins cher",
    price: 990, // TODO CHF
    cost4y: 1080, // TODO CHF
    warranty: 4,
    ip: "IP55",
    weight: "1,8 kg",
    features: [
      "Détection pacemaker",
      "Temps de charge < 7 sec",
      "Électrodes universelles adulte/enfant",
    ],
  },
  {
    id: "heartsine-360p",
    model: "HeartSine 360P",
    brand: "HeartSine",
    type: "DAE",
    typeLabel: "DAE automatique",
    tagline: "Garantie 10 ans · 100 % auto",
    price: 990, // TODO CHF
    cost4y: 1170, // TODO CHF
    warranty: 10,
    ip: "IP56",
    weight: "1,1 kg",
    features: [
      "Défibrillation auto sans bouton",
      "PadPak électrodes + batterie intégré",
      "Idéal pour personnel non formé",
    ],
  },
  {
    id: "heartsine-350p",
    model: "HeartSine 350P",
    brand: "HeartSine",
    type: "DSA",
    typeLabel: "DSA semi-automatique",
    tagline: "Le plus léger : 1,1 kg",
    price: 1090, // TODO CHF
    cost4y: 1270, // TODO CHF
    warranty: 8,
    ip: "IP56",
    weight: "1,1 kg",
    features: [
      "PadPak électrodes + batterie intégré",
      "Guidage vocal étape par étape",
      "Coût de possession le plus bas",
    ],
  },
  {
    id: "heartsine-500p",
    model: "HeartSine 500P",
    brand: "HeartSine",
    type: "DAE",
    typeLabel: "DAE avec CPR Advisor",
    tagline: "Feedback massage temps réel",
    price: 1490, // TODO CHF
    cost4y: 1670, // TODO CHF
    warranty: 8,
    ip: "IP56",
    weight: "1,1 kg",
    features: [
      "Feedback massage cardiaque en temps réel",
      "Mesure l'efficacité des compressions",
      "Recommandé entreprises & lieux publics",
    ],
  },
  {
    id: "mediana-a16",
    model: "Mediana A16",
    brand: "Mediana",
    type: "DAE",
    typeLabel: "DAE/DSA commutable",
    tagline: "Mode auto ou semi au choix",
    price: 1290, // TODO CHF
    cost4y: 1180, // TODO CHF
    warranty: 10,
    ip: "IP55",
    weight: "2,0 kg",
    features: [
      "Mode DAE ou DSA au choix",
      "Écran LCD couleur",
      "Excellent rapport qualité/prix",
    ],
  },
  {
    id: "fred-pa-1",
    model: "Schiller FRED PA-1",
    brand: "Schiller",
    type: "DAE",
    typeLabel: "DAE automatique",
    tagline: "Batterie 6 ans sans changement",
    price: 1290, // TODO CHF
    cost4y: 1230, // TODO CHF
    warranty: 10,
    ip: "IP55",
    weight: "—",
    features: [
      "Batterie 6 ans (sans remplacement)",
      "Robuste et fiable",
      "Électrodes longue durée (30 mois)",
    ],
  },
  {
    id: "reanibex-100",
    model: "Reanibex 100",
    brand: "Bexen",
    type: "DAE",
    typeLabel: "DAE connecté",
    tagline: "Connecté WiFi · Compact",
    price: 1190, // TODO CHF
    cost4y: 1207, // TODO CHF
    warranty: 7,
    ip: "IP55",
    weight: "1,95 kg",
    features: [
      "Mise en marche auto à l'ouverture",
      "Design compact",
      "Connecté WiFi / Sigfox",
    ],
  },
  {
    id: "zoll-aed-plus",
    model: "ZOLL AED Plus",
    brand: "ZOLL",
    type: "DSA",
    typeLabel: "DSA avec Real CPR Help",
    tagline: "Aide au massage intégrée",
    price: 1590, // TODO CHF
    cost4y: 1590, // TODO CHF
    warranty: 7,
    ip: "IP55",
    weight: "2,3 kg",
    features: [
      "Capteur de massage cardiaque intégré",
      "Couvercle = aide au massage",
      "Robuste, usage intensif",
    ],
  },
  {
    id: "zoll-aed-3",
    model: "ZOLL AED 3",
    brand: "ZOLL",
    type: "DAE",
    typeLabel: "DAE écran LCD",
    tagline: "Écran LCD + vidéo de guidage",
    price: 2095, // TODO CHF
    cost4y: 2305, // TODO CHF
    warranty: 8,
    ip: "IP55",
    weight: "2,5 kg",
    features: [
      "Écran LCD + vidéo d'aide",
      "Real CPR Help (feedback massage)",
      "WiFi connecté pour la maintenance",
    ],
  },
]

const fr: PricingContent = {
  lang: "fr",
  langAlt: "de",
  langAltLabel: "DE",
  langAltHref: "/de/defibrillator-kaufen/",

  metaTitle:
    "Prix défibrillateur Suisse 2026 : dès 990 € | CardioPro", // TODO CHF (dès [PRIX_CHF] CHF)
  metaDescription:
    "Combien coûte un défibrillateur en Suisse ? Comparez 9 DAE pro (HeartSine, Zoll, Mediana). Achat dès 990 € hors TVA, coût total 4 ans calculé. Devis 48h.", // TODO CHF
  canonical: "https://www.cardiopro.ch/fr/defibrillateur-prix/",
  ogTitle: "Prix défibrillateur en Suisse : comparatif de 9 DAE | CardioPro",
  ogDescription:
    "Comparatif transparent de 9 défibrillateurs professionnels : prix, garantie et coût total sur 4 ans. Devis gratuit sous 24h en Suisse.",

  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "Prix défibrillateur en Suisse : comparatif 9 DAE",
  breadcrumbCurrentShort: "Prix défibrillateur",

  heroBadge: "Comparatif transparent · Suisse",
  heroTitle: "Prix défibrillateur en Suisse : comparatif 9 DAE",
  heroSub:
    "Prix d'achat, garantie et coût total sur 4 ans : comparez en toute transparence 9 défibrillateurs professionnels sélectionnés par CardioPro pour la Suisse.",

  introTitle: "Quel est le prix d'un défibrillateur en 2026 ?",
  introBody:
    "Le prix d'un défibrillateur varie de 990 € à 2 095 € hors TVA selon le modèle. Mais comparer uniquement les prix d'achat serait une erreur : sur 4 ans, le coût réel oscille entre 1 080 € et 2 305 € une fois les consommables comptés. Fort de plus de 8 ans d'expérience et de plus de 20 000 installations, CardioPro a sélectionné 9 DAE professionnels disponibles en Suisse. Garanties, prix, coût total sur 4 ans : voici notre comparatif transparent.", // TODO CHF
  formTitle: "Demander un devis gratuit",
  formSubtitle: "Réponse sous 24h ouvrées · Sans engagement",
  formName: "Nom",
  formCompany: "Entreprise",
  formPhone: "Téléphone",
  formEmail: "Email",
  formMessage: "Message",
  formSubmit: "Envoyer ma demande",
  formLegal:
    "En soumettant ce formulaire, vous acceptez d'être contacté par CardioPro Suisse. Aucun démarchage — nous respectons votre vie privée.",
  formSubject: "Devis CardioPro Suisse — Prix défibrillateur (FR)",

  distributorTitle: "Distributeur agréé de défibrillateurs en Suisse",
  distributors: [
    "HeartSine",
    "Mediana",
    "ZOLL",
    "Bexen",
    "Noah Medical",
    "Schiller",
  ],

  gridTitle: "Nos 9 défibrillateurs et leurs prix",
  gridSubtitle:
    "Filtrez par budget, type (DAE/DSA), garantie ou marque, puis triez selon vos priorités.",
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
  priceVat: "hors TVA",

  products: productsFr,

  whyTitle: "Pourquoi acheter votre défibrillateur chez CardioPro ?",
  why: [
    {
      title: "Livraison 48h offerte",
      text: "Commande expédiée sous 48h ouvrées partout en Suisse, accessoires inclus : boîtier, signalétique, électrodes et batterie. Installation simple, assistance téléphonique si besoin.",
    },
    {
      title: "Achat ou location",
      text: "9 modèles à l'achat, ou en location dès CHF 45.–/mois, maintenance et consommables inclus. Devis gratuit sous 24h ouvrées.",
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
    "Le coût total inclut l'appareil, la livraison et les consommables (électrodes, batterie) à renouveler sur 4 ans. Montants à confirmer en CHF.", // TODO CHF
  comparisonCriteria: "Critère",
  comparisonOrder: [
    "iAED-S1",
    "Reanibex 100",
    "Mediana A16",
    "FRED PA-1",
    "ZOLL AED 3",
    "HeartSine 360P",
    "HeartSine 350P",
    "HeartSine 500P",
    "ZOLL AED Plus",
  ],
  comparison: [
    // TODO CHF — toutes les valeurs de prix sont des placeholders EUR (gabarit FR)
    { label: "Prix achat hors TVA", values: ["990 €", "1 115 €", "1 290 €", "1 290 €", "2 095 €", "990 €", "1 090 €", "1 490 €", "1 590 €"] },
    { label: "Livraison", values: ["0 €", "0 €", "0 €", "0 €", "0 €", "0 €", "0 €", "0 €", "0 €"] },
    { label: "Garantie", values: ["4 ans", "7 ans", "10 ans", "10 ans", "8 ans", "10 ans", "8 ans", "8 ans", "7 ans"] },
    { label: "Durée de vie électrodes", values: ["30 mois", "30 mois", "3 ans", "30 mois", "5 ans", "4 ans (PadPak)", "4 ans (PadPak)", "4 ans (PadPak)", "5 ans"] },
    { label: "Prix électrodes hors TVA", values: ["90 €", "92 €", "85 €", "130 €", "210 €", "180 € (PadPak)", "180 € (PadPak)", "180 € (PadPak)", "210 €"] },
    { label: "Renouvellements élec. / 4 ans", values: ["1", "1", "1", "1", "0", "1", "1", "1", "0"] },
    { label: "Durée de vie batterie", values: ["5 ans", "5 ans", "5 ans", "6 ans", "5 ans", "4 ans (PadPak)", "4 ans (PadPak)", "4 ans (PadPak)", "5 ans"] },
    { label: "Prix batterie hors TVA", values: ["150 €", "100 €", "170 €", "0 €*", "170 €", "incl. PadPak", "incl. PadPak", "incl. PadPak", "170 €"] },
    { label: "Renouvellements bat. / 4 ans", values: ["0", "0", "0", "0", "0", "1", "1", "1", "0"] },
    { label: "COÛT TOTAL 4 ANS hors TVA", values: ["1 080 €", "1 207 €", "1 180 €", "1 230 €", "2 305 €", "1 170 €", "1 270 €", "1 670 €", "1 590 €"], highlight: true },
  ],

  chooseTitle: "Bien choisir son défibrillateur : les étapes essentielles",
  choose: [
    {
      title: "DAE ou DSA : lequel choisir ?",
      text: "Le DAE (automatique) délivre le choc seul : idéal sans formation préalable. Le DSA (semi-automatique) demande d'appuyer sur un bouton. Pour les lieux accessibles au public et les entreprises à fort effectif, le DAE est recommandé.",
    },
    {
      title: "Achat ou location ?",
      text: "Achat selon le modèle, ou location dès CHF 45.–/mois maintenance incluse. Sur 5 ans, le coût total est comparable : la location convient aux budgets lissés, l'achat pour amortir sur le long terme.",
    },
    {
      title: "Livraison 48h + prise en main",
      text: "Expédition sous 48h ouvrées partout en Suisse. Pack complet livré : DAE, électrodes, batterie, boîtier, signalétique conforme SUVA. Guide d'utilisation et vidéo de prise en main inclus.",
    },
    {
      title: "Maintenance & consommables",
      text: "Coût annuel indicatif de CHF 150.– à CHF 300.– hors TVA (vérification + consommables). En location, tout est inclus. À prévoir : électrodes tous les 2 à 4 ans, batterie tous les 4 à 5 ans.",
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
      a: "Le prix d'un défibrillateur varie de 990 € à 2 095 € hors TVA selon le modèle (montants à confirmer en CHF). Un DAE automatique coûte en moyenne 1 200 €. Le coût total sur 4 ans, consommables inclus, se situe entre 1 080 € et 2 305 €.", // TODO CHF
    },
    {
      q: "Quel défibrillateur acheter pour moins de 1 000 € ?",
      a: "L'iAED-S1 à 990 € hors TVA est l'un des DAE les moins chers du marché : garantie 4 ans, détection pacemaker, temps de charge inférieur à 7 secondes. Le HeartSine 360P, au même prix, offre une garantie 10 ans avec PadPak intégré.", // TODO CHF
    },
    {
      q: "Quel défibrillateur offre le meilleur rapport qualité-prix ?",
      a: "L'iAED-S1 offre un excellent rapport qualité-prix. Avantage unique : électrodes adultes et pédiatriques intégrées dans le même set, ce qui évite l'achat d'électrodes enfant séparées. Son coût total sur 4 ans est le plus bas de notre comparatif.",
    },
    {
      q: "Quel budget prévoir pour équiper une entreprise en Suisse ?",
      a: "Comptez environ 990 € à 1 500 € hors TVA par défibrillateur, boîtier mural et signalétique inclus. En Suisse, il n'existe pas d'obligation fédérale, mais la SUVA et la Fondation Suisse de Cardiologie recommandent vivement un DAE dans les entreprises à fort effectif. <a href=\"/fr/#entreprise\" class=\"institutional-link\">Voir nos solutions entreprise</a>.", // TODO CHF
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
      a: "La maintenance annuelle coûte entre CHF 150.– et CHF 300.– hors TVA selon le niveau de service : vérification de l'appareil, remplacement des consommables périmés et mises à jour. En <a href=\"/fr/location-defibrillateur/\" class=\"institutional-link\">location</a>, la maintenance est incluse.",
    },
    {
      q: "Vaut-il mieux acheter ou louer un défibrillateur ?",
      a: "L'achat convient aux structures souhaitant amortir sur le long terme. La <a href=\"/fr/location-defibrillateur/\" class=\"institutional-link\">location</a> (dès CHF 45.–/mois) offre un budget lissé avec maintenance et consommables inclus.",
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

  ctaTitle: "Recevez votre comparatif et votre devis sous 24h",
  ctaText:
    "Notre équipe vous conseille sur le défibrillateur adapté à votre budget et à votre établissement, partout en Suisse romande et alémanique.",
  ctaButton: "Demander un devis gratuit",
  ctaPhone: "+41 22 518 09 36",
}

/* -------------------------------------------------------------------------- */
/*                                   DEUTSCH                                   */
/* -------------------------------------------------------------------------- */

const productsDe: PricingProduct[] = [
  {
    id: "iaed-s1",
    model: "iAED-S1",
    brand: "Noah Medical",
    type: "DAE",
    typeLabel: "Vollautomatischer AED",
    tagline: "Der günstigste",
    price: 990, // TODO CHF
    cost4y: 1080, // TODO CHF
    warranty: 4,
    ip: "IP55",
    weight: "1,8 kg",
    features: [
      "Schrittmacher-Erkennung",
      "Ladezeit < 7 Sek.",
      "Universalelektroden Erwachsene/Kind",
    ],
  },
  {
    id: "heartsine-360p",
    model: "HeartSine 360P",
    brand: "HeartSine",
    type: "DAE",
    typeLabel: "Vollautomatischer AED",
    tagline: "10 Jahre Garantie · 100 % auto",
    price: 990, // TODO CHF
    cost4y: 1170, // TODO CHF
    warranty: 10,
    ip: "IP56",
    weight: "1,1 kg",
    features: [
      "Automatische Defibrillation ohne Taste",
      "PadPak Elektroden + Batterie integriert",
      "Ideal für ungeschultes Personal",
    ],
  },
  {
    id: "heartsine-350p",
    model: "HeartSine 350P",
    brand: "HeartSine",
    type: "DSA",
    typeLabel: "Halbautomatischer AED",
    tagline: "Der leichteste: 1,1 kg",
    price: 1090, // TODO CHF
    cost4y: 1270, // TODO CHF
    warranty: 8,
    ip: "IP56",
    weight: "1,1 kg",
    features: [
      "PadPak Elektroden + Batterie integriert",
      "Schritt-für-Schritt-Sprachführung",
      "Niedrigste Gesamtbetriebskosten",
    ],
  },
  {
    id: "heartsine-500p",
    model: "HeartSine 500P",
    brand: "HeartSine",
    type: "DAE",
    typeLabel: "AED mit CPR Advisor",
    tagline: "Reanimations-Feedback in Echtzeit",
    price: 1490, // TODO CHF
    cost4y: 1670, // TODO CHF
    warranty: 8,
    ip: "IP56",
    weight: "1,1 kg",
    features: [
      "Herzdruckmassage-Feedback in Echtzeit",
      "Misst die Effektivität der Kompressionen",
      "Empfohlen für Unternehmen & Publikum",
    ],
  },
  {
    id: "mediana-a16",
    model: "Mediana A16",
    brand: "Mediana",
    type: "DAE",
    typeLabel: "Umschaltbar AED/halbautomatisch",
    tagline: "Auto- oder Halbmodus wählbar",
    price: 1290, // TODO CHF
    cost4y: 1180, // TODO CHF
    warranty: 10,
    ip: "IP55",
    weight: "2,0 kg",
    features: [
      "AED- oder halbautomatischer Modus wählbar",
      "LCD-Farbdisplay",
      "Hervorragendes Preis-Leistungs-Verhältnis",
    ],
  },
  {
    id: "fred-pa-1",
    model: "Schiller FRED PA-1",
    brand: "Schiller",
    type: "DAE",
    typeLabel: "Vollautomatischer AED",
    tagline: "Batterie 6 Jahre ohne Wechsel",
    price: 1290, // TODO CHF
    cost4y: 1230, // TODO CHF
    warranty: 10,
    ip: "IP55",
    weight: "—",
    features: [
      "Batterie 6 Jahre (kein Austausch)",
      "Robust und zuverlässig",
      "Langlebige Elektroden (30 Monate)",
    ],
  },
  {
    id: "reanibex-100",
    model: "Reanibex 100",
    brand: "Bexen",
    type: "DAE",
    typeLabel: "Vernetzter AED",
    tagline: "WiFi-vernetzt · Kompakt",
    price: 1190, // TODO CHF
    cost4y: 1207, // TODO CHF
    warranty: 7,
    ip: "IP55",
    weight: "1,95 kg",
    features: [
      "Automatischer Start beim Öffnen",
      "Kompaktes Design",
      "WiFi / Sigfox vernetzt",
    ],
  },
  {
    id: "zoll-aed-plus",
    model: "ZOLL AED Plus",
    brand: "ZOLL",
    type: "DSA",
    typeLabel: "Halbautomatisch mit Real CPR Help",
    tagline: "Integrierte Reanimationshilfe",
    price: 1590, // TODO CHF
    cost4y: 1590, // TODO CHF
    warranty: 7,
    ip: "IP55",
    weight: "2,3 kg",
    features: [
      "Integrierter Herzdruckmassage-Sensor",
      "Deckel = Reanimationshilfe",
      "Robust, intensive Nutzung",
    ],
  },
  {
    id: "zoll-aed-3",
    model: "ZOLL AED 3",
    brand: "ZOLL",
    type: "DAE",
    typeLabel: "AED mit LCD-Display",
    tagline: "LCD-Display + Videoführung",
    price: 2095, // TODO CHF
    cost4y: 2305, // TODO CHF
    warranty: 8,
    ip: "IP55",
    weight: "2,5 kg",
    features: [
      "LCD-Display + Hilfevideo",
      "Real CPR Help (Massage-Feedback)",
      "WiFi-vernetzt für die Wartung",
    ],
  },
]

const de: PricingContent = {
  lang: "de",
  langAlt: "fr",
  langAltLabel: "FR",
  langAltHref: "/fr/defibrillateur-prix/",

  metaTitle:
    "Defibrillator kaufen Schweiz 2026: ab 990 € | CardioPro", // TODO CHF (ab [PRIX_CHF] CHF)
  metaDescription:
    "Was kostet ein Defibrillator in der Schweiz? Vergleichen Sie 9 Profi-AED (HeartSine, Zoll, Mediana). Kauf ab 990 € exkl. MwSt., Gesamtkosten 4 Jahre berechnet. Angebot in 48h.", // TODO CHF
  canonical: "https://www.cardiopro.ch/de/defibrillator-kaufen/",
  ogTitle: "Defibrillator kaufen in der Schweiz: 9 AED im Vergleich | CardioPro",
  ogDescription:
    "Transparenter Vergleich von 9 professionellen Defibrillatoren: Preis, Garantie und Gesamtkosten über 4 Jahre. Kostenloses Angebot innerhalb von 24h.",

  breadcrumbHome: "Startseite",
  breadcrumbCurrent: "Defibrillator kaufen in der Schweiz: 9 AED im Vergleich",
  breadcrumbCurrentShort: "Defibrillator kaufen",

  heroBadge: "Transparenter Vergleich · Schweiz",
  heroTitle: "Defibrillator kaufen in der Schweiz: 9 AED im Vergleich",
  heroSub:
    "Kaufpreis, Garantie und Gesamtkosten über 4 Jahre: Vergleichen Sie transparent 9 professionelle Defibrillatoren, die CardioPro für die Schweiz ausgewählt hat.",

  introTitle: "Was kostet ein Defibrillator im Jahr 2026?",
  introBody:
    "Der Preis eines Defibrillators liegt je nach Modell zwischen 990 € und 2 095 € exkl. MwSt. Nur die Kaufpreise zu vergleichen wäre jedoch ein Fehler: Über 4 Jahre liegen die realen Kosten inklusive Verbrauchsmaterial zwischen 1 080 € und 2 305 €. Mit über 8 Jahren Erfahrung und mehr als 20 000 Installationen hat CardioPro 9 professionelle AED ausgewählt, die in der Schweiz erhältlich sind. Garantie, Preis, Gesamtkosten über 4 Jahre: Hier ist unser transparenter Vergleich.", // TODO CHF
  formTitle: "Kostenloses Angebot anfordern",
  formSubtitle: "Antwort innerhalb von 24h · Unverbindlich",
  formName: "Name",
  formCompany: "Unternehmen",
  formPhone: "Telefon",
  formEmail: "E-Mail",
  formMessage: "Nachricht",
  formSubmit: "Anfrage senden",
  formLegal:
    "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, von CardioPro Schweiz kontaktiert zu werden. Kein Direktmarketing — wir respektieren Ihre Privatsphäre.",
  formSubject: "Angebot CardioPro Schweiz — Defibrillator Preis (DE)",

  distributorTitle: "Autorisierter Defibrillator-Händler in der Schweiz",
  distributors: [
    "HeartSine",
    "Mediana",
    "ZOLL",
    "Bexen",
    "Noah Medical",
    "Schiller",
  ],

  gridTitle: "Unsere 9 Defibrillatoren und ihre Preise",
  gridSubtitle:
    "Filtern Sie nach Budget, Typ (AED/halbautomatisch), Garantie oder Marke und sortieren Sie nach Ihren Prioritäten.",
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
      text: "9 Modelle zum Kauf oder zur Miete ab CHF 45.–/Monat, Wartung und Verbrauchsmaterial inklusive. Kostenloses Angebot innerhalb von 24h.",
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
    "Die Gesamtkosten umfassen das Gerät, die Lieferung und das über 4 Jahre zu erneuernde Verbrauchsmaterial (Elektroden, Batterie). Beträge in CHF noch zu bestätigen.", // TODO CHF
  comparisonCriteria: "Kriterium",
  comparisonOrder: [
    "iAED-S1",
    "Reanibex 100",
    "Mediana A16",
    "FRED PA-1",
    "ZOLL AED 3",
    "HeartSine 360P",
    "HeartSine 350P",
    "HeartSine 500P",
    "ZOLL AED Plus",
  ],
  comparison: [
    // TODO CHF — alle Preiswerte sind EUR-Platzhalter (FR-Vorlage)
    { label: "Kaufpreis exkl. MwSt.", values: ["990 €", "1 115 €", "1 290 €", "1 290 €", "2 095 €", "990 €", "1 090 €", "1 490 €", "1 590 €"] },
    { label: "Lieferung", values: ["0 €", "0 €", "0 €", "0 €", "0 €", "0 €", "0 €", "0 €", "0 €"] },
    { label: "Garantie", values: ["4 Jahre", "7 Jahre", "10 Jahre", "10 Jahre", "8 Jahre", "10 Jahre", "8 Jahre", "8 Jahre", "7 Jahre"] },
    { label: "Lebensdauer Elektroden", values: ["30 Monate", "30 Monate", "3 Jahre", "30 Monate", "5 Jahre", "4 Jahre (PadPak)", "4 Jahre (PadPak)", "4 Jahre (PadPak)", "5 Jahre"] },
    { label: "Preis Elektroden exkl. MwSt.", values: ["90 €", "92 €", "85 €", "130 €", "210 €", "180 € (PadPak)", "180 € (PadPak)", "180 € (PadPak)", "210 €"] },
    { label: "Erneuerungen Elektr. / 4 Jahre", values: ["1", "1", "1", "1", "0", "1", "1", "1", "0"] },
    { label: "Lebensdauer Batterie", values: ["5 Jahre", "5 Jahre", "5 Jahre", "6 Jahre", "5 Jahre", "4 Jahre (PadPak)", "4 Jahre (PadPak)", "4 Jahre (PadPak)", "5 Jahre"] },
    { label: "Preis Batterie exkl. MwSt.", values: ["150 €", "100 €", "170 €", "0 €*", "170 €", "im PadPak", "im PadPak", "im PadPak", "170 €"] },
    { label: "Erneuerungen Batt. / 4 Jahre", values: ["0", "0", "0", "0", "0", "1", "1", "1", "0"] },
    { label: "GESAMTKOSTEN 4 JAHRE exkl. MwSt.", values: ["1 080 €", "1 207 €", "1 180 €", "1 230 €", "2 305 €", "1 170 €", "1 270 €", "1 670 €", "1 590 €"], highlight: true },
  ],

  chooseTitle: "Den richtigen Defibrillator wählen: die wichtigsten Schritte",
  choose: [
    {
      title: "AED oder halbautomatisch: was wählen?",
      text: "Der vollautomatische AED gibt den Schock selbst ab: ideal ohne Vorkenntnisse. Der halbautomatische AED erfordert das Drücken einer Taste. Für öffentlich zugängliche Orte und Betriebe mit vielen Mitarbeitenden wird der vollautomatische AED empfohlen.",
    },
    {
      title: "Kauf oder Miete?",
      text: "Kauf je nach Modell oder Miete ab CHF 45.–/Monat inklusive Wartung. Über 5 Jahre sind die Gesamtkosten vergleichbar: Die Miete eignet sich für geglättete Budgets, der Kauf für die langfristige Amortisation.",
    },
    {
      title: "Lieferung 48h + Einführung",
      text: "Versand innerhalb von 48 Werkstunden in die ganze Schweiz. Komplettpaket geliefert: AED, Elektroden, Batterie, Gehäuse, SUVA-konforme Beschilderung. Bedienungsanleitung und Einführungsvideo inklusive.",
    },
    {
      title: "Wartung & Verbrauchsmaterial",
      text: "Indikative Jahreskosten von CHF 150.– bis CHF 300.– exkl. MwSt. (Prüfung + Verbrauchsmaterial). Bei Miete ist alles inklusive. Einzuplanen: Elektroden alle 2 bis 4 Jahre, Batterie alle 4 bis 5 Jahre.",
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
      a: "Der Preis eines Defibrillators liegt je nach Modell zwischen 990 € und 2 095 € exkl. MwSt. (Beträge in CHF noch zu bestätigen). Ein vollautomatischer AED kostet durchschnittlich 1 200 €. Die Gesamtkosten über 4 Jahre inklusive Verbrauchsmaterial liegen zwischen 1 080 € und 2 305 €.", // TODO CHF
    },
    {
      q: "Welchen Defibrillator für unter 1 000 € kaufen?",
      a: "Der iAED-S1 für 990 € exkl. MwSt. ist einer der günstigsten AED auf dem Markt: 4 Jahre Garantie, Schrittmacher-Erkennung, Ladezeit unter 7 Sekunden. Der HeartSine 360P bietet zum gleichen Preis 10 Jahre Garantie mit integriertem PadPak.", // TODO CHF
    },
    {
      q: "Welcher Defibrillator bietet das beste Preis-Leistungs-Verhältnis?",
      a: "Der iAED-S1 bietet ein hervorragendes Preis-Leistungs-Verhältnis. Einzigartiger Vorteil: Erwachsenen- und Kinderelektroden im selben Set integriert, wodurch der separate Kauf von Kinderelektroden entfällt. Seine Gesamtkosten über 4 Jahre sind die niedrigsten in unserem Vergleich.",
    },
    {
      q: "Welches Budget für die Ausstattung eines Unternehmens in der Schweiz?",
      a: "Rechnen Sie mit etwa 990 € bis 1 500 € exkl. MwSt. pro Defibrillator, inklusive Wandgehäuse und Beschilderung. In der Schweiz besteht keine Bundespflicht, aber die SUVA und die Schweizerische Herzstiftung empfehlen einen AED in Betrieben mit vielen Mitarbeitenden nachdrücklich. <a href=\"/de/#entreprise\" class=\"institutional-link\">Unsere Unternehmenslösungen ansehen</a>.", // TODO CHF
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
      a: "Die jährliche Wartung kostet je nach Serviceniveau zwischen CHF 150.– und CHF 300.– exkl. MwSt.: Geräteprüfung, Austausch abgelaufenen Verbrauchsmaterials und Updates. Bei <a href=\"/de/defibrillator-mieten/\" class=\"institutional-link\">Miete</a> ist die Wartung inklusive.",
    },
    {
      q: "Ist es besser, einen Defibrillator zu kaufen oder zu mieten?",
      a: "Der Kauf eignet sich für Strukturen, die langfristig amortisieren möchten. Die <a href=\"/de/defibrillator-mieten/\" class=\"institutional-link\">Miete</a> (ab CHF 45.–/Monat) bietet ein geglättetes Budget mit inklusiver Wartung und Verbrauchsmaterial.",
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

  ctaTitle: "Erhalten Sie Ihren Vergleich und Ihr Angebot innerhalb von 24h",
  ctaText:
    "Unser Team berät Sie zum passenden Defibrillator für Ihr Budget und Ihre Einrichtung — in der gesamten Deutsch- und Westschweiz.",
  ctaButton: "Kostenloses Angebot anfordern",
  ctaPhone: "+41 22 518 09 36",
}

export const pricingContent: Record<Locale, PricingContent> = { fr, de }

/**
 * Construit le bloc JSON-LD (@graph) de la page prix.
 * ⚠️ offers.priceCurrency utilise `priceCurrency` (EUR placeholder). // TODO CHF
 */
export function buildPricingJsonLd(c: PricingContent) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "MedicalBusiness"],
        "@id": "https://www.cardiopro.ch/#organization",
        name: c.lang === "fr" ? "CardioPro Suisse" : "CardioPro Schweiz",
        url: "https://www.cardiopro.ch",
        logo: "https://www.cardiopro.ch/images/og-cardiopro-ch.jpg",
        foundingDate: "2026",
        areaServed: "CH",
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
      },
      {
        "@type": "WebPage",
        "@id": `${c.canonical}#webpage`,
        url: c.canonical,
        name: c.metaTitle,
        description: c.metaDescription,
        inLanguage: c.lang === "fr" ? "fr-CH" : "de-CH",
        isPartOf: { "@id": "https://www.cardiopro.ch/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${c.canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: c.breadcrumbHome,
            item: `https://www.cardiopro.ch/${c.lang}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: c.breadcrumbCurrentShort,
            item: c.canonical,
          },
        ],
      },
      ...c.products.map((p) => ({
        "@type": "Product",
        "@id": `${c.canonical}#${p.id}`,
        name: p.model,
        brand: { "@type": "Brand", name: p.brand },
        category: p.typeLabel,
        description: p.features.join(" · "),
        offers: {
          "@type": "Offer",
          price: String(p.price), // TODO CHF
          priceCurrency, // TODO CHF
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://www.cardiopro.ch/#organization" },
        },
      })),
      {
        "@type": "FAQPage",
        "@id": `${c.canonical}#faq`,
        inLanguage: c.lang === "fr" ? "fr-CH" : "de-CH",
        mainEntity: c.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  }
}
