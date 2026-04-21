import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  Clock,
  Euro,
  MapPin,
  Phone,
  ChevronRight,
  Shield,
  Info,
} from "lucide-react";
import {
  COMPANY,
  PRICING_TABLE,
  PRICING_SURCHARGES,
  PRICING_FAQ,
  PRICING_INCLUDED,
  PRICING_NOT_CHARGED,
} from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ───────── Metadata ───────── */
export const metadata: Metadata = {
  title:
    "Schlüsseldienst Wien Kosten — Transparente Preisliste ab 79€ | Aufsperrdienst Preise",
  description:
    "Schlüsseldienst Wien Kosten transparent ✓ Aufsperrdienst Preise Wien ab 79€ ✓ Keine Anfahrtskosten ✓ Fixpreis am Telefon ✓ Bar & Bankomat ✓ Alle Zuschläge offen gelistet. Komplette Preisliste online.",
  keywords: [
    "Schlüsseldienst Wien Kosten",
    "Schlüsseldienst Preise Wien",
    "Aufsperrdienst Wien Kosten",
    "Aufsperrdienst Preise Wien",
    "Schlüsseldienst Kosten",
    "Schlüsseldienst Preise",
    "was kostet ein Schlüsseldienst Wien",
    "Türöffnung Kosten Wien",
    "Tür öffnen Kosten Wien",
    "Schlosswechsel Kosten Wien",
    "Schlüsseldienst günstig Wien",
    "Schlüsseldienst Wien Preisliste",
    "Aufsperrdienst Preise",
  ],
  openGraph: {
    title:
      "Schlüsseldienst Wien Kosten — Transparente Preisliste ab 79€",
    description:
      "Aufsperrdienst Preise Wien transparent ab 79€. Keine Anfahrtskosten, Fixpreis am Telefon, Bar & Bankomat.",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "/preise",
  },
};

/* ───────── Page ───────── */
export default function PreisePage() {
  /* JSON-LD: Service with offers array (eligible for SERP price snippets) */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Schlüsseldienst Wien — Transparente Preise",
    alternateName: [
      "Aufsperrdienst Preise Wien",
      "Schlüsseldienst Wien Kosten",
      "Schlüsseldienst Preise Wien",
    ],
    serviceType: "Schlüsseldienst / Aufsperrdienst",
    description:
      "Transparente Preisliste für Schlüsseldienst und Aufsperrdienst in Wien. Türöffnung 79€ Fixpreis (zugefallen), versperrte Tür ab 180€, Briefkasten 89€. An- und Abfahrt im Türöffnungs-Fixpreis enthalten.",
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      url: "https://ausgesperrtwien.at",
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address,
        addressLocality: COMPANY.city,
        postalCode: COMPANY.zip,
        addressCountry: "AT",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Wien",
      addressCountry: "AT",
    },
    offers: PRICING_TABLE.filter(
      (row) => row.priceFrom > 0 && !row.priceLabel?.toLowerCase().includes("anfrage")
    ).map((row) => ({
      "@type": "Offer",
      name: row.service,
      priceSpecification: row.priceTo
        ? {
            "@type": "PriceSpecification",
            minPrice: row.priceFrom.toString(),
            maxPrice: row.priceTo.toString(),
            priceCurrency: "EUR",
            description: `${row.priceFrom}–${row.priceTo}€ — ${row.timeWindow}`,
          }
        : {
            "@type": "PriceSpecification",
            price: row.priceFrom.toString(),
            priceCurrency: "EUR",
            description: `${row.priceLabel ?? `ab ${row.priceFrom}€`} — ${row.timeWindow}`,
          },
      availability: "https://schema.org/InStock",
      areaServed: "Wien",
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: COMPANY.phone,
      availableLanguage: ["German", "English", "Russian"],
    },
  };

  /* JSON-LD: FAQPage (eligible for FAQ rich result) */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PRICING_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="pt-[72px]">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Preise" },
          ]}
        />

        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                Schlüsseldienst Wien Kosten — Transparente Preise ab 79€
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Aufsperrdienst Preise Wien — keine Anfahrtskosten, keine
                versteckten Gebühren. Der Fixpreis wird vor Beginn der Arbeit
                telefonisch vereinbart.
              </p>
              <div className="mt-8 inline-flex items-baseline gap-2 rounded-2xl bg-white/10 px-8 py-4 backdrop-blur-sm">
                <span className="text-base text-white/80">Türöffnung ab</span>
                <span className="font-heading text-5xl font-bold text-white">
                  79
                </span>
                <span className="text-2xl font-semibold text-white">€</span>
              </div>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CallButton size="lg" />
                <Link
                  href="#preisliste"
                  className="rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Komplette Preisliste ↓
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Points */}
        <section className="border-b border-border bg-white py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Clock, text: "In 15–20 Min vor Ort" },
                { icon: Euro, text: "Fixpreis am Telefon" },
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

        {/* Pricing Table */}
        <section id="preisliste" className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  Preisliste Schlüsseldienst Wien
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                  Alle Schlüsseldienst-Preise in Wien auf einen Blick. Der
                  Aufsperrdienst Wien arbeitet ausschließlich zu transparenten
                  Fixpreisen — der genaue Betrag wird vor Beginn telefonisch
                  vereinbart.
                </p>
              </div>
            </SectionReveal>

            {/* Desktop table */}
            <SectionReveal delay={0.1}>
              <div className="mt-10 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-card md:block">
                <table className="w-full">
                  <thead className="bg-bg-accent">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                        Leistung
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-text-primary">
                        Preis ab
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                        Verfügbarkeit
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                        Hinweis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {PRICING_TABLE.map((row) => (
                      <tr
                        key={row.service}
                        className="transition-colors hover:bg-bg-secondary"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-text-primary">
                          {row.service}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-heading text-lg font-bold text-primary">
                            {row.priceLabel
                              ? row.priceLabel
                              : row.priceFrom === 0
                              ? "kostenlos"
                              : `ab ${row.priceFrom}€`}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-text-secondary">
                          {row.timeWindow}
                        </td>
                        <td className="px-6 py-4 text-xs text-text-muted">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionReveal>

            {/* Mobile cards */}
            <SectionReveal delay={0.1}>
              <div className="mt-10 space-y-4 md:hidden">
                {PRICING_TABLE.map((row) => (
                  <div
                    key={row.service}
                    className="rounded-2xl border border-border bg-white p-5 shadow-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-base font-bold text-text-primary">
                        {row.service}
                      </h3>
                      <span className="shrink-0 font-heading text-lg font-bold text-primary">
                        {row.priceLabel
                          ? row.priceLabel
                          : row.priceFrom === 0
                          ? "kostenlos"
                          : `ab ${row.priceFrom}€`}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-text-secondary">
                      📅 {row.timeWindow}
                    </p>
                    {row.note && (
                      <p className="mt-1 text-xs text-text-muted">
                        ℹ️ {row.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="mt-8 rounded-xl border border-border bg-bg-accent p-5">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="text-sm text-text-secondary">
                    <p className="font-semibold text-text-primary">
                      So funktioniert unser Fixpreis-Versprechen:
                    </p>
                    <p className="mt-1 leading-relaxed">
                      Sie rufen uns an → Wir nennen den Fixpreis am Telefon →
                      Wir kommen in 15–20 Minuten → Sie bestätigen den Preis
                      vor Ort → Wir öffnen Ihre Tür. <strong>Kein Auftrag
                      ohne Ihre Zustimmung.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Surcharges (Zuschläge) */}
        <section id="zuschlaege" className="bg-bg-accent py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  Zuschläge & Sonderfälle — transparent gelistet
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                  Damit die Schlüsseldienst Wien Kosten für Sie planbar bleiben,
                  listen wir alle möglichen Zuschläge offen auf. Jeder Zuschlag
                  wird Ihnen bereits am Telefon angekündigt — unser Aufsperrdienst
                  Wien arbeitet ausschließlich zu Fixpreisen, die vor Beginn
                  bestätigt werden.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {PRICING_SURCHARGES.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card"
                  >
                    <div className="shrink-0 rounded-xl bg-bg-accent px-3 py-2 text-center">
                      <span className="font-heading text-base font-bold text-primary">
                        {row.amount}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-sm font-bold text-text-primary">
                        {row.label}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                        {row.condition}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="mt-6 rounded-xl border border-border bg-white p-5">
                <p className="text-xs leading-relaxed text-text-secondary">
                  <strong className="text-text-primary">Wichtig:</strong>{" "}
                  Zuschläge werden additiv zum Basispreis verrechnet (z. B.
                  Türöffnung zugefallen 79€ + Wochenende 39€ = 118€ Fixpreis).
                  Den Gesamtbetrag erfahren Sie immer vor Beginn am Telefon.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* What's included / NOT charged */}
        <section className="bg-bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  Was ist im Schlüsseldienst-Preis enthalten?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                  Beim Aufsperrdienst Wien zählt jeder Cent — deshalb listen
                  wir genau auf, was inklusive ist und was wir niemals
                  verrechnen.
                </p>
              </div>
            </SectionReveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <SectionReveal delay={0.1}>
                <div className="rounded-2xl border-2 border-green-500/30 bg-white p-6 shadow-card">
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    ✓ Bei uns inklusive
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {PRICING_INCLUDED.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div className="rounded-2xl border-2 border-red-500/30 bg-white p-6 shadow-card">
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    ✗ Was wir NIEMALS verrechnen
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {PRICING_NOT_CHARGED.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Pricing factors */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Was beeinflusst die Schlüsseldienst-Kosten in Wien?
              </h2>
              <p className="mt-4 text-text-secondary">
                Die Schlüsseldienst Wien Kosten hängen von ein paar wenigen,
                klaren Faktoren ab. Hier ein ehrlicher Überblick — damit Sie
                wissen, warum eine Türöffnung um 22 Uhr mehr kostet als am
                Dienstagvormittag.
              </p>
            </SectionReveal>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "1. Tageszeit",
                  body: "Innerhalb der Geschäftszeiten (Mo–Fr, 8–17 Uhr) gilt der Tagestarif von 79€ Fixpreis für eine zugefallene Tür. Außerhalb dieser Zeit kommen transparente Zuschläge dazu: Abend ab 17:00 Uhr +30€, Nacht ab 19:00 Uhr +35€, ab 24:00 Uhr +89€. Wochenende (Fr 20:00 bis Mo 08:00) und Feiertag +39€. Alle Zuschläge werden Ihnen vorab am Telefon transparent kommuniziert.",
                },
                {
                  title: "2. Art der Türsituation",
                  body: "Eine zugefallene Tür (mit Schloss in Geschlossen-Stellung) ist meist beschädigungsfrei in wenigen Minuten geöffnet — dafür gilt unser Fixpreis von 79€. Eine versperrte Tür mit Sicherheitsschloss, Kernschutz, Doppelfalz oder Feuerschutz erfordert Spezialwerkzeug und kostet ab 180€. Sollte ausnahmsweise ein zerstörendes Öffnen (Zylinder fräsen oder bohren) nötig sein, liegt der Preis zwischen 175€ und 250€.",
                },
                {
                  title: "3. Schloss-Typ & Sicherheitselemente",
                  body: "Standard-Profilzylinder lassen sich schnell und günstig öffnen. Für Sicherheitstüren, Doppelflügel oder Feuerschutztüren wird ein Zuschlag von 45€ verrechnet. Sollte eine Sicherheitsrosette (Kernziehschutz) ausgefräst werden müssen, kommen weitere 50€ dazu. Sicherheitselemente wie Dichtungen oder Beschläge: 45€ je Element (max. 90€).",
                },
                {
                  title: "4. Anzahl der Schlösser & Zusatzleistungen",
                  body: "Wenn nach der Türöffnung ein Schlosswechsel oder Zylindertausch nötig ist (z. B. nach einem Einbruchversuch), kommen die Materialkosten dazu — der Schlosswechsel-Fixpreis wird am Telefon vereinbart. Für jedes weitere Schloss am gleichen Einsatz werden 75€ verrechnet.",
                },
                {
                  title: "5. Anfahrt",
                  body: "An- und Abfahrt sind im Türöffnungs-Fixpreis (79€) bereits inkludiert. Wir verrechnen weder Wegpauschalen noch Kilometergeld — egal ob Sie in der Inneren Stadt (1010), in Donaustadt (1220) oder in Klosterneuburg sind. Ausnahme: Wird der Auftrag erst nach unserer Anfahrt vor Ort abgesagt, fallen 79€ Interventionskosten an.",
                },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="font-heading text-base font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.body}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Market comparison */}
        <section className="bg-bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  Schlüsseldienst Preise Wien — Marktvergleich
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                  In Wien existieren leider unseriöse Anbieter, die mit
                  Lockpreisen werben und vor Ort horrende Beträge fordern. Wir
                  setzen auf Transparenz: Hier sehen Sie typische Preisspannen
                  am Wiener Markt im Vergleich zu unserem Fixpreis.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
                <table className="w-full text-sm">
                  <thead className="bg-bg-accent">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-text-primary">
                        Leistung
                      </th>
                      <th className="px-4 py-3 text-center font-semibold text-text-primary">
                        Markt-Range Wien
                      </th>
                      <th className="px-4 py-3 text-center font-semibold text-primary">
                        Unser Fixpreis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        s: "Türöffnung tagsüber (zugefallen)",
                        market: "60–250€",
                        ours: "79€ Fixpreis",
                      },
                      {
                        s: "Türöffnung Wochenende / Nacht",
                        market: "100–500€",
                        ours: "79€ + Zuschlag (30–89€)",
                      },
                      {
                        s: "Versperrte Tür / Sicherheitsschloss",
                        market: "200–600€",
                        ours: "ab 180€",
                      },
                      {
                        s: "Briefkastenöffnung (Standard)",
                        market: "60–150€",
                        ours: "89€ Pauschal",
                      },
                      {
                        s: "An- und Abfahrt",
                        market: "0–80€",
                        ours: "im Fixpreis enthalten",
                      },
                    ].map((row) => (
                      <tr key={row.s}>
                        <td className="px-4 py-3 font-medium text-text-primary">
                          {row.s}
                        </td>
                        <td className="px-4 py-3 text-center text-text-secondary">
                          {row.market}
                        </td>
                        <td className="px-4 py-3 text-center font-bold text-primary">
                          {row.ours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-50 p-4">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="text-xs leading-relaxed text-amber-900">
                  <strong>Tipp:</strong> Lassen Sie sich nie von einem
                  &quot;Schlüsseldienst günstig Wien&quot;-Lockpreis täuschen.
                  Seriöse Anbieter nennen den Fixpreis IMMER vor Beginn der
                  Arbeit am Telefon. Wer das verweigert, will Sie vor Ort über
                  den Tisch ziehen.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Häufige Fragen zu Schlüsseldienst-Kosten Wien
              </h2>
            </SectionReveal>

            <div className="mt-10 space-y-6">
              {PRICING_FAQ.map((item, i) => (
                <SectionReveal key={i} delay={i * 0.04}>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="font-heading font-bold text-text-primary">
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

        {/* Bezirk hint */}
        <section className="bg-bg-secondary py-12">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <SectionReveal>
              <p className="text-text-secondary">
                Unsere Schlüsseldienst-Preise gelten in allen 23 Wiener
                Bezirken — von Schlüsseldienst Wien 1010 bis Schlüsseldienst
                Wien 1230 — sowie in Klosterneuburg.{" "}
                <Link
                  href="/einsatzgebiete"
                  className="font-semibold text-primary hover:underline"
                >
                  Alle Einsatzgebiete ansehen →
                </Link>
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <SectionReveal>
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Schlüsseldienst Wien Kosten anfragen — Fixpreis am Telefon
              </h2>
              <p className="mt-3 text-white/80">
                Rufen Sie jetzt an. Wir nennen Ihnen den Fixpreis sofort,
                kommen in 15–20 Minuten und arbeiten erst nach Ihrer
                Zustimmung. Keine Anfahrtskosten, keine Überraschungen.
              </p>
              <div className="mt-6">
                <CallButton size="lg" />
              </div>
            </SectionReveal>
          </div>
        </section>
      </div>
    </>
  );
}
