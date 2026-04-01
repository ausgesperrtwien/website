import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock,
  Shield,
  Star,
  AlertCircle,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Schloss defekt oder klemmt Wien — 24h Schlossreparatur",
  description:
    "Schloss klemmt oder ist defekt in Wien? Unser 24h Schlüsseldienst repariert oder tauscht Ihr Schloss fachgerecht vor Ort. In 15–20 Minuten da. Faire Fixpreise. Jetzt anrufen!",
  keywords: [
    "Schloss klemmt Wien",
    "Schloss defekt Wien",
    "Schloss kaputt Wien",
    "Schloss reparieren Wien",
    "Schloss dreht nicht Wien",
    "Schloss tauschen Wien",
    "Schlossreparatur Wien",
    "Schlosswechsel Wien Notdienst",
    "Schlüsseldienst Schloss klemmt Wien",
    "Schloss lässt sich nicht drehen Wien",
  ],
  openGraph: {
    title: "Schloss defekt Wien — 24h Schlossreparatur | Ausgesperrt Vienna",
    description:
      "Schloss klemmt oder defekt? In 15–20 Min sind wir bei Ihnen. Reparatur oder Tausch vor Ort. ☎ Jetzt anrufen!",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "https://ausgesperrtwien.at/aufsperrdienst/schloss-defekt",
  },
};

const faqs = [
  {
    q: "Mein Schloss klemmt — muss es getauscht werden?",
    a: "Nicht unbedingt. Oft kann ein klemmendes Schloss repariert werden. Unser Techniker prüft vor Ort, ob eine Reparatur möglich ist oder ein Tausch nötig ist — und bespricht das mit Ihnen.",
  },
  {
    q: "Was kostet die Reparatur eines defekten Schlosses?",
    a: "Der Preis hängt von der Art des Defekts ab. Wir nennen Ihnen einen Fixpreis am Telefon oder spätestens vor Ort — kein Auftrag ohne Ihre Zustimmung.",
  },
  {
    q: "Welche Schlösser können Sie reparieren?",
    a: "Wir reparieren und tauschen alle gängigen Schloss-Typen — von einfachen Einsteckschlössern bis zu Mehrfachverriegelungen. Für Sicherheitszylinder verwenden wir ausschließlich Markenprodukte.",
  },
  {
    q: "Haben Sie Ersatzschlösser dabei?",
    a: "Ja, unsere Techniker haben eine große Auswahl an Schließzylindern und Schlössern von EVVA, DOM, ABUS und dormakaba direkt dabei.",
  },
];

export default function SchlossDefektPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Schlossreparatur und Schlosstausch Wien",
    description:
      "Professionelle Schlossreparatur und Schlosstausch in Wien. In 15–20 Minuten vor Ort, faire Fixpreise.",
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
    serviceType: "Schlossreparatur",
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
            <span className="text-text-primary">Schloss defekt</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/schloss-defekt.jpg"
            alt="Schloss defekt Wien — Aufsperrdienst"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-sm font-semibold text-white">
              🔧 24h Notdienst — Schloss defekt
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Schloss klemmt oder defekt?
              <br />
              <span className="text-gold-light">Wir reparieren es sofort.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Ihr Schloss lässt sich nicht mehr drehen, klemmt oder ist komplett defekt?
              Unser Schlüsseldienst repariert oder tauscht Ihr Schloss fachgerecht vor Ort —
              schnell, professionell und zu fairen Fixpreisen.
            </p>
            <div className="mt-8 space-y-4">
              <CallButton size="lg" />
              <div className="flex flex-wrap gap-4">
                {["In 15–20 Min vor Ort", "Reparatur oder Tausch", "Marken-Ersatzteile"].map(
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
                Schloss klemmt oder defekt — Was tun?
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary">
                <p>
                  Ein klemmendes oder defektes Schloss kann viele Ursachen haben: Verschleiß,
                  Frost, ein verbogener Schlüssel oder ein defekter Schließzylinder. In jedem
                  Fall ist es wichtig, das Problem schnell zu beheben — denn eine Tür, die sich
                  nicht richtig verschließen lässt, ist ein Sicherheitsrisiko.
                </p>
                <p>
                  <strong>Wichtig:</strong> Versuchen Sie nicht, das Schloss mit Gewalt zu
                  bedienen. Das kann den Mechanismus weiter beschädigen und macht die Reparatur
                  teurer. Verwenden Sie auch kein Öl oder WD-40 — das kann bei bestimmten
                  Schlosstypen mehr schaden als nutzen.
                </p>
                <p>
                  Unser Techniker prüft vor Ort, ob das Schloss repariert werden kann oder
                  ein Tausch nötig ist. Wir verwenden ausschließlich hochwertige Ersatzteile
                  von Markenherstellern wie EVVA, DOM, ABUS und dormakaba.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              So helfen wir Ihnen
            </h2>
          </SectionReveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Anruf", text: "Beschreiben Sie das Problem. Wir beraten Sie am Telefon und nennen den Fixpreis." },
              { step: "2", title: "Schnelle Anfahrt", text: "In 15–20 Minuten ist unser Techniker mit Werkzeug und Ersatzteilen bei Ihnen." },
              { step: "3", title: "Diagnose", text: "Wir prüfen Ihr Schloss und besprechen mit Ihnen: Reparatur oder Tausch?" },
              { step: "4", title: "Reparatur/Tausch", text: "Fachgerechte Reparatur oder Austausch mit Markenprodukten — direkt vor Ort." },
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

      {/* Why Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Warum Ausgesperrt Vienna?
            </h2>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, title: "Schnell vor Ort", text: "15–20 Minuten Anfahrtszeit in ganz Wien — auch nachts und am Wochenende." },
              { icon: Wrench, title: "Ersatzteile dabei", text: "Zylinder und Schlösser von EVVA, DOM, ABUS und dormakaba direkt im Einsatzfahrzeug." },
              { icon: Star, title: "Faire Fixpreise", text: "Transparente Preise am Telefon. Kein Auftrag ohne Ihre Zustimmung." },
              { icon: AlertCircle, title: "24/7 Notdienst", text: "Rund um die Uhr erreichbar — auch an Feiertagen." },
              { icon: Shield, title: "Reparatur bevorzugt", text: "Wir reparieren wenn möglich — ein Tausch nur wenn nötig." },
              { icon: Star, title: "Garantie", text: "Auf alle verbauten Teile und unsere Arbeit." },
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

      {/* FAQ */}
      <section className="bg-bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Häufige Fragen: Schloss defekt
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
              Schloss defekt? Rufen Sie jetzt an!
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Unser Techniker ist in 15–20 Minuten bei Ihnen — rund um die Uhr, 7 Tage die Woche.
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
