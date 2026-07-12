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

const { minPrice } = pricingRangeChf
const lowPrice = eurToChf(29)

export interface FaqItem {
  q: string
  a: string
}

export interface SegmentCard {
  title: string
  text: string
  model: string
}

export interface ServiceCard {
  title: string
  text: string
}

export interface BuyRentCard {
  title: string
  price: string
  features: string[]
  linkHref: string
  linkLabel: string
  featured?: boolean
  badge?: string
}

export interface EnterpriseContent extends QuoteFormContent {
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ogDescription: string

  breadcrumbHome: string
  breadcrumbParent: string
  breadcrumbCurrentShort: string

  heroTitle: string
  heroSub: string
  heroPills: string[]

  formTitle: string
  formCompany: string
  formCompanyPlaceholder: string

  whyTitle: string
  whyParagraphs: string[]
  whyBenefits: { title: string; text: string }[]

  distributorTitle: string
  distributors: { alt: string; src: string }[]

  buyRentTitle: string
  buyRentIntro: string
  buyRentCards: BuyRentCard[]

  segmentsTitle: string
  segmentsIntro: string
  segments: SegmentCard[]

  legalTitle: string
  legalBluf: string
  legalParagraphs: string[]

  servicesTitle: string
  services: ServiceCard[]

  stats: { value: string; label: string }[]
  clientsTitle: string
  clients: { alt: string; src: string }[]

  faqTitle: string
  faq: FaqItem[]

  ctaTitle: string
  ctaText: string
  ctaButton: string
}

const legalFr = {
  bluf:
    "Non : il n'existe aucune obligation fédérale d'installer un défibrillateur en entreprise en Suisse. La SUVA, la Fondation Suisse de Cardiologie et le Swiss Resuscitation Council recommandent toutefois l'équipement des lieux à forte fréquentation.",
  p1:
    "Contrairement à la France (décret 2018-1186), la Suisse n'impose pas l'installation d'un DAE par une loi fédérale unique. La compétence relève en partie des cantons et des exigences sectorielles. L'OLT3 (Ordonnance 3 relative à la Loi sur le travail), article 36, encadre les premiers secours en entreprise : depuis 2017, le DAE n'est plus listé dans le matériel indicatif minimal.",
  p2:
    "L'employeur reste néanmoins tenu de protéger la santé de ses collaborateurs (art. 328 CO, LTr). La SUVA recommande l'installation d'un défibrillateur dans les entreprises à fort effectif ou éloignées des secours. Le médecin du travail se prononce au cas par cas dans le cadre de la directive MSST. Validez votre situation avec votre conseiller SUVA ou votre juriste.",
}

const legalDe = {
  bluf:
    "Nein: In der Schweiz gibt es keine bundesweite Pflicht, einen Defibrillator im Betrieb zu installieren. SUVA, Schweizerische Herzstiftung und Swiss Resuscitation Council empfehlen dennoch die Ausstattung stark frequentierter Orte.",
  p1:
    "Anders als in Frankreich (Décret 2018-1186) schreibt die Schweiz keinen AED flächendeckend per Bundesgesetz vor. Zuständigkeiten liegen teils bei Kantonen und Branchen. Die OLT3 (Verordnung 3 zum Arbeitsgesetz), Art. 36, regelt die Erste Hilfe im Betrieb: seit 2017 ist der AED nicht mehr im Mindest-Inventar aufgeführt.",
  p2:
    "Der Arbeitgeber muss die Gesundheit der Mitarbeitenden schützen (Art. 328 OR, ArG). Die SUVA empfiehlt AED in Betrieben mit vielen Mitarbeitenden oder entfernt von Rettungsdiensten. Der Betriebsarzt entscheidet im Rahmen der MSST-Richtlinie. Klären Sie Ihre Situation mit SUVA-Berater oder Rechtsberater.",
}

const distributors = [
  { alt: "HeartSine", src: `${IMG}/distrubuteur_agree/heartsine.webp` },
  { alt: "Mediana", src: `${IMG}/distrubuteur_agree/MEDIANA.webp` },
  { alt: "ZOLL Medical", src: `${IMG}/distrubuteur_agree/ZOLL.webp` },
  { alt: "Bexen Cardio", src: `${IMG}/distrubuteur_agree/BEXEN.webp` },
  { alt: "Noah Medical", src: `${IMG}/distrubuteur_agree/NOAH_MEDICAL.webp` },
  { alt: "Physio-Control", src: `${IMG}/distrubuteur_agree/physio_control_logo.webp` },
]

const clients = [
  { alt: "Base aérienne de Vélizy Villacoublay", src: `${IMG}/clients/logo-velizy.webp` },
  { alt: "CPAM Drôme", src: `${IMG}/clients/logo-cpam.webp` },
  { alt: "Hitachi", src: `${IMG}/clients/logo-hitachi.webp` },
  { alt: "Emmaüs", src: `${IMG}/clients/logo-emmaus.webp` },
  { alt: "Circet France", src: `${IMG}/clients/logo-circet.webp` },
]

const fr: EnterpriseContent = {
  lang: "fr",
  canonical: "https://www.cardiopro.ch/fr/defibrillateur-entreprise/",

  metaTitle: "Défibrillateur entreprise Suisse : achat ou location | CardioPro",
  metaDescription:
    "Équipez votre entreprise d'un défibrillateur en Suisse : achat dès CHF 1 090.– ou location dès CHF 129.–/mois hors TVA. Conseil, livraison 48h, devis 24h.",
  ogTitle: "Défibrillateur entreprise Suisse : achat ou location | CardioPro",
  ogDescription:
    "Équipez votre entreprise d'un défibrillateur en Suisse : achat dès CHF 1 090.– ou location dès CHF 129.–/mois hors TVA. Conseil, livraison 48h, devis 24h.",

  breadcrumbHome: "Accueil",
  breadcrumbParent: "Nos Offres",
  breadcrumbCurrentShort: "Défibrillateur entreprise",

  heroTitle: "Défibrillateur pour entreprise en Suisse : achat ou location",
  heroSub: `Équipez votre entreprise d'un défibrillateur dès ${formatChfPrice(minPrice)} hors TVA à l'achat ou ${formatChfPrice(lowPrice)}/mois en location, consommables et livraison 48h inclus. Plus de 20 000 professionnels équipés, devis sous 24h.`,
  heroPills: ["20 000+ professionnels", "Livraison 48h", "Devis 24h"],

  formTitle: "Devis gratuit en 24h",
  formSubtitle: "Sans engagement • Réponse garantie",
  formName: "Nom complet",
  formCompany: "Entreprise / Établissement",
  formCompanyPlaceholder: "Entreprise / Établissement",
  formPhone: "Téléphone",
  formEmail: "Adresse email professionnelle",
  formSubmit: "Recevoir mon devis gratuit",
  formLegal: "🔒 Vos données restent confidentielles",
  formSubject: "Devis CardioPro Suisse — Défibrillateur entreprise (FR)",

  whyTitle: "Pourquoi équiper votre entreprise ?",
  whyParagraphs: [
    `En cas d'arrêt cardiaque au travail, chaque minute compte : sans défibrillation précoce, les chances de survie chutent de 10 % par minute. Équiper vos locaux d'un DAE montre un engagement employeur concret et renforce votre image de structure responsable.`,
    `En Suisse, il n'existe pas d'obligation fédérale, mais la SUVA et la Fondation Suisse de Cardiologie recommandent l'installation dans les entreprises à fort effectif. L'employeur a un devoir général de protection (art. 328 CO, LTr) : un DAE s'inscrit dans une démarche de prévention documentée. Validez les exigences cantonales avec votre médecin du travail.`,
  ],
  whyBenefits: [
    { title: "Minutes qui comptent", text: "Un DAE accessible à moins de 3 minutes de marche peut doubler les chances de survie en cas d'arrêt cardiaque sur le lieu de travail." },
    { title: "Image employeur", text: "Un équipement visible et signalé rassure collaborateurs, clients et visiteurs. C'est un signal fort de prévention et de responsabilité sociale." },
    { title: "Cadre légal suisse", text: "Pas d'obligation fédérale, mais recommandations SUVA, SRC et directive MSST. Anticipez les attentes de votre canton et de votre assurance accident." },
    { title: "Budget maîtrisé", text: `Achat dès ${formatChfPrice(minPrice)} hors TVA ou location dès ${formatChfPrice(lowPrice)}/mois hors TVA avec consommables inclus.` },
  ],

  distributorTitle: "Distributeur agréé",
  distributors,

  buyRentTitle: "Achat ou location : les deux solutions pour votre entreprise",
  buyRentIntro:
    "Selon votre trésorerie et votre horizon, l'achat ou la location répondent à des besoins différents. CardioPro vous accompagne dans les deux cas avec livraison 48h et conseil personnalisé.",
  buyRentCards: [
    {
      title: "Achat",
      price: `Dès ${formatChfPrice(minPrice)} hors TVA`,
      features: [
        "Propriété de l'appareil",
        "31 modèles comparés",
        "Livraison 48h offerte",
        "Investissement amortissable",
      ],
      linkHref: "/fr/defibrillateur-prix/",
      linkLabel: "comparez les prix des 31 défibrillateurs",
    },
    {
      title: "Location",
      price: `Dès ${formatChfPrice(lowPrice)}/mois hors TVA`,
      features: [
        "Consommables inclus",
        "Charge déductible chaque mois",
        "8 formules de 1 à 60 mois",
        "Maintenance sous 72h",
      ],
      linkHref: "/fr/location-defibrillateur/",
      linkLabel: "découvrez les 8 formules de location",
      featured: true,
      badge: "Le plus populaire",
    },
  ],

  segmentsTitle: "Quel défibrillateur selon votre structure ?",
  segmentsIntro:
    "Chaque type d'établissement a des contraintes différentes : effectif, environnement, budget. Voici nos recommandations par segment.",
  segments: [
    {
      title: "PME & bureaux",
      text: "Pour un bureau ou une PME de 10 à 50 personnes, un DAE compact et silencieux suffit. Installation murale dans un lieu de passage, signalétique claire.",
      model: "Modèle recommandé : HeartSine 360P ou iAED-S1",
    },
    {
      title: "Industrie & chantiers",
      text: "Environnements poussiéreux ou humides : privilégiez un indice IP56 et un boîtier extérieur. Idéal pour halls de production, ateliers et chantiers temporaires.",
      model: "Modèle recommandé : HeartSine 500P (IP56)",
    },
    {
      title: "Associations & clubs sportifs",
      text: `Salles de sport, gymnases et clubs : un DAE accessible au public, utilisable sans formation préalable. <a href="/fr/defibrillateur-association/" ${linkClass}>Solutions pour associations et clubs sportifs</a>.`,
      model: "Modèle recommandé : HeartSine 360P",
    },
    {
      title: "Cabinets médicaux",
      text: "Arztpraxis et cabinets paramédicaux : fiabilité, garantie longue et conformité CE/FDA. Le semi-automatique convient si du personnel formé est présent.",
      model: "Modèle recommandé : Mediana A16 ou Schiller FRED PA-1",
    },
    {
      title: "Communes & collectivités",
      text: "Mairies, écoles et bâtiments publics : la location longue durée lisse le budget communal. Plusieurs appareils peuvent être nécessaires sur les grands sites.",
      model: "Modèle recommandé : HeartSine 500P — location 48 ou 60 mois",
    },
  ],

  legalTitle: "Défibrillateur obligatoire en Suisse ?",
  legalBluf: legalFr.bluf,
  legalParagraphs: [legalFr.p1, legalFr.p2],

  servicesTitle: "Installation, formation et maintenance",
  services: [
    {
      title: "Livraison 48h + fixation murale",
      text: "Expédition sous 48h partout en Suisse. Pack complet : DAE, électrodes, batterie, boîtier mural et signalétique réglementaire. Prêt à l'emploi dès réception.",
    },
    {
      title: "Prise en main de l'équipe",
      text: "Le DAE entièrement automatique s'utilise sans formation préalable grâce aux instructions vocales. La SUVA recommande toutefois une sensibilisation des secouristes d'entreprise si un appareil est installé.",
    },
    {
      title: "Maintenance & consommables",
      text: `À l'achat, prévoyez ${formatChfPrice(eurToChf(150))} à ${formatChfPrice(eurToChf(300))} hors TVA/an pour la maintenance. En <a href="/fr/location-defibrillateur/" ${linkClass}>location tout inclus</a>, électrodes, batterie et intervention sous 72h sont compris.`,
    },
  ],

  stats: [
    { value: "20 000+", label: "Professionnels équipés" },
    { value: "48h", label: "Livraison partout en Suisse" },
    { value: "24h", label: "Réponse devis" },
  ],
  clientsTitle: "Ils nous font confiance",
  clients,

  faqTitle: "Questions fréquentes — défibrillateur entreprise",
  faq: [
    {
      q: "Un défibrillateur est-il obligatoire en entreprise en Suisse ?",
      a: `${legalFr.bluf} L'OLT3 (art. 36) encadre les premiers secours ; le DAE n'y figure plus depuis 2017. L'employeur a un devoir de protection (art. 328 CO). La SUVA recommande l'équipement des entreprises à fort effectif. Validez avec votre médecin du travail et votre conseiller SUVA.`,
    },
    {
      q: "Combien coûte un défibrillateur pour une entreprise ?",
      a: `Comptez dès ${formatChfPrice(minPrice)} hors TVA à l'achat (boîtier et signalétique inclus) ou dès ${formatChfPrice(lowPrice)}/mois hors TVA en location longue durée. <a href="/fr/defibrillateur-prix/" ${linkClass}>Comparez les prix des 31 défibrillateurs</a> pour trouver le modèle adapté à votre budget.`,
    },
    {
      q: "Vaut-il mieux acheter ou louer pour son entreprise ?",
      a: `L'achat convient si vous disposez d'un budget immédiat et souhaitez amortir l'investissement. La location lisse le budget avec consommables inclus et charge déductible chaque mois. <a href="/fr/location-defibrillateur/" ${linkClass}>Découvrez les 8 formules de location</a> et comparez avec nos <a href="/fr/defibrillateur-prix/" ${linkClass}>prix d'achat</a>.`,
    },
    {
      q: "La location est-elle déductible fiscalement ?",
      a: "Oui, en principe : chaque mensualité de location est généralement comptabilisée en charge d'exploitation, contrairement à l'achat qui s'immobilise et s'amortit. Les modalités exactes dépendent de votre canton et de votre régime fiscal. Validez avec votre fiduciaire.",
    },
    {
      q: "Quel défibrillateur pour une PME ou un bureau ?",
      a: "Pour un bureau ou une PME, un DAE compact et silencieux suffit : HeartSine 360P ou iAED-S1 dès CHF 1 090.– hors TVA. Installez-le dans un lieu de passage accessible en moins de 3 minutes de marche depuis tout point du bâtiment.",
    },
    {
      q: "Quel défibrillateur pour une association ou un club sportif ?",
      a: `Les clubs sportifs et associations bénéficient d'un DAE entièrement automatique, utilisable sans formation : HeartSine 360P recommandé. Consultez notre page <a href="/fr/defibrillateur-association/" ${linkClass}>défibrillateur association et club sportif</a> pour les formules adaptées aux budgets associatifs.`,
    },
    {
      q: "Existe-t-il des subventions pour les entreprises ?",
      a: "Certaines communes, cantons ou assurances proposent des aides ponctuelles, mais il n'existe pas de programme fédéral uniforme. Les conditions varient selon votre localisation. Une page dédiée aux subventions sera bientôt disponible sur <a href=\"/fr/subventions-defibrillateur/\" class=\"font-semibold text-[#0E3A82] hover:underline\">/fr/subventions-defibrillateur/</a>. Renseignez-vous auprès de votre commune ou de votre assureur accident.",
    },
    {
      q: "Faut-il former les employés ?",
      a: "Non pour utiliser un DAE automatique : l'appareil guide vocalement chaque étape. Cependant, la SUVA recommande que les secouristes d'entreprise soient sensibilisés si un DAE est installé. CardioPro propose des formations conformes aux recommandations du Swiss Resuscitation Council (SRC).",
    },
    {
      q: "Où installer le défibrillateur dans les locaux ?",
      a: "Installez le DAE dans un lieu visible et accessible, à moins de 3 minutes de marche depuis tout point du bâtiment. Évitez les pièces fermées à clé. Le boîtier mural avec signalétique réglementaire doit être placé à hauteur d'adulte, sans obstacle.",
    },
    {
      q: "Combien de défibrillateurs pour un grand site ?",
      a: "La règle des 3 minutes de marche s'applique : un grand site industriel ou un campus peut nécessiter plusieurs appareils. CardioPro réalise un audit gratuit de vos locaux pour déterminer le nombre et l'emplacement optimal des DAE.",
    },
    {
      q: "Qui assure la maintenance ?",
      a: `À l'achat, CardioPro assure le SAV avec intervention sous 72h. Les consommables (électrodes, batterie) sont à votre charge. En <a href="/fr/location-defibrillateur/" ${linkClass}>location tout inclus</a>, maintenance et remplacement des consommables sont compris dans la mensualité.`,
    },
    {
      q: "Quel délai de livraison en Suisse ?",
      a: "CardioPro livre sous 48h partout en Suisse romande et alémanique. Le pack arrive prêt à l'emploi : défibrillateur, électrodes, batterie, boîtier mural et signalétique. Devis personnalisé sous 24h.",
    },
  ],

  ctaTitle: "Équipez votre entreprise dès aujourd'hui",
  ctaText: `Achat dès ${formatChfPrice(minPrice)} hors TVA ou location dès ${formatChfPrice(lowPrice)}/mois — livraison 48h, conseil personnalisé.`,
  ctaButton: "Demander un devis gratuit",
}

const de: EnterpriseContent = {
  lang: "de",
  canonical: "https://www.cardiopro.ch/de/defibrillator-betriebe/",

  metaTitle: "Defibrillator für Betriebe: Kauf oder Miete | CardioPro",
  metaDescription:
    "Defibrillator für Betriebe und Firmen in der Schweiz: Kauf ab CHF 1 090.– oder Miete ab CHF 129.–/Monat netto. Beratung, Lieferung 48h, Angebot in 24h.",
  ogTitle: "Defibrillator für Betriebe: Kauf oder Miete | CardioPro",
  ogDescription:
    "Defibrillator für Betriebe und Firmen in der Schweiz: Kauf ab CHF 1 090.– oder Miete ab CHF 129.–/Monat netto. Beratung, Lieferung 48h, Angebot in 24h.",

  breadcrumbHome: "Startseite",
  breadcrumbParent: "Unsere Angebote",
  breadcrumbCurrentShort: "Defibrillator für Betriebe",

  heroTitle: "Defibrillator für Betriebe und Firmen in der Schweiz",
  heroSub: `Statten Sie Ihren Betrieb mit einem Defibrillator aus: ab ${formatChfPrice(minPrice)} netto beim Kauf oder ${formatChfPrice(lowPrice)}/Monat in der Miete, Verbrauchsmaterial und Lieferung 48h inklusive. Über 20 000 Profis ausgestattet, Angebot innerhalb 24h.`,
  heroPills: ["20 000+ Profis", "Lieferung 48h", "Angebot 24h"],

  formTitle: "Kostenloses Angebot in 24h",
  formSubtitle: "Unverbindlich · Antwort garantiert",
  formName: "Vollständiger Name",
  formCompany: "Unternehmen / Einrichtung",
  formCompanyPlaceholder: "Unternehmen / Einrichtung",
  formPhone: "Telefon",
  formEmail: "Geschäftliche E-Mail-Adresse",
  formSubmit: "Mein kostenloses Angebot erhalten",
  formLegal: "🔒 Ihre Daten bleiben vertraulich",
  formSubject: "Angebot CardioPro Schweiz — Defibrillator Betriebe (DE)",

  whyTitle: "Warum Ihren Betrieb ausstatten?",
  whyParagraphs: [
    `Bei einem Herzstillstand am Arbeitsplatz zählt jede Minute: ohne frühe Defibrillation sinken die Überlebenschancen um 10 % pro Minute. Ein AED in Ihren Räumlichkeiten zeigt konkretes Engagement und stärkt Ihr Image als verantwortungsvoller Arbeitgeber.`,
    `In der Schweiz gibt es keine bundesweite Pflicht, aber SUVA und Schweizerische Herzstiftung empfehlen die Installation in Betrieben mit vielen Mitarbeitenden. Der Arbeitgeber hat eine Schutzpflicht (Art. 328 OR, ArG): ein AED gehört zu einer dokumentierten Präventionsstrategie. Klären Sie kantonale Anforderungen mit Ihrem Betriebsarzt.`,
  ],
  whyBenefits: [
    { title: "Minuten, die zählen", text: "Ein AED in weniger als 3 Gehminuten erreichbar kann die Überlebenschancen bei Herzstillstand am Arbeitsplatz verdoppeln." },
    { title: "Arbeitgeberimage", text: "Sichtbare Ausstattung beruhigt Mitarbeitende, Kunden und Besucher. Ein starkes Signal für Prävention und soziale Verantwortung." },
    { title: "Rechtlicher Rahmen CH", text: "Keine Bundespflicht, aber SUVA-, SRC- und MSST-Empfehlungen. Antizipieren Sie Erwartungen Ihres Kantons und Ihrer Unfallversicherung." },
    { title: "Kontrolliertes Budget", text: `Kauf ab ${formatChfPrice(minPrice)} netto oder Miete ab ${formatChfPrice(lowPrice)}/Monat netto mit Verbrauchsmaterial inklusive.` },
  ],

  distributorTitle: "Autorisierter Händler",
  distributors,

  buyRentTitle: "Kauf oder Miete: zwei Lösungen für Ihren Betrieb",
  buyRentIntro:
    "Je nach Liquidität und Planungshorizont eignen sich Kauf oder Miete. CardioPro begleitet Sie in beiden Fällen mit Lieferung 48h und persönlicher Beratung.",
  buyRentCards: [
    {
      title: "Kauf",
      price: `Ab ${formatChfPrice(minPrice)} netto`,
      features: [
        "Eigentum am Gerät",
        "31 Modelle verglichen",
        "Lieferung 48h inklusive",
        "Abschreibbares Investment",
      ],
      linkHref: "/de/defibrillator-kaufen/",
      linkLabel: "vergleichen Sie die Preise von 31 Defibrillatoren",
    },
    {
      title: "Miete",
      price: `Ab ${formatChfPrice(lowPrice)}/Monat netto`,
      features: [
        "Verbrauchsmaterial inklusive",
        "Monatlich abzugsfähig",
        "8 Laufzeiten von 1 bis 60 Monaten",
        "Wartung innerhalb 72h",
      ],
      linkHref: "/de/defibrillator-mieten/",
      linkLabel: "entdecken Sie die 8 Mietformeln",
      featured: true,
      badge: "Am beliebtesten",
    },
  ],

  segmentsTitle: "Welcher Defibrillator für Ihre Struktur?",
  segmentsIntro:
    "Jeder Einrichtungstyp hat andere Anforderungen: Belegschaft, Umgebung, Budget. Hier unsere Empfehlungen nach Segment.",
  segments: [
    {
      title: "KMU & Büros",
      text: "Für ein Büro oder KMU mit 10 bis 50 Personen genügt ein kompakter, leiser AED. Wandmontage an einem Durchgangsort mit klarer Beschilderung.",
      model: "Empfohlenes Modell: HeartSine 360P oder iAED-S1",
    },
    {
      title: "Industrie & Baustellen",
      text: "Staubige oder feuchte Umgebungen: IP56 und Außengehäuse bevorzugen. Ideal für Produktionshallen, Werkstätten und temporäre Baustellen.",
      model: "Empfohlenes Modell: HeartSine 500P (IP56)",
    },
    {
      title: "Vereine & Sportclubs",
      text: `Sporthallen und Vereine: ein AED für die Öffentlichkeit, ohne Vorschulung nutzbar. <a href="/de/defibrillator-vereine/" ${linkClass}>Lösungen für Vereine und Sportclubs</a>.`,
      model: "Empfohlenes Modell: HeartSine 360P",
    },
    {
      title: "Arztpraxen",
      text: "Arztpraxen und paramedizinische Praxen: Zuverlässigkeit, lange Garantie und CE/FDA-Konformität. Halbautomatisch, wenn geschultes Personal anwesend ist.",
      model: "Empfohlenes Modell: Mediana A16 oder Schiller FRED PA-1",
    },
    {
      title: "Gemeinden & Kollektivitäten",
      text: "Gemeindehäuser, Schulen und öffentliche Gebäude: Langzeitmiete glättet das Budget. Große Standorte können mehrere Geräte benötigen.",
      model: "Empfohlenes Modell: HeartSine 500P — Miete 48 oder 60 Monate",
    },
  ],

  legalTitle: "Defibrillator-Pflicht in der Schweiz?",
  legalBluf: legalDe.bluf,
  legalParagraphs: [legalDe.p1, legalDe.p2],

  servicesTitle: "Installation, Schulung und Wartung",
  services: [
    {
      title: "Lieferung 48h + Wandmontage",
      text: "Versand innerhalb 48h in der ganzen Schweiz. Komplettpaket: AED, Elektroden, Batterie, Wandgehäuse und Beschilderung. Sofort einsatzbereit.",
    },
    {
      title: "Einführung für das Team",
      text: "Der vollautomatische AED ist ohne Vorschulung nutzbar dank Sprachanweisungen. Die SUVA empfiehlt dennoch eine Sensibilisierung der Betriebssanitäter, wenn ein Gerät installiert ist.",
    },
    {
      title: "Wartung & Verbrauchsmaterial",
      text: `Beim Kauf rechnen Sie mit ${formatChfPrice(eurToChf(150))} bis ${formatChfPrice(eurToChf(300))} netto/Jahr für Wartung. Bei der <a href="/de/defibrillator-mieten/" ${linkClass}>All-inclusive-Miete</a> sind Elektroden, Batterie und Intervention innerhalb 72h inklusive.`,
    },
  ],

  stats: fr.stats.map((s, i) => ({
    value: s.value,
    label: ["Ausgestattete Profis", "Lieferung in der ganzen Schweiz", "Angebotsantwort"][i],
  })),
  clientsTitle: "Sie vertrauen uns",
  clients,

  faqTitle: "Häufige Fragen — Defibrillator für Betriebe",
  faq: [
    {
      q: "Ist ein Defibrillator im Betrieb in der Schweiz Pflicht?",
      a: `${legalDe.bluf} Die OLT3 (Art. 36) regelt Erste Hilfe; der AED steht seit 2017 nicht mehr im Mindest-Inventar. Der Arbeitgeber hat eine Schutzpflicht (Art. 328 OR). SUVA empfiehlt AED in Betrieben mit vielen Mitarbeitenden. Klären Sie mit Betriebsarzt und SUVA-Berater.`,
    },
    {
      q: "Was kostet ein Defibrillator für ein Unternehmen?",
      a: `Ab ${formatChfPrice(minPrice)} netto beim Kauf (Gehäuse und Beschilderung inklusive) oder ab ${formatChfPrice(lowPrice)}/Monat netto in der Langzeitmiete. <a href="/de/defibrillator-kaufen/" ${linkClass}>Vergleichen Sie die Preise von 31 Defibrillatoren</a> für das passende Modell.`,
    },
    {
      q: "Kaufen oder mieten für meinen Betrieb?",
      a: `Kauf eignet sich bei sofortigem Budget und Abschreibungswunsch. Miete glättet das Budget mit Verbrauchsmaterial inklusive und monatlicher Abzugsfähigkeit. <a href="/de/defibrillator-mieten/" ${linkClass}>Entdecken Sie die 8 Mietformeln</a> und vergleichen Sie mit unseren <a href="/de/defibrillator-kaufen/" ${linkClass}>Kaufpreisen</a>.`,
    },
    {
      q: "Ist die Miete steuerlich absetzbar?",
      a: "Grundsätzlich ja: jede Mietrate wird in der Regel als Betriebsaufwand verbucht, im Gegensatz zum aktivierten Kauf mit Abschreibung. Die genauen Modalitäten hängen von Kanton und Steuerregime ab. Klären Sie mit Ihrem Treuhänder.",
    },
    {
      q: "Welcher Defibrillator für ein KMU oder Büro?",
      a: "Für Büro oder KMU genügt ein kompakter, leiser AED: HeartSine 360P oder iAED-S1 ab CHF 1 090.– netto. Installieren Sie ihn an einem Ort, der von überall im Gebäude in weniger als 3 Gehminuten erreichbar ist.",
    },
    {
      q: "Welcher Defibrillator für einen Verein oder Sportclub?",
      a: `Sportvereine profitieren von einem vollautomatischen AED ohne Vorschulung: HeartSine 360P empfohlen. Sehen Sie unsere Seite <a href="/de/defibrillator-vereine/" ${linkClass}>Defibrillator für Vereine und Sportvereine</a> für vereinsgerechte Formeln.`,
    },
    {
      q: "Gibt es Subventionen für Unternehmen?",
      a: "Einige Gemeinden, Kantone oder Versicherungen bieten punktuelle Hilfen, aber kein einheitliches Bundesprogramm. Die Bedingungen variieren je nach Standort. Eine Subventionsseite folgt unter /de/subventionen-defibrillator/. Erkundigen Sie sich bei Ihrer Gemeinde oder Unfallversicherung.",
    },
    {
      q: "Müssen Mitarbeitende geschult werden?",
      a: "Nein für den vollautomatischen AED: das Gerät führt Schritt für Schritt an. SUVA empfiehlt jedoch Sensibilisierung der Betriebssanitäter bei installiertem AED. CardioPro bietet Schulungen gemäss Swiss Resuscitation Council (SRC).",
    },
    {
      q: "Wo den Defibrillator in den Räumlichkeiten installieren?",
      a: "Installieren Sie den AED sichtbar und zugänglich, weniger als 3 Gehminuten von jedem Punkt im Gebäude. Vermeiden Sie verschlossene Räume. Das Wandgehäuse mit Beschilderung sollte auf Erwachsenenhöhe ohne Hindernis stehen.",
    },
    {
      q: "Wie viele Defibrillatoren für einen grossen Standort?",
      a: "Die 3-Minuten-Regel gilt: ein grosser Industriestandort oder Campus kann mehrere Geräte benötigen. CardioPro erstellt eine kostenlose Standortanalyse für Anzahl und Platzierung.",
    },
    {
      q: "Wer übernimmt die Wartung?",
      a: `Beim Kauf übernimmt CardioPro den SAV mit Intervention innerhalb 72h. Verbrauchsmaterial liegt bei Ihnen. Bei der <a href="/de/defibrillator-mieten/" ${linkClass}>All-inclusive-Miete</a> sind Wartung und Verbrauchsmaterial in der Monatsrate inklusive.`,
    },
    {
      q: "Welche Lieferzeit in der Schweiz?",
      a: "CardioPro liefert innerhalb 48h in der ganzen Schweiz. Das Paket ist einsatzbereit: Defibrillator, Elektroden, Batterie, Wandgehäuse und Beschilderung. Persönliches Angebot innerhalb 24h.",
    },
  ],

  ctaTitle: "Statten Sie Ihren Betrieb noch heute aus",
  ctaText: `Kauf ab ${formatChfPrice(minPrice)} netto oder Miete ab ${formatChfPrice(lowPrice)}/Monat — Lieferung 48h, persönliche Beratung.`,
  ctaButton: "Kostenloses Angebot anfordern",
}

export const enterpriseContent: Record<Locale, EnterpriseContent> = { fr, de }

function buildEnterpriseBreadcrumbSchema(c: EnterpriseContent) {
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

export function buildEnterpriseJsonLd(c: EnterpriseContent) {
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
      buildEnterpriseBreadcrumbSchema(c),
      {
        "@type": "Service",
        "@id": `${c.canonical}#service`,
        name:
          c.lang === "fr"
            ? "Équipement d'entreprises en défibrillateurs"
            : "Defibrillator-Ausstattung für Betriebe",
        description: c.metaDescription,
        serviceType:
          c.lang === "fr"
            ? "Vente et location de dispositifs médicaux"
            : "Verkauf und Miete von Medizinprodukten",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: "Switzerland" },
        audience: {
          "@type": "BusinessAudience",
          name:
            c.lang === "fr"
              ? "Entreprises, associations et collectivités suisses"
              : "Schweizer Unternehmen, Vereine und Kollektivitäten",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name:
            c.lang === "fr"
              ? "Offres défibrillateur entreprise"
              : "Defibrillator-Angebote für Betriebe",
          itemListElement: [
            {
              "@type": "Offer",
              name: c.lang === "fr" ? "Achat" : "Kauf",
              price: String(minPrice),
              priceCurrency,
              description:
                c.lang === "fr"
                  ? `Achat dès ${formatChfPrice(minPrice)} hors TVA`
                  : `Kauf ab ${formatChfPrice(minPrice)} netto`,
            },
            {
              "@type": "Offer",
              name: c.lang === "fr" ? "Location" : "Miete",
              price: String(lowPrice),
              priceCurrency,
              description:
                c.lang === "fr"
                  ? `Location dès ${formatChfPrice(lowPrice)}/mois hors TVA`
                  : `Miete ab ${formatChfPrice(lowPrice)}/Monat netto`,
            },
          ],
        },
      },
      buildFaqSchema(c.canonical, c.lang, c.faq),
    ],
  }
}

export { formatChfPrice }
