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
const shortRentalLow = eurToChf(119)

export interface FaqItem {
  q: string
  a: string
}

export interface SportSegment {
  title: string
  text: string
  model: string
  linkHref?: string
  linkLabel?: string
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

export interface AssociationContent extends QuoteFormContent {
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
  formAssociation: string
  formAssociationPlaceholder: string

  whyTitle: string
  whyParagraphs: string[]
  whyBenefits: { title: string; text: string }[]

  distributorTitle: string
  distributors: { alt: string; src: string }[]

  buyRentTitle: string
  buyRentIntro: string
  buyRentCards: BuyRentCard[]

  sportsTitle: string
  sportsIntro: string
  sports: SportSegment[]

  fundingTitle: string
  fundingParagraphs: string[]
  fundingOptions: { title: string; text: string }[]

  clientsTitle: string
  clients: { alt: string; src: string }[]

  faqTitle: string
  faq: FaqItem[]

  ctaTitle: string
  ctaText: string
  ctaButton: string
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

const legalSportFr =
  "En Suisse, aucune loi fédérale n'impose un défibrillateur dans les clubs sportifs. La Fondation Suisse de Cardiologie recommande toutefois l'équipement des salles de sport et lieux de rassemblement. Le comité reste responsable de la sécurité des membres : un DAE documente une démarche de prévention."

const legalSportDe =
  "In der Schweiz schreibt kein Bundesgesetz einen Defibrillator in Sportvereinen vor. Die Schweizerische Herzstiftung empfiehlt dennoch die Ausstattung von Sporthallen und Versammlungsorten. Der Vorstand bleibt für die Sicherheit der Mitglieder verantwortlich: ein AED dokumentiert Prävention."

const fr: AssociationContent = {
  lang: "fr",
  canonical: "https://www.cardiopro.ch/fr/defibrillateur-association/",

  metaTitle: "Défibrillateur association et club sportif Suisse | CardioPro",
  metaDescription:
    "Défibrillateur pour votre association ou club sportif en Suisse : location dès CHF 129.–/mois hors TVA ou achat dès CHF 1 090.–. Livraison 48h, devis 24h.",
  ogTitle: "Défibrillateur association et club sportif Suisse | CardioPro",
  ogDescription:
    "Défibrillateur pour votre association ou club sportif en Suisse : location dès CHF 129.–/mois hors TVA ou achat dès CHF 1 090.–. Livraison 48h, devis 24h.",

  breadcrumbHome: "Accueil",
  breadcrumbParent: "Nos Offres",
  breadcrumbCurrentShort: "Défibrillateur association",

  heroTitle: "Défibrillateur pour association et club sportif en Suisse",
  heroSub: `Équipez votre association d'un défibrillateur dès ${formatChfPrice(lowPrice)}/mois en location ou ${formatChfPrice(minPrice)} hors TVA à l'achat — la solution adaptée aux budgets associatifs.`,
  heroPills: ["Budget associatif", "Livraison 48h", "Devis 24h"],

  formTitle: "Devis gratuit en 24h",
  formSubtitle: "Sans engagement • Réponse garantie",
  formName: "Nom complet",
  formAssociation: "Association / Club",
  formAssociationPlaceholder: "FC Genève, Club de tennis…",
  formPhone: "Téléphone",
  formEmail: "Adresse email",
  formSubmit: "Recevoir mon devis gratuit",
  formLegal: "🔒 Vos données restent confidentielles",
  formSubject: "Devis CardioPro Suisse — Défibrillateur association (FR)",

  whyTitle: "Pourquoi un DAE dans votre club ?",
  whyParagraphs: [
    "L'arrêt cardiaque peut survenir pendant l'effort, sur le terrain, en salle ou dans les vestiaires — pas seulement chez les seniors. Un défibrillateur accessible à proximité réduit le délai avant défibrillation, facteur décisif quand les secours sont à plusieurs minutes.",
    `${legalSportFr} CardioPro accompagne les associations et clubs sportifs avec des formules de location adaptées à la trésorerie limitée, ou à l'achat pour un équipement durable.`,
  ],
  whyBenefits: [
    { title: "Effort & terrain", text: "Football, hockey, athlétisme : l'effort intense peut déclencher un arrêt cardiaque. Un DAE à proximité du terrain ou du gymnase complète la présence des secouristes bénévoles." },
    { title: "Minutes décisives", text: "Dans les zones rurales ou en soirée, l'ambulance met plus de temps à arriver. Un DAE sur place permet d'agir immédiatement en attendant le 144." },
    { title: "Sérénité des familles", text: "Parents, bénévoles et jeunes licenciés sont rassurés par un équipement visible et signalé. C'est un signal fort de responsabilité du comité." },
    { title: "Budget maîtrisé", text: `La location dès ${formatChfPrice(lowPrice)}/mois hors TVA évite d'immobiliser la trésorerie du club. Les cotisations peuvent financer la mensualité.` },
  ],

  distributorTitle: "Distributeur agréé",
  distributors,

  buyRentTitle: "Location ou achat pour votre association",
  buyRentIntro:
    "La location longue durée est la formule la plus choisie par les associations : budget annuel prévisible, consommables inclus, pas d'immobilisation de trésorerie.",
  buyRentCards: [
    {
      title: "Location",
      price: `Dès ${formatChfPrice(lowPrice)}/mois hors TVA`,
      features: [
        "Consommables inclus",
        "Budget annuel maîtrisé",
        "8 formules de 1 à 60 mois",
        "Idéal trésorerie associative",
      ],
      linkHref: "/fr/location-defibrillateur/",
      linkLabel: "les 8 formules de location",
      featured: true,
      badge: "Préféré des associations",
    },
    {
      title: "Achat",
      price: `Dès ${formatChfPrice(minPrice)} hors TVA`,
      features: [
        "Propriété de l'appareil",
        "31 modèles comparés",
        "Investissement durable",
        "Livraison 48h offerte",
      ],
      linkHref: "/fr/defibrillateur-prix/",
      linkLabel: "comparez les prix des 31 défibrillateurs",
    },
  ],

  sportsTitle: "Quel DAE selon votre sport ?",
  sportsIntro:
    "Chaque discipline a ses contraintes : intérieur ou extérieur, humidité, saisonnalité. Voici nos recommandations par type d'activité.",
  sports: [
    {
      title: "Football & sports collectifs",
      text: "Terrain extérieur, vestiaires, tribunes : privilégiez un indice IP56 et un boîtier extérieur pour résister aux intempéries et à la poussière.",
      model: "Modèle recommandé : HeartSine 500P (IP56)",
    },
    {
      title: "Salles de sport & fitness",
      text: "Gymnase, salle de musculation ou cours collectifs : un DAE compact et silencieux, accessible sans formation, installé près de l'accueil ou du plateau.",
      model: "Modèle recommandé : HeartSine 360P",
    },
    {
      title: "Tennis & clubs multisites",
      text: "Plusieurs courts ou bâtiments : un DAE par zone de jeu, règle des 3 minutes de marche. Budget serré : l'iAED-S1 permet d'équiper plusieurs sites.",
      model: "Modèle recommandé : iAED-S1 ou HeartSine 360P",
    },
    {
      title: "Piscines & sports aquatiques",
      text: "Environnement humide : IP56 minimum, boîtier mural dans la zone sèche (pas en zone bassin). Signalétique visible depuis le bord de l'eau.",
      model: "Modèle recommandé : HeartSine 500P avec boîtier IP",
    },
    {
      title: "Manifestations & tournois",
      text: "Tournoi, championnat ou journée portes ouvertes : la location courte durée couvre la période de l'événement sans engagement long.",
      model: `Location courte durée dès ${formatChfPrice(shortRentalLow)}/mois`,
      linkHref: "/fr/location-defibrillateur/",
      linkLabel: "location 1 à 3 mois pour vos tournois",
    },
  ],

  fundingTitle: "Financer le défibrillateur de votre association",
  fundingParagraphs: [
    "La plupart des clubs financent leur DAE par une combinaison de sources : cotisations spéciales, sponsoring local, dons de parents ou subventions communales ponctuelles. CardioPro ne propose pas de programme de sponsoring dédié, mais vous aide à monter un dossier clair pour vos partenaires.",
    "Certaines communes ou fondations sportives accordent des aides ponctuelles, sans cadre fédéral uniforme. Une page dédiée aux subventions sera bientôt disponible.",
  ],
  fundingOptions: [
    { title: "Cotisation spéciale", text: "Répartir le coût annuel de la location sur les licenciés : quelques francs par membre et par saison." },
    { title: "Sponsoring local", text: "Entreprises locales, banques régionales ou commerces partenaires : le DAE peut porter une plaque de parrainage visible." },
    { title: "Dons & mécénat", text: "Parents, anciens membres ou fondations privées : un achat unique peut être financé par une collecte ciblée." },
    { title: "Aides publiques", text: `Renseignez-vous auprès de votre commune ou canton. Suivez les actualités sur <a href="/fr/subventions-defibrillateur/" ${linkClass}>/fr/subventions-defibrillateur/</a>.` },
  ],

  clientsTitle: "Ils nous font confiance",
  clients,

  faqTitle: "Questions fréquentes — défibrillateur association & club sportif",
  faq: [
    {
      q: "Un défibrillateur est-il obligatoire pour un club sportif en Suisse ?",
      a: `${legalSportFr} Validez les exigences de votre ligue ou canton avec votre comité et votre assureur responsabilité civile.`,
    },
    {
      q: "Combien coûte un DAE pour une association ?",
      a: `Comptez dès ${formatChfPrice(minPrice)} hors TVA à l'achat ou dès ${formatChfPrice(lowPrice)}/mois hors TVA en location longue durée (consommables inclus). Pour un tournoi, la location courte durée démarre à ${formatChfPrice(shortRentalLow)}/mois. <a href="/fr/defibrillateur-prix/" ${linkClass}>Voir tous les prix</a>.`,
    },
    {
      q: "Location ou achat pour un club ?",
      a: `La location est préférable pour lisser le budget annuel et inclure les consommables. L'achat convient si le club dispose d'une réserve ou d'un financement par don. Comparez les <a href="/fr/location-defibrillateur/" ${linkClass}>8 formules de location</a> et les <a href="/fr/defibrillateur-prix/" ${linkClass}>prix d'achat</a>.`,
    },
    {
      q: "Peut-on louer pour un tournoi ou une saison ?",
      a: `Oui. La location courte durée (1 à 3 mois) couvre un tournoi ou une saison sportive, dès ${formatChfPrice(shortRentalLow)} hors TVA/mois. La location 6 à 12 mois convient à une saison complète. Livraison sous 48h, retour simple en fin de période.`,
    },
    {
      q: "Quel DAE pour un terrain extérieur ?",
      a: "Privilégiez un modèle IP56 (HeartSine 500P) dans un boîtier extérieur avec signalétique. Protégez l'appareil des intempéries et installez-le à proximité du terrain, accessible en moins de 3 minutes depuis tout point de jeu.",
    },
    {
      q: "Qui doit être formé dans le club ?",
      a: "Aucune formation n'est requise pour utiliser un DAE automatique : l'appareil guide vocalement. La sensibilisation des entraîneurs, bénévoles et secouristes du club est toutefois recommandée pour réagir vite et composer le 144.",
    },
    {
      q: "Le DAE peut-il servir sur un enfant ?",
      a: "Oui, avec des électrodes pédiatriques ou un mode enfant. L'iAED-S1 intègre des électrodes adulte et enfant dans le même set. Le DAE adapte l'énergie du choc. Vérifiez la compatibilité du modèle choisi pour vos catégories jeunes.",
    },
    {
      q: "Comment financer l'achat ?",
      a: "Cotisation spéciale, sponsoring local, dons de parents ou subvention communale : combinez plusieurs sources. CardioPro fournit un devis détaillé pour vos démarches auprès des partenaires. Consultez aussi la future page subventions sur cardiopro.ch.",
    },
    {
      q: "Qui assure la maintenance ?",
      a: `À l'achat, CardioPro assure le SAV sous 72h ; les consommables sont à votre charge. En <a href="/fr/location-defibrillateur/" ${linkClass}>location tout inclus</a>, électrodes, batterie et maintenance sont compris dans la mensualité.`,
    },
    {
      q: "Quel délai de livraison ?",
      a: "CardioPro livre sous 48h partout en Suisse. Le pack arrive prêt à l'emploi : défibrillateur, électrodes, batterie, boîtier et signalétique. Devis personnalisé sous 24h pour votre association.",
    },
    {
      q: "Votre structure est une entreprise plutôt qu'une association ?",
      a: `Si vous êtes un club professionnel ou une structure commerciale, consultez notre page <a href="/fr/defibrillateur-entreprise/" ${linkClass}>défibrillateur entreprise</a> pour des formules adaptées aux budgets professionnels.`,
    },
  ],

  ctaTitle: "Équipez votre club dès aujourd'hui",
  ctaText: `Location dès ${formatChfPrice(lowPrice)}/mois ou achat dès ${formatChfPrice(minPrice)} hors TVA — livraison 48h, conseil personnalisé pour les associations.`,
  ctaButton: "Demander un devis gratuit",
}

const de: AssociationContent = {
  lang: "de",
  canonical: "https://www.cardiopro.ch/de/defibrillator-vereine/",

  metaTitle: "Defibrillator für Vereine und Sportvereine | CardioPro",
  metaDescription:
    "Defibrillator für Ihren Verein oder Sportclub in der Schweiz: Miete ab CHF 129.–/Monat netto oder Kauf ab CHF 1 090.–. Lieferung 48h, Angebot in 24h.",
  ogTitle: "Defibrillator für Vereine und Sportvereine | CardioPro",
  ogDescription:
    "Defibrillator für Ihren Verein oder Sportclub in der Schweiz: Miete ab CHF 129.–/Monat netto oder Kauf ab CHF 1 090.–. Lieferung 48h, Angebot in 24h.",

  breadcrumbHome: "Startseite",
  breadcrumbParent: "Unsere Angebote",
  breadcrumbCurrentShort: "Defibrillator für Vereine",

  heroTitle: "Defibrillator für Vereine und Sportvereine in der Schweiz",
  heroSub: `Statten Sie Ihren Verein mit einem Defibrillator aus: ab ${formatChfPrice(lowPrice)}/Monat in der Miete oder ${formatChfPrice(minPrice)} netto beim Kauf — die Lösung für Vereinsbudgets.`,
  heroPills: ["Vereinsbudget", "Lieferung 48h", "Angebot 24h"],

  formTitle: "Kostenloses Angebot in 24h",
  formSubtitle: "Unverbindlich · Antwort garantiert",
  formName: "Vollständiger Name",
  formAssociation: "Verein / Club",
  formAssociationPlaceholder: "FC Zürich, Tennisclub…",
  formPhone: "Telefon",
  formEmail: "E-Mail-Adresse",
  formSubmit: "Mein kostenloses Angebot erhalten",
  formLegal: "🔒 Ihre Daten bleiben vertraulich",
  formSubject: "Angebot CardioPro Schweiz — Defibrillator Vereine (DE)",

  whyTitle: "Warum ein AED in Ihrem Verein?",
  whyParagraphs: [
    "Ein Herzstillstand kann bei körperlicher Belastung auftreten — auf dem Platz, in der Halle oder in der Umkleide, nicht nur bei Senioren. Ein erreichbarer Defibrillator verkürzt die Zeit bis zur Defibrillation, entscheidend wenn der Rettungsdienst Minuten entfernt ist.",
    `${legalSportDe} CardioPro begleitet Vereine und Sportclubs mit Mietformeln für begrenzte Budgets oder Kauf für dauerhafte Ausstattung.`,
  ],
  whyBenefits: [
    { title: "Belastung & Platz", text: "Fussball, Hockey, Leichtathletik: intensive Belastung kann einen Herzstillstand auslösen. Ein AED nahe am Platz oder in der Halle ergänzt die Vereinssanitäter." },
    { title: "Minuten zählen", text: "In ländlichen Gebieten oder abends dauert der Rettungswagen länger. Ein AED vor Ort ermöglicht sofortiges Handeln bis der 144 eintrifft." },
    { title: "Ruhe für Familien", text: "Eltern, Helfer und junge Mitglieder sind beruhigt durch sichtbare Ausstattung. Ein starkes Signal der Vorstandschaft." },
    { title: "Kontrolliertes Budget", text: `Miete ab ${formatChfPrice(lowPrice)}/Monat netto ohne Kapitalbindung. Mitgliedsbeiträge können die Monatsrate finanzieren.` },
  ],

  distributorTitle: "Autorisierter Händler",
  distributors,

  buyRentTitle: "Miete oder Kauf für Ihren Verein",
  buyRentIntro:
    "Langzeitmiete ist die meistgewählte Formel für Vereine: planbares Jahresbudget, Verbrauchsmaterial inklusive, keine Kapitalbindung.",
  buyRentCards: [
    {
      title: "Miete",
      price: `Ab ${formatChfPrice(lowPrice)}/Monat netto`,
      features: [
        "Verbrauchsmaterial inklusive",
        "Planbares Jahresbudget",
        "8 Laufzeiten von 1 bis 60 Monaten",
        "Ideal für Vereinskasse",
      ],
      linkHref: "/de/defibrillator-mieten/",
      linkLabel: "die 8 Mietformeln",
      featured: true,
      badge: "Vereinsfavorit",
    },
    {
      title: "Kauf",
      price: `Ab ${formatChfPrice(minPrice)} netto`,
      features: [
        "Eigentum am Gerät",
        "31 Modelle verglichen",
        "Dauerhafte Investition",
        "Lieferung 48h inklusive",
      ],
      linkHref: "/de/defibrillator-kaufen/",
      linkLabel: "vergleichen Sie die Preise von 31 Defibrillatoren",
    },
  ],

  sportsTitle: "Welcher AED für Ihre Sportart?",
  sportsIntro:
    "Jede Disziplin hat andere Anforderungen: innen oder aussen, Feuchtigkeit, Saisonalität. Unsere Empfehlungen nach Aktivitätstyp:",
  sports: [
    {
      title: "Fussball & Mannschaftssport",
      text: "Aussenplatz, Umkleiden, Tribüne: IP56 und Aussengehäuse für Witterung und Staub.",
      model: "Empfohlenes Modell: HeartSine 500P (IP56)",
    },
    {
      title: "Fitness & Sporthallen",
      text: "Turnhalle oder Fitnessraum: kompakter, leiser AED ohne Vorschulung, nahe Eingang oder Trainingsfläche.",
      model: "Empfohlenes Modell: HeartSine 360P",
    },
    {
      title: "Tennis & Multisite-Clubs",
      text: "Mehrere Plätze oder Gebäude: ein AED pro Zone, 3-Minuten-Regel. Knappes Budget: iAED-S1 für mehrere Standorte.",
      model: "Empfohlenes Modell: iAED-S1 oder HeartSine 360P",
    },
    {
      title: "Schwimmbäder & Wassersport",
      text: "Feuchte Umgebung: mindestens IP56, Wandgehäuse in trockener Zone (nicht am Becken). Beschilderung vom Beckenrand sichtbar.",
      model: "Empfohlenes Modell: HeartSine 500P mit IP-Gehäuse",
    },
    {
      title: "Veranstaltungen & Turniere",
      text: "Turnier oder Vereinsfest: Kurzzeitmiete deckt den Eventzeitraum ohne lange Bindung.",
      model: `Kurzzeitmiete ab ${formatChfPrice(shortRentalLow)}/Monat`,
      linkHref: "/de/defibrillator-mieten/",
      linkLabel: "Miete 1 bis 3 Monate für Ihre Turniere",
    },
  ],

  fundingTitle: "Den Defibrillator Ihres Vereins finanzieren",
  fundingParagraphs: [
    "Die meisten Vereine finanzieren ihren AED durch eine Kombination: Sonderbeiträge, lokales Sponsoring, Spenden von Eltern oder punktuelle Gemeindebeiträge. CardioPro bietet kein eigenes Sponsoring-Programm, hilft aber bei einem klaren Angebot für Partner.",
    "Einige Gemeinden oder Sportstiftungen gewähren punktuelle Hilfen, ohne einheitliches Bundesprogramm. Eine Subventionsseite folgt demnächst.",
  ],
  fundingOptions: [
    { title: "Sonderbeitrag", text: "Jährliche Mietkosten auf Mitglieder umlegen: wenige Franken pro Mitglied und Saison." },
    { title: "Lokales Sponsoring", text: "Regionale Unternehmen oder Banken: der AED kann eine sichtbare Partnerschaftstafel tragen." },
    { title: "Spenden & Mäzenat", text: "Eltern, ehemalige Mitglieder oder private Stiftungen: einmaliger Kauf per Zielspende finanzierbar." },
    { title: "Öffentliche Hilfen", text: `Erkundigen Sie sich bei Ihrer Gemeinde oder Ihrem Kanton. Folgen Sie <a href="/fr/subventions-defibrillateur/" ${linkClass}>/fr/subventions-defibrillateur/</a>.` },
  ],

  clientsTitle: "Sie vertrauen uns",
  clients,

  faqTitle: "Häufige Fragen — Defibrillator Verein & Sportclub",
  faq: [
    {
      q: "Ist ein Defibrillator für Sportvereine in der Schweiz Pflicht?",
      a: `${legalSportDe} Klären Sie Anforderungen Ihrer Liga oder Ihres Kantons mit Vorstand und Haftpflichtversicherung.`,
    },
    {
      q: "Was kostet ein AED für einen Verein?",
      a: `Ab ${formatChfPrice(minPrice)} netto beim Kauf oder ab ${formatChfPrice(lowPrice)}/Monat netto in der Langzeitmiete (Verbrauchsmaterial inklusive). Für ein Turnier ab ${formatChfPrice(shortRentalLow)}/Monat Kurzzeitmiete. <a href="/de/defibrillator-kaufen/" ${linkClass}>Alle Preise ansehen</a>.`,
    },
    {
      q: "Miete oder Kauf für einen Club?",
      a: `Miete glättet das Jahresbudget und inkludiert Verbrauchsmaterial. Kauf eignet sich bei Rücklagen oder Spendenfinanzierung. Vergleichen Sie <a href="/de/defibrillator-mieten/" ${linkClass}>8 Mietformeln</a> und <a href="/de/defibrillator-kaufen/" ${linkClass}>Kaufpreise</a>.`,
    },
    {
      q: "Miete für Turnier oder Saison möglich?",
      a: `Ja. Kurzzeitmiete (1 bis 3 Monate) für Turniere oder Sportsaison, ab ${formatChfPrice(shortRentalLow)} netto/Monat. Miete 6 bis 12 Monate für eine volle Saison. Lieferung 48h, einfache Rückgabe.`,
    },
    {
      q: "Welcher AED für einen Aussenplatz?",
      a: "IP56-Modell (HeartSine 500P) in Aussengehäuse mit Beschilderung. Witterungsschutz und Installation nahe dem Platz, in unter 3 Gehminuten von jedem Spielpunkt erreichbar.",
    },
    {
      q: "Wer muss im Verein geschult werden?",
      a: "Keine Pflichtschulung für vollautomatischen AED: Sprachführung inklusive. Sensibilisierung von Trainern, Helfern und Sanitätern wird dennoch empfohlen für schnelles Handeln und den 144-Anruf.",
    },
    {
      q: "Kann der AED bei Kindern eingesetzt werden?",
      a: "Ja, mit pädiatrischen Elektroden oder Kindermodus. iAED-S1 hat Erwachsenen- und Kinderelektroden im selben Set. Der AED passt die Schockenergie an. Modellkompatibilität für Jugendkategorien prüfen.",
    },
    {
      q: "Wie den Kauf finanzieren?",
      a: "Sonderbeitrag, lokales Sponsoring, Elternspenden oder Gemeindezuschuss: mehrere Quellen kombinieren. CardioPro liefert ein detailliertes Angebot für Partnergespräche.",
    },
    {
      q: "Wer übernimmt die Wartung?",
      a: `Beim Kauf SAV innerhalb 72h durch CardioPro; Verbrauchsmaterial zu Ihren Lasten. Bei <a href="/de/defibrillator-mieten/" ${linkClass}>All-inclusive-Miete</a> sind Wartung und Verbrauchsmaterial in der Monatsrate inklusive.`,
    },
    {
      q: "Welche Lieferzeit?",
      a: "CardioPro liefert innerhalb 48h in der ganzen Schweiz. Paket einsatzbereit: Defibrillator, Elektroden, Batterie, Gehäuse und Beschilderung. Persönliches Angebot in 24h.",
    },
    {
      q: "Ist Ihre Struktur eher ein Unternehmen als ein Verein?",
      a: `Bei professionellen Clubs oder gewerblichen Strukturen: unsere Seite <a href="/de/defibrillator-betriebe/" ${linkClass}>Defibrillator für Betriebe</a> mit Formeln für Profibudgets.`,
    },
  ],

  ctaTitle: "Statten Sie Ihren Verein noch heute aus",
  ctaText: `Miete ab ${formatChfPrice(lowPrice)}/Monat oder Kauf ab ${formatChfPrice(minPrice)} netto — Lieferung 48h, Beratung für Vereine.`,
  ctaButton: "Kostenloses Angebot anfordern",
}

export const associationContent: Record<Locale, AssociationContent> = { fr, de }

function buildAssociationBreadcrumbSchema(c: AssociationContent) {
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

export function buildAssociationJsonLd(c: AssociationContent) {
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
      buildAssociationBreadcrumbSchema(c),
      {
        "@type": "Service",
        "@id": `${c.canonical}#service`,
        name:
          c.lang === "fr"
            ? "Équipement d'associations et clubs sportifs en défibrillateurs"
            : "Defibrillator-Ausstattung für Vereine und Sportclubs",
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
              ? "Associations et clubs sportifs suisses"
              : "Schweizer Vereine und Sportclubs",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name:
            c.lang === "fr"
              ? "Offres défibrillateur association"
              : "Defibrillator-Angebote für Vereine",
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
