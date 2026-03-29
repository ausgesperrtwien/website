export const COMPANY = {
  name: "Magic Key",
  legalName: "MagicKey Aufsperrdienst und Montage",
  address: "Klosterneuburger Straße 7",
  zip: "1200",
  city: "Wien",
  country: "Österreich",
  phone: "+43 676 911 14 12",
  phoneRaw: "+436769111412",
  email: "office@magickey.at",
  hours: "24/7 — Montag bis Sonntag, 00:00–24:00 Uhr",
  hoursShort: "Mo–So, 00:00–24:00",
  languages: ["Deutsch", "Englisch", "Russisch"],
  uid: "ATU46609308",
  rechtsform: "Einzelunternehmen",
  gf: "Yigal Natanov",
  kammer: "WKO Wien",
  aufsicht: "Magistratisches Bezirksamt des VI Bezirks",
  gegenstand: "Schlüsseldienst, Aufsperrdienst und Montage",
  facebook: "https://www.facebook.com/MagicKey.Wien",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.3!2d16.358!3d48.234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079f1f0d7f0d%3A0x0!2sKlosterneuburger+Stra%C3%9Fe+7%2C+1200+Wien!5e0!3m2!1sde!2sat!4v1",
} as const;

export const NAV_LINKS = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Aufsperrdienst", href: "/aufsperrdienst" },
  { label: "Sicherheit", href: "/sicherheit" },
  { label: "Einsatzgebiete", href: "/einsatzgebiete" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const PARTNERS = [
  "EVVA",
  "DOM",
  "ABUS",
  "dormakaba",
  "Grundmann",
  "RB-Doors",
] as const;

export const EINSATZGEBIETE = [
  {
    district: "1200",
    name: "Brigittenau",
    address: "Klosterneuburger Straße 7",
    hauptstandort: true,
    description:
      "Aufsperrdienst in 1200 Wien, Klosterneuburgerstraße 7. Es ist passiert: Schlüssel verloren, Schloss defekt oder haben Sie sich ausgesperrt? Jetzt kann guter Rat teuer werden. Aber nicht mit dem Aufsperrdienst Magickey — Ihrem professionellen Partner rund um Schlösser, Sicherheit, Aufsperrung und Schlüsseldienst. Wir haben für 1200 Wien einen Fixpreis für zugefallene Türen von Montag bis Freitag von 8 bis 18 Uhr: ab 60€.",
  },
  {
    district: "1030",
    name: "Landstraße",
    address: "Ungargasse 73",
    hauptstandort: false,
    description:
      "Aufsperrdienst und Schlüsseldienst in 1030 Wien, Ungargasse 73. Wir führen professionelle Türöffnungen durch. Nicht nur tagsüber ist der Schlüsseldienst Magickey immer erreichbar. Unser Notdienst sorgt dafür, dass wir auch nachts in 20 Minuten bei Ihnen sein können, selbstverständlich zu fairen Preisen.",
  },
  {
    district: "1060",
    name: "Mariahilf",
    address: "Gumpendorferstraße 30",
    hauptstandort: false,
    description:
      "Ihr günstiger Aufsperrdienst in 1060 Wien, Gumpendorferstraße 30. Als Profi-Aufsperrdienst stehen wir Ihnen rund um die Uhr von Montag bis Sonntag, 365 Tage im Jahr zur Verfügung. Keinerlei Anfahrtskosten: Sie zahlen ausschließlich den Service an Ihrer Tür.",
  },
  {
    district: "1070",
    name: "Neubau",
    address: "Hermanngasse 2",
    hauptstandort: false,
    description:
      "Ihr günstiger Aufsperrdienst und Schlüsseldienst in der Hermanngasse 2. Haben Sie sich versehentlich ausgesperrt? Schlüssel verloren? Schlüssel abgebrochen? Schloss klemmt? Kein Problem! Unser Aufsperrdienst hilft Ihnen schnell und günstig täglich rund um die Uhr!",
  },
  {
    district: "1090",
    name: "Alsergrund",
    address: "Badgasse 23",
    hauptstandort: false,
    description:
      "Ihr Aufsperrdienst in 1090 Wien, Badgasse 23. Wir sind günstig, zuverlässig und professionell. Angefangen von zugefallenen Türen und dem versperrten Türschloss bis hin zum defekten Schließzylinder. Wir haben langjährige Erfahrung im Bereich Öffnungstechnik und Sicherheitstechnik.",
  },
  {
    district: "1190",
    name: "Döbling",
    address: "Döblinger Hauptstraße 1",
    hauptstandort: false,
    description:
      "Ihr günstiger Aufsperrdienst in der Döblinger Hauptstraße 1, 1190 Wien. Haben Sie Ihren Schlüssel vergessen? Ist Ihr Schlüssel abgebrochen? Oder ist Ihre Türe zugefallen? Wir sind immer für Sie da. Tag und Nacht im Bezirk Döbling unterwegs.",
  },
  {
    district: "Klosterneuburg",
    name: "Klosterneuburg",
    address: "",
    hauptstandort: false,
    description:
      "Ein seriöser und günstiger Aufsperrdienst und Schlüsseldienst in Klosterneuburg und Wien. Wir helfen Ihnen schnell und unkompliziert. Unser Team spricht mehrere Sprachen wie Deutsch, Englisch oder Russisch.",
  },
] as const;

export const SERVICES = [
  {
    icon: "DoorOpen",
    title: "Türöffnung",
    description:
      "Professionelle und beschädigungsfreie Öffnung von Wohnungstüren, Haustüren und Geschäftstüren — rund um die Uhr.",
  },
  {
    icon: "KeyRound",
    title: "Schlüssel verloren",
    description:
      "Schlüssel verloren oder verlegt? Unser Aufsperrdienst öffnet Ihre Tür schnell und ohne Beschädigung.",
  },
  {
    icon: "Scissors",
    title: "Schlüssel abgebrochen",
    description:
      "Unser Techniker entfernt den abgebrochenen Schlüssel professionell — in den meisten Fällen ohne das Schloss zu beschädigen.",
  },
  {
    icon: "Wrench",
    title: "Schloss defekt / klemmt",
    description:
      "Ihr Schloss klemmt oder ist defekt? Wir reparieren oder tauschen Ihr Schloss fachgerecht aus.",
  },
  {
    icon: "RefreshCw",
    title: "Schlosswechsel",
    description:
      "Professioneller Schlosswechsel und Schlosstausch — nach Einbruch, Partnertrennung oder bei defektem Schloss.",
  },
  {
    icon: "Settings",
    title: "Zylindertausch",
    description:
      "Wir tauschen Ihren Schließzylinder mit hochwertigen Markenprodukten von EVVA, DOM, ABUS und dormakaba.",
  },
  {
    icon: "ShieldCheck",
    title: "Sicherheitszylinder",
    description:
      "Installation von Sicherheitszylindern führender Hersteller für maximalen Einbruchschutz nach ÖNORM.",
  },
  {
    icon: "Home",
    title: "Sicherheitsbeschläge",
    description:
      "Montage von Schutzrosetten und Sicherheitsbeschlägen für Wohnungs- und Haustüren.",
  },
  {
    icon: "Plus",
    title: "Zusatzschlösser",
    description:
      "Einbau von Zusatzschlössern, Kastenschlössern und Balkenschlössern für zusätzliche Sicherheit.",
  },
  {
    icon: "Mail",
    title: "Postkastenschloss",
    description:
      "Öffnung und Austausch von Briefkastenschlössern — schnell und unkompliziert.",
  },
  {
    icon: "AlertTriangle",
    title: "Hilfe nach Einbruch",
    description:
      "Erstversorgung nach Einbruchschäden: Türen werden wieder verschließbar gemacht, abgedrehte Schließzylinder ersetzt.",
  },
  {
    icon: "Lightbulb",
    title: "Sicherheitsberatung",
    description:
      "Kostenlose Beratung in allen Sicherheitsfragen — von Schlosstypen bis zu praktischen Alltagstipps gegen Einbrecher.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Was kostet eine Türöffnung?",
    answer:
      "Bei einer zugefallenen Tür in Wien beginnen unsere Preise ab 60€ (Mo–Fr, 8–18 Uhr). Der genaue Fixpreis wird vor Beginn der Arbeit am Telefon vereinbart. Kein Auftrag ohne Ihre Zustimmung.",
  },
  {
    question: "Wie schnell sind Sie vor Ort?",
    answer:
      "In der Regel sind wir in 15–20 Minuten bei Ihnen. Wir teilen Ihnen die genaue Wartezeit bereits am Telefon mit.",
  },
  {
    question: "Gibt es Anfahrtskosten?",
    answer:
      "Nein. Wir verrechnen keine Anfahrtskosten. Sie zahlen ausschließlich den Service an Ihrer Tür.",
  },
  {
    question: "Sind Sie auch nachts und am Wochenende erreichbar?",
    answer:
      "Ja, 24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr — auch an Feiertagen.",
  },
  {
    question: "Was mache ich, wenn der Schlüssel abgebrochen ist?",
    answer:
      "Kein Problem — das ist eine häufige Situation. Unser Techniker entfernt den abgebrochenen Schlüssel professionell, in den meisten Fällen ohne das Schloss zu beschädigen.",
  },
  {
    question: "Öffnen Sie Türen ohne sie zu beschädigen?",
    answer:
      "Ja, in den meisten Fällen ist eine schadensfreie Öffnung möglich. Wir nutzen professionelles Werkzeug und jahrelange Erfahrung.",
  },
  {
    question: "In welchen Bezirken sind Sie tätig?",
    answer:
      "Wir sind in allen Wiener Bezirken sowie in Klosterneuburg im Einsatz — 1030, 1060, 1070, 1090, 1190, 1200 und Umgebung.",
  },
  {
    question: "Sprechen Sie auch Englisch oder Russisch?",
    answer:
      "Ja! Unser Team spricht Deutsch, Englisch und Russisch. Einfach anrufen — wir helfen in Ihrer Sprache.",
  },
] as const;

// TODO: Replace with Google Places API reviews
export const REVIEWS = [
  {
    name: "Michael R.",
    location: "Wien 1200",
    date: "vor 2 Wochen",
    rating: 5,
    text: "Hatte mich um 22 Uhr ausgesperrt. In unter 20 Minuten war jemand da, die Tür war in Sekunden offen. Fairer Preis, kein Stress. Absolute Empfehlung!",
  },
  {
    name: "Anna K.",
    location: "Klosterneuburg",
    date: "vor 1 Monat",
    rating: 5,
    text: "Schlüssel abgebrochen mitten im Schloss. Magic Key hat das super sauber gelöst, ohne das Schloss zu beschädigen. Sehr professionell und freundlich.",
  },
  {
    name: "Thomas B.",
    location: "Wien 1090",
    date: "vor 3 Wochen",
    rating: 5,
    text: "Endlich ein Schlüsseldienst ohne Abzocke. Der Preis wurde am Telefon besprochen und exakt so verrechnet. Schnell, ehrlich, kompetent.",
  },
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  keyCloseup:
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80",
  security:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  handwerker:
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
  beratung:
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80",
  wien: "https://images.unsplash.com/photo-1516550893885-985c836c06fe?w=1200&q=80",
  schluessel:
    "https://images.unsplash.com/photo-1606166187734-a4cb74079037?w=800&q=80",
  zylinder:
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
  techniker:
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
  tuer: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
} as const;

export const CAROUSEL_IMAGES = [
  { src: IMAGES.handwerker, alt: "Professionelle Türöffnung" },
  { src: IMAGES.keyCloseup, alt: "Schlüssel Close-up" },
  { src: IMAGES.zylinder, alt: "Sicherheitszylinder" },
  { src: IMAGES.security, alt: "Sicherheitsschloss" },
  { src: IMAGES.techniker, alt: "Techniker bei der Arbeit" },
  { src: IMAGES.schluessel, alt: "Schlüsselbund" },
] as const;

export const TRUST_POINTS = [
  { icon: "Clock", text: "24/7 Notruf" },
  { icon: "MapPin", text: "In 15 Min vor Ort" },
  { icon: "Ban", text: "Keine Anfahrtskosten" },
  { icon: "Coins", text: "Faire Fixpreise" },
  { icon: "Lock", text: "Schadensfreie Öffnung" },
  { icon: "Star", text: "5-Sterne Service" },
] as const;

export const PRICING_POINTS = [
  "Kein Auftrag ohne Ihre Zustimmung",
  "Keine Anfahrtskosten",
  "Keine versteckten Kosten",
  "Fixpreis wird am Telefon besprochen",
  "Bar & Bankomat",
  "10% Rabatt für Studenten",
] as const;

export const SECURITY_SERVICES = [
  { icon: "Lock", text: "Schlosswechsel & Schlosstausch" },
  { icon: "Settings", text: "Zylindertausch mit Markenprodukten" },
  { icon: "ShieldCheck", text: "Sicherheitsbeschläge & Schutzrosetten" },
  { icon: "Plus", text: "Zusatzschlösser & Balkenschlösser" },
  { icon: "Ban", text: "Einbruchschutz nach ÖNORM" },
  { icon: "Lightbulb", text: "Kostenlose Sicherheitsberatung" },
] as const;
