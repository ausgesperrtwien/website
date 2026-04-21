import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Clock,
  MapPin,
  Euro,
  Shield,
  Check,
  ChevronRight,
  KeyRound,
  ShieldCheck,
  Lock,
  Mail,
  Plus,
  Settings,
  AlertTriangle,
  Copy,
} from "lucide-react";
import {
  COMPANY,
  EINSATZGEBIETE,
  KEY_TYPES,
  KEY_TYPES_NOT_OFFERED,
  NACHMACHEN_FAQ,
} from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BezirkeLinkGrid from "@/components/BezirkeLinkGrid";

export const metadata: Metadata = {
  title:
    "Schlüssel nachmachen Wien — Schlüsselkopie vom Schlüsseldienst | Fixpreis",
  description:
    "Schlüssel nachmachen in Wien: Wohnungs-, Sicherheits- und Briefkastenschlüssel. EVVA, ABUS, DOM, dormakaba mit Sicherheitskarte. Hauptstandort 1060 Wien — Termin oder Walk-in. ☎ +43 660 172 63 00.",
  keywords: [
    "schlüssel nachmachen wien",
    "schlüssel kopieren wien",
    "schlüssel nachmachen lassen",
    "ersatzschlüssel wien",
    "schlüssel duplizieren wien",
    "sicherheitsschlüssel nachmachen wien",
    "evva schlüssel nachmachen",
    "abus schlüssel nachmachen",
    "dom schlüssel nachmachen",
    "wohnungsschlüssel nachmachen wien",
    "briefkastenschlüssel nachmachen",
    "schlüsseldienst wien",
  ],
  openGraph: {
    title:
      "Schlüssel nachmachen Wien — Schlüsselkopie vom Schlüsseldienst | Ausgesperrt Vienna",
    description:
      "Schlüssel nachmachen in Wien — Wohnungsschlüssel, Sicherheitsschlüssel (EVVA/ABUS/DOM mit Sperrkarte), Briefkastenschlüssel. Fixpreis am Telefon. Termin oder Walk-in in 1060 Wien.",
    locale: "de_AT",
    type: "website",
    url: "https://ausgesperrtwien.at/schluessel-nachmachen",
  },
  alternates: {
    canonical: "https://ausgesperrtwien.at/schluessel-nachmachen",
  },
};

const KEY_ICONS: Record<string, typeof KeyRound> = {
  KeyRound,
  ShieldCheck,
  Lock,
  Mail,
  Plus,
  Settings,
};

export default function SchluesselNachmachenPage() {
  /* JSON-LD: Service for "Schlüssel nachmachen Wien" */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Schlüssel nachmachen Wien",
    alternateName: [
      "Schlüsselkopie Wien",
      "Schlüssel duplizieren Wien",
      "Ersatzschlüssel Wien",
    ],
    serviceType: "Schlüsselkopieren / Schlüsselfertigung",
    description:
      "Schlüssel nachmachen in Wien — Wohnungs-, Sicherheits- (EVVA, ABUS, DOM, dormakaba mit Sicherheitskarte), Briefkasten-, Vorhängeschloss- und Möbelschlüssel. Fixpreis vor Beginn der Anfertigung. Hauptstandort 1060 Wien.",
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
    areaServed: EINSATZGEBIETE.map((e) => ({
      "@type": "Place",
      name:
        e.district === "Klosterneuburg"
          ? "Klosterneuburg"
          : `${e.name}, Wien`,
      postalCode: e.plz,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: COMPANY.phone,
      availableLanguage: ["German", "English", "Russian"],
    },
  };

  /* JSON-LD: FAQPage */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: NACHMACHEN_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Schlüssel nachmachen Wien" },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">
              <Copy className="h-4 w-4" />
              Schlüsselkopie vom Schlüsseldienst
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Schlüssel nachmachen Wien — Ersatzschlüssel vom Schlüsseldienst
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Wir machen Ihren Schlüssel nach — vom klassischen
              Wohnungsschlüssel bis zum Sicherheitsschlüssel mit Sperrkarte
              (EVVA, ABUS, DOM, dormakaba). Fixpreis vor Beginn, Hauptstandort
              in 1060 Wien (Mariahilf).
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CallButton size="lg" />
              <Link
                href="/kontakt"
                className="rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Termin anfragen
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Schlüssel mitbringen oder per Termin anfragen — wir vereinbaren
              einen passenden Übergabezeitpunkt.
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Euro, text: "Fixpreis vor Beginn" },
              { icon: Shield, text: "EVVA, ABUS, DOM, dormakaba" },
              { icon: MapPin, text: "1060 Wien (Mariahilf)" },
              { icon: Phone, text: "Termin oder Walk-in" },
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

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Schlüssel kopieren in Wien — schnell, präzise, fair
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Egal ob Sie einen{" "}
              <strong>Ersatzschlüssel für die Wohnungstür</strong>, eine Kopie
              Ihres <strong>Sicherheitsschlüssels mit Sperrkarte</strong> oder
              einen zusätzlichen <strong>Briefkastenschlüssel</strong>{" "}
              brauchen — wir fertigen Ihren Schlüssel präzise und zum fairen
              Fixpreis an. Als professioneller{" "}
              <Link
                href="/schluesseldienst-wien"
                className="text-primary underline-offset-4 hover:underline"
              >
                Schlüsseldienst Wien
              </Link>{" "}
              kennen wir die gängigen Profilzylinder-Systeme von EVVA, ABUS,
              DOM und dormakaba und können Sicherheitsschlüssel direkt beim
              Hersteller bestellen — vorausgesetzt, Sie können die zugehörige
              Sicherheitskarte vorlegen.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Sollten Sie keine Sperrkarte mehr haben oder den Wunsch nach
              einem Sicherheits-Upgrade, ist ein{" "}
              <Link
                href="/leistungen/zylindertausch"
                className="text-primary underline-offset-4 hover:underline"
              >
                Zylindertausch
              </Link>{" "}
              oft die bessere Lösung. Für Notfälle wie verlorene Schlüssel
              oder zugefallene Türen bieten wir zusätzlich einen{" "}
              <Link
                href="/aufsperrdienst"
                className="text-primary underline-offset-4 hover:underline"
              >
                24h Aufsperrdienst
              </Link>{" "}
              — und alle{" "}
              <Link
                href="/preise"
                className="text-primary underline-offset-4 hover:underline"
              >
                Preise unserer Leistungen
              </Link>{" "}
              finden Sie transparent gelistet.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Key types grid */}
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Welche Schlüssel kopieren wir?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                Sechs Schlüsseltypen, die wir in Wien nachmachen — von
                Standard bis Sicherheitsschloss.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_TYPES.map((kt, i) => {
              const Icon = KEY_ICONS[kt.icon] ?? KeyRound;
              return (
                <SectionReveal key={kt.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-text-primary">
                      {kt.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                      {kt.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-3 text-xs">
                      <span className="inline-flex items-center gap-1 font-semibold text-text-primary">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {kt.leadTime}
                      </span>
                      {kt.needsCard && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 font-semibold text-amber-700">
                          Sicherheitskarte erforderlich
                        </span>
                      )}
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              So einfach läuft es ab
            </h2>
          </SectionReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Anrufen oder Termin",
                text: "Sagen Sie uns, welchen Schlüssel Sie kopieren möchten — wir nennen Lieferzeit und Fixpreis.",
              },
              {
                step: "2",
                title: "Schlüssel & Karte mitbringen",
                text: "Bei Sicherheitsschlüsseln auch die Sperrkarte. Standard-Schlüssel können sofort kopiert werden.",
              },
              {
                step: "3",
                title: "Fertigung",
                text: "Standard-Schlüssel in Minuten. Sicherheitsschlüssel werden beim Hersteller bestellt (1–5 Werktage).",
              },
              {
                step: "4",
                title: "Übergabe & Test",
                text: "Wir testen die Kopie vor Ort gemeinsam mit Ihnen. Bezahlung in bar oder per Bankomat.",
              },
            ].map((s, i) => (
              <SectionReveal key={s.step} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                    {s.step}
                  </div>
                  <h3 className="font-heading text-base font-bold text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {s.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sicherheitskarte explainer */}
      <section className="bg-bg-accent py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-card sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-text-primary sm:text-2xl">
                    Sicherheitsschlüssel nachmachen — was ist die
                    Sicherheitskarte?
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    Bei modernen Profilzylindern von <strong>EVVA</strong>,{" "}
                    <strong>ABUS</strong>, <strong>DOM</strong> und{" "}
                    <strong>dormakaba</strong> ist jeder Schlüssel mit einer
                    sogenannten <strong>Sicherheitskarte</strong> (auch
                    Sperrkarte oder Codekarte) verknüpft. Diese Karte ist
                    Ihr Nachweis als rechtmäßiger Eigentümer und{" "}
                    <strong>
                      gesetzlich erforderlich, damit der Hersteller eine
                      Kopie anfertigt
                    </strong>{" "}
                    — so wird verhindert, dass jemand ohne Ihr Wissen
                    Schlüsselkopien bestellen kann.
                  </p>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    Bringen Sie zur Schlüssel-Bestellung immer Originalschlüssel{" "}
                    <em>und</em> Sicherheitskarte mit. Falls Sie die Karte
                    verloren haben, ist meist ein{" "}
                    <Link
                      href="/leistungen/zylindertausch"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Zylindertausch
                    </Link>{" "}
                    die effizientere Lösung — gleichzeitig stellen Sie auf den
                    aktuellen Sicherheitsstandard um.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* What we do NOT offer */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-text-primary sm:text-2xl">
                    Was wir nicht nachmachen
                  </h2>
                  <p className="mt-3 text-text-secondary">
                    Damit Sie nicht umsonst herkommen — diese Schlüsseltypen
                    fertigen wir <strong>nicht</strong> an:
                  </p>
                  <ul className="mt-4 space-y-2">
                    {KEY_TYPES_NOT_OFFERED.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 text-amber-700">✕</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-text-secondary">
                    Für Auto-Schlüssel ist eine spezialisierte
                    Auto-Schlüssel-Werkstatt der richtige Ansprechpartner. Für
                    alle mechanischen Wohn-, Sicherheits-, Briefkasten- und
                    Möbelschlüssel sind Sie bei uns richtig.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Warum Schlüssel nachmachen bei Ausgesperrt Vienna?
            </h2>
          </SectionReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Euro,
                title: "Fixpreis vor Beginn",
                text: "Sie erfahren den Preis bei der Schlüsselübergabe — kein Auftrag ohne Ihre Zustimmung.",
              },
              {
                icon: ShieldCheck,
                title: "Markenkompetenz",
                text: "EVVA, ABUS, DOM, dormakaba — wir kennen die gängigen Profilzylinder-Systeme und arbeiten direkt mit den Herstellern.",
              },
              {
                icon: MapPin,
                title: "Zentral in 1060 Wien",
                text: "Unser Hauptstandort in der Schmalzhofgasse (Mariahilf) ist mit U3, U4 und Bus gut erreichbar.",
              },
              {
                icon: Check,
                title: "Test vor Ort",
                text: "Wir testen jede Kopie vor Übergabe gemeinsam mit Ihnen — keine Überraschungen zuhause.",
              },
              {
                icon: Phone,
                title: "Mehrsprachig",
                text: "Deutsch, Englisch, Russisch — telefonisch und vor Ort.",
              },
              {
                icon: Copy,
                title: "Mehrfach-Anfertigung",
                text: "Auch größere Stückzahlen für Vermieter, Hausverwaltungen und Familien — Pauschalpreis nach Absprache.",
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

      {/* Bezirke grid */}
      <BezirkeLinkGrid
        title="Schlüssel nachmachen in Ihrem Wiener Bezirk"
        intro="Egal aus welchem Wiener Bezirk Sie kommen — unser Hauptstandort in 1060 Wien (Mariahilf) ist zentral und gut erreichbar. Auf jeder Bezirksseite finden Sie spezifische Infos zu Anfahrt und Erreichbarkeit."
        bg="white"
        anchorText={(area) =>
          area.district === "Klosterneuburg"
            ? "Klosterneuburg"
            : `Wien ${area.plz} — ${area.name}`
        }
        footnote="⭐ markiert unseren Hauptstandort in 1060 Wien (Mariahilf)."
      />

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Häufige Fragen zum Schlüssel nachmachen Wien
            </h2>
          </SectionReveal>
          <div className="mt-10 space-y-4">
            {NACHMACHEN_FAQ.map((f, i) => (
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
              Schlüssel nachmachen Wien — jetzt anrufen
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Wir nennen Ihnen Lieferzeit und Fixpreis am Telefon. Schlüssel
              mitbringen oder per Termin anfragen.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CallButton size="lg" label="Jetzt anrufen — Mo–So" />
              <Link
                href="/kontakt"
                className="rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Kontakt & Termin
                <ChevronRight className="ml-1 inline h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/70">
              ☎{" "}
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="font-semibold underline-offset-4 hover:underline"
              >
                {COMPANY.phone}
              </a>{" "}
              · Schmalzhofgasse 10/2/27, 1060 Wien
            </p>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
