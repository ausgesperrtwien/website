export const COMPANY = {
  name: "Ausgesperrt Wien",
  legalName: "Ausgesperrt Wien Aufsperrdienst und Montage",
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
}[] = [
  {
    district: "1010",
    name: "Innere Stadt",
    slug: "1010-innere-stadt",
    plz: "1010",
    address: "",
    hauptstandort: false,
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
    description:
      "Schlüsseldienst in 1020 Wien — Leopoldstadt. Ausgesperrt im 2. Bezirk? Unser Aufsperrdienst ist in 15–20 Minuten bei Ihnen. Faire Fixpreise ab 60€, keine Anfahrtskosten.",
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
    description:
      "Schlüsseldienst in 1040 Wien — Wieden. Ausgesperrt? Schlüssel verloren? Unser Aufsperrdienst hilft schnell und günstig. Fixpreise ab 60€, keine Anfahrtskosten, 24/7 Notdienst.",
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
    description:
      "Ihr Schlüsseldienst-Hauptstandort in 1060 Wien — Mariahilf, Schmalzhofgasse 10/2/27. Als Profi-Aufsperrdienst stehen wir Ihnen rund um die Uhr, 365 Tage im Jahr zur Verfügung. Keinerlei Anfahrtskosten.",
    longDescription:
      "Der 6. Bezirk Mariahilf ist unser Hauptstandort. Von der Schmalzhofgasse 10/2/27 aus versorgen wir ganz Wien mit professionellem Schlüsseldienst und Aufsperrdienst. Ob in der Mariahilfer Straße, am Naschmarkt oder in der Gumpendorfer Straße — wir sind innerhalb weniger Minuten bei Ihnen. Türöffnung, Schlosswechsel, Zylindertausch, Sicherheitsberatung und Einbruchschutz: Alles aus einer Hand, 24/7, zu fairen Fixpreisen ab 60€.",
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
    description:
      "Schlüsseldienst in 1080 Wien — Josefstadt. Ausgesperrt im 8. Bezirk? Wir kommen in 15 Minuten. Faire Fixpreise ab 60€, keine Anfahrtskosten, 24/7 Notdienst.",
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
    description:
      "Aufsperrdienst in 1110 Wien — Simmering. Tür zugefallen oder Schloss defekt? Wir kommen in 15–20 Minuten. Faire Fixpreise ab 60€, keine Anfahrtskosten, 24/7 erreichbar.",
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
    description:
      "Schlüsseldienst in 1120 Wien — Meidling. Ausgesperrt? Schlüssel verloren? Unser Aufsperrdienst ist in 15 Minuten bei Ihnen. Fixpreise ab 60€, keine Anfahrtskosten, 24/7.",
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
    description:
      "Schlüsseldienst in 1140 Wien — Penzing. Tür zugefallen oder Schloss klemmt? Wir kommen in 15–20 Minuten. Faire Fixpreise ab 60€, 24/7 Notdienst, keine Anfahrtskosten.",
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
    description:
      "Schlüsseldienst in 1160 Wien — Ottakring. Schlüssel verloren oder Tür zugefallen? Wir kommen in 15 Minuten. Faire Fixpreise ab 60€, keine Anfahrtskosten, 24/7.",
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
    description:
      "Schlüsseldienst in 1180 Wien — Währing. Tür zugefallen oder Schloss defekt? Wir sind in 15–20 Minuten vor Ort. Faire Fixpreise ab 60€, keine Anfahrtskosten.",
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
    description:
      "Schlüsseldienst in 1200 Wien — Brigittenau. Schlüssel verloren, Schloss defekt oder ausgesperrt? Fixpreis für zugefallene Türen ab 60€. 24/7 erreichbar, keine Anfahrtskosten.",
    longDescription:
      "Im 20. Bezirk Brigittenau bieten wir schnellen Schlüsseldienst. Ob am Hannovermarkt, in der Wallensteinstraße oder beim Millennium Tower — wir sind rasch bei Ihnen. Professionelle Türöffnung, Schlosswechsel und Sicherheitstechnik zum Fixpreis ab 60€.",
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
    description:
      "Aufsperrdienst in 1230 Wien — Liesing. Tür zugefallen oder Schloss defekt? Wir kommen in 20 Minuten. Faire Fixpreise ab 60€, keine Anfahrtskosten, 24/7 erreichbar.",
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
    text: "Schlüssel abgebrochen mitten im Schloss. Ausgesperrt Wien hat das super sauber gelöst, ohne das Schloss zu beschädigen. Sehr professionell und freundlich.",
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
