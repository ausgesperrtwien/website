import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock,
  Shield,
  Star,
  AlertCircle,
  ShieldAlert,
  ChevronRight,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Nach Einbruch Wien — 24h Notdienst Schloss tauschen",
  description:
    "Einbruch in Wien? Wir machen Ihre Tür sofort wieder sicher. 24h Notdienst: Schloss tauschen, Zylinder ersetzen, Tür wieder verschließbar machen. In 15–20 Min vor Ort. Jetzt anrufen!",
  keywords: [
    "nach Einbruch Wien",
    "Einbruch Schloss tauschen Wien",
    "Tür nach Einbruch reparieren Wien",
    "Schlüsseldienst nach Einbruch Wien",
    "Einbruchschaden Tür Wien",
    "Schloss nach Einbruch wechseln Wien",
    "Aufsperrdienst nach Einbruch",
    "Tür aufgebrochen Wien",
    "Zylinder nach Einbruch tauschen Wien",
    "Einbruchschutz Wien Notdienst",
  ],
  openGraph: {
    title: "Nach Einbruch Wien — 24h Notdienst | Ausgesperrt Vienna",
    description:
      "Einbruch? Wir machen Ihre Tür sofort wieder sicher. Schloss tauschen, Zylinder ersetzen — 24/7. ☎ Jetzt anrufen!",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "https://ausgesperrtwien.at/aufsperrdienst/nach-einbruch",
  },
};

const faqs = [
  {
    q: "Was soll ich nach einem Einbruch als Erstes tun?",
    a: "Rufen Sie zuerst die Polizei (133). Verändern Sie nichts am Tatort, bis die Polizei da war. Danach rufen Sie uns an — wir machen Ihre Tür sofort wieder sicher.",
  },
  {
    q: "Können Sie auch nachts nach einem Einbruch kommen?",
    a: "Ja, unser 24h Notdienst ist rund um die Uhr erreichbar — auch nachts, am Wochenende und an Feiertagen. Einbrüche priorisieren wir besonders.",
  },
  {
    q: "Was kostet die Reparatur nach einem Einbruch?",
    a: "Der Preis hängt vom Schaden ab — ob nur der Zylinder getauscht werden muss oder das gesamte Schloss. Wir besprechen alles transparent am Telefon und vor Ort.",
  },
  {
    q: "Kann ich die Kosten bei der Versicherung einreichen?",
    a: "In vielen Fällen übernimmt die Haushaltsversicherung die Kosten für Schlossreparaturen nach einem Einbruch. Wir stellen Ihnen eine detaillierte Rechnung für Ihre Versicherung aus.",
  },
  {
    q: "Wie kann ich mich in Zukunft besser schützen?",
    a: "Wir beraten Sie gerne zu Sicherheitszylindern, Sicherheitsbeschlägen und Zusatzschlössern. Nach einem Einbruch ist ein Upgrade der Sicherheitstechnik besonders sinnvoll.",
  },
];

export default function NachEinbruchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Schloss- und Türreparatur nach Einbruch Wien",
    description:
      "Sofort-Hilfe nach Einbruch in Wien. Schloss tauschen, Zylinder ersetzen, Tür wieder verschließbar machen. 24h Notdienst.",
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address,
        addressLocality: COMPANY.city,
        postalCode: COMPANY.zip,
        addressCountry: "AT",
      },
      areaServed: { "@type": "City", name: "Wien" },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    areaServed: { "@type": "City", name: "Wien" },
    serviceType: "Einbruchschadensanierung",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 text-sm text-text-muted">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/aufsperrdienst" className="hover:text-primary">Aufsperrdienst</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-text-primary">Nach Einbruch</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/nach-einbruch.jpg"
            alt="Hilfe nach Einbruch Wien — Aufsperrdienst"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-sm font-semibold text-white">
              🚨 24h Notdienst — Nach Einbruch
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Einbruch in Wien?
              <br />
              <span className="text-gold-light">Wir sichern Ihre Tür sofort.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Nach einem Einbruch ist schnelles Handeln gefragt. Wir machen Ihre
              Tür sofort wieder verschließbar, ersetzen aufgebrochene Schlösser und
              abgedrehte Zylinder — rund um die Uhr, 7 Tage die Woche.
            </p>
            <div className="mt-8 space-y-4">
              <CallButton size="lg" />
              <div className="flex flex-wrap gap-4">
                {["In 15–20 Min vor Ort", "Sofort wieder sicher", "Rechnung für Versicherung"].map(
                  (pill) => (
                    <div key={pill} className="flex items-center gap-1.5 text-sm text-white/80">
                      <Check className="h-4 w-4 text-green-400" />
                      {pill}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                Nach einem Einbruch — Was tun?
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary">
                <p>
                  Ein Einbruch ist eine belastende Erfahrung. Umso wichtiger ist es,
                  schnell die richtigen Schritte zu unternehmen:
                </p>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>
                    <strong>Polizei rufen (133)</strong> — Erstatten Sie sofort Anzeige.
                    Verändern Sie nichts am Tatort, bis die Polizei dokumentiert hat.
                  </li>
                  <li>
                    <strong>Uns anrufen</strong> — Sobald die Polizei fertig ist, rufen
                    Sie uns an. Wir sichern Ihre Tür sofort.
                  </li>
                  <li>
                    <strong>Versicherung informieren</strong> — Melden Sie den Einbruch
                    Ihrer Haushaltsversicherung. Wir stellen eine detaillierte Rechnung aus.
                  </li>
                </ol>
                <p>
                  Unser Techniker kommt in 15–20 Minuten und macht Ihre Tür sofort wieder
                  verschließbar. Wir tauschen aufgebrochene Schlösser und abgedrehte
                  Schließzylinder mit hochwertigen Markenprodukten.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services After Break-in */}
      <section className="bg-bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Unsere Leistungen nach Einbruch
            </h2>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Schloss tauschen",
                text: "Aufgebrochene Schlösser werden sofort durch neue, hochwertige Schlösser ersetzt.",
              },
              {
                icon: Star,
                title: "Zylinder ersetzen",
                text: "Abgedrehte oder manipulierte Schließzylinder werden mit Markenprodukten getauscht.",
              },
              {
                icon: ShieldAlert,
                title: "Tür sichern",
                text: "Wir machen Ihre Tür sofort wieder verschließbar — auch provisorisch, wenn nötig.",
              },
              {
                icon: Shield,
                title: "Sicherheits-Upgrade",
                text: "Sicherheitszylinder, Schutzrosetten und Sicherheitsbeschläge für besseren Schutz.",
              },
              {
                icon: AlertCircle,
                title: "Zusatzschlösser",
                text: "Einbau von Zusatzschlössern und Balkenschlössern für noch mehr Sicherheit.",
              },
              {
                icon: Star,
                title: "Rechnung",
                text: "Detaillierte Rechnung für Ihre Haushaltsversicherung — direkt vor Ort.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-bg-accent">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              So helfen wir Ihnen
            </h2>
          </SectionReveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Anruf", text: "Schildern Sie den Einbruchschaden. Wir priorisieren Ihren Einsatz." },
              { step: "2", title: "Schnelle Anfahrt", text: "In 15–20 Minuten ist unser Techniker mit allen nötigen Teilen da." },
              { step: "3", title: "Sofort-Sicherung", text: "Wir machen Ihre Tür sofort wieder verschließbar und sicher." },
              { step: "4", title: "Sicherheitsberatung", text: "Wir beraten Sie zu Upgrades für besseren Einbruchschutz." },
            ].map((item, i) => (
              <SectionReveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Häufige Fragen: Nach Einbruch
            </h2>
          </SectionReveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="rounded-xl bg-white p-6 shadow-card">
                  <h3 className="font-heading text-base font-semibold text-text-primary">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{faq.a}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold text-white">
              Einbruch? Rufen Sie jetzt an!
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Wir machen Ihre Tür sofort wieder sicher — rund um die Uhr, 7 Tage die Woche.
            </p>
            <div className="mt-8">
              <CallButton size="lg" label="Jetzt anrufen — Wir helfen sofort" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
