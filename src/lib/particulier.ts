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
const iaedPrice = eurToChf(990)
const heartsine360Price = eurToChf(990)
const fredPrice = eurToChf(1290)

export interface FaqItem {
  q: string
  a: string
}

export interface HomeModel {
  name: string
  price: string
  criteria: string[]
  linkHref: string
  linkLabel: string
  image: string
  imageAlt: string
}

export interface ComparePoint {
  title: string
  text: string
}

export interface ParticulierContent extends QuoteFormContent {
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
  formCity: string
  formCityPlaceholder: string

  whyTitle: string
  whyParagraphs: string[]
  whyBenefits: { title: string; text: string }[]

  distributorTitle: string
  distributors: { alt: string; src: string }[]

  modelsTitle: string
  modelsIntro: string
  models: HomeModel[]

  compareTitle: string
  compareIntro: string
  comparePoints: ComparePoint[]
  compareRentalLink: string
  compareRentalLabel: string

  usageTitle: string
  usageParagraphs: string[]
  usageSteps: string[]

  maintenanceTitle: string
  maintenanceParagraphs: string[]
  maintenanceItems: { title: string; text: string }[]

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

const fr: ParticulierContent = {
  lang: "fr",
  canonical: "https://www.cardiopro.ch/fr/defibrillateur-particulier/",

  metaTitle: "Défibrillateur particulier : achat pour la maison en Suisse | CardioPro",
  metaDescription:
    "Un particulier peut acheter un défibrillateur en Suisse dès CHF 1 090.– hors TVA. Modèles simples pour la maison, guidage vocal, livraison 48h. Conseil gratuit.",
  ogTitle: "Défibrillateur particulier : achat pour la maison en Suisse | CardioPro",
  ogDescription:
    "Un particulier peut acheter un défibrillateur en Suisse dès CHF 1 090.– hors TVA. Modèles simples pour la maison, guidage vocal, livraison 48h. Conseil gratuit.",

  breadcrumbHome: "Accueil",
  breadcrumbParent: "Nos Offres",
  breadcrumbCurrentShort: "Défibrillateur particulier",

  heroTitle: "Défibrillateur pour particulier : équiper son domicile en Suisse",
  heroSub: `Oui, un particulier peut acheter un défibrillateur en Suisse, sans ordonnance, dès ${formatChfPrice(minPrice)} hors TVA. Voici comment choisir un modèle simple et sûr pour la maison.`,
  heroPills: ["Sans ordonnance", "Guidage vocal FR/DE", "Livraison 48h"],

  formTitle: "Conseil gratuit — réponse sous 24h",
  formSubtitle: "Sans engagement • Un conseiller vous rappelle",
  formName: "Nom complet",
  formCity: "Ville / Canton",
  formCityPlaceholder: "Genève, Vaud, Zurich…",
  formPhone: "Téléphone",
  formEmail: "Adresse email",
  formSubmit: "Parler à un conseiller",
  formLegal: "🔒 Vos données restent confidentielles",
  formSubject: "Conseil CardioPro Suisse — Défibrillateur particulier (FR)",

  whyTitle: "Un DAE à la maison : pour qui, pourquoi",
  whyParagraphs: [
    "Un défibrillateur automatique (DAE) à domicile peut être pertinent lorsqu'une personne du foyer présente un risque cardiaque identifié par un médecin, ou lorsque le logement est éloigné des secours. Ce n'est pas un substitut aux soins médicaux : c'est un complément de sécurité, sur recommandation médicale si possible.",
    "D'autres situations courantes : copropriété ou immeuble collectif, résidence secondaire en zone isolée, ou simple volonté de disposer d'un équipement accessible à toute la famille. CardioPro vous aide à choisir un modèle adapté, sans argument anxiogène ni promesse irréaliste.",
  ],
  whyBenefits: [
    { title: "Personne à risque au foyer", text: "Sur avis du cardiologue ou du médecin traitant, un DAE peut compléter la sécurité d'un patient cardiaque à domicile." },
    { title: "Habitat isolé", text: "En zone rurale ou montagne, le délai d'intervention des secours peut être plus long. Un DAE accessible réduit le temps avant défibrillation." },
    { title: "Copropriété & résidence secondaire", text: "Un appareil partagé dans les parties communes ou une résidence saisonnière peut profiter à plusieurs occupants." },
    { title: "Utilisation guidée", text: "Les DAE grand public analysent le rythme cardiaque et guident vocalement, sans compétence médicale préalable." },
  ],

  distributorTitle: "Distributeur agréé",
  distributors,

  modelsTitle: "Les modèles adaptés au domicile",
  modelsIntro:
    "Pour la maison, privilégiez un DAE entièrement automatique : guidage vocal en français ou allemand, électrodes pré-connectées et entretien minimal. Voici trois modèles que CardioPro recommande régulièrement aux particuliers.",
  models: [
    {
      name: "iAED-S1",
      price: formatChfPrice(iaedPrice) + " hors TVA",
      criteria: [
        "Guidage vocal pas à pas",
        "Électrodes adulte et enfant intégrées",
        "Le plus accessible — idéal premier DAE",
      ],
      linkHref: "/fr/defibrillateur-prix/",
      linkLabel: "voir le prix et la fiche du iAED-S1",
      image: `${IMG}/defibrillateurs/CARDIO_REX_IAD.webp`,
      imageAlt: "Défibrillateur iAED-S1 Noah Medical pour domicile",
    },
    {
      name: "HeartSine 360P",
      price: formatChfPrice(heartsine360Price) + " hors TVA",
      criteria: [
        "100 % automatique, sans bouton",
        "PadPak électrodes + batterie intégrés",
        "Compact (1,1 kg) — garantie 10 ans",
      ],
      linkHref: "/fr/defibrillateur-prix/",
      linkLabel: "voir le prix et la fiche du HeartSine 360P",
      image: `${IMG}/defibrillateur-automatique-Heartsine-360P.webp`,
      imageAlt: "Défibrillateur HeartSine 360P automatique pour la maison",
    },
    {
      name: "Schiller FRED PA-1",
      price: formatChfPrice(fredPrice) + " hors TVA",
      criteria: [
        "Batterie 6 ans sans remplacement",
        "Électrodes longue durée (30 mois)",
        "Entretien minimal sur 4 ans",
      ],
      linkHref: "/fr/defibrillateur-prix/",
      linkLabel: "voir le prix et la fiche du FRED PA-1",
      image: `${IMG}/defibrillateurs/FRED_P1.webp`,
      imageAlt: "Défibrillateur Schiller FRED PA-1 pour particulier",
    },
  ],

  compareTitle: "Acheter ou louer pour un domicile",
  compareIntro:
    "Pour un besoin permanent à la maison, l'achat est généralement plus économique sur le long terme. La location convient aux besoins temporaires.",
  comparePoints: [
    {
      title: "Achat — besoin permanent",
      text: `L'achat dès ${formatChfPrice(minPrice)} hors TVA est adapté si vous souhaitez équiper durablement votre domicile ou résidence secondaire. L'appareil vous appartient ; prévoyez le renouvellement des consommables tous les 2 à 5 ans.`,
    },
    {
      title: "Location — besoin temporaire",
      text: `La location dès ${formatChfPrice(lowPrice)}/mois hors TVA peut convenir pendant une convalescence, une location saisonnière ou un essai avant achat. Consommables et maintenance inclus selon la formule.`,
    },
  ],
  compareRentalLink: "/fr/location-defibrillateur/",
  compareRentalLabel: "formules de location de 1 à 60 mois",

  usageTitle: "Utiliser un défibrillateur sans être médecin",
  usageParagraphs: [
    "Un DAE entièrement automatique est conçu pour les personnes sans formation médicale. Il analyse le rythme cardiaque et ne délivre un choc électrique que si cela est médicalement nécessaire. Vous ne pouvez pas blesser quelqu'un en choquant à tort : l'appareil bloque le choc si le rythme n'est pas choquable.",
    "En cas d'urgence, composez d'abord le 144 (numéro d'urgence médicale en Suisse), puis suivez les instructions vocales du DAE. Le Swiss Resuscitation Council recommande l'initiation précoce de la réanimation cardio-pulmonaire en complément du DAE.",
  ],
  usageSteps: [
    "Appeler le 144 et mettre le téléphone en haut-parleur",
    "Allumer le DAE et coller les électrodes selon les pictogrammes",
    "Suivre les instructions vocales (massage cardiaque, choc automatique)",
    "Continuer jusqu'à l'arrivée des secours",
  ],

  maintenanceTitle: "Entretien d'un DAE à domicile",
  maintenanceParagraphs: [
    "Un DAE domestique nécessite peu d'entretien actif : les auto-tests quotidiens vérifient le bon fonctionnement. Vous devez toutefois surveiller la date de péremption des électrodes et de la batterie.",
    "CardioPro peut vous rappeler les échéances et fournir les consommables de remplacement. En location, l'entretien et le renouvellement sont inclus dans la mensualité.",
  ],
  maintenanceItems: [
    { title: "Auto-tests", text: "L'appareil effectue des vérifications automatiques. Un voyant vert indique qu'il est prêt à l'emploi." },
    { title: "Électrodes", text: "À remplacer tous les 2 à 4 ans selon le modèle, ou immédiatement après chaque utilisation." },
    { title: "Batterie", text: "Durée de vie de 4 à 5 ans en moyenne (jusqu'à 6 ans pour le FRED PA-1). Vérifiez l'indicateur sur l'appareil." },
    { title: "Coût annuel", text: `À l'achat, comptez ${formatChfPrice(eurToChf(150))} à ${formatChfPrice(eurToChf(300))} hors TVA/an pour la vérification et les consommables si nécessaire.` },
  ],

  faqTitle: "Questions fréquentes — défibrillateur à domicile",
  faq: [
    {
      q: "Un particulier peut-il acheter un défibrillateur en Suisse ?",
      a: `Oui. Tout particulier peut acheter un DAE auprès d'un distributeur agréé en Suisse, sans être une entreprise ni un établissement public. CardioPro livre à domicile sous 48h, dès ${formatChfPrice(minPrice)} hors TVA.`,
    },
    {
      q: "Faut-il une ordonnance pour acheter un défibrillateur ?",
      a: "Non. En Suisse, les DAE grand public certifiés CE sont vendus sans ordonnance aux particuliers. L'achat reste un acte de prévention personnelle : discutez-en avec votre médecin si une personne du foyer présente un risque cardiaque connu.",
    },
    {
      q: "Quel prix pour un DAE de maison ?",
      a: `Comptez dès ${formatChfPrice(minPrice)} hors TVA pour un modèle adapté au domicile (iAED-S1 ou HeartSine 360P). Les modèles à entretien réduit comme le FRED PA-1 sont à ${formatChfPrice(fredPrice)} hors TVA. <a href="/fr/defibrillateur-prix/" ${linkClass}>Comparez les 31 modèles et leurs prix</a>.`,
    },
    {
      q: "Quel modèle choisir pour un domicile ?",
      a: "Privilégiez un DAE 100 % automatique avec guidage vocal en français ou allemand. L'iAED-S1 convient aux budgets serrés, le HeartSine 360P à la compacité et la garantie 10 ans, le FRED PA-1 à l'entretien minimal. CardioPro vous conseille gratuitement selon votre situation.",
    },
    {
      q: "Faut-il être formé pour s'en servir ?",
      a: "Non pour un DAE automatique : l'appareil guide chaque étape par la voix. Une sensibilisation de 30 minutes peut toutefois rassurer les proches. CardioPro proposera prochainement une page dédiée à la formation défibrillateur.",
    },
    {
      q: "Peut-on se blesser ou blesser quelqu'un avec un DAE ?",
      a: "Un DAE ne délivre un choc que si le rythme cardiaque l'exige. Il refuse de choquer si le cœur bat normalement ou si le rythme n'est pas choquable. Suivez les instructions vocales et ne touchez pas la victime pendant le choc.",
    },
    {
      q: "Où installer le défibrillateur dans la maison ?",
      a: "Placez-le dans un endroit visible et accessible : entrée, salon ou couloir central. Évitez les pièces humides (salle de bain) ou très chaudes. Accrochez-le à hauteur d'adulte, à moins de 3 minutes de marche depuis tout point du logement.",
    },
    {
      q: "Quel entretien prévoir ?",
      a: `Vérifiez le voyant de statut une fois par mois. Remplacez les électrodes tous les 2 à 4 ans et la batterie tous les 4 à 5 ans selon le modèle. Budget annuel : ${formatChfPrice(eurToChf(150))} à ${formatChfPrice(eurToChf(300))} hors TVA, ou tout inclus en <a href="/fr/location-defibrillateur/" ${linkClass}>location</a>.`,
    },
    {
      q: "Peut-on l'emporter en vacances ou en voiture ?",
      a: "Oui, les modèles compacts (HeartSine 360P, iAED-S1) se transportent facilement en voiture ou en bagage. Respectez les consignes du constructeur pour la température. En avion, vérifiez les règles de la compagnie aérienne avant le départ.",
    },
    {
      q: "Fonctionne-t-il sur un enfant ?",
      a: "Oui, avec les électrodes adaptées. L'iAED-S1 intègre des électrodes adulte et enfant dans le même set. Pour les autres modèles, des électrodes pédiatriques sont disponibles. Le DAE adapte l'énergie du choc selon le mode choisi.",
    },
    {
      q: "Peut-on le louer plutôt que l'acheter ?",
      a: `Oui, la location dès ${formatChfPrice(lowPrice)}/mois hors TVA convient aux besoins temporaires : convalescence, location saisonnière ou essai. Découvrez nos <a href="/fr/location-defibrillateur/" ${linkClass}>formules de location de 1 à 60 mois</a>.`,
    },
    {
      q: "L'assurance maladie rembourse-t-elle l'achat ?",
      a: "En règle générale, l'assurance de base (LAMal) ne rembourse pas l'achat d'un DAE à domicile. Certaines assurances complémentaires ou invalidité peuvent accorder une aide ponctuelle. Renseignez-vous auprès de votre assureur et de votre médecin traitant.",
    },
  ],

  ctaTitle: "Besoin d'un conseil pour votre domicile ?",
  ctaText: "Nos conseillers vous aident à choisir le bon modèle, sans pression commerciale. Réponse sous 24h.",
  ctaButton: "Parler à un conseiller",
}

const de: ParticulierContent = {
  lang: "de",
  canonical: "https://www.cardiopro.ch/de/defibrillator-privat/",

  metaTitle: "Defibrillator Privat: Kauf fürs Zuhause in der Schweiz | CardioPro",
  metaDescription:
    "Privatpersonen können in der Schweiz einen Defibrillator ab CHF 1 090.– netto kaufen. Einfache Modelle fürs Zuhause, Sprachführung, Lieferung 48h. Kostenlose Beratung.",
  ogTitle: "Defibrillator Privat: Kauf fürs Zuhause in der Schweiz | CardioPro",
  ogDescription:
    "Privatpersonen können in der Schweiz einen Defibrillator ab CHF 1 090.– netto kaufen. Einfache Modelle fürs Zuhause, Sprachführung, Lieferung 48h. Kostenlose Beratung.",

  breadcrumbHome: "Startseite",
  breadcrumbParent: "Unsere Angebote",
  breadcrumbCurrentShort: "Defibrillator Privat",

  heroTitle: "Defibrillator für Privatpersonen: das Zuhause ausstatten",
  heroSub: `Ja, Privatpersonen können in der Schweiz einen Defibrillator ohne Rezept kaufen, ab ${formatChfPrice(minPrice)} netto. So wählen Sie ein einfaches und sicheres Modell fürs Zuhause.`,
  heroPills: ["Ohne Rezept", "Sprachführung DE/FR", "Lieferung 48h"],

  formTitle: "Kostenlose Beratung — Antwort in 24h",
  formSubtitle: "Unverbindlich · Ein Berater ruft Sie zurück",
  formName: "Vollständiger Name",
  formCity: "Ort / Kanton",
  formCityPlaceholder: "Zürich, Bern, Genf…",
  formPhone: "Telefon",
  formEmail: "E-Mail-Adresse",
  formSubmit: "Mit Berater sprechen",
  formLegal: "🔒 Ihre Daten bleiben vertraulich",
  formSubject: "Beratung CardioPro Schweiz — Defibrillator Privat (DE)",

  whyTitle: "Ein AED zuhause: für wen, warum",
  whyParagraphs: [
    "Ein vollautomatischer Defibrillator (AED) zuhause kann sinnvoll sein, wenn eine Person im Haushalt ein vom Arzt festgestelltes Herzrisiko hat oder die Wohnung weit von Rettungsdiensten entfernt liegt. Er ersetzt keine medizinische Betreuung, sondern ergänzt die Sicherheit — möglichst auf ärztliche Empfehlung.",
    "Weitere typische Situationen: Mehrfamilienhaus, Ferienwohnung in abgelegener Lage oder der Wunsch, ein Gerät für die ganze Familie bereitzustellen. CardioPro hilft bei der Modellauswahl — sachlich und ohne Angstmache.",
  ],
  whyBenefits: [
    { title: "Risikoperson im Haushalt", text: "Auf Empfehlung des Kardiologen kann ein AED die Sicherheit eines Herzpatienten zuhause ergänzen." },
    { title: "Abgelegene Wohnlage", text: "In ländlichen oder Bergregionen kann die Rettungszeit länger sein. Ein erreichbarer AED verkürzt die Zeit bis zur Defibrillation." },
    { title: "Mehrfamilienhaus & Ferienhaus", text: "Ein Gerät in Gemeinschaftsräumen oder einer saisonalen Residenz kann mehreren Bewohnern nutzen." },
    { title: "Geführte Nutzung", text: "AED für Laien analysieren den Herzrhythmus und führen per Sprachanweisung — ohne medizinische Vorkenntnisse." },
  ],

  distributorTitle: "Autorisierter Händler",
  distributors,

  modelsTitle: "Modelle fürs Zuhause",
  modelsIntro:
    "Fürs Zuhause empfehlen wir einen vollautomatischen AED: Sprachführung auf Deutsch oder Französisch, vorverbundene Elektroden und minimaler Wartungsaufwand. Drei Modelle, die CardioPro Privatpersonen regelmässig empfiehlt:",
  models: [
    {
      name: "iAED-S1",
      price: formatChfPrice(iaedPrice) + " netto",
      criteria: [
        "Schritt-für-Schritt-Sprachführung",
        "Integrierte Erwachsenen- und Kinderelektroden",
        "Am günstigsten — ideal als erster AED",
      ],
      linkHref: "/de/defibrillator-kaufen/",
      linkLabel: "Preis und Datenblatt des iAED-S1 ansehen",
      image: `${IMG}/defibrillateurs/CARDIO_REX_IAD.webp`,
      imageAlt: "Defibrillator iAED-S1 Noah Medical fürs Zuhause",
    },
    {
      name: "HeartSine 360P",
      price: formatChfPrice(heartsine360Price) + " netto",
      criteria: [
        "100 % automatisch, ohne Taste",
        "PadPak Elektroden + Batterie integriert",
        "Kompakt (1,1 kg) — 10 Jahre Garantie",
      ],
      linkHref: "/de/defibrillator-kaufen/",
      linkLabel: "Preis und Datenblatt des HeartSine 360P ansehen",
      image: `${IMG}/defibrillateur-automatique-Heartsine-360P.webp`,
      imageAlt: "HeartSine 360P vollautomatischer Defibrillator fürs Zuhause",
    },
    {
      name: "Schiller FRED PA-1",
      price: formatChfPrice(fredPrice) + " netto",
      criteria: [
        "Batterie 6 Jahre ohne Austausch",
        "Langlebige Elektroden (30 Monate)",
        "Minimaler Wartungsaufwand über 4 Jahre",
      ],
      linkHref: "/de/defibrillator-kaufen/",
      linkLabel: "Preis und Datenblatt des FRED PA-1 ansehen",
      image: `${IMG}/defibrillateurs/FRED_P1.webp`,
      imageAlt: "Schiller FRED PA-1 Defibrillator für Privatpersonen",
    },
  ],

  compareTitle: "Kaufen oder mieten fürs Zuhause",
  compareIntro:
    "Bei dauerhaftem Bedarf zuhause ist der Kauf langfristig meist günstiger. Die Miete eignet sich für temporäre Situationen.",
  comparePoints: [
    {
      title: "Kauf — dauerhafter Bedarf",
      text: `Ab ${formatChfPrice(minPrice)} netto, wenn Sie Ihr Zuhause oder Ferienhaus dauerhaft ausstatten möchten. Das Gerät gehört Ihnen; Verbrauchsmaterial alle 2 bis 5 Jahre einplanen.`,
    },
    {
      title: "Miete — temporärer Bedarf",
      text: `Ab ${formatChfPrice(lowPrice)}/Monat netto während Genesung, saisonaler Vermietung oder als Test vor dem Kauf. Verbrauchsmaterial und Wartung je nach Formel inklusive.`,
    },
  ],
  compareRentalLink: "/de/defibrillator-mieten/",
  compareRentalLabel: "Mietformeln von 1 bis 60 Monaten",

  usageTitle: "Defibrillator nutzen ohne Arzt zu sein",
  usageParagraphs: [
    "Ein vollautomatischer AED ist für Laien ohne medizinische Ausbildung konzipiert. Er analysiert den Herzrhythmus und gibt nur dann einen Schock ab, wenn dies medizinisch nötig ist. Ein versehentlicher Schock bei normalem Herzrhythmus ist ausgeschlossen.",
    "Im Notfall zuerst 144 wählen (medizinische Notrufnummer in der Schweiz), dann den Sprachanweisungen des AED folgen. Der Swiss Resuscitation Council empfiehlt die frühzeitige Herzdruckmassage als Ergänzung zum AED.",
  ],
  usageSteps: [
    "144 anrufen und Telefon auf Lautsprecher stellen",
    "AED einschalten und Elektroden gemäss Piktogrammen anbringen",
    "Sprachanweisungen folgen (Herzdruckmassage, automatischer Schock)",
    "Fortfahren bis die Rettung eintrifft",
  ],

  maintenanceTitle: "Wartung eines AED zuhause",
  maintenanceParagraphs: [
    "Ein AED zuhause braucht wenig aktive Wartung: tägliche Selbsttests prüfen die Funktion. Sie müssen jedoch das Ablaufdatum von Elektroden und Batterie im Auge behalten.",
    "CardioPro kann Sie an Fristen erinnern und Ersatz-Verbrauchsmaterial liefern. Bei der Miete sind Wartung und Erneuerung in der Monatsrate inklusive.",
  ],
  maintenanceItems: [
    { title: "Selbsttests", text: "Das Gerät führt automatische Prüfungen durch. Eine grüne Leuchte zeigt Einsatzbereitschaft." },
    { title: "Elektroden", text: "Alle 2 bis 4 Jahre je nach Modell ersetzen, oder sofort nach jedem Einsatz." },
    { title: "Batterie", text: "Lebensdauer 4 bis 5 Jahre im Durchschnitt (bis 6 Jahre beim FRED PA-1). Kontrollleuchte am Gerät prüfen." },
    { title: "Jährliche Kosten", text: `Beim Kauf ${formatChfPrice(eurToChf(150))} bis ${formatChfPrice(eurToChf(300))} netto/Jahr für Prüfung und Verbrauchsmaterial.` },
  ],

  faqTitle: "Häufige Fragen — Defibrillator zuhause",
  faq: [
    {
      q: "Kann eine Privatperson einen Defibrillator in der Schweiz kaufen?",
      a: `Ja. Jede Privatperson kann einen AED bei einem autorisierten Händler in der Schweiz kaufen, ohne Unternehmen oder öffentliche Einrichtung zu sein. CardioPro liefert innerhalb 48h, ab ${formatChfPrice(minPrice)} netto.`,
    },
    {
      q: "Braucht man ein Rezept für einen Defibrillator?",
      a: "Nein. In der Schweiz werden CE-zertifizierte AED für Laien ohne Rezept an Privatpersonen verkauft. Der Kauf bleibt eine persönliche Präventionsentscheidung — besprechen Sie dies mit Ihrem Arzt bei bekanntem Herzrisiko im Haushalt.",
    },
    {
      q: "Was kostet ein AED fürs Zuhause?",
      a: `Ab ${formatChfPrice(minPrice)} netto für ein haushaltstaugliches Modell (iAED-S1 oder HeartSine 360P). Modelle mit geringem Wartungsaufwand wie der FRED PA-1 kosten ${formatChfPrice(fredPrice)} netto. <a href="/de/defibrillator-kaufen/" ${linkClass}>Vergleichen Sie 31 Modelle und Preise</a>.`,
    },
    {
      q: "Welches Modell für ein Zuhause wählen?",
      a: "Bevorzugen Sie einen vollautomatischen AED mit Sprachführung auf Deutsch oder Französisch. iAED-S1 für knappes Budget, HeartSine 360P für Kompaktheit und 10 Jahre Garantie, FRED PA-1 für minimalen Wartungsaufwand. CardioPro berät Sie kostenlos.",
    },
    {
      q: "Muss man geschult sein, um ihn zu nutzen?",
      a: "Nein beim vollautomatischen AED: das Gerät führt jeden Schritt an. Eine 30-minütige Sensibilisierung kann Angehörige beruhigen. Eine Schulungsseite folgt demnächst auf cardiopro.ch.",
    },
    {
      q: "Kann man sich oder andere mit einem AED verletzen?",
      a: "Ein AED gibt nur bei erforderlichem Herzrhythmus einen Schock ab. Bei normalem oder nicht schockbarem Rhythmus blockiert er den Schock. Folgen Sie den Sprachanweisungen und berühren Sie die Person während des Schocks nicht.",
    },
    {
      q: "Wo den Defibrillator im Haus installieren?",
      a: "An einem sichtbaren, zugänglichen Ort: Eingang, Wohnzimmer oder zentraler Flur. Feuchte Räume (Bad) oder sehr warme Orte vermeiden. Auf Erwachsenenhöhe, in weniger als 3 Gehminuten von überall erreichbar.",
    },
    {
      q: "Welche Wartung ist nötig?",
      a: `Statusleuchte monatlich prüfen. Elektroden alle 2 bis 4 Jahre, Batterie alle 4 bis 5 Jahre ersetzen. Jahresbudget: ${formatChfPrice(eurToChf(150))} bis ${formatChfPrice(eurToChf(300))} netto, oder alles inklusive bei der <a href="/de/defibrillator-mieten/" ${linkClass}>Miete</a>.`,
    },
    {
      q: "Kann man ihn in den Ferien oder im Auto mitnehmen?",
      a: "Ja, kompakte Modelle (HeartSine 360P, iAED-S1) lassen sich gut im Auto oder Gepäck transportieren. Temperaturvorgaben des Herstellers beachten. Flugreisen: Regeln der Airline vor Abreise prüfen.",
    },
    {
      q: "Funktioniert er bei Kindern?",
      a: "Ja, mit passenden Elektroden. Der iAED-S1 hat Erwachsenen- und Kinderelektroden im selben Set. Bei anderen Modellen sind pädiatrische Elektroden erhältlich. Der AED passt die Schockenergie je nach Modus an.",
    },
    {
      q: "Lieber mieten als kaufen?",
      a: `Ja, ab ${formatChfPrice(lowPrice)}/Monat netto für temporären Bedarf: Genesung, saisonale Vermietung oder Test. Entdecken Sie unsere <a href="/de/defibrillator-mieten/" ${linkClass}>Mietformeln von 1 bis 60 Monaten</a>.`,
    },
    {
      q: "Übernimmt die Krankenkasse die Kosten?",
      a: "Grundsätzlich übernimmt die Grundversicherung (OKP) den Kauf eines AED zuhause nicht. Ergänzungs- oder Invalidenversicherungen können punktuelle Beiträge gewähren. Erkundigen Sie sich bei Ihrer Versicherung und Ihrem Hausarzt.",
    },
  ],

  ctaTitle: "Beratung für Ihr Zuhause gewünscht?",
  ctaText: "Unsere Berater helfen bei der Modellwahl — ohne Verkaufsdruck. Antwort innerhalb 24h.",
  ctaButton: "Mit Berater sprechen",
}

export const particulierContent: Record<Locale, ParticulierContent> = { fr, de }

function buildParticulierBreadcrumbSchema(c: ParticulierContent) {
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

export function buildParticulierJsonLd(c: ParticulierContent) {
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
      buildParticulierBreadcrumbSchema(c),
      {
        "@type": "Service",
        "@id": `${c.canonical}#service`,
        name:
          c.lang === "fr"
            ? "Défibrillateur pour particuliers et domicile"
            : "Defibrillator für Privatpersonen und Zuhause",
        description: c.metaDescription,
        serviceType:
          c.lang === "fr"
            ? "Vente et location de dispositifs médicaux"
            : "Verkauf und Miete von Medizinprodukten",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: "Switzerland" },
        audience: {
          "@type": "PeopleAudience",
          name: c.lang === "fr" ? "Particuliers en Suisse" : "Privatpersonen in der Schweiz",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name:
            c.lang === "fr"
              ? "Offres défibrillateur particulier"
              : "Defibrillator-Angebote für Privatpersonen",
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
