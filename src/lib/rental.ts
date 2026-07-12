import type { Locale } from "@/lib/translations"
import { currencySymbol, priceCurrency } from "@/lib/pricing"

/**
 * ⚠️ PRIX_CHF NON CONFIRMÉ
 * Les mensualités ci-dessous reprennent la grille EUR du gabarit FR
 * (cardiopro.fr/location-defibrillateur). Tant que la grille CHF officielle
 * n'est pas fournie, on garde les valeurs EUR comme placeholders.
 * → Remplacer `price` de chaque formule + valeurs des tableaux + AggregateOffer.
 * NE JAMAIS inventer de mensualité suisse.  // TODO CHF
 *
 * ⚠️ LEGAL_CH / LEASING : la fiscalité est reformulée prudemment selon le
 * droit suisse (charges d'exploitation vs immobilisation amortie), sans
 * reprendre le décret FR 2018-1186 ni l'obligation ERP France. À faire valider.
 */

export interface RentalFormula {
  id: string
  months: number
  monthsLabel: string
  name: string
  tagline: string
  price: number // TODO CHF
  warrantyLabel: string
  ip: string
  features: string[]
  idealFor: string
  recommended?: boolean
}

export interface FaqItem {
  q: string
  a: string
}

export interface InfoBlock {
  title: string
  text: string
}

export interface CompareRow {
  label: string
  rental: string
  purchase: string
  highlight?: boolean
}

export interface RentalContent {
  lang: Locale

  // SEO
  metaTitle: string
  metaDescription: string
  canonical: string
  ogTitle: string
  ogDescription: string

  // Breadcrumb
  breadcrumbHome: string
  breadcrumbCurrentShort: string

  // Hero
  heroBadge: string
  heroTitle: string
  heroSub: string

  // Why rent
  whyTitle: string
  whyParagraphs: string[]

  // Form
  formTitle: string
  formSubtitle: string
  formName: string
  formCompany: string
  formPhone: string
  formEmail: string
  formMessage: string
  formSelected: string
  formSubmit: string
  formLegal: string
  formSubject: string
  selectCta: string

  // Distributors
  distributorTitle: string
  distributors: string[]

  // Sections
  longTitle: string
  longIntro: string
  mediumTitle: string
  mediumIntro: string
  shortTitle: string
  shortIntro: string
  recommendedBadge: string
  perMonth: string
  priceVat: string

  formulas: RentalFormula[]

  // Specialist
  specialistTitle: string
  specialistBody: string[]
  specialist: InfoBlock[]

  // Formulas table
  tableTitle: string
  tableIntro: string
  tableFormula: string
  tablePrice: string
  tableEngagement: string
  tableDelivery: string
  tableConsumables: string
  tableIdeal: string
  monthUnit: string

  // Comparison
  compareTitle: string
  compareIntro: string
  compareCriteria: string
  compareRental: string
  comparePurchase: string
  compareRows: CompareRow[]
  compareNote: string

  // Choose
  chooseTitle: string
  chooseIntro: string
  choose: InfoBlock[]

  // References / certifications
  referencesTitle: string
  referencesIntro: string
  references: string[]
  certificationsTitle: string
  certifications: string[]

  // FAQ
  faqTitle: string
  faqSubtitle: string
  faq: FaqItem[]

  // CTA
  ctaTitle: string
  ctaText: string
  ctaButton: string
  ctaPhone: string
}

/* -------------------------------------------------------------------------- */
/*                                  FRANÇAIS                                   */
/* -------------------------------------------------------------------------- */

const longFeaturesFr = ["Consommables fournis", "Livraison 48h incluse", "Remplacement sous 72h"]
const shortFeaturesFr = ["Consommables fournis", "Livraison express", "Formation incluse"]

const formulasFr: RentalFormula[] = [
  {
    id: "location-60-mois",
    months: 60,
    monthsLabel: "60 mois",
    name: "Pack Location 60 mois",
    tagline: "Engagement long · Meilleur tarif",
    price: 29, // TODO CHF
    warrantyLabel: "Garantie 5 ans",
    ip: "IP56",
    features: longFeaturesFr,
    idealFor: "Long terme",
    recommended: true,
  },
  {
    id: "location-48-mois",
    months: 48,
    monthsLabel: "48 mois",
    name: "Pack Location 48 mois",
    tagline: "Équilibre durée/coût",
    price: 39, // TODO CHF
    warrantyLabel: "Garantie 4 ans",
    ip: "IP56",
    features: longFeaturesFr,
    idealFor: "Long terme",
  },
  {
    id: "location-24-mois",
    months: 24,
    monthsLabel: "24 mois",
    name: "Pack Location 24 mois",
    tagline: "Flexibilité · Sans engagement long",
    price: 49, // TODO CHF
    warrantyLabel: "Garantie 2 ans",
    ip: "IP56",
    features: longFeaturesFr,
    idealFor: "Moyen terme",
  },
  {
    id: "location-12-mois",
    months: 12,
    monthsLabel: "12 mois",
    name: "Pack Location 12 mois",
    tagline: "Idéal projets annuels",
    price: 69, // TODO CHF
    warrantyLabel: "Garantie 1 an",
    ip: "IP56",
    features: longFeaturesFr,
    idealFor: "Moyen terme",
    recommended: true,
  },
  {
    id: "location-6-mois",
    months: 6,
    monthsLabel: "6 mois",
    name: "Pack Location 6 mois",
    tagline: "Événements saisonniers",
    price: 89, // TODO CHF
    warrantyLabel: "Garantie 6 mois",
    ip: "IP56",
    features: longFeaturesFr,
    idealFor: "Saison complète",
  },
  {
    id: "location-3-mois",
    months: 3,
    monthsLabel: "3 mois",
    name: "Pack Location 3 mois",
    tagline: "Chantiers · Événements",
    price: 119, // TODO CHF
    warrantyLabel: "Garantie période",
    ip: "IP56",
    features: shortFeaturesFr,
    idealFor: "Chantier / Saison",
    recommended: true,
  },
  {
    id: "location-2-mois",
    months: 2,
    monthsLabel: "2 mois",
    name: "Pack Location 2 mois",
    tagline: "Missions temporaires",
    price: 149, // TODO CHF
    warrantyLabel: "Garantie période",
    ip: "IP56",
    features: shortFeaturesFr,
    idealFor: "Mission temporaire",
  },
  {
    id: "location-1-mois",
    months: 1,
    monthsLabel: "1 mois",
    name: "Pack Location 1 mois",
    tagline: "Événements ponctuels",
    price: 179, // TODO CHF
    warrantyLabel: "Garantie période",
    ip: "IP56",
    features: shortFeaturesFr,
    idealFor: "Événement ponctuel",
  },
]

const fr: RentalContent = {
  lang: "fr",

  metaTitle: "Location défibrillateur Suisse dès 29 €/mois | CardioPro", // TODO CHF
  metaDescription:
    "Louez un défibrillateur (DAE) en Suisse dès 29 €/mois hors TVA. Formules 1 à 60 mois, consommables fournis, livraison 48h. Devis gratuit en ligne.", // TODO CHF
  canonical: "https://www.cardiopro.ch/fr/location-defibrillateur/",
  ogTitle: "Location de défibrillateur en Suisse | CardioPro",
  ogDescription:
    "8 formules de location de DAE (1 à 60 mois), consommables fournis et remplacés, livraison 48h partout en Suisse. Devis gratuit sous 24h.",

  breadcrumbHome: "Accueil",
  breadcrumbCurrentShort: "Location défibrillateur",

  heroBadge: "Location & leasing · Suisse",
  heroTitle: "Location de défibrillateur en Suisse dès 29 €/mois", // TODO CHF
  heroSub:
    "Louez votre défibrillateur (DAE) sans investissement initial : 8 formules de 1 à 60 mois, consommables fournis et remplacés, livraison 48h partout en Suisse romande et alémanique.",

  whyTitle: "Pourquoi louer un défibrillateur plutôt que l'acheter ?",
  whyParagraphs: [
    "Avec la location, le budget est lissé sur la durée du contrat : pas d'investissement initial élevé, pas de surprise. Les consommables — électrodes et batterie — sont fournis et remplacés avant leur date de péremption, ce qui garantit un appareil toujours opérationnel. À l'achat, la maintenance reste à votre charge et doit être intégrée au budget.",
    "Pour les entreprises, les mensualités de location sont en général comptabilisées en charges d'exploitation, contrairement à un achat immobilisé puis amorti sur plusieurs exercices. Les modalités exactes dépendent de votre canton et de votre régime fiscal : votre fiduciaire vous renseignera.",
    "La location permet aussi de bénéficier d'un appareil récent, conforme aux dernières normes. En fin de contrat, vous renouvelez votre équipement sans coût supplémentaire de mise au rebut.",
    "Enfin, louer un défibrillateur est la solution la plus simple pour les besoins temporaires : chantiers, événements sportifs, salons professionnels ou festivals. La location courte durée à partir d'un mois offre une flexibilité totale.",
  ],

  formTitle: "Demander un devis gratuit",
  formSubtitle: "Réponse sous 24h ouvrées · Sans engagement",
  formName: "Nom",
  formCompany: "Entreprise",
  formPhone: "Téléphone",
  formEmail: "Email",
  formMessage: "Message",
  formSelected: "Formule sélectionnée",
  formSubmit: "Envoyer ma demande",
  formLegal:
    "En soumettant ce formulaire, vous acceptez d'être contacté par CardioPro Suisse. Aucun démarchage — nous respectons votre vie privée.",
  formSubject: "Devis CardioPro Suisse — Location défibrillateur (FR)",
  selectCta: "Je choisis cette offre",

  distributorTitle: "Distributeur agréé de défibrillateurs en Suisse",
  distributors: ["HeartSine", "Mediana", "ZOLL", "Bexen", "Noah Medical", "Schiller"],

  longTitle: "Location longue durée : de 29 € à 49 €/mois", // TODO CHF
  longIntro:
    "La location longue durée est la formule la plus économique : 29 € hors TVA/mois sur 60 mois, 39 €/mois sur 48 mois, 49 €/mois sur 24 mois. C'est le choix de la majorité des entreprises, communes et établissements recevant du public qui souhaitent un DAE accessible en permanence. Le pack comprend le défibrillateur DAE ou DSA de votre choix, les électrodes adultes, la batterie, le boîtier mural avec signalétique et la livraison sous 48h. Les consommables sont remplacés à chaque échéance de péremption.", // TODO CHF
  mediumTitle: "Location moyenne durée : 6 à 12 mois",
  mediumIntro:
    "La location moyenne durée (6 à 12 mois) convient aux besoins temporaires prolongés : chantier de plusieurs mois, remplacement d'un appareil défaillant, couverture d'une saison touristique ou sportive. De 69 € à 89 € hors TVA/mois selon la durée, cette formule offre un bon équilibre entre flexibilité et coût maîtrisé. Le pack inclut le défibrillateur, les consommables, la signalétique et la livraison. Aucuns frais cachés.", // TODO CHF
  shortTitle: "Location courte durée : 1 à 3 mois",
  shortIntro:
    "La location courte durée coûte de 119 € à 179 € hors TVA/mois selon la durée (1, 2 ou 3 mois). Elle est conçue pour les événements ponctuels : compétitions sportives, festivals, salons, séminaires, mariages ou fêtes communales. Le DAE est livré sous 48h, prêt à l'emploi, avec boîtier et signalétique. Aucun engagement au-delà de la durée choisie : vous retournez simplement l'appareil en fin de période.", // TODO CHF
  recommendedBadge: "Recommandé",
  perMonth: "/mois",
  priceVat: "hors TVA",

  formulas: formulasFr,

  specialistTitle: "CardioPro : votre spécialiste location depuis 2017",
  specialistBody: [
    "CardioPro accompagne les entreprises, collectivités et professionnels de santé dans l'équipement en défibrillateurs depuis 2017. Distributeur agréé des marques HeartSine, Mediana, ZOLL, Bexen, Noah Medical et Schiller, nous proposons une gamme complète de DAE et DSA adaptés à chaque besoin et chaque budget.",
    "Plus de 20 000 clients nous font confiance : communes, entreprises, hôtels-restaurants, centres médicaux, EMS et établissements recevant du public. Chaque location inclut la livraison sous 48h, les consommables et un support technique dédié partout en Suisse.",
  ],
  specialist: [
    {
      title: "Livraison 48h offerte",
      text: "Commande expédiée sous 48h ouvrées avec accessoires inclus : boîtier, signalétique, électrodes et batterie. Installation simple, assistance téléphonique si besoin.",
    },
    {
      title: "Achat ou location",
      text: "9 modèles à l'achat, ou en location dès 29 €/mois consommables fournis. Devis gratuit sous 24h. <a href=\"/fr/defibrillateur-prix/\" class=\"institutional-link\">Voir les prix d'achat</a>.", // TODO CHF
    },
  ],

  tableTitle: "Tarifs location : toutes les formules",
  tableIntro:
    "Pour comparer objectivement l'achat et la location, prenez en compte le coût total de possession sur 4 ans. En location, le budget est fixe et prévisible chaque mois, consommables inclus, sans mauvaise surprise.",
  tableFormula: "Formule",
  tablePrice: "Prix (hors TVA/mois)",
  tableEngagement: "Engagement",
  tableDelivery: "Livraison 48h",
  tableConsumables: "Consommables",
  tableIdeal: "Idéal pour",
  monthUnit: "mois",

  compareTitle: "Location ou achat de défibrillateur : le comparatif",
  compareIntro:
    "Quel mode d'acquisition choisir ? Comparez les avantages de la location et de l'achat sur les critères qui comptent.",
  compareCriteria: "Critère",
  compareRental: "Location",
  comparePurchase: "Achat",
  compareRows: [
    // TODO CHF — valeurs EUR placeholders (gabarit FR)
    { label: "Investissement initial", rental: "0 €", purchase: "990 € à 2 095 € hors TVA" },
    { label: "Coût mensuel", rental: "29 € à 179 €/mois hors TVA", purchase: "0 € (hors consommables)" },
    { label: "Consommables", rental: "Fournis et remplacés", purchase: "À votre charge (90 € à 210 €/renouvellement)" },
    { label: "Fiscalité (à valider avec votre fiduciaire)", rental: "Mensualités en charges d'exploitation", purchase: "Immobilisation amortie sur plusieurs exercices" },
    { label: "Flexibilité", rental: "1 à 60 mois — 8 formules", purchase: "Aucune" },
    { label: "Fin de période", rental: "Renouveler, prolonger ou restituer sans frais", purchase: "L'appareil vous appartient" },
    { label: "Appareil récent", rental: "Oui, renouvelable en fin de contrat", purchase: "Devient obsolète (durée de vie 7–10 ans)" },
    { label: "Coût total sur 4 ans", rental: "1 176 € à 1 872 € hors TVA", purchase: "1 080 € à 2 305 € hors TVA", highlight: true },
  ],
  compareNote:
    "Coût total achat = prix DAE + renouvellement des consommables sur 4 ans. Coût total location = mensualité × durée (consommables inclus). Montants EUR à confirmer en CHF.", // TODO CHF

  chooseTitle: "Comment choisir sa formule de location ?",
  chooseIntro: "Le choix de la bonne formule dépend de votre situation. Voici les critères à évaluer.",
  choose: [
    {
      title: "DAE ou DSA : lequel choisir ?",
      text: "Le DAE (automatique) délivre le choc sans intervention de l'utilisateur — idéal pour le grand public. Le DSA (semi-automatique) demande une validation manuelle avant le choc — privilégié par les secouristes formés. Les deux sont disponibles au même tarif de location.",
    },
    {
      title: "Courte ou longue durée ?",
      text: "Pour un besoin ponctuel (événement, chantier), optez pour la location courte durée de 1 à 6 mois. Pour un équipement permanent, la location longue durée de 24 à 60 mois offre le meilleur coût mensuel.",
    },
    {
      title: "Usage intérieur ou extérieur ?",
      text: "Pour une installation en extérieur, choisissez un appareil avec un indice de protection IP56 minimum et un boîtier chauffant si nécessaire.",
    },
    {
      title: "Maintenance & consommables",
      text: "En location, la maintenance et les consommables sont inclus : électrodes et batterie remplacées avant péremption, intervention sous 72h. Vous n'avez rien à anticiper.",
    },
  ],

  referencesTitle: "Nos références : +20 000 professionnels équipés",
  referencesIntro:
    "Depuis 2017, communes, entreprises et établissements de santé nous font confiance pour la sécurité de leurs équipes et de leur public.",
  references: [
    "Communes et administrations",
    "Établissements de santé et EMS",
    "Entreprises (PME et grands comptes)",
    "Hôtels, commerces et centres sportifs",
  ],
  certificationsTitle: "Une confiance éprouvée",
  certifications: [
    "Produits sélectionnés sur des critères de qualité, conformes aux normes en vigueur",
    "Permanence technique téléphonique 7 jours/7",
    "Service maintenance avec intervention en moins de 72h",
    "Équipe réactive et suivi personnalisé de votre commande",
    "Veille permanente de la législation suisse (SUVA, Fondation Suisse de Cardiologie, SRC)",
    "Une offre qui s'adapte à votre situation (achat ou location)",
  ],

  faqTitle: "FAQ : location de défibrillateur en Suisse",
  faqSubtitle: "Tout ce que vous devez savoir sur la location et le leasing d'un DAE en Suisse.",
  faq: [
    {
      q: "Combien coûte la location d'un défibrillateur par mois ?",
      a: "La location d'un défibrillateur coûte de 29 € à 179 € hors TVA/mois selon la durée (montants à confirmer en CHF) : 29 €/mois sur 60 mois, 39 € sur 48 mois, 49 € sur 24 mois, 69 € sur 12 mois, 89 € sur 6 mois, 119 € sur 3 mois, 149 € sur 2 mois et 179 € pour 1 mois. Chaque pack inclut le DAE, les consommables, le boîtier mural et la livraison sous 48h.", // TODO CHF
    },
    {
      q: "Que comprend le pack location de défibrillateur CardioPro ?",
      a: "Chaque pack comprend : le défibrillateur automatique ou semi-automatique de votre choix, un jeu d'électrodes adultes, la batterie, un boîtier mural avec signalétique et la livraison sous 48h partout en Suisse. Les consommables (électrodes et batterie) sont fournis et remplacés à chaque échéance de péremption.",
    },
    {
      q: "Quelle est la durée minimum pour louer un défibrillateur ?",
      a: "La durée minimum de location est d'un mois. CardioPro propose huit formules : 1, 2, 3, 6, 12, 24, 48 et 60 mois. Plus la durée d'engagement est longue, plus le coût mensuel est réduit. Aucuns frais de résiliation ne s'appliquent en fin de contrat.",
    },
    {
      q: "Peut-on louer un défibrillateur pour un événement ponctuel ?",
      a: "Oui, la location courte durée est spécialement conçue pour les événements ponctuels : compétitions sportives, festivals, salons, séminaires ou mariages. Vous louez un DAE pour 1 à 3 mois, le temps de votre événement. L'appareil est livré sous 48h, prêt à l'emploi, et vous le retournez simplement en fin de période.",
    },
    {
      q: "Vaut-il mieux acheter ou louer un défibrillateur ?",
      a: "La location est préférable pour lisser le budget et garantir des consommables toujours à jour. L'<a href=\"/fr/defibrillateur-prix/\" class=\"institutional-link\">achat</a> convient si vous disposez d'un budget immédiat. Sur 4 ans, le coût total est comparable, avec en location l'avantage d'un appareil toujours opérationnel.",
    },
    {
      q: "La location de défibrillateur est-elle déductible fiscalement en Suisse ?",
      a: "Pour les entreprises, les mensualités de location sont généralement comptabilisées en charges d'exploitation, contrairement à un achat immobilisé amorti sur plusieurs exercices. Le traitement fiscal exact dépend de votre canton et de votre régime : renseignez-vous auprès de votre fiduciaire.",
    },
    {
      q: "Quels types d'établissements peuvent louer un défibrillateur en Suisse ?",
      a: "Tous : entreprises, communes, hôtels et restaurants, centres médicaux, EMS, associations sportives, établissements recevant du public et cabinets médicaux. En Suisse, il n'existe pas d'obligation fédérale, mais la SUVA et la Fondation Suisse de Cardiologie recommandent vivement l'installation d'un DAE dans les lieux à forte fréquentation.",
    },
    {
      q: "Comment fonctionne la location courte durée de défibrillateur ?",
      a: "En trois étapes : vous choisissez votre formule (1, 2 ou 3 mois) et votre modèle de DAE sur notre site ou par téléphone. L'appareil est livré sous 48h avec son boîtier et sa signalétique. En fin de période, vous nous retournez simplement le matériel. Aucun engagement supplémentaire.",
    },
    {
      q: "Quels modèles de défibrillateurs sont disponibles en location ?",
      a: "CardioPro propose en location l'ensemble de sa gamme de DAE certifiés CE et FDA : iAED-S1 (Noah Medical), HeartSine 350P/360P/500P, Mediana A16, Schiller FRED PA-1, Bexen Reanibex 100 et ZOLL AED Plus/AED 3. Chaque modèle est disponible en version automatique (DAE) ou semi-automatique (DSA) selon les références. <a href=\"/fr/defibrillateur-prix/\" class=\"institutional-link\">Voir le comparatif des modèles</a>.",
    },
    {
      q: "Que se passe-t-il en fin de contrat de location ?",
      a: "Trois options s'offrent à vous : renouveler votre contrat avec un appareil neuf de dernière génération, prolonger la location au même tarif, ou restituer le matériel sans frais. CardioPro vous contacte avant l'échéance pour organiser la suite.",
    },
    {
      q: "La livraison du défibrillateur est-elle incluse dans la location ?",
      a: "Oui, la livraison est incluse dans toutes les formules. L'expédition se fait sous 48h ouvrées partout en Suisse. Le pack arrive prêt à l'emploi : défibrillateur, électrodes, batterie, boîtier mural et signalétique.",
    },
    {
      q: "Quels sont les avantages de la location longue durée ?",
      a: "La location longue durée (24 à 60 mois) offre le meilleur tarif mensuel : dès 29 € hors TVA/mois sur 60 mois (montant à confirmer en CHF). Les consommables sont remplacés à chaque échéance sans surcoût. En fin de contrat, vous pouvez renouveler avec un appareil de dernière génération ou restituer sans frais.", // TODO CHF
    },
    {
      q: "Combien coûte la location courte durée d'un défibrillateur ?",
      a: "La location courte durée coûte 119 € hors TVA/mois sur 3 mois, 149 €/mois sur 2 mois et 179 €/mois pour 1 mois (montants à confirmer en CHF). Le pack comprend le DAE, les électrodes, la batterie, le boîtier et la livraison express. En fin de période, vous retournez l'appareil sans engagement supplémentaire.", // TODO CHF
    },
    {
      q: "Comment louer un défibrillateur pour son entreprise en Suisse ?",
      a: "Les entreprises peuvent louer un DAE dès 29 € hors TVA/mois en longue durée. CardioPro livre sous 48h le pack complet : défibrillateur, boîtier mural, signalétique et consommables. <a href=\"/fr/#entreprise\" class=\"institutional-link\">Découvrir nos solutions entreprise</a>.", // TODO CHF
    },
    {
      q: "Quel est le coût total d'une location de défibrillateur sur 4 ans ?",
      a: "Sur 48 mois, la location revient à 1 872 € hors TVA (39 €/mois × 48). Sur 60 mois : 1 740 € hors TVA (29 €/mois × 60). À l'achat, le même appareil coûte plus les consommables. Le coût global est comparable, avec l'avantage d'un budget prévisible en location. (Montants EUR à confirmer en CHF.)", // TODO CHF
    },
    {
      q: "DAE ou DSA : lequel choisir en location ?",
      a: "Le DAE (automatique) délivre le choc sans intervention : recommandé pour le grand public. Le DSA (semi-automatique) demande d'appuyer sur un bouton : il convient aux secouristes formés. Les deux sont disponibles chez CardioPro au même tarif de location.",
    },
  ],

  ctaTitle: "Recevez votre devis location sous 24h",
  ctaText:
    "Notre équipe vous conseille sur la formule de location adaptée à votre durée et à votre budget, partout en Suisse romande et alémanique.",
  ctaButton: "Demander un devis gratuit",
  ctaPhone: "+41 22 518 09 36",
}

/* -------------------------------------------------------------------------- */
/*                                   DEUTSCH                                   */
/* -------------------------------------------------------------------------- */

const longFeaturesDe = ["Verbrauchsmaterial inklusive", "Lieferung 48h inklusive", "Austausch innerhalb 72h"]
const shortFeaturesDe = ["Verbrauchsmaterial inklusive", "Express-Lieferung", "Schulung inklusive"]

const formulasDe: RentalFormula[] = [
  {
    id: "location-60-mois",
    months: 60,
    monthsLabel: "60 Monate",
    name: "Mietpaket 60 Monate",
    tagline: "Lange Laufzeit · Bester Preis",
    price: 29, // TODO CHF
    warrantyLabel: "5 Jahre Garantie",
    ip: "IP56",
    features: longFeaturesDe,
    idealFor: "Langfristig",
    recommended: true,
  },
  {
    id: "location-48-mois",
    months: 48,
    monthsLabel: "48 Monate",
    name: "Mietpaket 48 Monate",
    tagline: "Ausgewogenes Verhältnis",
    price: 39, // TODO CHF
    warrantyLabel: "4 Jahre Garantie",
    ip: "IP56",
    features: longFeaturesDe,
    idealFor: "Langfristig",
  },
  {
    id: "location-24-mois",
    months: 24,
    monthsLabel: "24 Monate",
    name: "Mietpaket 24 Monate",
    tagline: "Flexibel · Ohne lange Bindung",
    price: 49, // TODO CHF
    warrantyLabel: "2 Jahre Garantie",
    ip: "IP56",
    features: longFeaturesDe,
    idealFor: "Mittelfristig",
  },
  {
    id: "location-12-mois",
    months: 12,
    monthsLabel: "12 Monate",
    name: "Mietpaket 12 Monate",
    tagline: "Ideal für Jahresprojekte",
    price: 69, // TODO CHF
    warrantyLabel: "1 Jahr Garantie",
    ip: "IP56",
    features: longFeaturesDe,
    idealFor: "Mittelfristig",
    recommended: true,
  },
  {
    id: "location-6-mois",
    months: 6,
    monthsLabel: "6 Monate",
    name: "Mietpaket 6 Monate",
    tagline: "Saisonale Veranstaltungen",
    price: 89, // TODO CHF
    warrantyLabel: "6 Monate Garantie",
    ip: "IP56",
    features: longFeaturesDe,
    idealFor: "Ganze Saison",
  },
  {
    id: "location-3-mois",
    months: 3,
    monthsLabel: "3 Monate",
    name: "Mietpaket 3 Monate",
    tagline: "Baustellen · Veranstaltungen",
    price: 119, // TODO CHF
    warrantyLabel: "Garantie für die Laufzeit",
    ip: "IP56",
    features: shortFeaturesDe,
    idealFor: "Baustelle / Saison",
    recommended: true,
  },
  {
    id: "location-2-mois",
    months: 2,
    monthsLabel: "2 Monate",
    name: "Mietpaket 2 Monate",
    tagline: "Temporäre Einsätze",
    price: 149, // TODO CHF
    warrantyLabel: "Garantie für die Laufzeit",
    ip: "IP56",
    features: shortFeaturesDe,
    idealFor: "Temporärer Einsatz",
  },
  {
    id: "location-1-mois",
    months: 1,
    monthsLabel: "1 Monat",
    name: "Mietpaket 1 Monat",
    tagline: "Einmalige Veranstaltungen",
    price: 179, // TODO CHF
    warrantyLabel: "Garantie für die Laufzeit",
    ip: "IP56",
    features: shortFeaturesDe,
    idealFor: "Einmalige Veranstaltung",
  },
]

const de: RentalContent = {
  lang: "de",

  metaTitle: "Defibrillator mieten Schweiz ab 29 €/Monat | CardioPro", // TODO CHF
  metaDescription:
    "Defibrillator (AED) in der Schweiz mieten oder leasen ab 29 €/Monat exkl. MwSt. Laufzeiten 1 bis 60 Monate, Verbrauchsmaterial inklusive, Lieferung 48h. Kostenloses Angebot online.", // TODO CHF
  canonical: "https://www.cardiopro.ch/de/defibrillator-mieten/",
  ogTitle: "Defibrillator mieten in der Schweiz | CardioPro",
  ogDescription:
    "8 Mietlaufzeiten für AED (1 bis 60 Monate), Verbrauchsmaterial inklusive und ersetzt, Lieferung 48h in die ganze Schweiz. Kostenloses Angebot innerhalb 24h.",

  breadcrumbHome: "Startseite",
  breadcrumbCurrentShort: "Defibrillator mieten",

  heroBadge: "Mieten & Leasing · Schweiz",
  heroTitle: "Defibrillator mieten in der Schweiz ab 29 €/Monat", // TODO CHF
  heroSub:
    "Mieten oder leasen Sie Ihren Defibrillator (AED) ohne Anfangsinvestition: 8 Laufzeiten von 1 bis 60 Monaten, Verbrauchsmaterial inklusive und ersetzt, Lieferung 48h in der gesamten Deutsch- und Westschweiz.",

  whyTitle: "Warum einen Defibrillator mieten statt kaufen?",
  whyParagraphs: [
    "Mit der Miete wird das Budget über die Vertragslaufzeit geglättet: keine hohe Anfangsinvestition, keine Überraschungen. Das Verbrauchsmaterial — Elektroden und Batterie — wird geliefert und vor dem Ablaufdatum ersetzt, was ein stets einsatzbereites Gerät garantiert. Beim Kauf bleibt die Wartung zu Ihren Lasten und muss eingeplant werden.",
    "Für Unternehmen werden die Mietraten in der Regel als Betriebsaufwand verbucht, im Gegensatz zu einem aktivierten und über mehrere Geschäftsjahre abgeschriebenen Kauf. Die genaue steuerliche Behandlung hängt von Ihrem Kanton und Ihrem Steuerregime ab: Ihr Treuhänder berät Sie.",
    "Die Miete ermöglicht zudem ein aktuelles Gerät, das den neuesten Normen entspricht. Am Vertragsende erneuern Sie Ihre Ausrüstung ohne zusätzliche Entsorgungskosten.",
    "Schliesslich ist die Miete die einfachste Lösung für temporären Bedarf: Baustellen, Sportveranstaltungen, Fachmessen oder Festivals. Die Kurzzeitmiete ab einem Monat bietet volle Flexibilität.",
  ],

  formTitle: "Kostenloses Angebot anfordern",
  formSubtitle: "Antwort innerhalb von 24h · Unverbindlich",
  formName: "Name",
  formCompany: "Unternehmen",
  formPhone: "Telefon",
  formEmail: "E-Mail",
  formMessage: "Nachricht",
  formSelected: "Gewählte Laufzeit",
  formSubmit: "Anfrage senden",
  formLegal:
    "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, von CardioPro Schweiz kontaktiert zu werden. Kein Direktmarketing — wir respektieren Ihre Privatsphäre.",
  formSubject: "Angebot CardioPro Schweiz — Defibrillator mieten (DE)",
  selectCta: "Dieses Angebot wählen",

  distributorTitle: "Autorisierter Defibrillator-Händler in der Schweiz",
  distributors: ["HeartSine", "Mediana", "ZOLL", "Bexen", "Noah Medical", "Schiller"],

  longTitle: "Langzeitmiete: von 29 € bis 49 €/Monat", // TODO CHF
  longIntro:
    "Die Langzeitmiete ist die wirtschaftlichste Lösung: 29 € exkl. MwSt./Monat über 60 Monate, 39 €/Monat über 48 Monate, 49 €/Monat über 24 Monate. Die Wahl der meisten Unternehmen, Gemeinden und öffentlich zugänglichen Einrichtungen, die einen dauerhaft zugänglichen AED wünschen. Das Paket umfasst den AED oder halbautomatischen Defibrillator Ihrer Wahl, die Erwachsenenelektroden, die Batterie, das Wandgehäuse mit Beschilderung und die Lieferung innerhalb 48h. Das Verbrauchsmaterial wird zu jedem Ablauftermin ersetzt.", // TODO CHF
  mediumTitle: "Mittelfristige Miete: 6 bis 12 Monate",
  mediumIntro:
    "Die mittelfristige Miete (6 bis 12 Monate) eignet sich für längeren temporären Bedarf: mehrmonatige Baustelle, Ersatz eines defekten Geräts, Abdeckung einer Tourismus- oder Sportsaison. Von 69 € bis 89 € exkl. MwSt./Monat je nach Laufzeit bietet diese Lösung ein gutes Gleichgewicht zwischen Flexibilität und kontrollierten Kosten. Das Paket umfasst das Gerät, das Verbrauchsmaterial, die Beschilderung und die Lieferung. Keine versteckten Kosten.", // TODO CHF
  shortTitle: "Kurzzeitmiete: 1 bis 3 Monate",
  shortIntro:
    "Die Kurzzeitmiete kostet je nach Laufzeit (1, 2 oder 3 Monate) von 119 € bis 179 € exkl. MwSt./Monat. Sie ist für einmalige Veranstaltungen konzipiert: Sportwettkämpfe, Festivals, Messen, Seminare, Hochzeiten oder Gemeindefeste. Der AED wird innerhalb 48h einsatzbereit mit Gehäuse und Beschilderung geliefert. Keine Bindung über die gewählte Laufzeit hinaus: Sie geben das Gerät am Ende einfach zurück.", // TODO CHF
  recommendedBadge: "Empfohlen",
  perMonth: "/Monat",
  priceVat: "exkl. MwSt.",

  formulas: formulasDe,

  specialistTitle: "CardioPro: Ihr Mietspezialist seit 2017",
  specialistBody: [
    "CardioPro begleitet Unternehmen, Gemeinden und Gesundheitsfachleute seit 2017 bei der Ausstattung mit Defibrillatoren. Als autorisierter Händler der Marken HeartSine, Mediana, ZOLL, Bexen, Noah Medical und Schiller bieten wir ein vollständiges Sortiment an AED und halbautomatischen Geräten für jeden Bedarf und jedes Budget.",
    "Über 20 000 Kunden vertrauen uns: Gemeinden, Unternehmen, Hotels und Restaurants, medizinische Zentren, Pflegeheime und öffentlich zugängliche Einrichtungen. Jede Miete umfasst die Lieferung innerhalb 48h, das Verbrauchsmaterial und einen eigenen technischen Support in der ganzen Schweiz.",
  ],
  specialist: [
    {
      title: "Lieferung 48h gratis",
      text: "Bestellung innerhalb 48 Werkstunden versandt, Zubehör inklusive: Gehäuse, Beschilderung, Elektroden und Batterie. Einfache Installation, telefonische Unterstützung bei Bedarf.",
    },
    {
      title: "Kauf oder Miete",
      text: "9 Modelle zum Kauf oder zur Miete ab 29 €/Monat, Verbrauchsmaterial inklusive. Kostenloses Angebot innerhalb 24h. <a href=\"/de/defibrillator-kaufen/\" class=\"institutional-link\">Kaufpreise ansehen</a>.", // TODO CHF
    },
  ],

  tableTitle: "Mietpreise: alle Laufzeiten",
  tableIntro:
    "Um Kauf und Miete objektiv zu vergleichen, berücksichtigen Sie die Gesamtbetriebskosten über 4 Jahre. Bei der Miete ist das Budget fest und planbar, Verbrauchsmaterial inklusive, ohne böse Überraschungen.",
  tableFormula: "Laufzeit",
  tablePrice: "Preis (exkl. MwSt./Monat)",
  tableEngagement: "Bindung",
  tableDelivery: "Lieferung 48h",
  tableConsumables: "Verbrauchsmaterial",
  tableIdeal: "Ideal für",
  monthUnit: "Monate",

  compareTitle: "Defibrillator mieten oder kaufen: der Vergleich",
  compareIntro:
    "Welche Beschaffungsart wählen? Vergleichen Sie die Vorteile von Miete und Kauf anhand der entscheidenden Kriterien.",
  compareCriteria: "Kriterium",
  compareRental: "Miete",
  comparePurchase: "Kauf",
  compareRows: [
    // TODO CHF — EUR-Platzhalter (FR-Vorlage)
    { label: "Anfangsinvestition", rental: "0 €", purchase: "990 € bis 2 095 € exkl. MwSt." },
    { label: "Monatliche Kosten", rental: "29 € bis 179 €/Monat exkl. MwSt.", purchase: "0 € (exkl. Verbrauchsmaterial)" },
    { label: "Verbrauchsmaterial", rental: "Geliefert und ersetzt", purchase: "Zu Ihren Lasten (90 € bis 210 €/Erneuerung)" },
    { label: "Steuern (mit Treuhänder klären)", rental: "Raten als Betriebsaufwand", purchase: "Über mehrere Jahre abgeschrieben" },
    { label: "Flexibilität", rental: "1 bis 60 Monate — 8 Laufzeiten", purchase: "Keine" },
    { label: "Vertragsende", rental: "Erneuern, verlängern oder kostenlos zurückgeben", purchase: "Das Gerät gehört Ihnen" },
    { label: "Aktuelles Gerät", rental: "Ja, am Vertragsende erneuerbar", purchase: "Wird obsolet (Lebensdauer 7–10 Jahre)" },
    { label: "Gesamtkosten über 4 Jahre", rental: "1 176 € bis 1 872 € exkl. MwSt.", purchase: "1 080 € bis 2 305 € exkl. MwSt.", highlight: true },
  ],
  compareNote:
    "Gesamtkosten Kauf = AED-Preis + Erneuerung des Verbrauchsmaterials über 4 Jahre. Gesamtkosten Miete = Monatsrate × Laufzeit (Verbrauchsmaterial inklusive). EUR-Beträge in CHF noch zu bestätigen.", // TODO CHF

  chooseTitle: "Wie wähle ich meine Mietlaufzeit?",
  chooseIntro: "Die Wahl der richtigen Laufzeit hängt von Ihrer Situation ab. Hier die zu prüfenden Kriterien.",
  choose: [
    {
      title: "AED oder halbautomatisch: was wählen?",
      text: "Der vollautomatische AED gibt den Schock ohne Eingreifen des Benutzers ab — ideal für die breite Öffentlichkeit. Der halbautomatische AED erfordert eine manuelle Bestätigung vor dem Schock — bevorzugt von geschulten Ersthelfern. Beide sind zum gleichen Mietpreis erhältlich.",
    },
    {
      title: "Kurz- oder Langzeitmiete?",
      text: "Für einmaligen Bedarf (Veranstaltung, Baustelle) wählen Sie die Kurzzeitmiete von 1 bis 6 Monaten. Für eine dauerhafte Ausstattung bietet die Langzeitmiete von 24 bis 60 Monaten die besten Monatskosten.",
    },
    {
      title: "Innen- oder Aussenbereich?",
      text: "Für eine Installation im Aussenbereich wählen Sie ein Gerät mit Schutzart mindestens IP56 und bei Bedarf ein beheiztes Gehäuse.",
    },
    {
      title: "Wartung & Verbrauchsmaterial",
      text: "Bei der Miete sind Wartung und Verbrauchsmaterial inklusive: Elektroden und Batterie werden vor Ablauf ersetzt, Einsatz innerhalb 72h. Sie müssen nichts vorausplanen.",
    },
  ],

  referencesTitle: "Unsere Referenzen: +20 000 ausgestattete Profis",
  referencesIntro:
    "Seit 2017 vertrauen Gemeinden, Unternehmen und Gesundheitseinrichtungen auf uns für die Sicherheit ihrer Teams und ihres Publikums.",
  references: [
    "Gemeinden und Verwaltungen",
    "Gesundheitseinrichtungen und Pflegeheime",
    "Unternehmen (KMU und Grosskunden)",
    "Hotels, Geschäfte und Sportzentren",
  ],
  certificationsTitle: "Bewährtes Vertrauen",
  certifications: [
    "Produkte nach Qualitätskriterien ausgewählt, konform mit den geltenden Normen",
    "Technische telefonische Bereitschaft 7 Tage/Woche",
    "Wartungsservice mit Einsatz innerhalb von 72h",
    "Reaktives Team und persönliche Betreuung Ihrer Bestellung",
    "Ständige Überwachung der Schweizer Gesetzgebung (SUVA, Schweizerische Herzstiftung, SRC)",
    "Ein Angebot, das sich Ihrer Situation anpasst (Kauf oder Miete)",
  ],

  faqTitle: "FAQ: Defibrillator mieten in der Schweiz",
  faqSubtitle: "Alles, was Sie über das Mieten und Leasen eines AED in der Schweiz wissen müssen.",
  faq: [
    {
      q: "Was kostet die Miete eines Defibrillators pro Monat?",
      a: "Die Miete eines Defibrillators kostet je nach Laufzeit von 29 € bis 179 € exkl. MwSt./Monat (Beträge in CHF noch zu bestätigen): 29 €/Monat über 60 Monate, 39 € über 48 Monate, 49 € über 24 Monate, 69 € über 12 Monate, 89 € über 6 Monate, 119 € über 3 Monate, 149 € über 2 Monate und 179 € für 1 Monat. Jedes Paket umfasst den AED, das Verbrauchsmaterial, das Wandgehäuse und die Lieferung innerhalb 48h.", // TODO CHF
    },
    {
      q: "Was umfasst das Mietpaket von CardioPro?",
      a: "Jedes Paket umfasst: den vollautomatischen oder halbautomatischen Defibrillator Ihrer Wahl, einen Satz Erwachsenenelektroden, die Batterie, ein Wandgehäuse mit Beschilderung und die Lieferung innerhalb 48h in der ganzen Schweiz. Das Verbrauchsmaterial (Elektroden und Batterie) wird zu jedem Ablauftermin geliefert und ersetzt.",
    },
    {
      q: "Was ist die Mindestmietdauer für einen Defibrillator?",
      a: "Die Mindestmietdauer beträgt einen Monat. CardioPro bietet acht Laufzeiten: 1, 2, 3, 6, 12, 24, 48 und 60 Monate. Je länger die Bindung, desto niedriger die Monatskosten. Am Vertragsende fallen keine Kündigungsgebühren an.",
    },
    {
      q: "Kann man einen Defibrillator für eine einmalige Veranstaltung mieten?",
      a: "Ja, die Kurzzeitmiete ist speziell für einmalige Veranstaltungen konzipiert: Sportwettkämpfe, Festivals, Messen, Seminare oder Hochzeiten. Sie mieten einen AED für 1 bis 3 Monate, für die Dauer Ihrer Veranstaltung. Das Gerät wird innerhalb 48h einsatzbereit geliefert, und Sie geben es am Ende einfach zurück.",
    },
    {
      q: "Defibrillator mieten oder kaufen — was ist besser?",
      a: "Die Miete ist vorzuziehen, um das Budget zu glätten und stets aktuelles Verbrauchsmaterial zu garantieren. Der <a href=\"/de/defibrillator-kaufen/\" class=\"institutional-link\">Kauf</a> eignet sich, wenn Sie über ein sofortiges Budget verfügen. Über 4 Jahre sind die Gesamtkosten vergleichbar, mit dem Vorteil eines stets einsatzbereiten Geräts bei der Miete.",
    },
    {
      q: "Ist die Miete eines Defibrillators in der Schweiz steuerlich absetzbar?",
      a: "Für Unternehmen werden die Mietraten in der Regel als Betriebsaufwand verbucht, im Gegensatz zu einem aktivierten, über mehrere Jahre abgeschriebenen Kauf. Die genaue steuerliche Behandlung hängt von Ihrem Kanton und Ihrem Steuerregime ab: Erkundigen Sie sich bei Ihrem Treuhänder.",
    },
    {
      q: "Welche Einrichtungen können in der Schweiz einen Defibrillator mieten?",
      a: "Alle: Unternehmen, Gemeinden, Hotels und Restaurants, medizinische Zentren, Pflegeheime, Sportvereine, öffentlich zugängliche Einrichtungen und Arztpraxen. In der Schweiz besteht keine Bundespflicht, aber die SUVA und die Schweizerische Herzstiftung empfehlen die Installation eines AED an stark frequentierten Orten nachdrücklich.",
    },
    {
      q: "Wie funktioniert die Kurzzeitmiete eines Defibrillators?",
      a: "In drei Schritten: Sie wählen Ihre Laufzeit (1, 2 oder 3 Monate) und Ihr AED-Modell auf unserer Website oder telefonisch. Das Gerät wird innerhalb 48h mit Gehäuse und Beschilderung geliefert. Am Ende der Laufzeit geben Sie das Material einfach zurück. Keine zusätzliche Bindung.",
    },
    {
      q: "Welche Defibrillator-Modelle sind zur Miete verfügbar?",
      a: "CardioPro bietet sein gesamtes Sortiment an CE- und FDA-zertifizierten AED zur Miete: iAED-S1 (Noah Medical), HeartSine 350P/360P/500P, Mediana A16, Schiller FRED PA-1, Bexen Reanibex 100 und ZOLL AED Plus/AED 3. Jedes Modell ist je nach Referenz als vollautomatische (AED) oder halbautomatische Version erhältlich. <a href=\"/de/defibrillator-kaufen/\" class=\"institutional-link\">Modellvergleich ansehen</a>.",
    },
    {
      q: "Was passiert am Ende des Mietvertrags?",
      a: "Drei Optionen stehen Ihnen offen: Ihren Vertrag mit einem neuen Gerät der neuesten Generation erneuern, die Miete zum gleichen Tarif verlängern oder das Material kostenlos zurückgeben. CardioPro kontaktiert Sie vor Ablauf, um das weitere Vorgehen zu organisieren.",
    },
    {
      q: "Ist die Lieferung des Defibrillators in der Miete inbegriffen?",
      a: "Ja, die Lieferung ist in allen Laufzeiten inbegriffen. Der Versand erfolgt innerhalb 48 Werkstunden in der ganzen Schweiz. Das Paket kommt einsatzbereit an: Defibrillator, Elektroden, Batterie, Wandgehäuse und Beschilderung.",
    },
    {
      q: "Welche Vorteile bietet die Langzeitmiete?",
      a: "Die Langzeitmiete (24 bis 60 Monate) bietet den besten Monatstarif: ab 29 € exkl. MwSt./Monat über 60 Monate (Betrag in CHF noch zu bestätigen). Das Verbrauchsmaterial wird zu jedem Termin ohne Aufpreis ersetzt. Am Vertragsende können Sie mit einem Gerät der neuesten Generation erneuern oder kostenlos zurückgeben.", // TODO CHF
    },
    {
      q: "Was kostet die Kurzzeitmiete eines Defibrillators?",
      a: "Die Kurzzeitmiete kostet 119 € exkl. MwSt./Monat über 3 Monate, 149 €/Monat über 2 Monate und 179 €/Monat für 1 Monat (Beträge in CHF noch zu bestätigen). Das Paket umfasst den AED, die Elektroden, die Batterie, das Gehäuse und die Express-Lieferung. Am Ende der Laufzeit geben Sie das Gerät ohne zusätzliche Bindung zurück.", // TODO CHF
    },
    {
      q: "Wie miete ich einen Defibrillator für mein Unternehmen in der Schweiz?",
      a: "Unternehmen können einen AED ab 29 € exkl. MwSt./Monat in der Langzeitmiete mieten. CardioPro liefert innerhalb 48h das Komplettpaket: Defibrillator, Wandgehäuse, Beschilderung und Verbrauchsmaterial. <a href=\"/de/#entreprise\" class=\"institutional-link\">Unsere Unternehmenslösungen entdecken</a>.", // TODO CHF
    },
    {
      q: "Wie hoch sind die Gesamtkosten einer Defibrillator-Miete über 4 Jahre?",
      a: "Über 48 Monate beläuft sich die Miete auf 1 872 € exkl. MwSt. (39 €/Monat × 48). Über 60 Monate: 1 740 € exkl. MwSt. (29 €/Monat × 60). Beim Kauf kommt das gleiche Gerät plus Verbrauchsmaterial. Die Gesamtkosten sind vergleichbar, mit dem Vorteil eines planbaren Budgets bei der Miete. (EUR-Beträge in CHF noch zu bestätigen.)", // TODO CHF
    },
    {
      q: "AED oder halbautomatisch: was zur Miete wählen?",
      a: "Der vollautomatische AED gibt den Schock ohne Eingreifen ab: empfohlen für die breite Öffentlichkeit. Der halbautomatische AED erfordert das Drücken einer Taste: er eignet sich für geschulte Ersthelfer. Beide sind bei CardioPro zum gleichen Mietpreis erhältlich.",
    },
  ],

  ctaTitle: "Erhalten Sie Ihr Mietangebot innerhalb 24h",
  ctaText:
    "Unser Team berät Sie zur passenden Mietlaufzeit für Ihre Dauer und Ihr Budget — in der gesamten Deutsch- und Westschweiz.",
  ctaButton: "Kostenloses Angebot anfordern",
  ctaPhone: "+41 22 518 09 36",
}

export const rentalContent: Record<Locale, RentalContent> = { fr, de }

/**
 * Construit le bloc JSON-LD (@graph) de la page location.
 * ⚠️ AggregateOffer / OfferCatalog utilisent `priceCurrency` (EUR placeholder). // TODO CHF
 */
export function buildRentalJsonLd(c: RentalContent) {
  const prices = c.formulas.map((f) => f.price)
  const low = Math.min(...prices)
  const high = Math.max(...prices)
  const inLanguage = c.lang === "fr" ? "fr-CH" : "de-CH"

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
        inLanguage,
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
      {
        "@type": "Service",
        "@id": `${c.canonical}#service`,
        name: c.lang === "fr" ? "Location de défibrillateur" : "Defibrillator mieten",
        serviceType: c.lang === "fr" ? "Location de défibrillateur (DAE)" : "Defibrillator-Miete (AED)",
        provider: { "@id": "https://www.cardiopro.ch/#organization" },
        areaServed: { "@type": "Country", name: "Switzerland" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency, // TODO CHF
          lowPrice: String(low), // TODO CHF
          highPrice: String(high), // TODO CHF
          offerCount: String(c.formulas.length),
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: c.lang === "fr" ? "Formules de location" : "Mietlaufzeiten",
          itemListElement: c.formulas.map((f) => ({
            "@type": "Offer",
            name: f.name,
            price: String(f.price), // TODO CHF
            priceCurrency, // TODO CHF
            availability: "https://schema.org/InStock",
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${c.canonical}#faq`,
        inLanguage,
        mainEntity: c.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  }
}

export { currencySymbol, priceCurrency }
