import type { Locale } from "@/lib/translations"
import { formatChfPrice, priceCurrency } from "@/lib/pricing"
import { eurToChf, pricingRangeChf } from "@/lib/pricing-products"
import {
  buildFaqSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  CONTENT_DATE_MODIFIED,
  CONTENT_DATE_PUBLISHED,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/schema"
import type { QuoteFormContent } from "@/components/shared/QuoteModal"

const linkClass = 'class="font-semibold text-[#0E3A82] hover:underline"'
const IMG = "https://cardiopro.fr/images"

const { minPrice, maxPrice, minCost4y, maxCost4y } = pricingRangeChf
const purchaseRangeFr = `${formatChfPrice(minPrice)} à ${formatChfPrice(eurToChf(2095))} hors TVA`
const purchaseRangeDe = `${formatChfPrice(minPrice)} bis ${formatChfPrice(eurToChf(2095))} netto`
const consumablesFr = `${formatChfPrice(eurToChf(90))} à ${formatChfPrice(eurToChf(210))} / renouvellement`
const consumablesDe = `${formatChfPrice(eurToChf(90))} bis ${formatChfPrice(eurToChf(210))} / Erneuerung`

export interface RentalFormula {
  id: string
  months: number
  monthsLabel: string
  monthsLabelUpper: string
  tagline: string
  price: number
  totalCost: number
  warrantyLabel: string
  features: string[]
  idealFor: string
  recommended?: boolean
  group: "long" | "medium" | "short"
}

export interface FaqItem {
  q: string
  a: string
}

export interface ChooseBlock {
  title: string
  text: string
  image: string
  imageAlt: string
}

export interface CompareRow {
  label: string
  rental: string
  purchase: string
}

export interface RentalContent extends QuoteFormContent {
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ogDescription: string

  breadcrumbHome: string
  breadcrumbParent: string
  breadcrumbCurrentShort: string

  heroBadge: string
  heroTitle: string
  heroSub: string
  heroPills: string[]
  heroAuthor: string

  formTitle: string
  formCompany: string
  formCompanyPlaceholder: string

  distributorTitle: string
  distributors: { alt: string; src: string }[]

  whyEyebrow: string
  whyTitle: string
  whyParagraphs: string[]
  whyBenefits: { title: string; text: string }[]

  formulasEyebrow: string
  formulasTitle: string

  longEyebrow: string
  longTitle: string
  longIntro: string
  mediumEyebrow: string
  mediumTitle: string
  mediumIntro: string
  shortEyebrow: string
  shortTitle: string
  shortIntro: string

  popularBadge: string
  perMonth: string
  priceVat: string
  totalPrefix: string
  selectCta: string

  formulas: RentalFormula[]

  compareEyebrow: string
  compareTitle: string
  compareCriteria: string
  compareRental: string
  comparePurchase: string
  compareRows: CompareRow[]
  compareNote: string

  tableEyebrow: string
  tableTitle: string
  tableIntro: string
  tableFormula: string
  tablePrice: string
  tableEngagement: string
  tableDelivery: string
  tableConsumables: string
  tableIdeal: string
  monthUnit: string
  tableFootnote: string
  tableCta: string

  chooseEyebrow: string
  chooseTitle: string
  chooseIntro: string
  choose: ChooseBlock[]

  stats: { value: string; label: string }[]
  clientsTitle: string
  clients: { alt: string; src: string }[]

  faqTitle: string
  faq: FaqItem[]

  ctaEyebrow: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

type FormulaSeed = {
  months: number
  eur: number
  warrantyFr: string
  warrantyDe: string
  taglineFr: string
  taglineDe: string
  idealFr: string
  idealDe: string
  group: "long" | "medium" | "short"
  recommended?: boolean
  shortTerm?: boolean
}

const FORMULA_SEEDS: FormulaSeed[] = [
  { months: 60, eur: 29, warrantyFr: "5 ans", warrantyDe: "5 Jahre", taglineFr: "Engagement long • Meilleur tarif", taglineDe: "Lange Laufzeit · Bester Preis", idealFr: "Long terme", idealDe: "Langfristig", group: "long", recommended: true },
  { months: 48, eur: 39, warrantyFr: "4 ans", warrantyDe: "4 Jahre", taglineFr: "Équilibre durée/coût", taglineDe: "Ausgewogenes Verhältnis", idealFr: "Long terme", idealDe: "Langfristig", group: "long" },
  { months: 24, eur: 49, warrantyFr: "2 ans", warrantyDe: "2 Jahre", taglineFr: "Flexibilité • Sans engagement long", taglineDe: "Flexibel · Ohne lange Bindung", idealFr: "Moyen terme", idealDe: "Mittelfristig", group: "long" },
  { months: 12, eur: 69, warrantyFr: "1 an", warrantyDe: "1 Jahr", taglineFr: "Idéal projets annuels", taglineDe: "Ideal für Jahresprojekte", idealFr: "Moyen terme", idealDe: "Mittelfristig", group: "medium", recommended: true },
  { months: 6, eur: 89, warrantyFr: "6 mois", warrantyDe: "6 Monate", taglineFr: "Événements saisonniers", taglineDe: "Saisonale Veranstaltungen", idealFr: "Saison", idealDe: "Saison", group: "medium" },
  { months: 3, eur: 119, warrantyFr: "Durée période", warrantyDe: "Laufzeit", taglineFr: "Chantiers • Événements", taglineDe: "Baustellen · Veranstaltungen", idealFr: "Chantier", idealDe: "Baustelle", group: "short", recommended: true, shortTerm: true },
  { months: 2, eur: 149, warrantyFr: "Durée période", warrantyDe: "Laufzeit", taglineFr: "Missions temporaires", taglineDe: "Temporäre Einsätze", idealFr: "Mission temp.", idealDe: "Temporär", group: "short", shortTerm: true },
  { months: 1, eur: 179, warrantyFr: "Durée période", warrantyDe: "Laufzeit", taglineFr: "Événements ponctuels", taglineDe: "Einmalige Veranstaltungen", idealFr: "Événement", idealDe: "Veranstaltung", group: "short", shortTerm: true },
]

function buildFormulas(lang: Locale): RentalFormula[] {
  const longBaseFr = ["Consommables fournis et remplacés", "Livraison 48h incluse", "Remplacement appareil sous 72h", "Boîtier mural + signalétique"]
  const longBaseDe = ["Verbrauchsmaterial geliefert und ersetzt", "Lieferung 48h inklusive", "Geräteaustausch innerhalb 72h", "Wandgehäuse + Beschilderung"]
  const shortExtraFr = "Formation incluse"
  const shortExtraDe = "Schulung inklusive"

  return FORMULA_SEEDS.map((s) => {
    const price = eurToChf(s.eur)
    const base = lang === "fr" ? longBaseFr : longBaseDe
    const coverageLabel =
      lang === "fr"
        ? s.shortTerm
          ? "Couverture pendant toute la location | IP56"
          : `Garantie ${s.warrantyFr} | IP56`
        : s.shortTerm
          ? "Abdeckung während der gesamten Mietdauer | IP56"
          : `Garantie ${s.warrantyDe} | IP56`
    const features = [coverageLabel, ...base, ...(s.shortTerm ? [lang === "fr" ? shortExtraFr : shortExtraDe] : [])]
    const monthsLabel = lang === "fr" ? `${s.months} mois` : `${s.months} Monate`
    return {
      id: `location-${s.months}-mois`,
      months: s.months,
      monthsLabel,
      monthsLabelUpper: lang === "fr" ? `${s.months} MOIS` : `${s.months} MONATE`,
      tagline: lang === "fr" ? s.taglineFr : s.taglineDe,
      price,
      totalCost: price * s.months,
      warrantyLabel: lang === "fr" ? `Garantie ${s.warrantyFr}` : `Garantie ${s.warrantyDe}`,
      features,
      idealFor: lang === "fr" ? s.idealFr : s.idealDe,
      recommended: s.recommended,
      group: s.group,
    }
  })
}

const formulasFr = buildFormulas("fr")
const formulasDe = buildFormulas("de")
const lowPrice = eurToChf(29)
const highPrice = eurToChf(179)
const rental4y48 = formulasFr.find((f) => f.months === 48)!.totalCost

const fr: RentalContent = {
  lang: "fr",
  canonical: "https://www.cardiopro.ch/fr/location-defibrillateur/",

  metaTitle: `Location défibrillateur Suisse dès ${formatChfPrice(lowPrice)}/mois | CardioPro`,
  metaDescription: `Louez un défibrillateur (DAE) en Suisse dès ${formatChfPrice(lowPrice)}/mois hors TVA. 8 formules de 1 à 60 mois, consommables fournis, livraison 48h. Devis gratuit en ligne.`,
  ogTitle: `Location de défibrillateur en Suisse dès ${formatChfPrice(lowPrice)}/mois | CardioPro`,
  ogDescription: `Louez un défibrillateur (DAE) en Suisse dès ${formatChfPrice(lowPrice)}/mois hors TVA. 8 formules de 1 à 60 mois, consommables fournis, livraison 48h. Devis gratuit en ligne.`,

  breadcrumbHome: "Accueil",
  breadcrumbParent: "Nos Offres",
  breadcrumbCurrentShort: "Location de défibrillateur",

  heroBadge: "Location DAE",
  heroTitle: `Location de défibrillateur en Suisse dès ${formatChfPrice(lowPrice)}/mois`,
  heroSub: "8 formules de 1 à 60 mois. Consommables fournis, livraison 48h, maintenance incluse. Le choix de +20 000 professionnels.",
  heroPills: ["Livraison 48h", "CHF 0.– d'investissement", "Charge déductible"],
  heroAuthor: "CardioPro — Spécialiste DAE depuis 2017",

  formTitle: "Devis gratuit en 24h",
  formSubtitle: "Sans engagement • Réponse garantie",
  formName: "Nom complet",
  formCompany: "Entreprise / Établissement",
  formCompanyPlaceholder: "Entreprise / Établissement",
  formPhone: "Téléphone",
  formEmail: "Adresse email professionnelle",
  formSubmit: "Recevoir mon devis gratuit",
  formLegal: "🔒 Vos données restent confidentielles",
  formSubject: "Devis CardioPro Suisse — Location défibrillateur (FR)",

  distributorTitle: "Distributeur agréé",
  distributors: [
    { alt: "HeartSine", src: `${IMG}/distrubuteur_agree/heartsine.webp` },
    { alt: "Mediana", src: `${IMG}/distrubuteur_agree/MEDIANA.webp` },
    { alt: "ZOLL Medical", src: `${IMG}/distrubuteur_agree/ZOLL.webp` },
    { alt: "Bexen Cardio", src: `${IMG}/distrubuteur_agree/BEXEN.webp` },
    { alt: "Noah Medical", src: `${IMG}/distrubuteur_agree/NOAH_MEDICAL.webp` },
    { alt: "Physio-Control", src: `${IMG}/distrubuteur_agree/physio_control_logo.webp` },
  ],

  whyEyebrow: "Pourquoi louer",
  whyTitle: "Pourquoi louer un défibrillateur plutôt qu'acheter ?",
  whyParagraphs: [
    `La location d'un défibrillateur séduit aujourd'hui la majorité des <a href="/fr/a-propos/" ${linkClass}>entreprises</a>, collectivités et établissements recevant du public soumis aux recommandations SUVA. Plutôt que d'immobiliser ${purchaseRangeFr} dans l'achat d'un DAE, vous lissez votre budget sur 1 à 60 mois. Chaque mensualité est une charge d'exploitation entièrement déductible.`,
    `Le pack inclut le défibrillateur, ses électrodes et sa batterie remplacés avant péremption, le boîtier mural, la signalétique réglementaire et la maintenance sous 72h. En fin de contrat, vous bénéficiez d'un appareil de dernière génération sans surcoût. Comparez aussi nos <a href="/fr/defibrillateur-prix/" ${linkClass}>prix d'achat</a>.`,
  ],
  whyBenefits: [
    { title: "CHF 0.– d'investissement", text: `Budget lissé mois par mois. Pas de sortie de trésorerie. Mensualités prévisibles de ${formatChfPrice(lowPrice)} à ${formatChfPrice(highPrice)} hors TVA.` },
    { title: "Consommables inclus", text: "Électrodes et batterie fournis et remplacés avant péremption. Appareil toujours opérationnel, sans surcoût." },
    { title: "Déductible immédiatement", text: "Chaque mensualité est une charge d'exploitation déductible du résultat fiscal. Pas d'amortissement sur 5-7 ans." },
    { title: "1 à 60 mois", text: "Huit formules du ponctuel au permanent. Événement, chantier, obligation légale : une durée pour chaque besoin." },
  ],

  formulasEyebrow: "Nos formules",
  formulasTitle: "Tarifs et formules de location de défibrillateur",

  longEyebrow: "Longue durée",
  longTitle: `Location longue durée : de ${formatChfPrice(lowPrice)} à ${formatChfPrice(eurToChf(49))}/mois`,
  longIntro: `C'est le choix de la majorité des <a href="/fr/a-propos/" ${linkClass}>entreprises</a>, <a href="/fr/contact/" ${linkClass}>communes</a> et établissements recevant du public. Engagement de 24, 48 ou 60 mois pour le meilleur tarif mensuel. Le pack location longue durée comprend le défibrillateur automatique ou semi-automatique de votre choix, les électrodes adultes, la batterie, le boîtier mural avec signalétique et la livraison sous 48h.`,
  mediumEyebrow: "Moyenne durée",
  mediumTitle: "Location moyenne durée : 6 à 12 mois",
  mediumIntro: `La location moyenne durée (6 à 12 mois) convient aux besoins temporaires prolongés. Chantier de plusieurs mois, remplacement d'un appareil défaillant, couverture d'une saison touristique ou sportive : de ${formatChfPrice(eurToChf(69))} à ${formatChfPrice(eurToChf(89))} hors TVA/mois selon la durée, cette formule offre un bon équilibre entre flexibilité et coût maîtrisé.`,
  shortEyebrow: "Courte durée",
  shortTitle: "Location courte durée : 1 à 3 mois",
  shortIntro: `La location courte durée d'un défibrillateur coûte de ${formatChfPrice(eurToChf(119))} à ${formatChfPrice(highPrice)} hors TVA/mois selon la durée (1, 2 ou 3 mois). Elle est conçue pour les événements ponctuels : compétitions sportives, festivals, salons professionnels, séminaires d'entreprise, mariages ou fêtes communales.`,

  popularBadge: "Le plus populaire",
  perMonth: "/mois",
  priceVat: "hors TVA",
  totalPrefix: "Soit",
  selectCta: "Demander un devis →",

  formulas: formulasFr,

  compareEyebrow: "Comparatif",
  compareTitle: "Location ou achat de défibrillateur : le comparatif",
  compareCriteria: "Critère",
  compareRental: "Location",
  comparePurchase: "Achat",
  compareRows: [
    { label: "Investissement initial", rental: "CHF 0.–", purchase: purchaseRangeFr },
    { label: "Coût mensuel", rental: `${formatChfPrice(lowPrice)} à ${formatChfPrice(highPrice)}/mois hors TVA`, purchase: "CHF 0.– (hors consommables)" },
    { label: "Consommables", rental: "Fournis et remplacés", purchase: `À votre charge — ${consumablesFr}` },
    { label: "Fiscalité", rental: "Charge déductible immédiate chaque mois", purchase: "Immobilisation amortie sur plusieurs exercices" },
    { label: "Flexibilité", rental: "1 à 60 mois — 8 formules", purchase: "Aucune" },
    { label: "Fin de période", rental: "Renouveler, prolonger ou restituer sans frais", purchase: "L'appareil vous appartient" },
    { label: "Appareil récent", rental: "Oui, renouvelable en fin de contrat", purchase: "Devient obsolète — durée de vie 7-10 ans" },
    { label: "Coût total sur 4 ans", rental: `${formatChfPrice(rental4y48)} hors TVA (formule 48 mois)`, purchase: `${formatChfPrice(minCost4y)} à ${formatChfPrice(maxCost4y)} hors TVA` },
  ],
  compareNote: `Coût total achat = prix DAE + renouvellement des consommables sur 4 ans. Coût total location = mensualité de la formule 48 mois × 48 (consommables inclus). Tarifs hors TVA en vigueur au ${CONTENT_DATE_MODIFIED.split("-").reverse().join("/")}.`,

  tableEyebrow: "Toutes les formules",
  tableTitle: "Tarifs location défibrillateur : toutes les formules",
  tableIntro: `Sur 4 ans, la location d'un défibrillateur revient à ${formatChfPrice(rental4y48)} hors TVA (formule 48 mois, consommables inclus), contre ${formatChfPrice(minCost4y)} à ${formatChfPrice(maxCost4y)} hors TVA à l'achat consommables compris. En location, le budget est fixe et prévisible chaque mois, sans mauvaise surprise.`,
  tableFormula: "Formule",
  tablePrice: "Prix (hors TVA/mois)",
  tableEngagement: "Engagement",
  tableDelivery: "Livraison 48h",
  tableConsumables: "Consommables",
  tableIdeal: "Idéal pour",
  monthUnit: "mois",
  tableFootnote: "Tous les tarifs sont exprimés en francs suisses hors taxes. Chaque formule inclut le DAE, les électrodes, la batterie, le boîtier mural, la signalétique et la livraison sous 48h.",
  tableCta: "Obtenir mon devis personnalisé",

  chooseEyebrow: "Comment choisir",
  chooseTitle: "Comment choisir sa formule de location ?",
  chooseIntro: "Le choix de la bonne formule de location dépend de votre situation. Voici les critères à évaluer.",
  choose: [
    {
      title: "DAE ou DSA : lequel choisir ?",
      text: `Le DAE (automatique) délivre le choc seul : idéal sans formation. Le DSA (semi-auto) demande d'appuyer sur un bouton. Pour les <a href="/fr/a-propos/" ${linkClass}>entreprises</a> et établissements recevant du public, le DAE est recommandé.`,
      image: `${IMG}/content/prix_rightDef_1.svg`,
      imageAlt: "DAE ou DSA — icône comparatif CardioPro",
    },
    {
      title: "Achat ou location ?",
      text: `<a href="/fr/defibrillateur-prix/" ${linkClass}>Achat</a> : de ${purchaseRangeFr} selon le modèle. Location : de ${formatChfPrice(lowPrice)} à ${formatChfPrice(eurToChf(49))}/mois en longue durée, consommables fournis. Sur 5 ans, le coût total est comparable. <a href="/fr/defibrillateur-prix/" ${linkClass}>Voir tous les prix</a>.`,
      image: `${IMG}/content/prix_rightDef_2.svg`,
      imageAlt: "Achat ou location — icône comparatif CardioPro",
    },
    {
      title: "Livraison 48h + prise en main",
      text: "Expédition sous 48h partout en Suisse. Pack complet livré : DAE, électrodes, batterie, boîtier, signalétique. Guide d'utilisation inclus et vidéo de prise en main pour être opérationnel immédiatement.",
      image: `${IMG}/content/prix_rightDef_3.svg`,
      imageAlt: "Livraison 48h — icône CardioPro",
    },
    {
      title: "Maintenance & consommables",
      text: `Coût annuel : ${formatChfPrice(eurToChf(150))} à ${formatChfPrice(eurToChf(300))} hors TVA (vérification + consommables). En location, tout est inclus. À prévoir à l'achat : électrodes tous les 2-4 ans, batterie tous les 4-5 ans.`,
      image: `${IMG}/content/prix_rightDef_4.svg`,
      imageAlt: "Maintenance et consommables — icône CardioPro",
    },
  ],

  stats: [
    { value: "20 000+", label: "Professionnels équipés" },
    { value: "48h", label: "Livraison partout en Suisse" },
    { value: "72h", label: "Intervention maintenance" },
  ],
  clientsTitle: "Ils nous font confiance",
  clients: [
    { alt: "Base aérienne de Vélizy Villacoublay", src: `${IMG}/clients/logo-velizy.webp` },
    { alt: "CPAM Drôme", src: `${IMG}/clients/logo-cpam.webp` },
    { alt: "Hitachi", src: `${IMG}/clients/logo-hitachi.webp` },
    { alt: "Emmaüs", src: `${IMG}/clients/logo-emmaus.webp` },
    { alt: "Circet France", src: `${IMG}/clients/logo-circet.webp` },
  ],

  faqTitle: "Questions fréquentes sur la location de défibrillateur",
  faq: [
    { q: "Combien coûte la location d'un défibrillateur par mois ?", a: `La location d'un défibrillateur coûte de ${formatChfPrice(lowPrice)} à ${formatChfPrice(highPrice)} hors TVA/mois selon la durée : ${formatChfPrice(lowPrice)}/mois sur 60 mois, ${formatChfPrice(eurToChf(39))} sur 48 mois, ${formatChfPrice(eurToChf(49))} sur 24 mois, ${formatChfPrice(eurToChf(69))} sur 12 mois, ${formatChfPrice(eurToChf(89))} sur 6 mois, ${formatChfPrice(eurToChf(119))} sur 3 mois, ${formatChfPrice(eurToChf(149))} sur 2 mois et ${formatChfPrice(highPrice)} pour 1 mois. Chaque pack inclut le DAE, les consommables, le boîtier mural et la livraison sous 48h.` },
    { q: "Que comprend le pack location de défibrillateur CardioPro ?", a: "Chaque pack location CardioPro comprend : le défibrillateur automatique ou semi-automatique de votre choix, un jeu d'électrodes adultes, la batterie, un boîtier mural avec signalétique réglementaire et la livraison sous 48h sur tout le territoire suisse. Les consommables (électrodes et batterie) sont fournis et remplacés à chaque échéance de péremption." },
    { q: "Quelle est la durée minimum pour louer un défibrillateur ?", a: "La durée minimum de location est d'un mois. CardioPro propose huit formules : 1, 2, 3, 6, 12, 24, 48 et 60 mois. Plus la durée d'engagement est longue, plus le coût mensuel est réduit. Aucuns frais de résiliation ne s'appliquent en fin de contrat." },
    { q: "Peut-on louer un défibrillateur pour un événement ponctuel ?", a: "Oui, la location courte durée est spécialement conçue pour les événements ponctuels. Compétitions sportives, festivals, salons professionnels, séminaires ou mariages : vous louez un DAE pour 1 à 3 mois, le temps de votre événement. L'appareil est livré sous 48h, prêt à l'emploi, et vous le retournez simplement en fin de période." },
    { q: "Vaut-il mieux acheter ou louer un défibrillateur ?", a: `La location est préférable pour lisser le budget et garantir des consommables toujours à jour. L'<a href="/fr/defibrillateur-prix/" ${linkClass}>achat</a> convient si vous disposez d'un budget immédiat de ${purchaseRangeFr}. Sur 4 ans, le coût total est comparable. La location offre en plus une déductibilité fiscale mensuelle immédiate.` },
    { q: "La location de défibrillateur est-elle déductible fiscalement en Suisse ?", a: "Oui. Pour les entreprises et les professionnels, chaque mensualité de location est généralement comptabilisée en charge d'exploitation. Contrairement à l'achat qui nécessite une immobilisation amortie sur plusieurs exercices, la location offre un avantage fiscal immédiat chaque mois. Validez avec votre fiduciaire selon votre canton." },
    { q: "Quels types d'établissements peuvent louer un défibrillateur ?", a: "Tous les types d'établissements peuvent louer un DAE : entreprises, collectivités, communes, hôtels et restaurants, centres médicaux, EMS, associations sportives, établissements recevant du public et cabinets médicaux. En Suisse, la SUVA recommande vivement l'installation d'un DAE dans les lieux à forte fréquentation." },
    { q: "Comment fonctionne la location courte durée de défibrillateur ?", a: "La location courte durée fonctionne en trois étapes : vous choisissez votre formule (1, 2 ou 3 mois) et votre modèle de DAE. L'appareil est livré sous 48h avec son boîtier et sa signalétique. En fin de période, vous retournez simplement le matériel. Aucun engagement supplémentaire." },
    { q: "Quels modèles de défibrillateurs sont disponibles en location ?", a: `CardioPro propose en location l'ensemble de sa gamme de défibrillateurs certifiés CE et FDA : iAED-S1 (Noah Medical), HeartSine 360P et 500P, Mediana A16, ZOLL AED 3, Bexen Reanibex 100 et Physio-Control Lifepak CR2. Chaque modèle est disponible en version automatique (DAE) ou semi-automatique (DSA). <a href="/fr/defibrillateur-prix/" ${linkClass}>Voir tous les modèles</a>.` },
    { q: "Que se passe-t-il en fin de contrat de location ?", a: "En fin de contrat, trois options s'offrent à vous : renouveler votre contrat avec un appareil neuf de dernière génération, prolonger la location au même tarif, ou restituer le matériel sans frais. CardioPro vous contacte avant l'échéance pour organiser la suite." },
    { q: "La livraison du défibrillateur est-elle incluse dans la location ?", a: "Oui, la livraison est incluse dans toutes les formules de location CardioPro. L'expédition se fait sous 48h partout en Suisse. Le pack arrive prêt à l'emploi : défibrillateur, électrodes, batterie, boîtier mural et signalétique réglementaire." },
    { q: "Quels sont les avantages de la location longue durée de défibrillateur ?", a: `La location longue durée (24 à 60 mois) offre le meilleur tarif mensuel : à partir de ${formatChfPrice(lowPrice)} hors TVA/mois sur 60 mois. Les consommables sont remplacés à chaque échéance de péremption sans surcoût. Les mensualités sont déductibles en charges d'exploitation. En fin de contrat, vous pouvez renouveler avec un appareil de dernière génération.` },
    { q: "Combien coûte la location courte durée d'un défibrillateur ?", a: `La location courte durée coûte ${formatChfPrice(eurToChf(119))} hors TVA/mois sur 3 mois, ${formatChfPrice(eurToChf(149))}/mois sur 2 mois et ${formatChfPrice(highPrice)}/mois pour 1 mois. Le pack comprend le DAE, les électrodes, la batterie, le boîtier et la livraison express. En fin de période, vous retournez l'appareil sans engagement supplémentaire.` },
    { q: "Comment louer un défibrillateur pour son entreprise ?", a: `Les entreprises peuvent louer un DAE dès ${formatChfPrice(lowPrice)} hors TVA/mois en longue durée. CardioPro livre sous 48h le pack complet : défibrillateur, boîtier mural, signalétique réglementaire et consommables. Les mensualités sont déductibles en charges d'exploitation.` },
    { q: "Quel est le coût total d'une location de défibrillateur sur 4 ans ?", a: `Sur 48 mois, la location revient à ${formatChfPrice(formulasFr.find((f) => f.months === 48)!.totalCost)} hors TVA (${formatChfPrice(eurToChf(39))}/mois × 48). Sur 60 mois : ${formatChfPrice(formulasFr.find((f) => f.months === 60)!.totalCost)} hors TVA (${formatChfPrice(lowPrice)}/mois × 60). À l'achat, le même appareil coûte ${purchaseRangeFr} plus les consommables. Le coût global est comparable, avec l'avantage d'un budget prévisible en location.` },
    { q: "DAE ou DSA : lequel choisir en location ?", a: `Le DAE (automatique) délivre le choc sans intervention : recommandé pour le grand public. Le DSA (semi-automatique) demande d'appuyer sur un bouton : il convient aux secouristes formés. Les deux sont disponibles chez CardioPro au même tarif, dès ${formatChfPrice(lowPrice)} hors TVA/mois en longue durée.` },
  ],

  ctaEyebrow: "Équipez-vous",
  ctaTitle: `Défibrillateur dès ${formatChfPrice(lowPrice)}/mois`,
  ctaText: "Livraison 48h · Maintenance incluse · Géo'DAE offert",
  ctaButton: "Devis gratuit",
}

const de: RentalContent = {
  lang: "de",
  canonical: "https://www.cardiopro.ch/de/defibrillator-mieten/",

  metaTitle: `Defibrillator mieten Schweiz ab ${formatChfPrice(lowPrice)}/Monat | CardioPro`,
  metaDescription: `Defibrillator (AED) in der Schweiz mieten ab ${formatChfPrice(lowPrice)}/Monat netto. 8 Laufzeiten von 1 bis 60 Monaten, Verbrauchsmaterial inklusive, Lieferung 48h. Kostenloses Angebot online.`,
  ogTitle: `Defibrillator mieten in der Schweiz ab ${formatChfPrice(lowPrice)}/Monat | CardioPro`,
  ogDescription: `AED ab ${formatChfPrice(lowPrice)}/Monat netto mieten. Kurz- oder Langzeitlaufzeit, Lieferung 48h, Verbrauchsmaterial inklusive. Kostenloses Angebot innerhalb 24h.`,

  breadcrumbHome: "Startseite",
  breadcrumbParent: "Unsere Angebote",
  breadcrumbCurrentShort: "Defibrillator mieten",

  heroBadge: "AED-Miete",
  heroTitle: `Defibrillator mieten in der Schweiz ab ${formatChfPrice(lowPrice)}/Monat`,
  heroSub: "8 Laufzeiten von 1 bis 60 Monaten. Verbrauchsmaterial inklusive, Lieferung 48h, Wartung inklusive. Die Wahl von über 20 000 Profis.",
  heroPills: ["Lieferung 48h", "CHF 0.– Investition", "Abzugsfähige Kosten"],
  heroAuthor: "CardioPro — AED-Spezialist seit 2017",

  formTitle: "Kostenloses Angebot in 24h",
  formSubtitle: "Unverbindlich · Antwort garantiert",
  formName: "Vollständiger Name",
  formCompany: "Unternehmen / Einrichtung",
  formCompanyPlaceholder: "Unternehmen / Einrichtung",
  formPhone: "Telefon",
  formEmail: "Geschäftliche E-Mail-Adresse",
  formSubmit: "Mein kostenloses Angebot erhalten",
  formLegal: "🔒 Ihre Daten bleiben vertraulich",
  formSubject: "Angebot CardioPro Schweiz — Defibrillator mieten (DE)",

  distributorTitle: "Autorisierter Händler",
  distributors: fr.distributors,

  whyEyebrow: "Warum mieten",
  whyTitle: "Warum einen Defibrillator mieten statt kaufen?",
  whyParagraphs: [
    `Die Miete eines Defibrillators überzeugt heute die Mehrheit der <a href="/de/ueber-uns/" ${linkClass}>Unternehmen</a>, Gemeinden und öffentlich zugänglichen Einrichtungen gemäss SUVA-Empfehlungen. Statt ${purchaseRangeDe} in den Kauf eines AED zu investieren, glätten Sie Ihr Budget über 1 bis 60 Monate. Jede Monatsrate ist ein voll abzugsfähiger Betriebsaufwand.`,
    `Das Paket umfasst den Defibrillator, Elektroden und Batterie vor Ablauf ersetzt, Wandgehäuse, Beschilderung und Wartung innerhalb 72h. Am Vertragsende profitieren Sie von einem aktuellen Gerät ohne Mehrkosten. Vergleichen Sie auch unsere <a href="/de/defibrillator-kaufen/" ${linkClass}>Kaufpreise</a>.`,
  ],
  whyBenefits: [
    { title: "CHF 0.– Investition", text: `Budget Monat für Monat geglättet. Keine Kapitalbindung. Planbare Monatsraten von ${formatChfPrice(lowPrice)} bis ${formatChfPrice(highPrice)} netto.` },
    { title: "Verbrauchsmaterial inklusive", text: "Elektroden und Batterie geliefert und vor Ablauf ersetzt. Gerät immer einsatzbereit, ohne Aufpreis." },
    { title: "Sofort abzugsfähig", text: "Jede Monatsrate ist ein abzugsfähiger Betriebsaufwand. Keine Abschreibung über 5-7 Jahre." },
    { title: "1 bis 60 Monate", text: "Acht Laufzeiten vom Einmalbedarf bis zur Dauerlösung. Veranstaltung, Baustelle, Empfehlung SUVA: eine Laufzeit für jeden Bedarf." },
  ],

  formulasEyebrow: "Unsere Laufzeiten",
  formulasTitle: "Preise und Laufzeiten für Defibrillator-Miete",

  longEyebrow: "Langzeitmiete",
  longTitle: `Langzeitmiete: von ${formatChfPrice(lowPrice)} bis ${formatChfPrice(eurToChf(49))}/Monat`,
  longIntro: `Die Wahl der meisten <a href="/de/ueber-uns/" ${linkClass}>Unternehmen</a>, <a href="/de/kontakt/" ${linkClass}>Gemeinden</a> und öffentlich zugänglichen Einrichtungen. Bindung über 24, 48 oder 60 Monate für den besten Monatspreis. Das Langzeitpaket umfasst den AED oder halbautomatischen Defibrillator Ihrer Wahl, Erwachsenenelektroden, Batterie, Wandgehäuse mit Beschilderung und Lieferung innerhalb 48h.`,
  mediumEyebrow: "Mittelfristige Miete",
  mediumTitle: "Mittelfristige Miete: 6 bis 12 Monate",
  mediumIntro: `Die mittelfristige Miete (6 bis 12 Monate) eignet sich für längeren temporären Bedarf. Mehrmonatige Baustelle, Ersatz eines defekten Geräts, Tourismus- oder Sportsaison: von ${formatChfPrice(eurToChf(69))} bis ${formatChfPrice(eurToChf(89))} netto/Monat je nach Laufzeit.`,
  shortEyebrow: "Kurzzeitmiete",
  shortTitle: "Kurzzeitmiete: 1 bis 3 Monate",
  shortIntro: `Die Kurzzeitmiete kostet von ${formatChfPrice(eurToChf(119))} bis ${formatChfPrice(highPrice)} netto/Monat je nach Laufzeit (1, 2 oder 3 Monate). Konzipiert für einmalige Veranstaltungen: Sportwettkämpfe, Festivals, Messen, Seminare oder Hochzeiten.`,

  popularBadge: "Am beliebtesten",
  perMonth: "/Monat",
  priceVat: "netto",
  totalPrefix: "Das sind",
  selectCta: "Angebot anfordern →",

  formulas: formulasDe,

  compareEyebrow: "Vergleich",
  compareTitle: "Defibrillator mieten oder kaufen: der Vergleich",
  compareCriteria: "Kriterium",
  compareRental: "Miete",
  comparePurchase: "Kauf",
  compareRows: [
    { label: "Anfangsinvestition", rental: "CHF 0.–", purchase: purchaseRangeDe },
    { label: "Monatliche Kosten", rental: `${formatChfPrice(lowPrice)} bis ${formatChfPrice(highPrice)}/Monat netto`, purchase: "CHF 0.– (exkl. Verbrauchsmaterial)" },
    { label: "Verbrauchsmaterial", rental: "Geliefert und ersetzt", purchase: `Zu Ihren Lasten — ${consumablesDe}` },
    { label: "Steuern", rental: "Sofort abzugsfähige Betriebskosten", purchase: "Über mehrere Jahre abgeschrieben" },
    { label: "Flexibilität", rental: "1 bis 60 Monate — 8 Laufzeiten", purchase: "Keine" },
    { label: "Vertragsende", rental: "Erneuern, verlängern oder kostenlos zurückgeben", purchase: "Das Gerät gehört Ihnen" },
    { label: "Aktuelles Gerät", rental: "Ja, am Vertragsende erneuerbar", purchase: "Wird obsolet — Lebensdauer 7-10 Jahre" },
    { label: "Gesamtkosten über 4 Jahre", rental: `${formatChfPrice(rental4y48)} netto (48-Monats-Formel)`, purchase: `${formatChfPrice(minCost4y)} bis ${formatChfPrice(maxCost4y)} netto` },
  ],
  compareNote: `Gesamtkosten Kauf = AED-Preis + Verbrauchsmaterial-Erneuerung über 4 Jahre. Gesamtkosten Miete = Monatsrate der 48-Monats-Formel × 48 (Verbrauchsmaterial inklusive). Preise netto gültig ab ${CONTENT_DATE_MODIFIED.split("-").reverse().join("/")}.`,

  tableEyebrow: "Alle Laufzeiten",
  tableTitle: "Mietpreise Defibrillator: alle Laufzeiten",
  tableIntro: `Über 4 Jahre kostet die Defibrillator-Miete ${formatChfPrice(rental4y48)} netto (48-Monats-Formel, Verbrauchsmaterial inklusive), gegenüber ${formatChfPrice(minCost4y)} bis ${formatChfPrice(maxCost4y)} netto beim Kauf inklusive Verbrauchsmaterial. Bei der Miete ist das Budget fest und planbar, ohne böse Überraschungen.`,
  tableFormula: "Laufzeit",
  tablePrice: "Preis (netto/Monat)",
  tableEngagement: "Bindung",
  tableDelivery: "Lieferung 48h",
  tableConsumables: "Verbrauchsmaterial",
  tableIdeal: "Ideal für",
  monthUnit: "Monate",
  tableFootnote: "Alle Preise in Schweizer Franken netto. Jede Laufzeit umfasst AED, Elektroden, Batterie, Wandgehäuse, Beschilderung und Lieferung innerhalb 48h.",
  tableCta: "Persönliches Angebot erhalten",

  chooseEyebrow: "Auswahlhilfe",
  chooseTitle: "Wie wähle ich meine Mietlaufzeit?",
  chooseIntro: "Die Wahl der richtigen Laufzeit hängt von Ihrer Situation ab. Hier die zu prüfenden Kriterien.",
  choose: [
    {
      title: "AED oder halbautomatisch: was wählen?",
      text: `Der vollautomatische AED gibt den Schock allein ab — ideal ohne Schulung. Der halbautomatische AED erfordert einen Knopfdruck. Für <a href="/de/ueber-uns/" ${linkClass}>Unternehmen</a> und öffentlich zugängliche Einrichtungen wird der AED empfohlen.`,
      image: `${IMG}/content/prix_rightDef_1.svg`,
      imageAlt: "AED oder halbautomatisch — Vergleichs-Icon CardioPro",
    },
    {
      title: "Kauf oder Miete?",
      text: `<a href="/de/defibrillator-kaufen/" ${linkClass}>Kauf</a>: von ${purchaseRangeDe} je nach Modell. Miete: von ${formatChfPrice(lowPrice)} bis ${formatChfPrice(eurToChf(49))}/Monat in der Langzeitmiete, Verbrauchsmaterial inklusive. <a href="/de/defibrillator-kaufen/" ${linkClass}>Alle Preise ansehen</a>.`,
      image: `${IMG}/content/prix_rightDef_2.svg`,
      imageAlt: "Kauf oder Miete — Vergleichs-Icon CardioPro",
    },
    {
      title: "Lieferung 48h + Inbetriebnahme",
      text: "Versand innerhalb 48h in der ganzen Schweiz. Komplettpaket: AED, Elektroden, Batterie, Gehäuse, Beschilderung. Bedienungsanleitung und Einführungsvideo inklusive.",
      image: `${IMG}/content/prix_rightDef_3.svg`,
      imageAlt: "Lieferung 48h — Icon CardioPro",
    },
    {
      title: "Wartung & Verbrauchsmaterial",
      text: `Jährliche Kosten: ${formatChfPrice(eurToChf(150))} bis ${formatChfPrice(eurToChf(300))} netto (Prüfung + Verbrauchsmaterial). Bei der Miete ist alles inklusive.`,
      image: `${IMG}/content/prix_rightDef_4.svg`,
      imageAlt: "Wartung und Verbrauchsmaterial — Icon CardioPro",
    },
  ],

  stats: [
    { value: "20 000+", label: "Ausgestattete Profis" },
    { value: "48h", label: "Lieferung in der ganzen Schweiz" },
    { value: "72h", label: "Wartungseinsatz" },
  ],
  clientsTitle: "Sie vertrauen uns",
  clients: fr.clients,

  faqTitle: "Häufige Fragen zur Defibrillator-Miete",
  faq: fr.faq.map((item, i) => ({
    q: [
      "Was kostet die Miete eines Defibrillators pro Monat?",
      "Was umfasst das Mietpaket von CardioPro?",
      "Was ist die Mindestmietdauer für einen Defibrillator?",
      "Kann man einen Defibrillator für eine einmalige Veranstaltung mieten?",
      "Defibrillator mieten oder kaufen — was ist besser?",
      "Ist die Miete eines Defibrillators in der Schweiz steuerlich absetzbar?",
      "Welche Einrichtungen können einen Defibrillator mieten?",
      "Wie funktioniert die Kurzzeitmiete eines Defibrillators?",
      "Welche Defibrillator-Modelle sind zur Miete verfügbar?",
      "Was passiert am Ende des Mietvertrags?",
      "Ist die Lieferung des Defibrillators in der Miete inbegriffen?",
      "Welche Vorteile bietet die Langzeitmiete?",
      "Was kostet die Kurzzeitmiete eines Defibrillators?",
      "Wie miete ich einen Defibrillator für mein Unternehmen?",
      "Wie hoch sind die Gesamtkosten einer Miete über 4 Jahre?",
      "AED oder halbautomatisch: was zur Miete wählen?",
    ][i],
    a: [
      `Die Miete eines Defibrillators kostet je nach Laufzeit von ${formatChfPrice(lowPrice)} bis ${formatChfPrice(highPrice)} netto/Monat: ${formatChfPrice(lowPrice)}/Monat über 60 Monate, ${formatChfPrice(eurToChf(39))} über 48 Monate, ${formatChfPrice(eurToChf(49))} über 24 Monate, ${formatChfPrice(eurToChf(69))} über 12 Monate, ${formatChfPrice(eurToChf(89))} über 6 Monate, ${formatChfPrice(eurToChf(119))} über 3 Monate, ${formatChfPrice(eurToChf(149))} über 2 Monate und ${formatChfPrice(highPrice)} für 1 Monat. Jedes Paket umfasst AED, Verbrauchsmaterial, Wandgehäuse und Lieferung innerhalb 48h.`,
      "Jedes Mietpaket umfasst: den vollautomatischen oder halbautomatischen Defibrillator Ihrer Wahl, Erwachsenenelektroden, Batterie, Wandgehäuse mit Beschilderung und Lieferung innerhalb 48h in der ganzen Schweiz. Verbrauchsmaterial wird zu jedem Ablauftermin geliefert und ersetzt.",
      "Die Mindestmietdauer beträgt einen Monat. CardioPro bietet acht Laufzeiten: 1, 2, 3, 6, 12, 24, 48 und 60 Monate. Je länger die Bindung, desto niedriger die Monatskosten.",
      "Ja, die Kurzzeitmiete ist für einmalige Veranstaltungen konzipiert: Sportwettkämpfe, Festivals, Messen, Seminare oder Hochzeiten. Sie mieten einen AED für 1 bis 3 Monate. Lieferung innerhalb 48h, Rückgabe am Ende der Laufzeit.",
      `Die Miete ist vorzuziehen, um das Budget zu glätten und stets aktuelles Verbrauchsmaterial zu garantieren. Der <a href="/de/defibrillator-kaufen/" ${linkClass}>Kauf</a> eignet sich bei sofortigem Budget von ${purchaseRangeDe}. Über 4 Jahre sind die Gesamtkosten vergleichbar.`,
      "Ja. Für Unternehmen werden die Mietraten in der Regel als Betriebsaufwand verbucht. Im Gegensatz zum aktivierten Kauf bietet die Miete einen sofortigen steuerlichen Vorteil. Klären Sie mit Ihrem Treuhänder je nach Kanton.",
      "Alle Einrichtungen: Unternehmen, Gemeinden, Hotels und Restaurants, medizinische Zentren, Pflegeheime, Sportvereine, öffentlich zugängliche Einrichtungen und Arztpraxen. In der Schweiz empfiehlt die SUVA die Installation eines AED an stark frequentierten Orten.",
      "In drei Schritten: Laufzeit (1, 2 oder 3 Monate) und AED-Modell wählen. Lieferung innerhalb 48h mit Gehäuse und Beschilderung. Am Ende der Laufzeit Material zurückgeben. Keine zusätzliche Bindung.",
      `CardioPro bietet sein gesamtes Sortiment an CE- und FDA-zertifizierten AED zur Miete: iAED-S1 (Noah Medical), HeartSine 360P und 500P, Mediana A16, ZOLL AED 3, Bexen Reanibex 100 und Physio-Control Lifepak CR2. <a href="/de/defibrillator-kaufen/" ${linkClass}>Alle Modelle ansehen</a>.`,
      "Drei Optionen: Vertrag mit neuem Gerät erneuern, Miete zum gleichen Tarif verlängern oder Material kostenlos zurückgeben. CardioPro kontaktiert Sie vor Ablauf.",
      "Ja, die Lieferung ist in allen Laufzeiten inbegriffen. Versand innerhalb 48h in der ganzen Schweiz. Paket einsatzbereit: Defibrillator, Elektroden, Batterie, Wandgehäuse und Beschilderung.",
      `Die Langzeitmiete (24 bis 60 Monate) bietet den besten Monatstarif: ab ${formatChfPrice(lowPrice)} netto/Monat über 60 Monate. Verbrauchsmaterial wird ohne Aufpreis ersetzt. Am Vertragsende Erneuerung mit aktuellem Gerät möglich.`,
      `Die Kurzzeitmiete kostet ${formatChfPrice(eurToChf(119))} netto/Monat über 3 Monate, ${formatChfPrice(eurToChf(149))}/Monat über 2 Monate und ${formatChfPrice(highPrice)}/Monat für 1 Monat. Paket inklusive AED, Elektroden, Batterie, Gehäuse und Express-Lieferung.`,
      `Unternehmen können einen AED ab ${formatChfPrice(lowPrice)} netto/Monat in der Langzeitmiete mieten. CardioPro liefert innerhalb 48h das Komplettpaket.`,
      `Über 48 Monate: ${formatChfPrice(formulasDe.find((f) => f.months === 48)!.totalCost)} netto (${formatChfPrice(eurToChf(39))}/Monat × 48). Über 60 Monate: ${formatChfPrice(formulasDe.find((f) => f.months === 60)!.totalCost)} netto. Beim Kauf: ${purchaseRangeDe} plus Verbrauchsmaterial. Vergleichbare Gesamtkosten mit planbarem Budget bei der Miete.`,
      `Der vollautomatische AED gibt den Schock ohne Eingreifen ab — empfohlen für die Öffentlichkeit. Der halbautomatische AED erfordert einen Knopfdruck — für geschulte Ersthelfer. Beide ab ${formatChfPrice(lowPrice)} netto/Monat in der Langzeitmiete.`,
    ][i],
  })),

  ctaEyebrow: "Jetzt ausstatten",
  ctaTitle: `Defibrillator ab ${formatChfPrice(lowPrice)}/Monat`,
  ctaText: "Lieferung 48h · Wartung inklusive · Géo'DAE inklusive",
  ctaButton: "Kostenloses Angebot",
}

export const rentalContent: Record<Locale, RentalContent> = { fr, de }

function buildRentalBreadcrumbSchema(c: RentalContent) {
  return {
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
        name: c.breadcrumbParent,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: c.breadcrumbCurrentShort,
        item: c.canonical,
      },
    ],
  }
}

export function buildRentalJsonLd(c: RentalContent) {
  const prices = c.formulas.map((f) => f.price)
  const low = Math.min(...prices)
  const high = Math.max(...prices)
  const inLanguage = c.lang === "fr" ? "fr-CH" : "de-CH"

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
        about: { "@id": ORGANIZATION_ID },
        breadcrumb: { "@id": `${c.canonical}#breadcrumb` },
        mainEntity: { "@id": `${c.canonical}#service` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".hero-intro"],
        },
      },
      buildRentalBreadcrumbSchema(c),
      {
        "@type": "Service",
        "@id": `${c.canonical}#service`,
        name:
          c.lang === "fr"
            ? "Location de défibrillateur automatique"
            : "Defibrillator-Miete (AED)",
        description: c.metaDescription,
        serviceType:
          c.lang === "fr"
            ? "Location de dispositifs médicaux"
            : "Medizinprodukte-Miete",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: "Switzerland" },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: String(low),
          highPrice: String(high),
          priceCurrency,
          offerCount: String(c.formulas.length),
          description:
            c.lang === "fr"
              ? "Tarif mensuel hors TVA selon durée d'engagement (1 à 60 mois)"
              : "Monatlicher Nettopreis je nach Laufzeit (1 bis 60 Monate)",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name:
            c.lang === "fr"
              ? "Formules de location de défibrillateurs"
              : "Defibrillator-Mietlaufzeiten",
          itemListElement: c.formulas.map((f) => ({
            "@type": "Offer",
            name: `${c.lang === "fr" ? "Location" : "Miete"} ${f.monthsLabel}`,
            price: String(f.price),
            priceCurrency,
            description:
              c.lang === "fr"
                ? `DAE en location ${f.months} mois, consommables et livraison inclus`
                : `AED-Miete ${f.months} Monate, Verbrauchsmaterial und Lieferung inklusive`,
          })),
        },
      },
      buildFaqSchema(c.canonical, c.lang, c.faq),
    ],
  }
}

export { formatChfPrice, priceCurrency }
