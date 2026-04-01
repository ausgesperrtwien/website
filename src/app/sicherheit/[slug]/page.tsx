import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  Settings,
  ShieldCheck,
  Plus,
  Ban,
  Lightbulb,
  Phone,
  Clock,
  MapPin,
  Euro,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { SECURITY_SERVICES, COMPANY, PARTNERS } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

const iconMap: Record<string, React.ElementType> = {
  Lock,
  Settings,
  ShieldCheck,
  Plus,
  Ban,
  Lightbulb,
};

/* ───────── SEO data per security service ───────── */
const securityServiceData: Record<
  string,
  {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroSubtitle: string;
    longDescription: string;
    benefits: string[];
    process: { step: string; text: string }[];
    faq: { q: string; a: string }[];
  }
> = {
  sicherheitsschloesser: {
    metaTitle:
      "Sicherheitsschlösser Wien — Einbau & Beratung | Ausgesperrt Vienna",
    metaDescription:
      "Sicherheitsschlösser in Wien einbauen lassen ✓ Hochwertige Markenschlösser ✓ Einbruchschutz für Wohnungs- & Haustüren ✓ Kostenlose Beratung ✓ Faire Fixpreise. Jetzt anrufen!",
    keywords: [
      "Sicherheitsschloss Wien",
      "Sicherheitsschlösser Wien",
      "Sicherheitsschloss einbauen Wien",
      "Türschloss Sicherheit Wien",
      "Einbruchschutz Schloss Wien",
      "Schloss Sicherheit Wohnung Wien",
      "Sicherheitsschloss Haustür Wien",
      "Schlüsseldienst Sicherheitsschloss",
    ],
    heroSubtitle:
      "Hochwertige Sicherheitsschlösser für Wohnungs- und Haustüren in Wien — fachkundig installiert von Ausgesperrt Vienna.",
    longDescription:
      "Ein sicheres Schloss ist die Grundlage für den Schutz Ihres Zuhauses. Wir installieren hochwertige Sicherheitsschlösser führender Hersteller wie EVVA, DOM, ABUS und dormakaba, die höchsten Einbruchschutz bieten. Ob für Wohnungstüren, Haustüren oder Geschäftstüren — unsere Techniker beraten Sie individuell und bauen das passende Sicherheitsschloss fachgerecht ein. Alle unsere Schlösser erfüllen die aktuellen Sicherheitsstandards und bieten Schutz gegen gängige Einbruchsmethoden wie Picking, Bohren und Aufbrechen.",
    benefits: [
      "Hochwertige Markenschlösser (EVVA, DOM, ABUS, dormakaba)",
      "Maximaler Einbruchschutz nach aktuellen Standards",
      "Schutz gegen Picking, Bohren und Aufbrechen",
      "Individuelle Beratung für Ihre Tür",
      "Fachgerechte Montage durch erfahrene Techniker",
      "Alle neuen Schlüssel inklusive",
      "Kostenlose Beratung vor Ort",
    ],
    process: [
      {
        step: "Beratung",
        text: "Wir analysieren Ihre Tür und besprechen Ihre Anforderungen an die Sicherheit.",
      },
      {
        step: "Empfehlung",
        text: "Sie erhalten eine individuelle Empfehlung und einen transparenten Fixpreis.",
      },
      {
        step: "Einbau",
        text: "Das Sicherheitsschloss wird fachgerecht montiert — von erfahrenen Profis.",
      },
      {
        step: "Übergabe",
        text: "Sie erhalten alle neuen Schlüssel und eine Funktionsprüfung.",
      },
    ],
    faq: [
      {
        q: "Welches Sicherheitsschloss ist das richtige für meine Tür?",
        a: "Das hängt von Ihrem Türtyp und Ihren Sicherheitsanforderungen ab. Wir beraten Sie kostenlos und empfehlen das passende Schloss für Ihre Situation.",
      },
      {
        q: "Wie viel kostet ein Sicherheitsschloss in Wien?",
        a: "Der Preis hängt vom Schlosstyp und Hersteller ab. Wir nennen Ihnen den Fixpreis vorab am Telefon — transparent und ohne versteckte Kosten.",
      },
      {
        q: "Kann ein Sicherheitsschloss in jede Tür eingebaut werden?",
        a: "Bei den meisten Türen ist ein Einbau oder Nachrüstung problemlos möglich. Unsere Techniker prüfen das vor Ort.",
      },
      {
        q: "Welche Marken verwenden Sie für Sicherheitsschlösser?",
        a: "Wir installieren ausschließlich Markenschlösser von EVVA, DOM, ABUS und dormakaba — Hersteller mit höchsten Sicherheitsstandards.",
      },
    ],
  },
  sicherheitszylinder: {
    metaTitle:
      "Sicherheitszylinder Wien — EVVA, DOM, ABUS | Einbau & Beratung",
    metaDescription:
      "Sicherheitszylinder in Wien einbauen lassen ✓ EVVA, DOM, ABUS, dormakaba ✓ Aufbohr- & Ziehschutz ✓ Maximaler Einbruchschutz ✓ Kostenlose Beratung. Jetzt anrufen!",
    keywords: [
      "Sicherheitszylinder Wien",
      "Sicherheitszylinder einbauen Wien",
      "Schließzylinder Sicherheit Wien",
      "EVVA Sicherheitszylinder Wien",
      "Aufbohrschutz Zylinder Wien",
      "Ziehschutz Zylinder Wien",
      "Einbruchschutz Zylinder Wien",
      "Profilzylinder Sicherheit Wien",
    ],
    heroSubtitle:
      "Professionelle Sicherheitszylinder mit Aufbohr- und Ziehschutz — fachgerecht eingebaut in Wien.",
    longDescription:
      "Der Sicherheitszylinder ist das Herzstück Ihres Türschlosses. Ein hochwertiger Sicherheitszylinder mit Aufbohr- und Ziehschutz macht es Einbrechern nahezu unmöglich, Ihr Schloss zu manipulieren. Wir beraten Sie ausführlich und kostenlos, welcher Zylinder am besten zu Ihrer Tür und Ihren Anforderungen passt — ob für Wohnungstüren, Haustüren oder Geschäftstüren. Unsere Techniker installieren ausschließlich Markenzylinder von EVVA, DOM, ABUS und dormakaba, die höchste Sicherheitsstandards erfüllen und nach ÖNORM zertifiziert sind.",
    benefits: [
      "Markenzylinder von EVVA, DOM, ABUS und dormakaba",
      "Integrierter Aufbohr- und Ziehschutz",
      "Schutz gegen Picking und Schlagschlüssel",
      "Verschiedene Sicherheitsstufen verfügbar",
      "Kostenlose Beratung zu Ihrem Bedarf",
      "Fachgerechte Montage vor Ort",
      "Alle neuen Sicherheitsschlüssel inklusive",
    ],
    process: [
      {
        step: "Beratung",
        text: "Wir prüfen Ihre Tür und empfehlen den passenden Sicherheitszylinder.",
      },
      {
        step: "Angebot",
        text: "Sie erhalten einen transparenten Fixpreis — ohne versteckte Kosten.",
      },
      {
        step: "Einbau",
        text: "Fachgerechte Montage des Sicherheitszylinders direkt vor Ort.",
      },
      {
        step: "Übergabe",
        text: "Funktionsprüfung und Übergabe aller neuen Sicherheitsschlüssel.",
      },
    ],
    faq: [
      {
        q: "Was ist der Unterschied zwischen einem normalen und einem Sicherheitszylinder?",
        a: "Ein Sicherheitszylinder bietet aktiven Schutz gegen Aufbohren, Ziehen, Picking und Schlagschlüssel-Angriffe — ein Standardzylinder nicht.",
      },
      {
        q: "Welcher Sicherheitszylinder passt zu meiner Tür?",
        a: "Das hängt von Ihrem Türtyp und der gewünschten Sicherheitsstufe ab. Wir beraten Sie kostenlos und finden die beste Lösung.",
      },
      {
        q: "Wie lange dauert der Einbau eines Sicherheitszylinders?",
        a: "Der Einbau dauert in der Regel 10–15 Minuten und wird direkt vor Ort durchgeführt.",
      },
      {
        q: "Lohnt sich ein Sicherheitszylinder wirklich?",
        a: "Absolut. Ein Sicherheitszylinder ist die effektivste und kostengünstigste Maßnahme für besseren Einbruchschutz.",
      },
    ],
  },
  "sicherheitsbeschlaege-schutzrosetten": {
    metaTitle:
      "Sicherheitsbeschläge & Schutzrosetten Wien — Einbruchschutz Montage",
    metaDescription:
      "Sicherheitsbeschläge & Schutzrosetten in Wien montieren lassen ✓ Aufbohrschutz ✓ Kernziehschutz ✓ Fachgerechte Montage ✓ Alle Türtypen ✓ Faire Preise. Jetzt anrufen!",
    keywords: [
      "Sicherheitsbeschläge Wien",
      "Schutzrosetten Wien",
      "Schutzbeschlag Wien",
      "Schutzrosette montieren Wien",
      "Kernziehschutz Wien",
      "Aufbohrschutz Tür Wien",
      "Einbruchschutz Beschlag Wien",
      "Türbeschlag Sicherheit Wien",
    ],
    heroSubtitle:
      "Sicherheitsbeschläge und Schutzrosetten — effektiver Schutz gegen Aufbohren und Abdrehen Ihres Zylinders in Wien.",
    longDescription:
      "Sicherheitsbeschläge und Schutzrosetten sind ein essenzieller Bestandteil des Einbruchschutzes. Sie verhindern, dass Einbrecher den Schließzylinder aufbohren, abdrehen oder herausziehen können — eine der häufigsten Einbruchsmethoden in Wien. Wir montieren hochwertige Sicherheitsbeschläge fachgerecht an Ihrer Wohnungs- oder Haustür. In Kombination mit einem Sicherheitszylinder bieten sie optimalen Schutz. Die Nachrüstung ist bei den meisten Türen problemlos möglich und eine der kosteneffektivsten Maßnahmen zum Einbruchschutz.",
    benefits: [
      "Schutz gegen Aufbohren und Abdrehen des Zylinders",
      "Kernziehschutz verhindert Herausziehen des Zylinders",
      "Hochwertige Markenbeschläge und Schutzrosetten",
      "Einfache Nachrüstung an bestehenden Türen möglich",
      "Ideal in Kombination mit Sicherheitszylinder",
      "Fachgerechte Montage durch erfahrene Profis",
      "Verschiedene Designs passend zu Ihrer Tür",
    ],
    process: [
      {
        step: "Beratung",
        text: "Wir prüfen Ihre Tür und empfehlen den passenden Beschlag oder die passende Schutzrosette.",
      },
      {
        step: "Angebot",
        text: "Transparenter Fixpreis für Material und Montage — keine versteckten Kosten.",
      },
      {
        step: "Montage",
        text: "Fachgerechte Montage des Sicherheitsbeschlags oder der Schutzrosette vor Ort.",
      },
      {
        step: "Prüfung",
        text: "Funktionsprüfung — Ihre Tür ist jetzt optimal gegen Einbruch geschützt.",
      },
    ],
    faq: [
      {
        q: "Was bringt ein Sicherheitsbeschlag an meiner Tür?",
        a: "Er verhindert, dass Einbrecher den Zylinder aufbohren, abdrehen oder herausziehen können — das sind die häufigsten Einbruchsmethoden.",
      },
      {
        q: "Was ist der Unterschied zwischen Sicherheitsbeschlag und Schutzrosette?",
        a: "Ein Sicherheitsbeschlag ersetzt den gesamten Türbeschlag und bietet umfassenden Schutz. Eine Schutzrosette wird nur um den Zylinder montiert und schützt gezielt diesen Bereich.",
      },
      {
        q: "Kann man Sicherheitsbeschläge nachrüsten?",
        a: "Ja, bei den meisten Türen ist eine Nachrüstung problemlos möglich. Unsere Techniker prüfen das bei Ihnen vor Ort.",
      },
      {
        q: "Brauche ich zusätzlich einen Sicherheitszylinder?",
        a: "Ein Sicherheitsbeschlag ist ideal in Kombination mit einem Sicherheitszylinder. Zusammen bieten sie den besten Schutz.",
      },
    ],
  },
  "zusatzschloesser-balkenschloesser": {
    metaTitle:
      "Zusatzschlösser & Balkenschlösser Wien — Einbau vom Profi",
    metaDescription:
      "Zusatzschlösser & Balkenschlösser in Wien einbauen lassen ✓ Kastenschlösser ✓ Panzerriegel ✓ Ideal für Altbau ✓ Fachgerechter Einbau ✓ Faire Preise. Jetzt anrufen!",
    keywords: [
      "Zusatzschloss Wien",
      "Balkenschloss Wien",
      "Kastenschloss Wien",
      "Panzerriegel Wien",
      "Zusatzschloss einbauen Wien",
      "Türsicherung Wien",
      "zusätzliche Türsicherung Wien",
      "Altbau Schloss Wien",
      "Querriegelschloss Wien",
    ],
    heroSubtitle:
      "Zusatzschlösser, Kastenschlösser und Balkenschlösser — zusätzliche Sicherheit für Ihre Tür in Wien.",
    longDescription:
      "Zusatzschlösser bieten eine wirksame Ergänzung zum bestehenden Türschloss und erschweren Einbrechern den Zugang erheblich. Wir bauen Kastenschlösser, Balkenschlösser und Panzerriegel fachgerecht ein. Besonders empfehlenswert sind Zusatzschlösser für Altbauwohnungen, Erdgeschosswohnungen und Eingangstüren ohne Mehrfachverriegelung. Unsere erfahrenen Techniker beraten Sie, welche Lösung für Ihre Tür am besten geeignet ist, und führen den Einbau professionell durch.",
    benefits: [
      "Kastenschlösser, Balkenschlösser und Panzerriegel",
      "Besonders wirksam bei Altbauwohnungen in Wien",
      "Zusätzlicher Schutz zur bestehenden Verriegelung",
      "Fachgerechter Einbau durch erfahrene Profis",
      "Verschiedene Modelle und Sicherheitsstufen",
      "Kostenlose Beratung zur besten Lösung",
      "Faire Preise — vorab am Telefon besprochen",
    ],
    process: [
      {
        step: "Beratung",
        text: "Wir prüfen Ihre Tür und empfehlen das passende Zusatz- oder Balkenschloss.",
      },
      {
        step: "Angebot",
        text: "Sie erhalten einen transparenten Fixpreis für Material und Einbau.",
      },
      {
        step: "Einbau",
        text: "Fachgerechter Einbau des Zusatzschlosses direkt vor Ort.",
      },
      {
        step: "Fertig",
        text: "Ihre Tür ist jetzt deutlich sicherer — mit allen neuen Schlüsseln.",
      },
    ],
    faq: [
      {
        q: "Welches Zusatzschloss ist das richtige für meine Tür?",
        a: "Das hängt von Ihrem Türtyp, der Einbausituation und der gewünschten Sicherheitsstufe ab. Wir beraten Sie kostenlos und empfehlen die beste Lösung.",
      },
      {
        q: "Kann man ein Zusatzschloss an jeder Tür einbauen?",
        a: "Bei den meisten Türen ist ein Einbau möglich. Unsere Techniker prüfen das vor Ort und beraten Sie zu den Möglichkeiten.",
      },
      {
        q: "Sind Zusatzschlösser besonders für Altbauwohnungen sinnvoll?",
        a: "Ja, besonders bei Altbauwohnungen ohne moderne Mehrfachverriegelung bieten Zusatzschlösser einen erheblichen Sicherheitszuwachs.",
      },
      {
        q: "Was kostet ein Zusatzschloss mit Einbau in Wien?",
        a: "Der Preis richtet sich nach Modell und Einbauaufwand. Wir nennen Ihnen den Fixpreis vorab am Telefon.",
      },
    ],
  },
  "einbruchschutz-oenorm": {
    metaTitle:
      "Einbruchschutz nach ÖNORM Wien — Beratung & Umsetzung vom Profi",
    metaDescription:
      "Einbruchschutz nach ÖNORM in Wien ✓ Professionelle Beratung ✓ Sicherheitsschlösser ✓ Sicherheitszylinder ✓ Schutzbeschläge ✓ Alle Maßnahmen aus einer Hand. Jetzt anrufen!",
    keywords: [
      "Einbruchschutz Wien",
      "Einbruchschutz ÖNORM Wien",
      "Einbruchschutz Tür Wien",
      "Einbruchsicherung Wien",
      "Einbruchschutz Wohnung Wien",
      "Türsicherung ÖNORM Wien",
      "Einbruchschutz nachrüsten Wien",
      "Einbruchschutz Beratung Wien",
    ],
    heroSubtitle:
      "Umfassender Einbruchschutz nach ÖNORM — professionelle Beratung und Umsetzung in Wien.",
    longDescription:
      "Die Einbruchrate in Wien sollte man nicht unterschätzen. Einbruchschutz nach ÖNORM ist der beste Weg, Ihr Zuhause wirksam zu schützen. Wir beraten Sie zu allen Maßnahmen rund um den Einbruchschutz: von der Wahl des richtigen Sicherheitsschlosses über Sicherheitszylinder mit Aufbohrschutz bis hin zu Schutzbeschlägen und Zusatzschlössern. Alle Empfehlungen orientieren sich an den aktuellen ÖNORM-Standards. Ob Sie Ihre bestehende Tür nachrüsten oder umfassend erneuern möchten — wir bieten alle Maßnahmen aus einer Hand.",
    benefits: [
      "Umfassende Beratung nach ÖNORM-Standards",
      "Sicherheitsschlösser, -zylinder und -beschläge",
      "Individuelle Schwachstellen-Analyse Ihrer Tür",
      "Nachrüstung bestehender Türen möglich",
      "Alle Maßnahmen aus einer Hand",
      "Kostenlose Erstberatung",
      "Praktische Alltagstipps gegen Einbrecher",
    ],
    process: [
      {
        step: "Analyse",
        text: "Wir prüfen Ihre Tür auf Schwachstellen und bewerten die aktuelle Sicherheitslage.",
      },
      {
        step: "Beratung",
        text: "Sie erhalten eine individuelle Empfehlung nach ÖNORM-Standards.",
      },
      {
        step: "Angebot",
        text: "Transparenter Fixpreis für alle empfohlenen Maßnahmen.",
      },
      {
        step: "Umsetzung",
        text: "Fachgerechte Montage aller Sicherheitskomponenten vor Ort.",
      },
    ],
    faq: [
      {
        q: "Was bedeutet Einbruchschutz nach ÖNORM?",
        a: "Die ÖNORM definiert Standards für Türen und Schlösser, die bestimmte Einbruchsmethoden erschweren oder verhindern. Wir beraten Sie, welche Maßnahmen für Ihre Tür relevant sind.",
      },
      {
        q: "Welche Maßnahmen gehören zum Einbruchschutz?",
        a: "Dazu gehören Sicherheitsschlösser, Sicherheitszylinder mit Aufbohr- und Ziehschutz, Schutzbeschläge, Schutzrosetten und Zusatzschlösser. Wir empfehlen die passende Kombination.",
      },
      {
        q: "Kann ich den Einbruchschutz an meiner bestehenden Tür nachrüsten?",
        a: "Ja, bei den meisten Türen ist eine Nachrüstung mit Sicherheitszylindern, Schutzbeschlägen und Zusatzschlössern möglich.",
      },
      {
        q: "Was kostet Einbruchschutz in Wien?",
        a: "Die Kosten hängen von den gewählten Maßnahmen ab. Wir nennen Ihnen den Fixpreis vorab — transparent und ohne versteckte Kosten.",
      },
    ],
  },
  briefkastenschloss: {
    metaTitle:
      "Briefkastenschloss Wien — Öffnung & Austausch | Ausgesperrt Vienna",
    metaDescription:
      "Briefkastenschloss in Wien öffnen oder tauschen ✓ Schnell & unkompliziert ✓ Faire Preise ✓ Schloss defekt oder Schlüssel verloren ✓ Sofort-Service. Jetzt anrufen!",
    keywords: [
      "Briefkastenschloss Wien",
      "Briefkastenschloss tauschen Wien",
      "Briefkasten öffnen Wien",
      "Postkastenschloss Wien",
      "Briefkastenschloss wechseln Wien",
      "Briefkasten Schlüssel verloren Wien",
      "Briefkastenschloss defekt Wien",
      "Briefkastenschloss austauschen Wien",
    ],
    heroSubtitle:
      "Briefkastenschloss defekt oder Schlüssel verloren? Wir öffnen und tauschen Ihr Briefkastenschloss schnell und unkompliziert in Wien.",
    longDescription:
      "Ob der Schlüssel verloren ist oder das Briefkastenschloss defekt — wir helfen sofort. Unsere Techniker öffnen Ihren Briefkasten professionell und tauschen das Schloss bei Bedarf direkt vor Ort aus. Ein einfacher und schneller Service, der keinen zweiten Termin erfordert. Gerade bei Mehrparteienhäusern in Wien ist ein funktionierender Briefkasten wichtig. Wir sind schnell vor Ort und erledigen den Austausch unkompliziert — zu fairen Preisen, die vorab besprochen werden.",
    benefits: [
      "Professionelle Öffnung des Briefkastens",
      "Schlosstausch direkt vor Ort — kein zweiter Termin",
      "Schnell und unkompliziert erledigt",
      "Faire Preise — vorab am Telefon genannt",
      "Auch für Mehrparteienhäuser geeignet",
      "Neuer Schlüssel sofort verfügbar",
      "Service in ganz Wien",
    ],
    process: [
      {
        step: "Anruf",
        text: "Beschreiben Sie das Problem — wir nennen Ihnen sofort den Preis.",
      },
      {
        step: "Termin",
        text: "Wir kommen zeitnah zu Ihnen — oft noch am selben Tag.",
      },
      {
        step: "Öffnung",
        text: "Professionelle Öffnung des Briefkastens vor Ort.",
      },
      {
        step: "Austausch",
        text: "Bei Bedarf wird das Schloss sofort getauscht — mit neuem Schlüssel.",
      },
    ],
    faq: [
      {
        q: "Kann man ein Briefkastenschloss einfach tauschen?",
        a: "Ja, wir tauschen Briefkastenschlösser schnell und unkompliziert direkt vor Ort. Ein neuer Schlüssel ist sofort verfügbar.",
      },
      {
        q: "Was kostet ein Briefkastenschloss-Tausch in Wien?",
        a: "Der Preis hängt vom Schlosstyp ab. Wir nennen Ihnen den Fixpreis vorab am Telefon — transparent und fair.",
      },
      {
        q: "Mein Briefkastenschlüssel ist verloren — was tun?",
        a: "Rufen Sie uns an. Wir öffnen Ihren Briefkasten professionell und tauschen das Schloss bei Bedarf direkt vor Ort.",
      },
      {
        q: "Kommen Sie auch zu Mehrparteienhäusern?",
        a: "Ja, wir tauschen Briefkastenschlösser auch in Mehrparteienhäusern. Sprechen Sie ggf. vorher mit Ihrer Hausverwaltung.",
      },
    ],
  },
};

/* ───────── Static params for build ───────── */
export function generateStaticParams() {
  return SECURITY_SERVICES.map((s) => ({ slug: s.slug }));
}

/* ───────── Metadata ───────── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = securityServiceData[slug];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: `https://ausgesperrtwien.at/sicherheit/${slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      locale: "de_AT",
      type: "website",
      url: `https://ausgesperrtwien.at/sicherheit/${slug}`,
    },
  };
}

/* ───────── Page ───────── */
export default async function SecurityServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SECURITY_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const data = securityServiceData[slug];
  if (!data) notFound();

  const Icon = iconMap[service.icon];

  /* JSON-LD structured data for SEO */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.text,
    description: data.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address,
        postalCode: COMPANY.zip,
        addressLocality: COMPANY.city,
        addressCountry: "AT",
      },
      areaServed: {
        "@type": "City",
        name: "Wien",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ausgesperrtwien.at",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sicherheit",
        item: "https://ausgesperrtwien.at/sicherheit",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.text,
        item: `https://ausgesperrtwien.at/sicherheit/${slug}`,
      },
    ],
  };

  return (
    <div className="pt-[72px]">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/sicherheit"
              className="hover:text-primary transition-colors"
            >
              Sicherheit
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-text-primary font-medium">
              {service.text}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              {Icon && <Icon className="h-10 w-10 text-gold-light" />}
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              {service.text} in Wien
            </h1>
            <p className="mt-4 text-lg text-white/80">{data.heroSubtitle}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CallButton size="lg" />
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Kostenlose Beratung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-border bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-10">
          {[
            { icon: Clock, text: "24/7 erreichbar" },
            { icon: Euro, text: "Faire Fixpreise" },
            { icon: MapPin, text: "Wien & Umgebung" },
            { icon: ShieldCheck, text: "Geprüfter Betrieb" },
          ].map(({ icon: BadgeIcon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <BadgeIcon className="h-4 w-4 text-primary" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Left: Description + Benefits */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  {service.text} — Professionell und zuverlässig
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {data.longDescription}
                </p>
              </SectionReveal>

              {/* Benefits */}
              <SectionReveal delay={0.1}>
                <div className="mt-10">
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    Ihre Vorteile
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {data.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>

              {/* Process */}
              <SectionReveal delay={0.15}>
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    So funktioniert&apos;s
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {data.process.map((item, i) => (
                      <div
                        key={item.step}
                        className="rounded-xl border border-border bg-bg-secondary p-5"
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                            {i + 1}
                          </span>
                          <span className="font-heading font-semibold text-text-primary">
                            {item.step}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              {/* Partners */}
              <SectionReveal delay={0.2}>
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    Unsere Partner-Marken
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {PARTNERS.map((partner) => (
                      <span
                        key={partner}
                        className="rounded-lg border border-border bg-bg-secondary px-4 py-2 text-sm font-semibold text-text-primary"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Right: CTA Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-border bg-bg-secondary p-6">
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    Kostenlose Beratung
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    Rufen Sie uns an — wir beraten Sie kostenlos und
                    unverbindlich zu allen Sicherheitsfragen.
                  </p>
                  <div className="mt-5">
                    <CallButton size="md" className="w-full" />
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-text-muted">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>24/7 erreichbar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Service in ganz Wien</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="h-3.5 w-3.5" />
                      <span>Faire Fixpreise</span>
                    </div>
                  </div>
                </div>

                {/* Other security services */}
                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="font-heading text-base font-bold text-text-primary">
                    Weitere Sicherheits-Leistungen
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {SECURITY_SERVICES.filter((s) => s.slug !== slug).map(
                      (s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/sicherheit/${s.slug}`}
                            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-text-secondary transition-colors hover:bg-bg-secondary hover:text-primary"
                          >
                            <ArrowRight className="h-3.5 w-3.5" />
                            {s.text}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                  <Link
                    href="/sicherheit"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                  >
                    Alle Sicherheits-Leistungen
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faq.length > 0 && (
        <section className="bg-bg-secondary py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Häufige Fragen zu {service.text}
              </h2>
            </SectionReveal>
            <div className="mt-8 space-y-4">
              {data.faq.map((item, i) => (
                <SectionReveal key={item.q} delay={i * 0.05}>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="font-heading text-base font-semibold text-text-primary">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.a}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {service.text} in Wien gesucht?
          </h2>
          <p className="mt-3 text-white/80">
            Rufen Sie uns jetzt an — wir beraten Sie kostenlos und
            unverbindlich. Faire Fixpreise, professioneller Service.
          </p>
          <div className="mt-6">
            <CallButton size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
