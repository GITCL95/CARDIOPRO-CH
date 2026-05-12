export type Locale = "fr" | "de"

export interface Translations {
  lang: Locale
  langAlt: Locale
  langAltLabel: string
  langAltHref: string
  dir: "ltr"

  // Meta
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ogDescription: string

  // Header
  phoneLabel: string
  emailLabel: string
  hours: string
  hoursLabel: string
  quoteOnline: string
  skipLink: string
  logoAriaLabel: string
  menuOpenAriaLabel: string
  navEnterprise: string
  navProducts: string
  navOffers: string
  navSolutions: string
  navContact: string

  // Hero
  heroTag: string
  heroTitle: string
  heroParagraph: string
  heroCta1: string
  heroCta2: string
  heroProduct1: string
  heroProduct2: string
  heroProduct3: string

  // Safety
  safetyTag: string
  safetyTitle: string
  safetyP1: string
  safetyP2: string
  safetyCta1: string
  safetyCta2: string

  // Stats
  statsTag: string
  statsTitle: string
  statsSubtitle: string
  stat1Number: string
  stat1Sub: string
  stat1Text: string
  stat2Number: string
  stat2Sub: string
  stat2Text: string
  stat3Number: string
  stat3Sub: string
  stat3Text: string
  stat4Number: string
  stat4Sub: string
  stat4Text: string

  // Offers
  offersTag: string
  offersTitle: string
  offersIntro: string
  tabRental: string
  tabPurchase: string
  packIncludesTitle: string
  packIncludes: string[]
  packAccessName: string
  packZenName: string
  packBadge: string
  rentalAccessPrice: string
  rentalAccessUnit: string
  rentalAccessVat: string
  rentalZenPrice: string
  rentalZenUnit: string
  rentalZenVat: string
  purchaseAccessPrice: string
  purchaseAccessUnit: string
  purchaseAccessVat: string
  purchaseZenPrice: string
  purchaseZenUnit: string
  purchaseZenVat: string
  packContentLabel: string
  feature1: string
  feature2: string
  feature3: string
  feature4: string
  feature5: string
  feature6: string
  feature7: string
  btnChoose: string
  btnLearnMore: string

  // Blog / Solutions
  blogTag: string
  blogTitle: string
  blogIntro: string
  article1Tag: string
  article1Title: string
  article1Excerpt: string
  article1Link: string
  article2Tag: string
  article2Title: string
  article2Excerpt: string
  article2Link: string
  article3Tag: string
  article3Title: string
  article3Excerpt: string
  article3Link: string

  // FAQ
  faqTag: string
  faqTitle: string
  faqSubtitle: string
  faq1Q: string
  faq1A: string
  faq2Q: string
  faq2A: string
  faq3Q: string
  faq3A: string
  faq4Q: string
  faq4A: string
  faq5Q: string
  faq5A: string

  // Contact
  contactTag: string
  contactTitle: string
  contactSubtitle: string
  labelFirstName: string
  placeholderFirstName: string
  labelLastName: string
  placeholderLastName: string
  labelEmail: string
  placeholderEmail: string
  labelPhone: string
  placeholderPhone: string
  labelCompany: string
  placeholderCompany: string
  labelNeed: string
  optionDefault: string
  optionRental: string
  optionPurchase: string
  optionTraining: string
  optionInfo: string
  labelMessage: string
  placeholderMessage: string
  btnSubmit: string
  formLegal: string
  formSubject: string

  // Advantages
  advTag: string
  advTitle: string
  adv1Title: string
  adv1Text: string
  adv2Title: string
  adv2Text: string
  adv3Title: string
  adv3Text: string
  adv4Title: string
  adv4Text: string
  adv5Title: string
  adv5Text: string
  adv6Title: string
  adv6Text: string
  quote: string
  quoteSubtext: string
  emergency: string
  emergencyNumber: string

  // Footer
  footerSlogan: string
  footerAbout: string
  footerContactTitle: string
  footerWhyTitle: string
  footerWhy1: string
  footerWhy2: string
  footerWhy3: string
  footerWhy4: string
  footerWhy5: string
  footerWhy6: string
  footerQuickTitle: string
  footerAdvisorName: string
  footerAdvisorReply: string
  footerCopyright: string
  footerLegal: string
  footerCgv: string
  footerPrivacy: string

  // Float CTA
  floatCta: string
}

const fr: Translations = {
  lang: "fr",
  langAlt: "de",
  langAltLabel: "DE",
  langAltHref: "/de/",
  dir: "ltr",

  metaTitle: "Défibrillateur Suisse | Vente & Location DAE — CardioPro.ch",
  metaDescription:
    "Achetez ou louez votre défibrillateur en Suisse. Appareils certifiés CE, formation incluse, livraison sous 48h. Devis gratuit : +41 22 518 09 36.",
  ogTitle: "CardioPro Suisse — Défibrillateurs en Suisse",
  ogDescription:
    "Vente et location de défibrillateurs en Suisse. Livraison 48h. Dès CHF 45.–/mois.",

  phoneLabel: "Téléphone CardioPro Suisse",
  emailLabel: "Email CardioPro Suisse",
  hours: "Lun–Ven 9h00–18h00",
  hoursLabel: "Horaires d'ouverture",
  quoteOnline: "Devis en ligne",
  skipLink: "Aller au contenu principal",
  logoAriaLabel: "CardioPro Suisse — Accueil",
  menuOpenAriaLabel: "Ouvrir le menu",
  navEnterprise: "L'Entreprise",
  navProducts: "Nos Produits",
  navOffers: "Nos Offres",
  navSolutions: "Nos Solutions",
  navContact: "Contact",

  heroTag: "Spécialiste Suisse",
  heroTitle: "Obtenez des défibrillateurs pour votre entreprise en Suisse",
  heroParagraph:
    "Avec CardioPro Suisse, l'accès aux défibrillateurs devient simple et rapide. Disponible à la vente et à la location, trouvez la formule qui convient pour assurer la sécurité de vos collaborateurs et de votre clientèle dans toute la Suisse.",
  heroCta1: "Choisir un défibrillateur",
  heroCta2: "Demander un devis",
  heroProduct1: "DAE Semi-auto",
  heroProduct2: "DAE Automatique",
  heroProduct3: "Pack Complet",

  safetyTag: "Sécurité & prévention",
  safetyTitle:
    "Commandez dès maintenant vos défibrillateurs pour une sécurité optimisée",
  safetyP1:
    "Chez CardioPro Suisse, nous simplifions le processus de commande de défibrillateurs automatiques externes (DAE) pour optimiser la sécurité dans votre établissement. Avec une gamme de produits de qualité et des options de vente et de location, commandez rapidement et en toute confiance.",
  safetyP2:
    "La SUVA (Caisse nationale suisse d'assurance en cas d'accidents) recommande l'installation de défibrillateurs dans les entreprises rassemblant de nombreuses personnes. La Fondation Suisse de Cardiologie conseille également l'équipement dans les salles de sport, centres commerciaux et grandes entreprises. Bien qu'aucune obligation fédérale n'existe, installer un DAE est un acte de prévention responsable qui peut sauver des vies — et protéger juridiquement votre entreprise.",
  safetyCta1: "Voir nos offres",
  safetyCta2: "Nous contacter",

  statsTag: "Chiffres Suisse",
  statsTitle: "Comment le défibrillateur peut-il sauver des vies ?",
  statsSubtitle:
    "4 chiffres qui soulignent l'importance cruciale d'avoir un défibrillateur à portée de main en Suisse :",
  stat1Number: "8 000",
  stat1Sub: "arrêts cardiaques / an",
  stat1Text:
    "Chaque année en Suisse, environ 8 000 personnes subissent un arrêt cardio-circulatoire (source : Fondation Suisse de Cardiologie).",
  stat2Number: "5%",
  stat2Sub: "de survivants",
  stat2Text:
    "Seulement 5% des victimes d'un arrêt cardiaque en Suisse survivent. La défibrillation rapide peut multiplier ces chances par 10.",
  stat3Number: "85%",
  stat3Sub: "hors hôpital",
  stat3Text:
    "85% des arrêts cardiaques se produisent en dehors d'un hôpital — au bureau, dans la rue, chez soi. Avoir un DAE à portée change tout.",
  stat4Number: "10 min",
  stat4Sub: "d'attente des secours",
  stat4Text:
    "En Suisse, il faut en moyenne 10 à 15 minutes pour que les secours professionnels arrivent. Le DAE comble ce délai critique.",

  offersTag: "Nos Offres",
  offersTitle: "Vente et location de défibrillateurs : nos offres",
  offersIntro:
    "En tant que spécialistes de la location et de la vente de défibrillateurs, chez CardioPro Suisse, nous nous engageons à vous fournir des produits de la plus haute qualité.",
  tabRental: "Location",
  tabPurchase: "Achat",
  packIncludesTitle: "Chaque pack inclut",
  packIncludes: [
    "Garantie 8 ans",
    "Livraison rapide et installation",
    "Électrodes adultes et pédiatriques",
    "Trousse de secours complète",
    "Kit signalétique conforme SUVA",
  ],
  packAccessName: "Pack Access",
  packZenName: "Pack Zen",
  packBadge: "Recommandé",
  rentalAccessPrice: "CHF 45.–",
  rentalAccessUnit: "HT/mois",
  rentalAccessVat: "Sur 60 mois — TVA 8,1% en sus",
  rentalZenPrice: "CHF 59.–",
  rentalZenUnit: "HT/mois",
  rentalZenVat: "Sur 60 mois — TVA 8,1% en sus",
  purchaseAccessPrice: "CHF 1 090.–",
  purchaseAccessUnit: "HT",
  purchaseAccessVat: "Paiement unique — TVA 8,1% en sus",
  purchaseZenPrice: "CHF 1 390.–",
  purchaseZenUnit: "HT",
  purchaseZenVat: "Paiement unique — TVA 8,1% en sus",
  packContentLabel: "Contenu :",
  feature1: "Garantie 8 ans incluse",
  feature2: "Livraison + installation",
  feature3: "Électrodes adultes & pédia.",
  feature4: "Trousse de secours",
  feature5: "Kit signalétique SUVA",
  feature6: "Assistant massage cardiaque",
  feature7: "Support mural inclus",
  btnChoose: "Choisir",
  btnLearnMore: "En savoir +",

  blogTag: "Nos Solutions",
  blogTitle: "Protéger des vies grâce à un défibrillateur",
  blogIntro:
    "Chez CardioPro Suisse, notre philosophie est claire : démocratiser l'accès au défibrillateur automatique pour sauver des vies. La Suisse s'appuie sur un réseau croissant de First Responders et sur des initiatives comme defikarte.ch, mais chaque entreprise peut contribuer en s'équipant.",
  article1Tag: "Statistiques",
  article1Title: "Arrêt cardiaque en Suisse : les chiffres clés",
  article1Excerpt:
    "8 000 arrêts par an, seulement 5% de survivants… Découvrez pourquoi la présence d'un DAE dans votre entreprise peut faire la différence.",
  article1Link: "Lire l'article",
  article2Tag: "Législation",
  article2Title: "Défibrillateur en Suisse : que dit la loi ?",
  article2Excerpt:
    "OLT3 article 36, recommandations SUVA, Fondation Suisse de Cardiologie… Le point sur le cadre légal et la responsabilité de l'employeur.",
  article2Link: "Lire l'article",
  article3Tag: "Guide pratique",
  article3Title: "Comment utiliser un défibrillateur DAE : guide pratique",
  article3Excerpt:
    "Suivez les instructions vocales, placez les électrodes et délivrez le choc. Un geste simple qui peut sauver une vie en attendant le 144.",
  article3Link: "Lire l'article",

  faqTag: "Questions fréquentes",
  faqTitle: "FAQ",
  faqSubtitle:
    "Tout ce que vous devez savoir sur les défibrillateurs en Suisse",
  faq1Q: "Qu'est-ce qu'un défibrillateur ?",
  faq1A: "Un défibrillateur est un appareil conçu pour rétablir le rythme cardiaque normal en cas d'arrêt cardiaque. Il administre un bref choc électrique lorsque le cœur présente un dysfonctionnement grave. Deux électrodes autoadhésives sont placées sur le thorax de la victime. Le défibrillateur est portable et fonctionne sur batterie.",
  faq2Q: "Le défibrillateur est-il obligatoire en Suisse ?",
  faq2A: "Il n'existe aucune obligation fédérale d'installer un défibrillateur en Suisse, ni pour les entreprises ni pour les lieux publics. La compétence relève des cantons. L'OLT3 (Ordonnance 3 relative à la Loi sur le travail), article 36, réglemente les premiers secours en entreprise. Depuis 2017, le DAE n'est plus listé dans le matériel indicatif de premiers secours. Cependant, la SUVA et la Fondation Suisse de Cardiologie recommandent fortement l'installation dans les entreprises à fort effectif ou éloignées des secours. Le médecin du travail se prononce au cas par cas dans le cadre de la directive MSST.",
  faq3Q: "Faut-il une formation pour utiliser un défibrillateur en Suisse ?",
  faq3A: "Non. Toute personne peut utiliser un DAE entièrement automatique sans formation préalable. L'appareil guide vocalement l'utilisateur étape par étape. Cependant, la SUVA recommande que les secouristes d'entreprise soient formés à l'utilisation du DAE si un tel appareil est à disposition. CardioPro Suisse propose des formations en français et en allemand, conformes aux recommandations du Swiss Resuscitation Council (SRC).",
  faq4Q: "Combien coûte un défibrillateur en Suisse ?",
  faq4A: "Chez CardioPro Suisse, le défibrillateur est disponible à l'achat à partir de CHF 1 090.– HT ou en location à partir de CHF 45.–/mois HT (TVA suisse de 8,1%). Nos packs incluent l'appareil, les électrodes, la signalétique, la trousse de secours et l'accompagnement à l'enregistrement sur defikarte.ch.",
  faq5Q: "CardioPro livre-t-elle dans toute la Suisse ?",
  faq5A: "Oui. CardioPro Suisse assure la livraison et l'installation sur l'ensemble du territoire : Genève, Lausanne, Berne, Zürich, Bâle, Lucerne, Fribourg, Neuchâtel et toutes les communes. Notre équipe intervient sous 48h ouvrées en Suisse romande et alémanique.",

  contactTag: "Contactez-nous",
  contactTitle: "Demandez votre devis gratuit",
  contactSubtitle:
    "Notre équipe vous répond sous 24h ouvrées. Remplissez le formulaire et recevez une offre personnalisée pour votre défibrillateur.",
  labelFirstName: "Prénom",
  placeholderFirstName: "Jean",
  labelLastName: "Nom",
  placeholderLastName: "Dupont",
  labelEmail: "Email",
  placeholderEmail: "jean.dupont@entreprise.ch",
  labelPhone: "Téléphone",
  placeholderPhone: "+41 XX XXX XX XX",
  labelCompany: "Entreprise / Organisation",
  placeholderCompany: "Nom de votre société",
  labelNeed: "Votre besoin",
  optionDefault: "Choisissez une option",
  optionRental: "Location de défibrillateur",
  optionPurchase: "Achat de défibrillateur",
  optionTraining: "Formation DAE",
  optionInfo: "Demande d'information",
  labelMessage: "Message",
  placeholderMessage: "Décrivez votre projet ou posez vos questions…",
  btnSubmit: "Envoyer ma demande",
  formLegal:
    "En soumettant ce formulaire, vous acceptez d'être contacté par CardioPro Suisse. Aucun démarchage — nous respectons votre vie privée.",
  formSubject: "Nouveau devis CardioPro Suisse (FR)",

  advTag: "Pourquoi nous choisir",
  advTitle: "Les avantages CardioPro Suisse",
  adv1Title: "Produits certifiés CE médical",
  adv1Text: "Conformes aux normes suisses et européennes — garantie 8 ans.",
  adv2Title: "Permanence technique 7j/7",
  adv2Text: "Notre équipe technique est disponible 7 jours sur 7 par téléphone.",
  adv3Title: "Maintenance et intervention sous 72h",
  adv3Text: "Service de maintenance réactif sur tout le territoire suisse.",
  adv4Title: "Équipe réactive & suivi personnalisé",
  adv4Text:
    "Un conseiller dédié vous accompagne de la commande à l'installation.",
  adv5Title: "Veille permanente de la législation suisse",
  adv5Text:
    "OLT3, recommandations SUVA, Fondation Suisse de Cardiologie… nous vous tenons informés.",
  adv6Title: "Offre adaptée : achat ou location",
  adv6Text:
    "Choisissez la formule qui correspond à votre budget et à vos besoins.",
  quote: "Ensemble, faisons battre les cœurs plus longtemps.",
  quoteSubtext: "Contactez notre équipe — réponse sous 24h ouvrées",
  emergency: "Urgences sanitaires :",
  emergencyNumber: "144",

  footerSlogan: "Vente et location de défibrillateurs en Suisse",
  footerAbout:
    "CardioPro Suisse est votre partenaire de confiance pour la vente et la location de défibrillateurs (DAE/AED) dans toute la Suisse romande et alémanique.",
  footerContactTitle: "Contactez nous !",
  footerWhyTitle: "Pourquoi nous choisir ?",
  footerWhy1: "Certifiés CE médical",
  footerWhy2: "Permanence 7j/7",
  footerWhy3: "Location dès CHF 45.–/mois",
  footerWhy4: "Achat dès CHF 1 090.– HT",
  footerWhy5: "Formation FR & DE",
  footerWhy6: "Livraison 48h Suisse",
  footerQuickTitle: "Accès rapide",
  footerAdvisorName: "Votre conseiller CardioPro",
  footerAdvisorReply: "Réponse garantie sous 24h ouvrées",
  footerCopyright:
    "© 2026 CardioPro Suisse — Une marque CardioPro · Dernière mise à jour : avril 2026",
  footerLegal: "Mentions légales",
  footerCgv: "CGV",
  footerPrivacy: "Confidentialité",

  floatCta: "Devis En Ligne",
}

const de: Translations = {
  lang: "de",
  langAlt: "fr",
  langAltLabel: "FR",
  langAltHref: "/fr/",
  dir: "ltr",

  metaTitle:
    "Defibrillator Schweiz | Verkauf & Vermietung AED — CardioPro.ch",
  metaDescription:
    "Kaufen oder mieten Sie Ihren Defibrillator in der Schweiz. CE-zertifizierte Geräte, Schulung inklusive, Lieferung innerhalb von 48 Stunden. Kostenloses Angebot: +41 22 518 09 36.",
  ogTitle: "CardioPro Schweiz — Defibrillatoren in der Schweiz",
  ogDescription:
    "Verkauf und Vermietung von Defibrillatoren in der Schweiz. Lieferung 48h. Ab CHF 45.–/Monat.",

  phoneLabel: "Telefon CardioPro Schweiz",
  emailLabel: "E-Mail CardioPro Schweiz",
  hours: "Mo–Fr 9:00–18:00",
  hoursLabel: "Öffnungszeiten",
  quoteOnline: "Angebot online",
  skipLink: "Zum Hauptinhalt springen",
  logoAriaLabel: "CardioPro Schweiz — Startseite",
  menuOpenAriaLabel: "Menü öffnen",
  navEnterprise: "Unternehmen",
  navProducts: "Produkte",
  navOffers: "Angebote",
  navSolutions: "Lösungen",
  navContact: "Kontakt",

  heroTag: "Spezialist Schweiz",
  heroTitle: "Defibrillatoren für Ihr Unternehmen in der Schweiz",
  heroParagraph:
    "Mit CardioPro Schweiz wird der Zugang zu Defibrillatoren einfach und schnell. Verfügbar zum Kauf und zur Miete — finden Sie die passende Lösung, um die Sicherheit Ihrer Mitarbeitenden und Kunden in der gesamten Schweiz zu gewährleisten.",
  heroCta1: "Defibrillator wählen",
  heroCta2: "Angebot anfordern",
  heroProduct1: "Halbautomatisch",
  heroProduct2: "Vollautomatisch",
  heroProduct3: "Komplett-Set",

  safetyTag: "Sicherheit & Prävention",
  safetyTitle:
    "Bestellen Sie jetzt Ihre Defibrillatoren für optimale Sicherheit",
  safetyP1:
    "Bei CardioPro Schweiz vereinfachen wir die Bestellung von automatisierten externen Defibrillatoren (AED), um die Sicherheit in Ihrem Betrieb zu optimieren. Mit einem qualitativ hochwertigen Produktsortiment und Optionen für Kauf und Miete bestellen Sie schnell und mit voller Zuversicht.",
  safetyP2:
    "Die SUVA (Schweizerische Unfallversicherungsanstalt) empfiehlt die Installation von Defibrillatoren in Unternehmen mit vielen Mitarbeitenden oder Publikumsverkehr. Die Schweizerische Herzstiftung rät ebenfalls zur Ausstattung von Sportstätten, Einkaufszentren und grossen Unternehmen. Obwohl keine Bundespflicht besteht, ist die Installation eines AED eine verantwortungsvolle Präventionsmassnahme, die Leben retten — und Ihr Unternehmen rechtlich schützen kann.",
  safetyCta1: "Unsere Angebote",
  safetyCta2: "Kontakt aufnehmen",

  statsTag: "Zahlen Schweiz",
  statsTitle: "Wie kann ein Defibrillator Leben retten?",
  statsSubtitle:
    "4 Zahlen, die die entscheidende Bedeutung eines griffbereiten Defibrillators in der Schweiz unterstreichen:",
  stat1Number: "8 000",
  stat1Sub: "Herzstillstände / Jahr",
  stat1Text:
    "Jedes Jahr erleiden in der Schweiz rund 8 000 Menschen einen Herzkreislaufstillstand (Quelle: Schweizerische Herzstiftung).",
  stat2Number: "5%",
  stat2Sub: "Überlebensrate",
  stat2Text:
    "Nur 5% der Betroffenen überleben einen Herzstillstand. Eine rasche Defibrillation kann die Überlebenschancen verzehnfachen.",
  stat3Number: "85%",
  stat3Sub: "ausserhalb des Spitals",
  stat3Text:
    "85% der Herzstillstände passieren ausserhalb eines Spitals — im Büro, auf der Strasse, zu Hause. Ein AED vor Ort macht den Unterschied.",
  stat4Number: "10 Min",
  stat4Sub: "Wartezeit Rettungsdienst",
  stat4Text:
    "In der Schweiz vergehen durchschnittlich 10 bis 15 Minuten bis zum Eintreffen des Rettungsdienstes. Der AED überbrückt diese kritische Zeit.",

  offersTag: "Unsere Angebote",
  offersTitle: "Defibrillator kaufen oder mieten : unsere Angebote",
  offersIntro:
    "Als Spezialisten für die Vermietung und den Verkauf von Defibrillatoren verpflichten wir uns bei CardioPro Schweiz, Ihnen Produkte höchster Qualität zu liefern.",
  tabRental: "Miete",
  tabPurchase: "Kauf",
  packIncludesTitle: "Jedes Paket enthält",
  packIncludes: [
    "8 Jahre Garantie",
    "Schnelle Lieferung und Installation",
    "Erwachsenen- und Kinderelektroden",
    "Erste-Hilfe-Set",
    "SUVA-konforme Beschilderung",
  ],
  packAccessName: "Pack Access",
  packZenName: "Pack Zen",
  packBadge: "Empfohlen",
  rentalAccessPrice: "CHF 45.–",
  rentalAccessUnit: "netto/Monat",
  rentalAccessVat: "Über 60 Monate — MwSt. 8,1% zzgl.",
  rentalZenPrice: "CHF 59.–",
  rentalZenUnit: "netto/Monat",
  rentalZenVat: "Über 60 Monate — MwSt. 8,1% zzgl.",
  purchaseAccessPrice: "CHF 1 090.–",
  purchaseAccessUnit: "netto",
  purchaseAccessVat: "Einmalzahlung — MwSt. 8,1% zzgl.",
  purchaseZenPrice: "CHF 1 390.–",
  purchaseZenUnit: "netto",
  purchaseZenVat: "Einmalzahlung — MwSt. 8,1% zzgl.",
  packContentLabel: "Inhalt:",
  feature1: "8 Jahre Garantie inklusive",
  feature2: "Lieferung + Installation",
  feature3: "Erw.- & Kinderelektroden",
  feature4: "Erste-Hilfe-Set",
  feature5: "SUVA-Beschilderung",
  feature6: "Reanimationsassistent",
  feature7: "Wandhalterung inklusive",
  btnChoose: "Wählen",
  btnLearnMore: "Mehr erfahren",

  blogTag: "Unsere Lösungen",
  blogTitle: "Leben retten dank Defibrillator",
  blogIntro:
    "Bei CardioPro Schweiz ist unsere Philosophie klar: den Zugang zu automatischen Defibrillatoren demokratisieren, um Leben zu retten. Die Schweiz setzt auf ein wachsendes Netzwerk von First Respondern und Initiativen wie defikarte.ch — doch jedes Unternehmen kann seinen Beitrag leisten.",
  article1Tag: "Statistik",
  article1Title: "Herzstillstand in der Schweiz: die wichtigsten Zahlen",
  article1Excerpt:
    "8 000 Herzstillstände pro Jahr, nur 5% Überlebende… Erfahren Sie, warum ein AED in Ihrem Betrieb den Unterschied machen kann.",
  article1Link: "Artikel lesen",
  article2Tag: "Gesetzgebung",
  article2Title: "Defibrillator in der Schweiz: Was sagt das Gesetz?",
  article2Excerpt:
    "ArGV 3 Artikel 36, SUVA-Empfehlungen, Schweizerische Herzstiftung… Der Stand der Rechtslage und die Verantwortung des Arbeitgebers.",
  article2Link: "Artikel lesen",
  article3Tag: "Praxisleitfaden",
  article3Title: "Wie benutzt man einen AED-Defibrillator: Schritt für Schritt",
  article3Excerpt:
    "Folgen Sie den Sprachanweisungen, bringen Sie die Elektroden an und lösen Sie den Schock aus. Eine einfache Handlung, die ein Leben retten kann — bis der 144 eintrifft.",
  article3Link: "Artikel lesen",

  faqTag: "Häufige Fragen",
  faqTitle: "FAQ",
  faqSubtitle: "Alles, was Sie über Defibrillatoren in der Schweiz wissen müssen",
  faq1Q: "Was ist ein Defibrillator?",
  faq1A: "Ein Defibrillator ist ein Gerät zur Wiederherstellung des normalen Herzrhythmus bei einem Herzstillstand. Er gibt einen kurzen elektrischen Schock ab, wenn das Herz eine schwere Funktionsstörung aufweist. Zwei selbstklebende Elektroden werden auf den Brustkorb des Betroffenen aufgebracht. Der Defibrillator ist tragbar und batteriebetrieben.",
  faq2Q: "Ist ein Defibrillator in der Schweiz Pflicht?",
  faq2A: "In der Schweiz besteht keine Bundespflicht zur Installation eines Defibrillators — weder für Unternehmen noch für öffentliche Einrichtungen. Die Zuständigkeit liegt bei den Kantonen. Die ArGV 3 (Verordnung 3 zum Arbeitsgesetz), Artikel 36, regelt die Erste Hilfe im Betrieb. Seit 2017 ist der AED nicht mehr in der indikativen Liste der Erste-Hilfe-Ausrüstung aufgeführt. Die SUVA und die Schweizerische Herzstiftung empfehlen jedoch nachdrücklich die Installation in grösseren Betrieben oder solchen, die weit von Rettungsdiensten entfernt sind.",
  faq3Q: "Braucht man eine Ausbildung, um einen Defibrillator in der Schweiz zu benutzen?",
  faq3A: "Nein. Jede Person kann einen vollautomatischen AED ohne Vorkenntnisse einsetzen. Das Gerät leitet den Benutzer Schritt für Schritt per Sprachanweisung an. Die SUVA empfiehlt jedoch, dass betriebliche Ersthelfer in der AED-Nutzung geschult werden. CardioPro Schweiz bietet Schulungen auf Deutsch und Französisch an, konform mit den Empfehlungen des Swiss Resuscitation Council (SRC).",
  faq4Q: "Was kostet ein Defibrillator in der Schweiz?",
  faq4A: "Bei CardioPro Schweiz ist der Defibrillator ab CHF 1 090.– netto erhältlich oder zur Miete ab CHF 45.–/Monat netto (Schweizer MwSt. 8,1%). Unsere Pakete umfassen das Gerät, Elektroden, Beschilderung, Erste-Hilfe-Set und Unterstützung bei der Registrierung auf defikarte.ch.",
  faq5Q: "Liefert CardioPro in die ganze Schweiz?",
  faq5A: "Ja. CardioPro Schweiz gewährleistet Lieferung und Installation in der gesamten Schweiz: Genf, Lausanne, Bern, Zürich, Basel, Luzern, Freiburg, Neuenburg und alle Gemeinden. Unser Team ist innerhalb von 48 Werktunden in der Romandie und Deutschschweiz vor Ort.",

  contactTag: "Kontaktieren Sie uns",
  contactTitle: "Fordern Sie Ihr kostenloses Angebot an",
  contactSubtitle:
    "Unser Team antwortet innerhalb von 24 Werktunden. Füllen Sie das Formular aus und erhalten Sie ein personalisiertes Angebot für Ihren Defibrillator.",
  labelFirstName: "Vorname",
  placeholderFirstName: "Hans",
  labelLastName: "Nachname",
  placeholderLastName: "Müller",
  labelEmail: "E-Mail",
  placeholderEmail: "hans.mueller@unternehmen.ch",
  labelPhone: "Telefon",
  placeholderPhone: "+41 XX XXX XX XX",
  labelCompany: "Unternehmen / Organisation",
  placeholderCompany: "Name Ihres Unternehmens",
  labelNeed: "Ihr Bedarf",
  optionDefault: "Option auswählen",
  optionRental: "Miete eines Defibrillators",
  optionPurchase: "Kauf eines Defibrillators",
  optionTraining: "Schulung AED",
  optionInfo: "Informationsanfrage",
  labelMessage: "Nachricht",
  placeholderMessage: "Beschreiben Sie Ihr Projekt oder stellen Sie Ihre Fragen…",
  btnSubmit: "Anfrage senden",
  formLegal:
    "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, von CardioPro Schweiz kontaktiert zu werden. Kein Direktmarketing — wir respektieren Ihre Privatsphäre.",
  formSubject: "Neues Angebot CardioPro Schweiz (DE)",

  advTag: "Warum uns wählen",
  advTitle: "Die Vorteile von CardioPro Schweiz",
  adv1Title: "CE-zertifizierte medizinische Produkte",
  adv1Text: "Konform mit Schweizer und europäischen Normen — 8 Jahre Garantie.",
  adv2Title: "Technische Bereitschaft 7 Tage/Woche",
  adv2Text:
    "Unser technisches Team ist 7 Tage die Woche telefonisch erreichbar.",
  adv3Title: "Wartung und Einsatz innerhalb von 72 Stunden",
  adv3Text: "Reaktiver Wartungsservice in der gesamten Schweiz.",
  adv4Title: "Reaktives Team & persönliche Betreuung",
  adv4Text:
    "Ein dedizierter Berater begleitet Sie von der Bestellung bis zur Installation.",
  adv5Title: "Ständige Überwachung der Schweizer Gesetzgebung",
  adv5Text:
    "ArGV 3, SUVA-Empfehlungen, Schweizerische Herzstiftung… wir halten Sie auf dem Laufenden.",
  adv6Title: "Flexibles Angebot: Kauf oder Miete",
  adv6Text:
    "Wählen Sie die Lösung, die Ihrem Budget und Ihren Bedürfnissen entspricht.",
  quote: "Gemeinsam lassen wir Herzen länger schlagen.",
  quoteSubtext:
    "Kontaktieren Sie unser Team — Antwort innerhalb von 24 Werktunden",
  emergency: "Notruf:",
  emergencyNumber: "144",

  footerSlogan:
    "Verkauf und Vermietung von Defibrillatoren in der Schweiz",
  footerAbout:
    "CardioPro Schweiz ist Ihr vertrauenswürdiger Partner für den Verkauf und die Vermietung von Defibrillatoren (DAE/AED) in der gesamten Deutsch- und Westschweiz.",
  footerContactTitle: "Kontaktieren Sie uns!",
  footerWhyTitle: "Warum uns wählen?",
  footerWhy1: "CE-zertifiziert",
  footerWhy2: "Bereitschaft 7 Tage/Woche",
  footerWhy3: "Miete ab CHF 45.–/Monat",
  footerWhy4: "Kauf ab CHF 1 090.– netto",
  footerWhy5: "Schulung DE & FR",
  footerWhy6: "Lieferung 48h Schweiz",
  footerQuickTitle: "Schnellzugriff",
  footerAdvisorName: "Ihr CardioPro-Berater",
  footerAdvisorReply: "Antwort garantiert innerhalb von 24 Werktunden",
  footerCopyright:
    "© 2026 CardioPro Schweiz — Eine Marke von CardioPro · Letzte Aktualisierung: April 2026",
  footerLegal: "Impressum",
  footerCgv: "AGB",
  footerPrivacy: "Datenschutz",

  floatCta: "Angebot Online",
}

export const translations: Record<Locale, Translations> = { fr, de }
