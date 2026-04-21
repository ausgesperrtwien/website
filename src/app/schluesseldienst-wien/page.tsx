import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Clock,
  MapPin,
  Euro,
  Shield,
  Star,
  Check,
  ChevronRight,
  AlertCircle,
  KeyRound,
  Scissors,
  Wrench,
  Lock,
  ShieldAlert,
  DoorOpen,
  RefreshCw,
  Settings,
  ShieldCheck,
  Home,
  Plus,
  Mail,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import {
  COMPANY,
  EINSATZGEBIETE,
  SERVICES,
  SITUATIONS,
  getBezirkUrl,
} from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BezirkeLinkGrid from "@/components/BezirkeLinkGrid";

export const metadata: Metadata = {
  title:
    "Schlüsseldienst Wien — Preise, alle 23 Bezirke & Anfahrtszeit im Überblick",
  description:
    "Schlüsseldienst in Wien im transparenten Überblick: Fixpreise, Anfahrtszeiten, Leistungen und alle 23 Bezirke + Klosterneuburg. Vergleichen, prüfen, anrufen — Aufsperrdienst Wien 24/7.",
  keywords: [
    "schlüsseldienst wien",
    "schlüsseldienst wien preise",
    "schlüsseldienst wien kosten",
    "schlüsseldienst wien vergleich",
    "schlüsseldienst wien empfehlung",
    "schlüsseldienst wien günstig",
    "schlüsseldienst wien 24h",
    "schlüsseldienst wien notdienst",
    "schlüsseldienst wien in der nähe",
    "aufsperrdienst wien",
    "aufsperrdienst wien preise",
    "aufsperrdienst wien günstig",
    "türöffnung wien",
  ],
  openGraph: {
    title:
      "Schlüsseldienst Wien — Preise, Bezirke & Anfahrtszeit im Überblick | Ausgesperrt Vienna",
    description:
      "Schlüsseldienst in Wien transparent im Überblick: Fixpreise, alle 23 Bezirke + Klosterneuburg, Anfahrtszeit 15–20 Min. Aufsperrdienst Wien 24/7.",
    locale: "de_AT",
    type: "website",
    url: "https://ausgesperrtwien.at/schluesseldienst-wien",
  },
  alternates: {
    canonical: "https://ausgesperrtwien.at/schluesseldienst-wien",
  },
};

const SITUATION_ICONS: Record<string, typeof AlertCircle> = {
  "tuer-zugefallen": AlertCircle,
  "schluessel-verloren": KeyRound,
  "schluessel-abgebrochen": Scissors,
  "schloss-defekt": Wrench,
  "schluessel-steckt-innen": Lock,
  "nach-einbruch": ShieldAlert,
};

const SERVICE_ICONS: Record<string, typeof DoorOpen> = {
  DoorOpen,
  KeyRound,
  Scissors,
  Wrench,
  RefreshCw,
  Settings,
  ShieldCheck,
  Home,
  Plus,
  Mail,
  AlertTriangle,
  Lightbulb,
};

const faqs = [
  {
    q: "Was kostet ein Schlüsseldienst in Wien?",
    a: "Eine Türöffnung bei zugefallener Tür kostet bei uns 79€ Fixpreis (Mo–Fr, 8–17 Uhr) — An- und Abfahrt sind inklusive. Eine versperrte Tür mit Sicherheitsschloss kostet ab 180€. Außerhalb der Geschäftszeiten kommen transparente Zuschläge dazu (Abend +30€, Nacht +35€/+89€, Wochenende/Feiertag +39€). Der genaue Fixpreis wird vor Beginn der Arbeit telefonisch vereinbart.",
  },
  {
    q: "Wie schnell ist der Schlüsseldienst Wien bei mir?",
    a: "In der Regel sind wir in 15–20 Minuten bei Ihnen — egal in welchem Wiener Bezirk. Von unserem Hauptstandort in Mariahilf decken wir ganz Wien ab. Die genaue Anfahrtszeit teilen wir Ihnen bereits am Telefon mit.",
  },
  {
    q: "Schlüsseldienst Wien — gibt es Anfahrtskosten?",
    a: "Nein. Wir verrechnen keinerlei Anfahrtskosten — weder tagsüber noch nachts, weder in der Innenstadt (1010) noch in Außenbezirken wie Donaustadt (1220) oder Liesing (1230). Sie zahlen ausschließlich den Fixpreis für die Arbeit an Ihrer Tür.",
  },
  {
    q: "Sind Sie auch nachts und am Wochenende erreichbar?",
    a: "Ja — 24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr. Auch an Sonn- und Feiertagen ist unser Aufsperrdienst Wien immer für Sie erreichbar.",
  },
  {
    q: "In welchen Wiener Bezirken sind Sie tätig?",
    a: "Wir sind in allen 23 Wiener Bezirken im Einsatz — von 1010 Innere Stadt bis 1230 Liesing — sowie in Klosterneuburg. Auf jeder Bezirksseite finden Sie spezifische Informationen zu Anfahrt, Landmarks und Erreichbarkeit.",
  },
  {
    q: "Welche Sprachen spricht Ihr Team?",
    a: "Unser Team spricht Deutsch, Englisch und Russisch. Rufen Sie einfach an — wir helfen in Ihrer Sprache.",
  },
  {
    q: "Wie öffnen Sie die Tür ohne sie zu beschädigen?",
    a: "Wir nutzen professionelles Spezialwerkzeug und langjährige Erfahrung in der Öffnungstechnik. In den allermeisten Fällen ist eine komplett beschädigungsfreie Öffnung möglich — Sie sparen also die Folgekosten für ein neues Schloss.",
  },
];

export default function SchluesseldienstWienHubPage() {
  /* JSON-LD: Service for "Schlüsseldienst Wien" */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Schlüsseldienst Wien",
    alternateName: [
      "Aufsperrdienst Wien",
      "Schlüsseldienst Wien 24h",
      "Aufsperrdienst Wien 24h",
    ],
    serviceType: "Schlüsseldienst / Aufsperrdienst",
    description:
      "24h Schlüsseldienst und Aufsperrdienst in allen 23 Wiener Bezirken sowie Klosterneuburg. Türöffnung ab 79€, keine Anfahrtskosten, in 15–20 Minuten vor Ort.",
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      url: "https://ausgesperrtwien.at",
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address,
        addressLocality: "Wien",
        postalCode: COMPANY.zip,
        addressCountry: "AT",
      },
    },
    areaServed: EINSATZGEBIETE.map((e) => ({
      "@type": "Place",
      name: e.district === "Klosterneuburg" ? "Klosterneuburg" : `${e.name}, Wien`,
      postalCode: e.plz,
    })),
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "79",
        priceCurrency: "EUR",
        description: "Türöffnung ab 79€, keine Anfahrtskosten",
      },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: COMPANY.phone,
      availableLanguage: ["German", "English", "Russian"],
    },
  };

  /* JSON-LD: ItemList of all bezirk pages */
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Schlüsseldienst Wien — alle Bezirke",
    itemListElement: EINSATZGEBIETE.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name:
        e.district === "Klosterneuburg"
          ? "Schlüsseldienst Klosterneuburg"
          : `Schlüsseldienst Wien ${e.plz} — ${e.name}`,
      url: `https://ausgesperrtwien.at${getBezirkUrl(e)}`,
    })),
  };

  /* JSON-LD: FAQPage */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const topServices = SERVICES.slice(0, 9);

  return (
    <div className="pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Schlüsseldienst Wien" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">
              📍 Alle 23 Bezirke + Klosterneuburg • 24/7
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Schlüsseldienst Wien — alle Bezirke, Preise & Anfahrtszeit
              im Überblick
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Der transparente Überblick zum Schlüsseldienst in Wien:
              Fixpreise, Anfahrtszeiten, Leistungen und alle 23 Bezirke +
              Klosterneuburg auf einer Seite. Aufsperrdienst Wien rund um
              die Uhr — vergleichen, prüfen, anrufen.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CallButton size="lg" />
              <Link
                href="/preise"
                className="rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Preise einsehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Clock, text: "In 15–20 Min vor Ort" },
              { icon: Euro, text: "Fixpreise ab 79€" },
              { icon: MapPin, text: "Keine Anfahrtskosten" },
              { icon: Phone, text: "24/7 Notdienst" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm font-medium text-text-secondary"
              >
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / What we do */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Schlüsseldienst Wien — wir sind da, wenn Sie ausgesperrt sind
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Als professioneller <strong>Schlüsseldienst Wien</strong> und{" "}
              <strong>Aufsperrdienst Wien</strong> sind wir 365 Tage im Jahr,
              24 Stunden am Tag für Sie erreichbar. Ob{" "}
              <Link
                href="/aufsperrdienst/tuer-zugefallen"
                className="text-primary underline-offset-4 hover:underline"
              >
                zugefallene Tür
              </Link>
              ,{" "}
              <Link
                href="/aufsperrdienst/schluessel-verloren"
                className="text-primary underline-offset-4 hover:underline"
              >
                verlorener Schlüssel
              </Link>
              ,{" "}
              <Link
                href="/aufsperrdienst/schluessel-abgebrochen"
                className="text-primary underline-offset-4 hover:underline"
              >
                abgebrochener Schlüssel
              </Link>{" "}
              oder defektes Schloss — unser Team aus erfahrenen Technikern ist
              in 15–20 Minuten bei Ihnen vor Ort. Von unserem Hauptstandort in
              der <strong>Schmalzhofgasse 10/2/27, 1060 Wien</strong>{" "}
              (Mariahilf) decken wir ganz Wien ab — von der Inneren Stadt über
              Favoriten, Donaustadt, Floridsdorf bis Liesing.
            </p>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Sie brauchen einen Ersatzschlüssel? Auch{" "}
              <Link
                href="/schluessel-nachmachen"
                className="text-primary underline-offset-4 hover:underline"
              >
                Schlüssel nachmachen in Wien
              </Link>{" "}
              gehört zu unserem Leistungsspektrum — Wohnungs-, Sicherheits-
              (EVVA, ABUS, DOM mit Sperrkarte) und Briefkastenschlüssel,
              Fixpreis am Telefon.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Türöffnung — beschädigungsfrei in den meisten Fällen",
                "Schlosswechsel & Zylindertausch zu fairen Fixpreisen",
                "Sicherheitszylinder & Beschläge (EVVA, ABUS, DOM)",
                "Hilfe nach Einbruch — sofort wieder verschließbar",
                "Briefkastenschlösser & Zusatzschlösser",
                "Kostenlose Sicherheitsberatung vor Ort",
              ].map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {p}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Situations */}
      <section className="bg-bg-accent py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Notfall in Wien? So hilft unser Aufsperrdienst
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                Wählen Sie Ihre Situation — wir zeigen Ihnen sofort, wie schnell
                und zu welchem Preis wir helfen.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SITUATIONS.map((s, i) => {
              const Icon = SITUATION_ICONS[s.slug] ?? AlertCircle;
              return (
                <SectionReveal key={s.slug} delay={i * 0.05}>
                  <Link
                    href={`/aufsperrdienst/${s.slug}`}
                    className="group block h-full rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:border-primary hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary">
                          {s.shortText}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                          Soforthilfe Wien <ChevronRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Leistungen des Schlüsseldienst Wien
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                Vom Notfall bis zur geplanten Sicherheitsmodernisierung — alles
                aus einer Hand, in ganz Wien.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon] ?? DoorOpen;
              return (
                <SectionReveal key={service.slug} delay={i * 0.05}>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="group block h-full rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-accent text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {service.description}
                    </p>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Alle Leistungen ansehen
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bezirke grid */}
      <BezirkeLinkGrid
        title="Schlüsseldienst Wien — in Ihrem Bezirk"
        intro="Alle 23 Wiener Bezirke und Klosterneuburg auf einen Klick. Klicken Sie Ihren Bezirk an für lokale Anfahrt, Landmarks und PLZ-spezifische Infos."
        bg="white"
        anchorText={(area) =>
          area.district === "Klosterneuburg"
            ? "Schlüsseldienst Klosterneuburg"
            : `Schlüsseldienst Wien ${area.plz}`
        }
        footnote="⭐ markiert unseren Hauptstandort in 1060 Wien (Mariahilf)."
      />

      {/* Why us */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Warum Ausgesperrt Vienna als Schlüsseldienst Wien?
            </h2>
          </SectionReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "15–20 Min Anfahrt",
                text: "Von Mariahilf aus decken wir ganz Wien ab — auch nachts, am Wochenende und an Feiertagen.",
              },
              {
                icon: Euro,
                title: "Fixpreise ab 79€",
                text: "Der Preis wird telefonisch vereinbart — kein Auftrag ohne Ihre Zustimmung. Keine versteckten Kosten.",
              },
              {
                icon: MapPin,
                title: "Keine Anfahrtskosten",
                text: "Niemals — egal ob 1010 Innere Stadt oder 1220 Donaustadt. Sie zahlen nur den Service vor Ort.",
              },
              {
                icon: Shield,
                title: "Beschädigungsfrei",
                text: "Mit Spezialwerkzeug öffnen wir die meisten Türen ohne jede Beschädigung — Sie sparen die Schloss-Folgekosten.",
              },
              {
                icon: Star,
                title: "5-Sterne-Service",
                text: "Hunderte zufriedene Kunden in Wien vertrauen auf unseren Schlüsseldienst — siehe Bewertungen.",
              },
              {
                icon: Phone,
                title: "Mehrsprachig 24/7",
                text: "Deutsch, Englisch, Russisch. Rund um die Uhr telefonisch erreichbar — auch an Feiertagen.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.06}>
                <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-bg-accent">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="bg-bg-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Schlüsseldienst Wien Kosten — transparent & fair
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
              Türöffnung 79€ Fixpreis (Mo–Fr, 8–17 Uhr, inkl. An- und Abfahrt).
              Versperrte Tür ab 180€. Brieffkastenöffnung 89€ Pauschal.
              Schlosswechsel zum Fixpreis am Telefon. Außerhalb der
              Geschäftszeiten kommen transparente Zuschläge dazu — alle vorab
              kommuniziert, keine versteckten Gebühren.
            </p>
            <div className="mt-6">
              <Link
                href="/preise"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Komplette Preisliste ansehen
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Häufige Fragen zum Schlüsseldienst Wien
            </h2>
          </SectionReveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <SectionReveal key={f.q} delay={i * 0.04}>
                <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                  <h3 className="font-heading text-base font-semibold text-text-primary">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {f.a}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold text-white">
              Schlüsseldienst Wien jetzt rufen
            </h2>
            <p className="mt-4 text-lg text-white/85">
              In 15–20 Minuten bei Ihnen — egal in welchem Bezirk. Fixpreis am
              Telefon, keine Anfahrtskosten.
            </p>
            <div className="mt-8">
              <CallButton size="lg" label="Jetzt anrufen — 24h erreichbar" />
            </div>
            <p className="mt-4 text-sm text-white/70">
              ☎{" "}
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="font-semibold underline-offset-4 hover:underline"
              >
                {COMPANY.phone}
              </a>{" "}
              · Mo–So, 00:00–24:00 Uhr
            </p>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
