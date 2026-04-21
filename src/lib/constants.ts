export const COMPANY = {
  name: "Ausgesperrt Vienna",
  legalName: "Ausgesperrt Vienna Aufsperrdienst und Montage",
  address: "Schmalzhofgasse 10/2/27",
  zip: "1060",
  city: "Wien",
  country: "Österreich",
  phone: "+43 660 172 63 00",
  phoneRaw: "+436601726300",
  email: "office@ausgesperrtwien.at",
  hours: "24/7 — Montag bis Sonntag, 00:00–24:00 Uhr",
  hoursShort: "Mo–So, 00:00–24:00",
  languages: ["Deutsch", "Englisch", "Russisch"],
  uid: "ATU46609308",
  rechtsform: "Einzelunternehmen",
  gf: "Yigal Natanov",
  kammer: "WKO Wien",
  aufsicht: "Magistratisches Bezirksamt des VI Bezirks",
  gegenstand: "Schlüsseldienst, Aufsperrdienst und Montage",
  mapsEmbed:
    "https://maps.google.com/maps?q=Schmalzhofgasse+10%2F2%2F27+1060+Wien+Austria&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Aufsperrdienst", href: "/aufsperrdienst" },
  { label: "Sicherheit", href: "/sicherheit" },
  { label: "Preise", href: "/preise" },
  { label: "Einsatzgebiete", href: "/einsatzgebiete" },
  { label: "Blog", href: "/blog" },
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

export const EINSATZGEBIETE: {
  district: string;
  name: string;
  slug: string;
  plz: string;
  address: string;
  hauptstandort: boolean;
  description: string;
  longDescription: string;
  landmarks: string[];
  anfahrt: string;
  latitude: number;
  longitude: number;
}[] = [
  {
    district: "1010",
    name: "Innere Stadt",
    slug: "1010-innere-stadt",
    plz: "1010",
    address: "",
    hauptstandort: false,
    latitude: 48.2085,
    longitude: 16.3738,
    description:
      "Ihr Schlüsseldienst in 1010 Wien — Innere Stadt. Ausgesperrt im 1. Bezirk? Wir sind in 15–20 Minuten bei Ihnen. Faire Fixpreise, keine Anfahrtskosten, 24/7 erreichbar.",
    longDescription:
      "Im Herzen Wiens, im 1. Bezirk Innere Stadt, sind wir Ihr zuverlässiger Schlüsseldienst und Aufsperrdienst. Ob am Stephansplatz, in der Kärntner Straße oder am Graben — wir kommen schnell und unkompliziert zu Ihnen. Türöffnung, Schlosswechsel, Zylindertausch und Sicherheitsberatung: Alles aus einer Hand, rund um die Uhr.",
    landmarks: ["Stephansdom", "Hofburg", "Graben", "Kärntner Straße", "Ringstraße"],
    anfahrt: "Von unserem Hauptstandort in Mariahilf sind wir in wenigen Minuten in der Inneren Stadt.",
  },
  {
    district: "1020",
    name: "Leopoldstadt",
    slug: "1020-leopoldstadt",
    plz: "1020",
    address: "",
    hauptstandort: false,
    latitude: 48.2166,
    longitude: 16.3914,
    description:
      "Schlüsseldienst in 1020 Wien — Leopoldstadt. Ausgesperrt im 2. Bezirk? Unser Aufsperrdienst ist in 15–20 Minuten bei Ihnen. Faire Fixpreise ab 79€, keine Anfahrtskosten.",
    longDescription:
      "Im 2. Bezirk Leopoldstadt bieten wir professionellen Schlüsseldienst und Aufsperrdienst. Ob beim Prater, am Praterstern oder in der Taborstraße — wir sind schnell vor Ort. Türöffnung, Schlosswechsel, Zylindertausch und Einbruchschutz, 24 Stunden am Tag, 7 Tage die Woche.",
    landmarks: ["Prater", "Praterstern", "Augarten", "Taborstraße", "Donaukanal"],
    anfahrt: "Schnelle Anfahrt über die Donaukanalbrücken — in ca. 15 Minuten bei Ihnen.",
  },
  {
    district: "1030",
    name: "Landstraße",
    slug: "1030-landstrasse",
    plz: "1030",
    address: "",
    hauptstandort: false,
    latitude: 48.1979,
    longitude: 16.3893,
    description:
      "Aufsperrdienst und Schlüsseldienst in 1030 Wien — Landstraße. Professionelle Türöffnungen rund um die Uhr. Unser Notdienst sorgt dafür, dass wir auch nachts in 20 Minuten bei Ihnen sein können, zu fairen Preisen.",
    longDescription:
      "Im 3. Bezirk Landstraße sind wir einer der schnellsten Schlüsseldienste Wiens. Egal ob am Rochusmarkt, in der Landstraßer Hauptstraße oder beim Belvedere — wir sind in kürzester Zeit bei Ihnen. Professionelle Türöffnung, Schlosswechsel und Sicherheitstechnik — alles zu fairen Fixpreisen.",
    landmarks: ["Belvedere", "Rochusmarkt", "Landstraßer Hauptstraße", "Stadtpark", "Wien Mitte"],
    anfahrt: "Direkte Anfahrt von unserem Standort in der Ungargasse 73 — wir sind sofort da.",
  },
  {
    district: "1040",
    name: "Wieden",
    slug: "1040-wieden",
    plz: "1040",
    address: "",
    hauptstandort: false,
    latitude: 48.1935,
    longitude: 16.3716,
    description:
      "Schlüsseldienst in 1040 Wien — Wieden. Ausgesperrt? Schlüssel verloren? Unser Aufsperrdienst hilft schnell und günstig. Fixpreise ab 79€, keine Anfahrtskosten, 24/7 Notdienst.",
    longDescription:
      "Im 4. Bezirk Wieden, direkt neben unserem Hauptstandort in Mariahilf, sind wir besonders schnell bei Ihnen. Ob am Karlsplatz, in der Wiedner Hauptstraße oder beim Naschmarkt — professionelle Türöffnung, Schlosswechsel und Sicherheitsberatung, rund um die Uhr zu fairen Fixpreisen.",
    landmarks: ["Karlsplatz", "Naschmarkt", "Wiedner Hauptstraße", "TU Wien", "Freihausviertel"],
    anfahrt: "Als direkter Nachbarbezirk unseres Hauptstandorts sind wir in unter 10 Minuten bei Ihnen.",
  },
  {
    district: "1050",
    name: "Margareten",
    slug: "1050-margareten",
    plz: "1050",
    address: "",
    hauptstandort: false,
    latitude: 48.1870,
    longitude: 16.3592,
    description:
      "Aufsperrdienst in 1050 Wien — Margareten. Tür zugefallen? Schloss defekt? Wir sind in 15 Minuten vor Ort. Faire Fixpreise, keine Anfahrtskosten, 24/7 erreichbar.",
    longDescription:
      "Im 5. Bezirk Margareten bieten wir schnellen und zuverlässigen Schlüsseldienst. Von der Margaretenstraße über den Siebenbrunnenplatz bis zur Reinprechtsdorfer Straße — wir sind sofort bei Ihnen. Türöffnung, Zylindertausch, Schlosswechsel und Sicherheitstechnik zum Fixpreis.",
    landmarks: ["Margaretenplatz", "Siebenbrunnenplatz", "Reinprechtsdorfer Straße", "Bacherplatz", "Schlossquadrat"],
    anfahrt: "Direkter Nachbarbezirk — in unter 10 Minuten von unserem Hauptstandort bei Ihnen.",
  },
  {
    district: "1060",
    name: "Mariahilf",
    slug: "1060-mariahilf",
    plz: "1060",
    address: "Schmalzhofgasse 10/2/27",
    hauptstandort: true,
    latitude: 48.1952,
    longitude: 16.3502,
    description:
      "Ihr Schlüsseldienst-Hauptstandort in 1060 Wien — Mariahilf, Schmalzhofgasse 10/2/27. Als Profi-Aufsperrdienst stehen wir Ihnen rund um die Uhr, 365 Tage im Jahr zur Verfügung. Keinerlei Anfahrtskosten.",
    longDescription:
      "Der 6. Bezirk Mariahilf ist unser Hauptstandort. Von der Schmalzhofgasse 10/2/27 aus versorgen wir ganz Wien mit professionellem Schlüsseldienst und Aufsperrdienst. Ob in der Mariahilfer Straße, am Naschmarkt oder in der Gumpendorfer Straße — wir sind innerhalb weniger Minuten bei Ihnen. Türöffnung, Schlosswechsel, Zylindertausch, Sicherheitsberatung und Einbruchschutz: Alles aus einer Hand, 24/7, zu fairen Fixpreisen ab 79€.",
    landmarks: ["Mariahilfer Straße", "Naschmarkt", "Gumpendorfer Straße", "Theater an der Wien", "Haus des Meeres"],
    anfahrt: "Unser Hauptstandort — wir sind in wenigen Minuten bei Ihnen im Bezirk!",
  },
  {
    district: "1070",
    name: "Neubau",
    slug: "1070-neubau",
    plz: "1070",
    address: "",
    hauptstandort: false,
    latitude: 48.2005,
    longitude: 16.3480,
    description:
      "Aufsperrdienst und Schlüsseldienst in 1070 Wien — Neubau. Ausgesperrt? Schlüssel verloren oder abgebrochen? Schloss klemmt? Unser Aufsperrdienst hilft schnell und günstig, rund um die Uhr!",
    longDescription:
      "Im 7. Bezirk Neubau, direkt neben unserem Hauptstandort in Mariahilf, sind wir blitzschnell bei Ihnen. Ob im Spittelberg-Viertel, in der Neubaugasse oder in der Burggasse — professionelle Türöffnung, Schlosswechsel, Zylindertausch und Einbruchschutz, 24/7 zu fairen Fixpreisen.",
    landmarks: ["Spittelberg", "Neubaugasse", "Burggasse", "Museumsquartier", "Volkstheater"],
    anfahrt: "Direkter Nachbarbezirk unseres Hauptstandorts — in unter 10 Minuten bei Ihnen.",
  },
  {
    district: "1080",
    name: "Josefstadt",
    slug: "1080-josefstadt",
    plz: "1080",
    address: "",
    hauptstandort: false,
    latitude: 48.2079,
    longitude: 16.3450,
    description:
      "Schlüsseldienst in 1080 Wien — Josefstadt. Ausgesperrt im 8. Bezirk? Wir kommen in 15 Minuten. Faire Fixpreise ab 79€, keine Anfahrtskosten, 24/7 Notdienst.",
    longDescription:
      "Im 8. Bezirk Josefstadt, Wiens kleinstem Bezirk, bieten wir schnellen und zuverlässigen Schlüsseldienst. Ob in der Josefstädter Straße, beim Theater in der Josefstadt oder am Schönbornpark — wir sind rasch vor Ort. Türöffnung, Schlosswechsel und Sicherheitstechnik, rund um die Uhr.",
    landmarks: ["Josefstädter Straße", "Theater in der Josefstadt", "Schönbornpark", "Rathaus", "Auerspergstraße"],
    anfahrt: "Nur wenige Minuten von unserem Hauptstandort in Mariahilf entfernt.",
  },
  {
    district: "1090",
    name: "Alsergrund",
    slug: "1090-alsergrund",
    plz: "1090",
    address: "",
    hauptstandort: false,
    latitude: 48.2198,
    longitude: 16.3535,
    description:
      "Aufsperrdienst in 1090 Wien — Alsergrund. Günstig, zuverlässig und professionell. Von zugefallenen Türen bis zum defekten Schließzylinder. Langjährige Erfahrung in Öffnungstechnik und Sicherheitstechnik.",
    longDescription:
      "Im 9. Bezirk Alsergrund bieten wir professionellen Schlüsseldienst. Ob beim AKH, an der Universität Wien, in der Währinger Straße oder am Roßauer Lände — wir sind schnell und zuverlässig bei Ihnen. Türöffnung, Schlosswechsel, Zylindertausch und Sicherheitsberatung zum Fixpreis.",
    landmarks: ["AKH Wien", "Universität Wien", "Währinger Straße", "Votivkirche", "Sigmund-Freud-Museum"],
    anfahrt: "Von unserem Standort in der Badgasse 23 sind wir sofort im gesamten 9. Bezirk.",
  },
  {
    district: "1100",
    name: "Favoriten",
    slug: "1100-favoriten",
    plz: "1100",
    address: "",
    hauptstandort: false,
    latitude: 48.1715,
    longitude: 16.3746,
    description:
      "Schlüsseldienst in 1100 Wien — Favoriten. Wiens größter Bezirk braucht schnellen Service: Wir sind in 15–20 Minuten bei Ihnen. Faire Fixpreise, keine Anfahrtskosten, 24/7 Notdienst.",
    longDescription:
      "Im 10. Bezirk Favoriten, Wiens einwohnerstärkstem Bezirk, bieten wir zuverlässigen Schlüsseldienst und Aufsperrdienst. Ob in der Favoritenstraße, beim Hauptbahnhof, am Reumannplatz oder beim Wienerberg — wir kommen schnell und unkompliziert. Türöffnung, Schlosswechsel und Sicherheitstechnik, 24/7.",
    landmarks: ["Hauptbahnhof", "Reumannplatz", "Favoritenstraße", "Therme Wien", "Viktor-Adler-Markt"],
    anfahrt: "Schnelle Anfahrt über den Gürtel — in ca. 15–20 Minuten im 10. Bezirk.",
  },
  {
    district: "1110",
    name: "Simmering",
    slug: "1110-simmering",
    plz: "1110",
    address: "",
    hauptstandort: false,
    latitude: 48.1750,
    longitude: 16.4250,
    description:
      "Aufsperrdienst in 1110 Wien — Simmering. Tür zugefallen oder Schloss defekt? Wir kommen in 15–20 Minuten. Faire Fixpreise ab 79€, keine Anfahrtskosten, 24/7 erreichbar.",
    longDescription:
      "Im 11. Bezirk Simmering sind wir Ihr professioneller Schlüsseldienst. Ob am Zentralfriedhof, in der Simmeringer Hauptstraße oder beim Gasometer — wir sind in 15–20 Minuten bei Ihnen. Türöffnung, Schlosswechsel, Zylindertausch und Einbruchschutz, rund um die Uhr zum Fixpreis.",
    landmarks: ["Zentralfriedhof", "Gasometer", "Simmeringer Hauptstraße", "Schloss Neugebäude", "Enkplatz"],
    anfahrt: "Über die Südosttangente schnell erreichbar — in ca. 20 Minuten vor Ort.",
  },
  {
    district: "1120",
    name: "Meidling",
    slug: "1120-meidling",
    plz: "1120",
    address: "",
    hauptstandort: false,
    latitude: 48.1750,
    longitude: 16.3250,
    description:
      "Schlüsseldienst in 1120 Wien — Meidling. Ausgesperrt? Schlüssel verloren? Unser Aufsperrdienst ist in 15 Minuten bei Ihnen. Fixpreise ab 79€, keine Anfahrtskosten, 24/7.",
    longDescription:
      "Im 12. Bezirk Meidling bieten wir schnellen und günstigen Schlüsseldienst. Ob in der Meidlinger Hauptstraße, am Meidlinger Markt oder beim Bahnhof Meidling — wir sind rasch bei Ihnen. Professionelle Türöffnung, Schlosswechsel und Sicherheitstechnik zu fairen Fixpreisen.",
    landmarks: ["Bahnhof Meidling", "Meidlinger Hauptstraße", "Schönbrunn (Nähe)", "Theresienbad", "Am Schöpfwerk"],
    anfahrt: "Direkt über den Gürtel erreichbar — in ca. 15 Minuten bei Ihnen im 12. Bezirk.",
  },
  {
    district: "1130",
    name: "Hietzing",
    slug: "1130-hietzing",
    plz: "1130",
    address: "",
    hauptstandort: false,
    latitude: 48.1793,
    longitude: 16.2944,
    description:
      "Aufsperrdienst in 1130 Wien — Hietzing. Professioneller Schlüsseldienst in der Nähe von Schönbrunn. In 15–20 Minuten vor Ort. Faire Fixpreise, keine Anfahrtskosten.",
    longDescription:
      "Im 13. Bezirk Hietzing sind wir Ihr zuverlässiger Schlüsseldienst. Ob beim Schloss Schönbrunn, in der Hietzinger Hauptstraße oder am Lainzer Tiergarten — wir kommen schnell und professionell. Türöffnung, Schlosswechsel, Zylindertausch und Sicherheitsberatung, 24/7 zum Fixpreis.",
    landmarks: ["Schloss Schönbrunn", "Lainzer Tiergarten", "Hietzinger Hauptstraße", "ORF-Zentrum", "Speisinger Straße"],
    anfahrt: "Über Mariahilf und den Wienfluss in ca. 15–20 Minuten bei Ihnen.",
  },
  {
    district: "1140",
    name: "Penzing",
    slug: "1140-penzing",
    plz: "1140",
    address: "",
    hauptstandort: false,
    latitude: 48.2022,
    longitude: 16.2972,
    description:
      "Schlüsseldienst in 1140 Wien — Penzing. Tür zugefallen oder Schloss klemmt? Wir kommen in 15–20 Minuten. Faire Fixpreise ab 79€, 24/7 Notdienst, keine Anfahrtskosten.",
    longDescription:
      "Im 14. Bezirk Penzing bieten wir professionellen Schlüsseldienst. Ob in der Hütteldorfer Straße, beim Technischen Museum oder am Baumgartner Casino — wir sind schnell bei Ihnen. Türöffnung, Schlosswechsel und Sicherheitstechnik, rund um die Uhr.",
    landmarks: ["Technisches Museum", "Hütteldorfer Straße", "Baumgarten", "Breitensee", "Hadikgasse"],
    anfahrt: "Schnelle Anfahrt über die Westeinfahrt — in ca. 15–20 Minuten bei Ihnen.",
  },
  {
    district: "1150",
    name: "Rudolfsheim-Fünfhaus",
    slug: "1150-rudolfsheim-fuenfhaus",
    plz: "1150",
    address: "",
    hauptstandort: false,
    latitude: 48.1946,
    longitude: 16.3311,
    description:
      "Aufsperrdienst in 1150 Wien — Rudolfsheim-Fünfhaus. Ausgesperrt? Wir sind in 10–15 Minuten bei Ihnen. Faire Fixpreise, keine Anfahrtskosten, 24/7 erreichbar.",
    longDescription:
      "Im 15. Bezirk Rudolfsheim-Fünfhaus, direkt neben unserem Hauptstandort, sind wir besonders schnell bei Ihnen. Ob beim Westbahnhof, in der Äußeren Mariahilfer Straße oder in der Reindorfgasse — professionelle Türöffnung, Schlosswechsel und Sicherheitstechnik zum Fixpreis, 24/7.",
    landmarks: ["Westbahnhof", "Stadthalle", "Äußere Mariahilfer Straße", "Reindorfgasse", "Schweglerstraße"],
    anfahrt: "Direkter Nachbarbezirk — in unter 10 Minuten von unserem Hauptstandort bei Ihnen.",
  },
  {
    district: "1160",
    name: "Ottakring",
    slug: "1160-ottakring",
    plz: "1160",
    address: "",
    hauptstandort: false,
    latitude: 48.2122,
    longitude: 16.3133,
    description:
      "Schlüsseldienst in 1160 Wien — Ottakring. Schlüssel verloren oder Tür zugefallen? Wir kommen in 15 Minuten. Faire Fixpreise ab 79€, keine Anfahrtskosten, 24/7.",
    longDescription:
      "Im 16. Bezirk Ottakring bieten wir zuverlässigen Schlüsseldienst und Aufsperrdienst. Ob in der Thaliastraße, am Brunnenmarkt oder beim Wilhelminenberg — wir sind rasch bei Ihnen. Türöffnung, Schlosswechsel, Zylindertausch und Einbruchschutz, rund um die Uhr.",
    landmarks: ["Brunnenmarkt", "Thaliastraße", "Wilhelminenberg", "Yppenplatz", "Ottakringer Brauerei"],
    anfahrt: "Schnelle Anfahrt über den Gürtel — in ca. 15 Minuten bei Ihnen im 16. Bezirk.",
  },
  {
    district: "1170",
    name: "Hernals",
    slug: "1170-hernals",
    plz: "1170",
    address: "",
    hauptstandort: false,
    latitude: 48.2237,
    longitude: 16.3033,
    description:
      "Aufsperrdienst in 1170 Wien — Hernals. Ausgesperrt im 17. Bezirk? Wir kommen in 15–20 Minuten. Faire Fixpreise, keine Anfahrtskosten, 24/7 Notdienst.",
    longDescription:
      "Im 17. Bezirk Hernals sind wir Ihr professioneller Schlüsseldienst. Ob am Elterleinplatz, in der Hernalser Hauptstraße oder am Kalvarienberg — wir sind schnell und zuverlässig bei Ihnen. Türöffnung, Schlosswechsel und Sicherheitstechnik zum fairen Fixpreis.",
    landmarks: ["Elterleinplatz", "Hernalser Hauptstraße", "Kalvarienberggasse", "Dornbach", "Neuwaldegg"],
    anfahrt: "Über Josefstadt und die Jörgerstraße in ca. 15 Minuten bei Ihnen.",
  },
  {
    district: "1180",
    name: "Währing",
    slug: "1180-waehring",
    plz: "1180",
    address: "",
    hauptstandort: false,
    latitude: 48.2300,
    longitude: 16.3333,
    description:
      "Schlüsseldienst in 1180 Wien — Währing. Tür zugefallen oder Schloss defekt? Wir sind in 15–20 Minuten vor Ort. Faire Fixpreise ab 79€, keine Anfahrtskosten.",
    longDescription:
      "Im 18. Bezirk Währing bieten wir schnellen Schlüsseldienst und Aufsperrdienst. Ob in der Währinger Straße, beim Türkenschanzpark oder am Kutschkermarkt — wir kommen zuverlässig und professionell. Türöffnung, Schlosswechsel und Einbruchschutz, 24/7.",
    landmarks: ["Türkenschanzpark", "Kutschkermarkt", "Währinger Straße", "Gersthof", "Cottageviertel"],
    anfahrt: "Über Alsergrund und Währinger Straße in ca. 15–20 Minuten bei Ihnen.",
  },
  {
    district: "1190",
    name: "Döbling",
    slug: "1190-doebling",
    plz: "1190",
    address: "",
    hauptstandort: false,
    latitude: 48.2500,
    longitude: 16.3500,
    description:
      "Aufsperrdienst in 1190 Wien — Döbling. Schlüssel vergessen oder Tür zugefallen? Wir sind in 15–20 Minuten bei Ihnen. Tag und Nacht im Bezirk Döbling unterwegs. Faire Fixpreise.",
    longDescription:
      "Im 19. Bezirk Döbling bieten wir professionellen Schlüsseldienst. Ob in Grinzing, Heiligenstadt, Nussdorf oder Sievering — wir sind schnell und zuverlässig vor Ort. Türöffnung, Schlosswechsel, Zylindertausch und Sicherheitsberatung, 24/7 zum Fixpreis.",
    landmarks: ["Grinzing", "Heiligenstadt", "Nussdorf", "Kahlenberg", "Cobenzl"],
    anfahrt: "Von unserem Standort in der Döblinger Hauptstraße 1 sind wir im gesamten 19. Bezirk schnell vor Ort.",
  },
  {
    district: "1200",
    name: "Brigittenau",
    slug: "1200-brigittenau",
    plz: "1200",
    address: "",
    hauptstandort: false,
    latitude: 48.2310,
    longitude: 16.3762,
    description:
      "Schlüsseldienst in 1200 Wien — Brigittenau. Schlüssel verloren, Schloss defekt oder ausgesperrt? Fixpreis für zugefallene Türen ab 79€. 24/7 erreichbar, keine Anfahrtskosten.",
    longDescription:
      "Im 20. Bezirk Brigittenau bieten wir schnellen Schlüsseldienst. Ob am Hannovermarkt, in der Wallensteinstraße oder beim Millennium Tower — wir sind rasch bei Ihnen. Professionelle Türöffnung, Schlosswechsel und Sicherheitstechnik zum Fixpreis ab 79€.",
    landmarks: ["Millennium Tower", "Hannovermarkt", "Wallensteinstraße", "Brigittaplatz", "Donauinsel (Nähe)"],
    anfahrt: "Von unserem Standort in der Klosterneuburger Straße 7 sind wir sofort im gesamten 20. Bezirk.",
  },
  {
    district: "1210",
    name: "Floridsdorf",
    slug: "1210-floridsdorf",
    plz: "1210",
    address: "",
    hauptstandort: false,
    latitude: 48.2567,
    longitude: 16.4000,
    description:
      "Aufsperrdienst in 1210 Wien — Floridsdorf. Ausgesperrt am anderen Donauufer? Wir kommen in 20 Minuten. Faire Fixpreise, keine Anfahrtskosten, 24/7 Notdienst.",
    longDescription:
      "Im 21. Bezirk Floridsdorf bieten wir zuverlässigen Schlüsseldienst und Aufsperrdienst. Ob am Floridsdorfer Markt, in der Brünner Straße, in Stammersdorf oder Strebersdorf — wir kommen schnell und professionell. Türöffnung, Schlosswechsel und Sicherheitstechnik, 24/7.",
    landmarks: ["Floridsdorfer Markt", "Brünner Straße", "Stammersdorf", "Alte Donau", "Strebersdorf"],
    anfahrt: "Über die Brigittenauer Brücke in ca. 20 Minuten bei Ihnen in Floridsdorf.",
  },
  {
    district: "1220",
    name: "Donaustadt",
    slug: "1220-donaustadt",
    plz: "1220",
    address: "",
    hauptstandort: false,
    latitude: 48.2300,
    longitude: 16.4500,
    description:
      "Schlüsseldienst in 1220 Wien — Donaustadt. Wiens flächenmäßig größter Bezirk. Wir sind in 20 Minuten bei Ihnen. Faire Fixpreise, keine Anfahrtskosten, 24/7.",
    longDescription:
      "Im 22. Bezirk Donaustadt, Wiens flächenmäßig größtem Bezirk, bieten wir professionellen Schlüsseldienst. Ob beim Donauzentrum, in Aspern, beim Seestadt-Viertel oder in Kagran — wir kommen schnell und zuverlässig. Türöffnung, Schlosswechsel und Einbruchschutz, rund um die Uhr.",
    landmarks: ["Donauzentrum", "Seestadt Aspern", "Kagran", "Donauinsel", "Alte Donau"],
    anfahrt: "Über die Reichsbrücke und Wagramer Straße in ca. 20 Minuten bei Ihnen.",
  },
  {
    district: "1230",
    name: "Liesing",
    slug: "1230-liesing",
    plz: "1230",
    address: "",
    hauptstandort: false,
    latitude: 48.1450,
    longitude: 16.3300,
    description:
      "Aufsperrdienst in 1230 Wien — Liesing. Tür zugefallen oder Schloss defekt? Wir kommen in 20 Minuten. Faire Fixpreise ab 79€, keine Anfahrtskosten, 24/7 erreichbar.",
    longDescription:
      "Im 23. Bezirk Liesing bieten wir zuverlässigen Schlüsseldienst und Aufsperrdienst. Ob in Atzgersdorf, Mauer, Rodaun oder in der Breitenfurter Straße — wir sind professionell und schnell bei Ihnen. Türöffnung, Schlosswechsel, Zylindertausch und Sicherheitsberatung, 24/7 zum Fixpreis.",
    landmarks: ["Riverside", "Atzgersdorf", "Mauer", "Rodaun", "Breitenfurter Straße"],
    anfahrt: "Über die Südautobahn in ca. 20 Minuten bei Ihnen in Liesing.",
  },
  {
    district: "Klosterneuburg",
    name: "Klosterneuburg",
    slug: "klosterneuburg",
    plz: "3400",
    address: "",
    hauptstandort: false,
    latitude: 48.3054,
    longitude: 16.3250,
    description:
      "Seriöser und günstiger Aufsperrdienst und Schlüsseldienst in Klosterneuburg. Wir helfen schnell und unkompliziert. Unser Team spricht Deutsch, Englisch und Russisch.",
    longDescription:
      "In Klosterneuburg, direkt vor den Toren Wiens, bieten wir professionellen Schlüsseldienst und Aufsperrdienst. Ob in der Stadtmitte, bei der Kierling oder in Weidling — wir sind schnell und zuverlässig bei Ihnen. Türöffnung, Schlosswechsel, Zylindertausch und Sicherheitsberatung, 24/7 zum Fixpreis.",
    landmarks: ["Stift Klosterneuburg", "Kierling", "Weidling", "Stadtplatz", "Donauufer"],
    anfahrt: "Über Brigittenau und die B14 in ca. 20–25 Minuten bei Ihnen.",
  },
];

export const SERVICES = [
  {
    icon: "DoorOpen",
    title: "Türöffnung",
    slug: "tueroeffnung",
    description:
      "Professionelle und beschädigungsfreie Öffnung von Wohnungstüren, Haustüren und Geschäftstüren, rund um die Uhr.",
  },
  {
    icon: "KeyRound",
    title: "Schlüssel verloren",
    slug: "schluessel-verloren",
    description:
      "Schlüssel verloren oder verlegt? Unser Aufsperrdienst öffnet Ihre Tür schnell und ohne Beschädigung.",
  },
  {
    icon: "Scissors",
    title: "Schlüssel abgebrochen",
    slug: "schluessel-abgebrochen",
    description:
      "Unser Techniker entfernt den abgebrochenen Schlüssel professionell, in den meisten Fällen ohne das Schloss zu beschädigen.",
  },
  {
    icon: "Wrench",
    title: "Schloss defekt / klemmt",
    slug: "schloss-defekt",
    description:
      "Ihr Schloss klemmt oder ist defekt? Wir reparieren oder tauschen Ihr Schloss fachgerecht aus.",
  },
  {
    icon: "RefreshCw",
    title: "Schlosswechsel",
    slug: "schlosswechsel",
    description:
      "Professioneller Schlosswechsel und Schlosstausch, nach Einbruch, Partnertrennung oder bei defektem Schloss.",
  },
  {
    icon: "Settings",
    title: "Zylindertausch",
    slug: "zylindertausch",
    description:
      "Wir tauschen Ihren Schließzylinder mit hochwertigen Markenprodukten von EVVA, DOM, ABUS und dormakaba.",
  },
  {
    icon: "ShieldCheck",
    title: "Sicherheitszylinder",
    slug: "sicherheitszylinder",
    description:
      "Installation von Sicherheitszylindern führender Hersteller für maximalen Einbruchschutz nach ÖNORM.",
  },
  {
    icon: "Home",
    title: "Sicherheitsbeschläge",
    slug: "sicherheitsbeschlaege",
    description:
      "Montage von Schutzrosetten und Sicherheitsbeschlägen für Wohnungs- und Haustüren.",
  },
  {
    icon: "Plus",
    title: "Zusatzschlösser",
    slug: "zusatzschloesser",
    description:
      "Einbau von Zusatzschlössern, Kastenschlössern und Balkenschlössern für zusätzliche Sicherheit.",
  },
  {
    icon: "Mail",
    title: "Postkastenschloss",
    slug: "postkastenschloss",
    description:
      "Öffnung und Austausch von Briefkastenschlössern — schnell und unkompliziert.",
  },
  {
    icon: "AlertTriangle",
    title: "Hilfe nach Einbruch",
    slug: "hilfe-nach-einbruch",
    description:
      "Erstversorgung nach Einbruchschäden: Türen werden wieder verschließbar gemacht, abgedrehte Schließzylinder ersetzt.",
  },
  {
    icon: "Lightbulb",
    title: "Sicherheitsberatung",
    slug: "sicherheitsberatung",
    description:
      "Kostenlose Beratung in allen Sicherheitsfragen — von Schlosstypen bis zu praktischen Alltagstipps gegen Einbrecher.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Was kostet eine Türöffnung?",
    answer:
      "Bei einer zugefallenen Tür in Wien beginnen unsere Preise ab 79€ (Mo–Fr, 8–17 Uhr). Der genaue Fixpreis wird vor Beginn der Arbeit am Telefon vereinbart. Kein Auftrag ohne Ihre Zustimmung.",
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
    text: "Schlüssel abgebrochen mitten im Schloss. Ausgesperrt Vienna hat das super sauber gelöst, ohne das Schloss zu beschädigen. Sehr professionell und freundlich.",
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
  handwerker: "/aufsperrdienst-hero.jpg",
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

export const SITUATIONS = [
  {
    slug: "tuer-zugefallen",
    title: "Tür zugefallen",
    shortText:
      "Ein leichter Windzug genügt und die Tür fällt ins Schloss. Natürlich liegt Ihr Schlüssel gerade jetzt in der Wohnung. Kein Grund zur Panik, wir öffnen Ihre Tür schnell und beschädigungsfrei.",
    icon: "AlertCircle",
  },
  {
    slug: "schluessel-verloren",
    title: "Schlüssel verloren",
    shortText:
      "Sie haben Ihren Schlüssel verloren oder verlegt? Wir öffnen Ihre Tür professionell und empfehlen anschließend einen Zylindertausch für Ihre Sicherheit.",
    icon: "Shield",
  },
  {
    slug: "schluessel-abgebrochen",
    title: "Schlüssel abgebrochen",
    shortText:
      "Ihr Schlüssel ist im Schloss abgebrochen? Unser Techniker entfernt den abgebrochenen Schlüssel professionell, in den meisten Fällen ohne das Schloss zu beschädigen.",
    icon: "Star",
  },
  {
    slug: "schloss-defekt",
    title: "Schloss klemmt oder defekt",
    shortText:
      "Ihr Schloss lässt sich nicht mehr drehen? Es klemmt oder ist komplett defekt? Wir reparieren oder tauschen Ihr Schloss fachgerecht vor Ort aus.",
    icon: "Clock",
  },
  {
    slug: "schluessel-steckt-innen",
    title: "Schlüssel steckt von innen",
    shortText:
      "Ein Familienmitglied hat die Wohnung von innen versperrt und den Schlüssel stecken lassen? Auch das ist für uns kein Problem.",
    icon: "Shield",
  },
  {
    slug: "nach-einbruch",
    title: "Nach Einbruch",
    shortText:
      "Nach einem Einbruch machen wir Ihre Tür sofort wieder verschließbar. Wir ersetzen abgedrehte Zylinder und aufgebrochene Schlösser, schnell und zuverlässig.",
    icon: "AlertCircle",
  },
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
  { icon: "Lock", text: "Sicherheitsschlösser", slug: "sicherheitsschloesser" },
  { icon: "Settings", text: "Sicherheitszylinder", slug: "sicherheitszylinder" },
  { icon: "ShieldCheck", text: "Sicherheitsbeschläge & Schutzrosetten", slug: "sicherheitsbeschlaege-schutzrosetten" },
  { icon: "Plus", text: "Zusatzschlösser & Balkenschlösser", slug: "zusatzschloesser-balkenschloesser" },
  { icon: "Ban", text: "Einbruchschutz nach ÖNORM", slug: "einbruchschutz-oenorm" },
  { icon: "Lightbulb", text: "Briefkastenschloss", slug: "briefkastenschloss" },
] as const;

/* ────────────────────────────────────────────────────────────────────────
 * Bezirk URL helper
 * Maps an EINSATZGEBIETE entry to its public URL.
 * Wien districts → /schluesseldienst-wien-{plz}
 * Klosterneuburg → /schluesseldienst-klosterneuburg
 * ──────────────────────────────────────────────────────────────────────── */
export function getBezirkUrl(area: { plz: string; district: string }): string {
  if (area.district === "Klosterneuburg") return "/schluesseldienst-klosterneuburg";
  return `/schluesseldienst-wien-${area.plz}`;
}

/* ────────────────────────────────────────────────────────────────────────
 * Pricing table (for /preise page)
 *
 * Real prices as confirmed by client (April 2026).
 * Surcharges are listed separately in PRICING_SURCHARGES below.
 * `priceLabel` overrides the default "ab {priceFrom}€" rendering.
 * `priceTo` enables price ranges (e.g. "175–250€") and JSON-LD maxPrice.
 * ──────────────────────────────────────────────────────────────────────── */
export const PRICING_TABLE: {
  service: string;
  priceFrom: number;
  priceTo?: number;
  priceLabel?: string;
  timeWindow: string;
  note?: string;
}[] = [
  {
    service: "Türöffnung (zugefallene Tür)",
    priceFrom: 79,
    timeWindow: "Mo–Fr, 8–17 Uhr",
    note: "Fixpreis inkl. An- und Abfahrt. Ohne Sicherheitselemente.",
  },
  {
    service: "Türöffnung versperrt (Sicherheitstür, Kernschutz)",
    priceFrom: 180,
    timeWindow: "Mo–So, 24/7",
    note: "Sperrtechnisches Öffnen, Fräsen, Bohren oder Ziehen je nach Schloss.",
  },
  {
    service: "Zylinder fräsen / bohren (zerstörende Türöffnung)",
    priceFrom: 175,
    priceTo: 250,
    priceLabel: "175–250€",
    timeWindow: "Mo–So, 24/7",
    note: "Wenn beschädigungsfreies Öffnen nicht möglich ist.",
  },
  {
    service: "Schlosswechsel / Zylindertausch",
    priceFrom: 0,
    priceLabel: "Preis auf Anfrage",
    timeWindow: "Mo–So, 24/7",
    note: "Zzgl. Materialkosten je nach Zylindertyp. Fixpreis am Telefon.",
  },
  {
    service: "Briefkastenöffnung",
    priceFrom: 89,
    timeWindow: "Mo–Fr, 8–17 Uhr",
    note: "Pauschalpreis inkl. An- und Abfahrt (Standard-Schloss, keine Schließanlage).",
  },
  {
    service: "Schlossdefekt (Schlüssel vorhanden, Tür sperrt nicht)",
    priceFrom: 0,
    priceLabel: "Preis auf Anfrage",
    timeWindow: "Mo–So, 24/7",
    note: "Diagnose vor Ort, Fixpreis vor Beginn der Reparatur.",
  },
  {
    service: "Jedes weitere Schloss",
    priceFrom: 75,
    timeWindow: "Aufpreis je zusätzlichem Schloss",
    note: "Wenn mehrere Schlösser geöffnet oder getauscht werden.",
  },
  {
    service: "Stornierung nach Anfahrt (Auftrag vor Ort abgesagt)",
    priceFrom: 79,
    timeWindow: "Interventionskosten",
    note: "Nur wenn Auftrag nach Anfahrt am Einsatzort abgesagt wird.",
  },
  {
    service: "Sicherheitsberatung vor Ort",
    priceFrom: 0,
    priceLabel: "kostenlos",
    timeWindow: "Nach Terminvereinbarung",
    note: "Unverbindliche Beratung — kostenfrei.",
  },
];

/* ────────────────────────────────────────────────────────────────────────
 * Zuschläge / surcharges (additive to base price).
 * Real client price list — April 2026.
 * ──────────────────────────────────────────────────────────────────────── */
export const PRICING_SURCHARGES: {
  label: string;
  amount: string;
  condition: string;
}[] = [
  {
    label: "Abendzuschlag",
    amount: "+30€",
    condition: "Ab 17:00 Uhr (Fixpreis).",
  },
  {
    label: "Nachtzuschlag",
    amount: "+35€",
    condition: "Ab 19:00 Uhr (Fixpreis).",
  },
  {
    label: "Nachtzuschlag (Spätnacht)",
    amount: "+89€",
    condition: "Ab 24:00 Uhr (Fixpreis).",
  },
  {
    label: "Wochenend- / Feiertagszuschlag",
    amount: "+39€",
    condition:
      "Wochenende = Fr 20:00 bis Mo 08:00. Gilt auch an gesetzlichen Feiertagen.",
  },
  {
    label: "Sicherheitstür / Doppelflügeltür",
    amount: "+45€",
    condition:
      "Bei Sicherheitstüren, Doppelflügel, Doppelfalz oder Feuerschutztüren.",
  },
  {
    label: "Sicherheitsrosette / Kernziehschutz ausfräsen",
    amount: "+50€",
    condition:
      "Wenn eine Sicherheitsrosette das Schloss schützt und ausgefräst werden muss.",
  },
  {
    label: "Fräszuschlag (versperrtes Schloss)",
    amount: "+45€",
    condition:
      "Wenn ein versperrtes Schloss in seltenen Fällen sperrtechnisch nicht geöffnet werden kann.",
  },
  {
    label: "Sicherheitselement (Dichtung, Beschlag u. ä.)",
    amount: "+45€ je Element (max. 90€)",
    condition: "Maximal 2 Elemente werden verrechnet.",
  },
  {
    label: "Spion-Öffner Einsatz",
    amount: "+45€",
    condition:
      "Wenn in seltenen Fällen der Spion-Öffner zum Einsatz gebracht werden muss.",
  },
];

/* What's included / NOT included — for /preise comparison block */
export const PRICING_INCLUDED = [
  "Anfahrt in 15–20 Minuten",
  "Beratung am Telefon",
  "Fixpreis vor Beginn der Arbeit",
  "Fachgerechte beschädigungsfreie Türöffnung (in den meisten Fällen)",
  "Bezahlung in bar oder per Bankomat",
  "An- und Abfahrt im Türöffnungs-Fixpreis enthalten",
] as const;

export const PRICING_NOT_CHARGED = [
  "Anfahrtskosten — niemals!",
  "Wegpauschalen oder Kilometergeld",
  "Versteckte Service-Gebühren",
  "Aufschläge ohne vorherige Ankündigung am Telefon",
  "Beratungsgebühr für Sicherheitscheck",
  "Pauschalen für Telefonberatung",
] as const;

/* FAQ for /preise page (also feeds JSON-LD FAQPage schema) */
export const PRICING_FAQ: { q: string; a: string }[] = [
  {
    q: "Was kostet ein Schlüsseldienst in Wien?",
    a: "Ein Schlüsseldienst Wien beginnt bei uns ab 79€ für eine zugefallene Tür (Mo–Fr, 8–17 Uhr, Fixpreis inkl. An- und Abfahrt). Eine versperrte Tür mit Sicherheitsschloss kostet ab 180€. Außerhalb der Geschäftszeiten kommen Zuschläge dazu (Abend +30€, Nacht +35€/+89€, Wochenende/Feiertag +39€). Der genaue Fixpreis wird vor Beginn der Arbeit telefonisch vereinbart — kein Auftrag ohne Ihre Zustimmung.",
  },
  {
    q: "Schlüsseldienst Wien Kosten — gibt es Anfahrtskosten?",
    a: "Nein. An- und Abfahrt sind im Türöffnungs-Fixpreis (79€) bereits inkludiert — egal ob Sie in der Innenstadt (1010) oder in einem Außenbezirk wie Donaustadt (1220) wohnen. Sie zahlen ausschließlich den Fixpreis plus eventuelle Zuschläge (z. B. Wochenende), die wir Ihnen vorab am Telefon nennen.",
  },
  {
    q: "Schlüsseldienst Preise Wien — werden Aufschläge nachts oder am Wochenende verrechnet?",
    a: "Ja, transparent gelistet: Abendzuschlag ab 17:00 Uhr +30€, Nachtzuschlag ab 19:00 Uhr +35€, ab 24:00 Uhr +89€, Wochenend- und Feiertagszuschlag +39€ (Wochenende beginnt Freitag 20:00 und endet Montag 08:00). Diese Aufschläge werden Ihnen bereits am Telefon transparent mitgeteilt — bevor wir losfahren. Keine Überraschungen vor Ort.",
  },
  {
    q: "Was kostet ein Schlosswechsel in Wien?",
    a: "Ein Schlosswechsel oder Zylindertausch wird zum Fixpreis am Telefon vereinbart — der genaue Schlüsseldienst Wien Kosten-Anteil hängt von Schloss-Typ und Material (Standardzylinder, Sicherheitszylinder von EVVA, ABUS o. ä.) ab. Bitte rufen Sie uns an für eine konkrete Preisangabe — kein Auftrag ohne Ihre Zustimmung.",
  },
  {
    q: "Was kostet eine Türöffnung in Wien?",
    a: "Eine zugefallene Tür kostet bei uns 79€ Fixpreis (Mo–Fr, 8–17 Uhr) inkl. An- und Abfahrt. Eine versperrte Tür mit Sicherheitsschloss, Kernschutz oder Doppelfalz kostet ab 180€. Sollte ausnahmsweise ein zerstörendes Öffnen (Zylinder fräsen oder bohren) notwendig sein, liegen die Aufsperrdienst Preise Wien zwischen 175€ und 250€. In den allermeisten Fällen öffnen wir Ihre Tür beschädigungsfrei.",
  },
  {
    q: "Akzeptieren Sie Bankomat oder nur Bargeld?",
    a: "Wir akzeptieren beides: Bargeld und Bankomatkarte direkt vor Ort. So müssen Sie sich keine Sorgen machen, ob Sie genug Bargeld zuhause haben.",
  },
  {
    q: "Was kostet eine Briefkastenöffnung in Wien?",
    a: "Eine Briefkastenöffnung kostet bei uns 89€ Pauschalpreis inkl. An- und Abfahrt (Mo–Fr, 8–17 Uhr, Standard-Schloss ohne Schließanlage). Bei Schließanlagen oder außerhalb der Geschäftszeiten erfolgt der Schlüsseldienst Wien Kosten-Voranschlag am Telefon.",
  },
  {
    q: "Schlüsseldienst Wien Kosten — was passiert, wenn ich den Auftrag vor Ort doch nicht möchte?",
    a: "Wenn der Auftrag erst nach unserer Anfahrt am Einsatzort telefonisch oder vor Ort abgesagt wird, fällt eine Interventionspauschale von 79€ an (für Anfahrt und Zeit). Wenn Sie hingegen vor unserer Abfahrt absagen, entstehen Ihnen keinerlei Kosten. Beginnt die Arbeit erst nach Ihrer ausdrücklichen Zustimmung zum Fixpreis.",
  },
];

/* ────────────────────────────────────────────────────────────────────────
 * Nachbarbezirke / NEIGHBORS map
 * Geographic adjacencies between Vienna districts (+ Klosterneuburg).
 * Key = `district` field of EINSATZGEBIETE entry (PLZ string or "Klosterneuburg").
 * Value = array of neighboring district keys, ordered by relevance.
 * Used to show "Auch in der Nähe" cross-links on bezirk pages.
 * ──────────────────────────────────────────────────────────────────────── */
export const NEIGHBORS: Record<string, string[]> = {
  "1010": ["1020", "1030", "1040", "1080", "1090"],
  "1020": ["1010", "1090", "1200", "1220"],
  "1030": ["1010", "1040", "1110"],
  "1040": ["1010", "1030", "1050", "1060"],
  "1050": ["1040", "1060", "1100", "1120"],
  "1060": ["1040", "1050", "1070", "1150"],
  "1070": ["1060", "1080", "1150", "1160"],
  "1080": ["1010", "1070", "1090", "1160", "1170"],
  "1090": ["1010", "1020", "1080", "1180", "1190"],
  "1100": ["1050", "1110", "1120", "1230"],
  "1110": ["1030", "1100", "1220"],
  "1120": ["1050", "1100", "1130", "1150", "1230"],
  "1130": ["1120", "1140", "1230"],
  "1140": ["1130", "1150", "1160"],
  "1150": ["1060", "1070", "1120", "1140", "1160"],
  "1160": ["1070", "1080", "1140", "1150", "1170"],
  "1170": ["1080", "1160", "1180"],
  "1180": ["1090", "1170", "1190"],
  "1190": ["1090", "1180", "1200", "Klosterneuburg"],
  "1200": ["1020", "1090", "1190", "1210"],
  "1210": ["1200", "1220", "Klosterneuburg"],
  "1220": ["1020", "1110", "1210"],
  "1230": ["1100", "1120", "1130"],
  Klosterneuburg: ["1190", "1210"],
};

/* Lookup helper: get neighbor area objects for a given district key */
export function getNeighbors(
  district: string
): typeof EINSATZGEBIETE {
  const keys = NEIGHBORS[district] ?? [];
  return keys
    .map((k) => EINSATZGEBIETE.find((e) => e.district === k))
    .filter((e): e is (typeof EINSATZGEBIETE)[number] => Boolean(e));
}

/* ────────────────────────────────────────────────────────────────────────
 * KEY_TYPES — for /schluessel-nachmachen page
 *
 * Categories of keys we duplicate. Auto-Schlüssel are intentionally NOT
 * offered (no electronic / Wegfahrsperre keys).
 * Prices are intentionally NOT listed per-type — final Fixpreis is
 * confirmed at drop-off / on the phone since it depends on cylinder type
 * and whether a Sicherheitskarte is required.
 * ──────────────────────────────────────────────────────────────────────── */
export const KEY_TYPES: {
  icon: string;
  title: string;
  description: string;
  leadTime: string;
  needsCard?: boolean;
}[] = [
  {
    icon: "KeyRound",
    title: "Wohnungsschlüssel (Standard / Buntbart)",
    description:
      "Klassische Wohnungs- und Zimmerschlüssel. Schnelle Anfertigung, in der Regel direkt beim Termin.",
    leadTime: "Sofort",
  },
  {
    icon: "ShieldCheck",
    title: "Sicherheitsschlüssel mit Sicherheitskarte",
    description:
      "EVVA, ABUS, DOM, dormakaba und vergleichbare Profilzylinder-Schlüssel. Sicherheitskarte (Sperrkarte) muss vorgelegt werden.",
    leadTime: "1–5 Werktage",
    needsCard: true,
  },
  {
    icon: "Lock",
    title: "Profilzylinder-Schlüssel ohne Karte",
    description:
      "Standard-Profilzylinder ohne Sperrkarte — wird vom Originalschlüssel kopiert. Hinweis: Ohne Karte ist die Kopie nur als Basis-Sicherheit zu verstehen.",
    leadTime: "Sofort bis 1 Werktag",
  },
  {
    icon: "Mail",
    title: "Briefkasten- & Postkastenschlüssel",
    description:
      "Standard-Briefkastenschlüssel und Postkasten-Schließungen. Auch Mehrfach-Anfertigungen für Hausverwaltungen.",
    leadTime: "Sofort",
  },
  {
    icon: "Plus",
    title: "Vorhängeschloss-Schlüssel",
    description:
      "Schlüssel für Vorhängeschlösser, Kellerabteile, Lagerräume und Garagen. Anfertigung vom Originalschlüssel.",
    leadTime: "Sofort",
  },
  {
    icon: "Settings",
    title: "Möbel- & Schreibtischschlüssel",
    description:
      "Schlüssel für Schreibtische, Aktenschränke, Möbelschlösser und kleine Hebelschlösser. Anfertigung vom Original oder anhand der Schließnummer.",
    leadTime: "Sofort bis 3 Werktage",
  },
];

/* What we do NOT duplicate — clear scope statement for transparency */
export const KEY_TYPES_NOT_OFFERED = [
  "Auto-Schlüssel (mit oder ohne Wegfahrsperre, Funkschlüssel, Transponder)",
  "Elektronische Schlüssel und Smart-Home-Tokens",
  "Tresor-Doppelschlüssel ohne Originaldokumente",
] as const;

/* FAQ for /schluessel-nachmachen page (also feeds JSON-LD FAQPage schema) */
export const NACHMACHEN_FAQ: { q: string; a: string }[] = [
  {
    q: "Was kostet Schlüssel nachmachen in Wien?",
    a: "Der Fixpreis hängt vom Schlüsseltyp ab: Ein klassischer Wohnungsschlüssel (Buntbart) ist günstig und schnell gemacht, ein Sicherheitsschlüssel (EVVA, ABUS, DOM) mit Sperrkarte ist aufwändiger. Wir nennen Ihnen den Fixpreis vorab — bei der Schlüsselübergabe bzw. am Telefon. Keine versteckten Kosten, keine Pauschalen ohne Ankündigung.",
  },
  {
    q: "Brauche ich eine Sicherheitskarte zum Schlüssel nachmachen?",
    a: "Bei Sicherheitsschlüsseln (EVVA, ABUS, DOM, dormakaba und vergleichbar) ja — die Sicherheitskarte (auch Sperrkarte oder Codekarte genannt) ist gesetzlich erforderlich, damit niemand ohne Ihr Wissen Kopien anfertigen kann. Bringen Sie die Karte zusammen mit dem Originalschlüssel mit. Bei Standard-Schlüsseln (Buntbart, einfache Profilzylinder ohne Karte) reicht der Originalschlüssel.",
  },
  {
    q: "Wie lange dauert das Schlüssel nachmachen?",
    a: "Standard-Schlüssel (Wohnung, Briefkasten, Vorhängeschloss) fertigen wir in der Regel sofort beim Termin. Sicherheitsschlüssel mit Sperrkarte werden beim Hersteller bestellt — die Lieferzeit beträgt je nach System 1–5 Werktage. Wir bestätigen Ihnen die Wartezeit vor der Bestellung.",
  },
  {
    q: "Schlüssel nachmachen Wien — kommen Sie auch zu mir nach Hause?",
    a: "Standard-Schlüsselkopien fertigen wir am Hauptstandort in 1060 Wien (Mariahilf, Schmalzhofgasse 10/2/27). Sie können den Schlüssel mitbringen oder per Termin anfragen — wir vereinbaren einen passenden Übergabezeitpunkt. Für reine Schlüsselkopien ohne Notfall ist eine Anfahrt zum Kunden nicht üblich, da die Anfertigung Werkzeug am Standort erfordert.",
  },
  {
    q: "Machen Sie auch Auto-Schlüssel nach?",
    a: "Nein. Auto-Schlüssel mit Wegfahrsperre, Funkschlüssel und elektronische Transponder fertigen wir nicht an — dafür ist eine spezialisierte Auto-Schlüssel-Werkstatt der richtige Ansprechpartner. Für alle mechanischen Wohn-, Sicherheits- und Möbelschlüssel sind wir Ihr Schlüsseldienst Wien.",
  },
  {
    q: "Was passiert, wenn ich keine Sperrkarte mehr habe?",
    a: "Ohne Sperrkarte kann ein Sicherheitsschlüssel nicht legal nachgemacht werden — der Hersteller verweigert die Anfertigung. In diesem Fall bleibt der Tausch des gesamten Schließzylinders die einzige Lösung. Wir beraten Sie gerne: Oft ist ein Zylindertausch sinnvoller als ein Hersteller-Sperrkarten-Neuauftrag, weil Sie gleichzeitig auf einen aktuellen Sicherheitsstandard umstellen können. Mehr dazu unter [Zylindertausch](/leistungen/zylindertausch).",
  },
  {
    q: "Kann ich auch mehrere Schlüssel auf einmal nachmachen lassen?",
    a: "Ja — gerade für Hausverwaltungen, Vermieter und Familien fertigen wir auch größere Stückzahlen an. Bei Mehrfach-Anfertigungen erhalten Sie einen Pauschalpreis. Bitte rufen Sie uns vorab an, damit wir Material und Termin entsprechend einplanen können.",
  },
];
