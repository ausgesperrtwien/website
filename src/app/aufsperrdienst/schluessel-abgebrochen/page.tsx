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
  title: "Schlüssel abgebrochen Wien — 24h Notdienst Schlüsseldienst",
  description:
    "Schlüssel abgebrochen im Schloss in Wien? Unser 24h Schlüsseldienst entfernt den abgebrochenen Schlüssel professionell — meist ohne Beschädigung des Schlosses. In 15–20 Min vor Ort. Jetzt anrufen!",
  keywords: [
    "Schlüssel abgebrochen Wien",
    "Schlüssel im Schloss abgebrochen Wien",
    "abgebrochener Schlüssel Wien",
    "Schlüssel abgebrochen was tun",
    "Schlüssel steckt im Schloss abgebrochen",
    "Schlüsseldienst Schlüssel abgebrochen Wien",
    "Aufsperrdienst Wien Schlüssel abgebrochen",
    "Schlüsselrest entfernen Wien",
    "Schlüssel abgebrochen Notdienst Wien",
    "Schlüssel gebrochen Tür Wien",
  ],
  openGraph: {
    title: "Schlüssel abgebrochen Wien — 24h Notdienst | Ausgesperrt Wien",
    description:
      "Schlüssel abgebrochen? In 15–20 Min sind wir bei Ihnen. Professionelle Entfernung, meist ohne Schloss-Beschädigung. ☎ Jetzt anrufen!",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "https://ausgesperrt.wien/aufsperrdienst/schluessel-abgebrochen",
  },
};

const faqs = [
  {
    q: "Was soll ich tun, wenn mein Schlüssel im Schloss abgebrochen ist?",
    a: "Versuchen Sie nicht, den Schlüsselrest selbst mit einer Zange herauszuziehen — das kann das Schloss beschädigen. Rufen Sie uns an, unser Techniker hat professionelles Spezialwerkzeug dafür.",
  },
  {
    q: "Wird das Schloss bei der Entfernung beschädigt?",
    a: "In den meisten Fällen können wir den abgebrochenen Schlüssel entfernen, ohne das Schloss zu beschädigen. Sollte das Schloss dennoch getauscht werden müssen, machen wir das direkt vor Ort.",
  },
  {
    q: "Was kostet die Entfernung eines abgebrochenen Schlüssels?",
    a: "Der Preis hängt von der Situation ab. Wir nennen Ihnen den Fixpreis vorab am Telefon — kein Auftrag ohne Ihre Zustimmung.",
  },
  {
    q: "Brauche ich danach ein neues Schloss?",
    a: "Wenn wir den Schlüsselrest ohne Beschädigung entfernen können, funktioniert Ihr Schloss weiterhin. Wir empfehlen jedoch, einen Ersatzschlüssel anfertigen zu lassen.",
  },
];

export default function SchluesselAbgebrochenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Abgebrochenen Schlüssel entfernen Wien",
    description:
      "Professionelle Entfernung abgebrochener Schlüssel in Wien. In 15–20 Minuten vor Ort, meist ohne Beschädigung des Schlosses.",
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
    serviceType: "Schlüsselentfernung",
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
            <span className="text-text-primary">Schlüssel abgebrochen</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <Image
          src="/schluessel-abgebrochen.jpg"
          alt="Schlüssel abgebrochen Wien — Aufsperrdienst"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-sm font-semibold text-white">
              🚨 24h Notdienst — Schlüssel abgebrochen
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Schlüssel abgebrochen
              <br />
              <span className="text-gold-light">in Wien? Wir helfen sofort.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Ihr Schlüssel ist im Schloss abgebrochen? Keine Panik — unser Techniker
              entfernt den Schlüsselrest professionell und in den meisten Fällen ohne
              das Schloss zu beschädigen. In 15–20 Minuten sind wir bei Ihnen.
            </p>
            <div className="mt-8 space-y-4">
              <CallButton size="lg" />
              <div className="flex flex-wrap gap-4">
                {["In 15–20 Min vor Ort", "Professionelle Entfernung", "Meist ohne Schaden"].map(
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
                Schlüssel abgebrochen — Was tun?
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary">
                <p>
                  Ein abgebrochener Schlüssel ist ein häufiges Problem, das meist durch
                  Materialermüdung oder Verschleiß verursacht wird. Der Schlüsselrest
                  steckt im Schloss und lässt sich oft nicht einfach herausziehen.
                </p>
                <p>
                  <strong>Wichtig:</strong> Versuchen Sie nicht, den Schlüsselrest selbst
                  mit Werkzeug herauszuziehen. Eine Zange oder ein Schraubenzieher kann den
                  Schließzylinder beschädigen, was den Tausch des gesamten Schlosses nötig macht.
                </p>
                <p>
                  Unser Techniker verwendet professionelles Extraktionswerkzeug und kann den
                  abgebrochenen Schlüssel in den meisten Fällen entfernen, ohne das Schloss
                  zu beschädigen. Sollte dennoch ein Tausch nötig sein, haben wir hochwertige
                  Zylinder von EVVA, DOM und ABUS direkt dabei.
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
              { step: "1", title: "Sie rufen uns an", text: "Schildern Sie kurz die Situation. Wir nennen Ihnen sofort den Fixpreis." },
              { step: "2", title: "Techniker kommt", text: "In 15–20 Minuten ist unser Spezialist mit dem richtigen Werkzeug da." },
              { step: "3", title: "Schlüssel entfernen", text: "Professionelle Extraktion des Schlüsselrests — meist ohne Schaden am Schloss." },
              { step: "4", title: "Tür funktioniert", text: "Ihr Schloss funktioniert wieder. Bei Bedarf Zylindertausch vor Ort." },
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
              { icon: Shield, title: "Spezialwerkzeug", text: "Professionelles Extraktionswerkzeug für schonende Schlüsselentfernung." },
              { icon: Star, title: "Faire Fixpreise", text: "Transparente Fixpreise am Telefon. Keine versteckten Kosten." },
              { icon: AlertCircle, title: "24/7 Notdienst", text: "Rund um die Uhr erreichbar — auch an Feiertagen." },
              { icon: Shield, title: "Schlossfachmann", text: "Zylindertausch und Schlossreparatur direkt vor Ort möglich." },
              { icon: Star, title: "Top-Bewertungen", text: "Hunderte zufriedene Kunden vertrauen auf unseren Aufsperrdienst." },
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
              Häufige Fragen: Schlüssel abgebrochen
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
              Schlüssel abgebrochen? Rufen Sie jetzt an!
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
