import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock,
  Shield,
  Star,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Schlüssel steckt von innen Wien — 24h Aufsperrdienst",
  description:
    "Schlüssel steckt von innen in Wien? Jemand hat die Tür von innen versperrt? Unser 24h Aufsperrdienst hilft sofort — in 15–20 Minuten vor Ort. Faire Fixpreise. Jetzt anrufen!",
  keywords: [
    "Schlüssel steckt von innen Wien",
    "Schlüssel innen stecken Wien",
    "Tür von innen versperrt Wien",
    "Schlüssel steckt innen Aufsperrdienst",
    "Tür von innen abgesperrt Wien",
    "Schlüsseldienst Schlüssel steckt Wien",
    "ausgesperrt Schlüssel innen",
    "Tür kann nicht geöffnet werden Schlüssel innen",
    "Schlüssel von innen Notdienst Wien",
    "Wohnungstür Schlüssel steckt innen Wien",
  ],
  openGraph: {
    title: "Schlüssel steckt von innen Wien — 24h Notdienst | Ausgesperrt Vienna",
    description:
      "Schlüssel steckt von innen? In 15–20 Min sind wir bei Ihnen. Professionelle Türöffnung. ☎ Jetzt anrufen!",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "https://ausgesperrtwien.at/aufsperrdienst/schluessel-steckt-innen",
  },
};

const faqs = [
  {
    q: "Kann eine Tür geöffnet werden, wenn der Schlüssel von innen steckt?",
    a: "Ja, das ist für unsere Techniker eine Routineaufgabe. Mit professionellem Spezialwerkzeug können wir die Tür öffnen, auch wenn der Schlüssel von innen im Schloss steckt.",
  },
  {
    q: "Wird das Schloss dabei beschädigt?",
    a: "In den meisten Fällen können wir die Tür öffnen, ohne das Schloss zu beschädigen. Die genaue Vorgehensweise hängt vom Schlosstyp ab.",
  },
  {
    q: "Was kostet die Öffnung, wenn der Schlüssel von innen steckt?",
    a: "Der Fixpreis wird am Telefon vorab vereinbart. Er hängt vom Schlosstyp und der Tageszeit ab. Kein Auftrag ohne Ihre Zustimmung.",
  },
  {
    q: "Was ist, wenn ein Kind alleine in der Wohnung eingesperrt ist?",
    a: "In solchen Notfällen sind wir besonders schnell. Rufen Sie uns sofort an — wir priorisieren solche Einsätze und sind schnellstmöglich bei Ihnen.",
  },
];

export default function SchluesselStecktInnenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Türöffnung bei von innen steckendem Schlüssel Wien",
    description:
      "Professionelle Türöffnung wenn der Schlüssel von innen steckt. In 15–20 Minuten vor Ort in Wien, faire Fixpreise.",
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
    serviceType: "Türöffnung",
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
            <span className="text-text-primary">Schlüssel steckt von innen</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/schluessel-steckt-von-innen.jpg"
            alt="Schlüssel steckt von innen Wien — Aufsperrdienst"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-sm font-semibold text-white">
              🚨 24h Notdienst — Schlüssel steckt von innen
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Schlüssel steckt von innen?
              <br />
              <span className="text-gold-light">Kein Problem für uns.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Ein Familienmitglied hat die Wohnung von innen versperrt und den
              Schlüssel stecken lassen? Oder ist die Tür mit dem Schlüssel von innen
              ins Schloss gefallen? Unser 24h Aufsperrdienst löst auch dieses Problem —
              schnell und professionell.
            </p>
            <div className="mt-8 space-y-4">
              <CallButton size="lg" />
              <div className="flex flex-wrap gap-4">
                {["In 15–20 Min vor Ort", "Professionelle Öffnung", "Faire Fixpreise"].map(
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
                Schlüssel steckt von innen — Was tun?
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary">
                <p>
                  Diese Situation kennen viele Familien: Jemand hat die Wohnung verlassen,
                  ohne zu bemerken, dass der Schlüssel noch von innen im Schloss steckt.
                  Von außen lässt sich die Tür nun nicht mehr aufschließen, weil der
                  innenseitige Schlüssel das Schloss blockiert.
                </p>
                <p>
                  <strong>Besonders häufig:</strong> Kinder oder ältere Personen sperren
                  versehentlich von innen zu und können die Tür nicht mehr öffnen. In
                  solchen Situationen ist schnelles Handeln wichtig — rufen Sie uns
                  sofort an.
                </p>
                <p>
                  Unser Techniker verfügt über spezielle Werkzeuge, um auch bei von innen
                  steckendem Schlüssel die Tür zu öffnen — in den meisten Fällen komplett
                  beschädigungsfrei.
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
              { step: "1", title: "Anruf", text: "Schildern Sie die Situation. Bei eingesperrten Personen priorisieren wir den Einsatz." },
              { step: "2", title: "Schnelle Anfahrt", text: "In 15–20 Minuten ist unser Techniker mit dem richtigen Spezialwerkzeug vor Ort." },
              { step: "3", title: "Türöffnung", text: "Professionelle Öffnung auch bei von innen blockiertem Schloss." },
              { step: "4", title: "Alles erledigt", text: "Ihre Tür funktioniert wieder normal. Faire Abrechnung zum Fixpreis." },
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
              { icon: Shield, title: "Spezialwerkzeug", text: "Professionelle Werkzeuge für jede Schloss-Situation — auch bei blockiertem Schlüssel." },
              { icon: Star, title: "Faire Fixpreise", text: "Transparente Fixpreise am Telefon. Keine Anfahrtskosten." },
              { icon: AlertCircle, title: "24/7 Notdienst", text: "Rund um die Uhr erreichbar — besonders schnell bei eingesperrten Personen." },
              { icon: Shield, title: "Beschädigungsfrei", text: "In den meisten Fällen öffnen wir Ihre Tür komplett ohne Schäden." },
              { icon: Star, title: "Erfahrung", text: "Hunderte erfolgreiche Einsätze bei dieser Situation in ganz Wien." },
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
              Häufige Fragen: Schlüssel steckt von innen
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
              Schlüssel steckt von innen? Rufen Sie jetzt an!
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
