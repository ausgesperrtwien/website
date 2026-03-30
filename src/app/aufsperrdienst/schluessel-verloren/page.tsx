import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Clock,
  Shield,
  Star,
  AlertCircle,
  KeyRound,
  ChevronRight,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Schlüssel verloren Wien — 24h Aufsperrdienst Notdienst",
  description:
    "Schlüssel verloren in Wien? Unser 24h Aufsperrdienst öffnet Ihre Tür in 15–20 Minuten — professionell und zu fairen Fixpreisen. Zylindertausch auf Wunsch sofort möglich. Jetzt anrufen!",
  keywords: [
    "Schlüssel verloren Wien",
    "Schlüssel verlegt Wien",
    "Schlüssel vergessen Wien",
    "Wohnungsschlüssel verloren",
    "Schlüssel weg Wien",
    "Aufsperrdienst Schlüssel verloren",
    "Schlüsseldienst Wien Schlüssel verloren",
    "Türöffnung Schlüssel verloren Wien",
    "Zylindertausch Schlüssel verloren",
    "Ausgesperrt Schlüssel verloren Wien",
  ],
  openGraph: {
    title: "Schlüssel verloren Wien — 24h Aufsperrdienst | Ausgesperrt Wien",
    description:
      "Schlüssel verloren? In 15–20 Min sind wir bei Ihnen. Professionelle Türöffnung & Zylindertausch. ☎ Jetzt anrufen!",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "https://ausgesperrt.wien/aufsperrdienst/schluessel-verloren",
  },
};

const faqs = [
  {
    q: "Was soll ich tun, wenn ich meinen Schlüssel verloren habe?",
    a: "Rufen Sie uns an und wir sind in 15–20 Minuten bei Ihnen. Versuchen Sie nicht, die Tür selbst zu öffnen, da dies zu Beschädigungen führen kann.",
  },
  {
    q: "Muss ich nach einem Schlüsselverlust das Schloss tauschen?",
    a: "Wir empfehlen nach einem Schlüsselverlust dringend einen Zylindertausch. Wenn jemand Ihren Schlüssel findet, könnte er sich Zugang zu Ihrer Wohnung verschaffen. Wir können den Tausch direkt vor Ort durchführen.",
  },
  {
    q: "Was kostet die Türöffnung bei verlorenem Schlüssel?",
    a: "Der Preis hängt von der Situation ab — ob die Tür nur zugefallen oder versperrt ist. Wir nennen Ihnen den Fixpreis am Telefon bevor wir losfahren.",
  },
  {
    q: "Kann ich auch nur das Schloss tauschen lassen?",
    a: "Ja, selbstverständlich. Wir bieten hochwertige Schließzylinder von Markenherstellern wie EVVA, DOM und ABUS an und montieren diese direkt vor Ort.",
  },
];

export default function SchluesselVerlorenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Türöffnung bei verlorenem Schlüssel Wien",
    description:
      "Professionelle Türöffnung bei verlorenem Schlüssel in Wien. In 15–20 Minuten vor Ort, faire Fixpreise, Zylindertausch möglich.",
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
    serviceType: "Türöffnung bei Schlüsselverlust",
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
            <span className="text-text-primary">Schlüssel verloren</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-sm font-semibold text-white">
              🚨 24h Notdienst — Schlüssel verloren
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Schlüssel verloren in Wien?
              <br />
              <span className="text-gold-light">Wir öffnen Ihre Tür sofort.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Sie haben Ihren Schlüssel verloren oder verlegt und kommen nicht
              mehr in Ihre Wohnung? Kein Problem — unser Aufsperrdienst ist in
              15–20 Minuten bei Ihnen. Auf Wunsch tauschen wir auch gleich den
              Schließzylinder für Ihre Sicherheit.
            </p>
            <div className="mt-8 space-y-4">
              <CallButton size="lg" />
              <div className="flex flex-wrap gap-4">
                {["In 15–20 Min vor Ort", "Zylindertausch möglich", "Faire Fixpreise"].map(
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
                Schlüssel verloren — Was tun?
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary">
                <p>
                  Ein verlorener Schlüssel ist nicht nur ärgerlich, sondern kann auch ein
                  Sicherheitsrisiko darstellen. Wenn jemand Ihren Schlüssel findet und
                  weiß, wo Sie wohnen, könnte er sich Zugang verschaffen. Deshalb
                  empfehlen wir nach einem Schlüsselverlust immer auch einen Zylindertausch.
                </p>
                <p>
                  <strong>Unser Tipp:</strong> Versuchen Sie nicht, die Tür mit improvisierten
                  Mitteln zu öffnen. Rufen Sie uns an — wir kommen schnell und öffnen
                  Ihre Tür professionell, ohne Schäden zu verursachen.
                </p>
                <p>
                  <strong>Sicherheitshinweis:</strong> Wenn Sie nicht wissen, wo Sie den
                  Schlüssel verloren haben, sollten Sie den Schließzylinder unbedingt
                  tauschen lassen. Unsere Techniker haben hochwertige Markenzylinder
                  von EVVA, DOM und ABUS direkt dabei.
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
              { step: "1", title: "Anruf", text: "Schildern Sie Ihre Situation. Wir nennen den Fixpreis am Telefon." },
              { step: "2", title: "Schnelle Anfahrt", text: "In 15–20 Minuten ist unser Techniker bei Ihnen — in ganz Wien." },
              { step: "3", title: "Türöffnung", text: "Professionelle Öffnung Ihrer Tür mit Spezialwerkzeug." },
              { step: "4", title: "Zylindertausch", text: "Auf Wunsch tauschen wir den Zylinder sofort für Ihre Sicherheit." },
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
              Warum Ausgesperrt Wien?
            </h2>
          </SectionReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, title: "Schnell vor Ort", text: "15–20 Minuten Anfahrtszeit in ganz Wien — auch nachts und am Wochenende." },
              { icon: KeyRound, title: "Zylindertausch vor Ort", text: "Hochwertige Markenzylinder von EVVA, DOM und ABUS direkt dabei." },
              { icon: Star, title: "Faire Fixpreise", text: "Der Preis wird am Telefon vereinbart. Keine Anfahrtskosten." },
              { icon: AlertCircle, title: "24/7 Notdienst", text: "Rund um die Uhr erreichbar — auch an Feiertagen." },
              { icon: Shield, title: "Professionell", text: "Langjährige Erfahrung und professionelles Spezialwerkzeug." },
              { icon: Star, title: "Top-Bewertungen", text: "Hunderte zufriedene Kunden vertrauen auf unseren Service." },
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
              Häufige Fragen: Schlüssel verloren
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
              Schlüssel verloren? Rufen Sie jetzt an!
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
