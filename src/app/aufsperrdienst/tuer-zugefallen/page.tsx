import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Check,
  Clock,
  Shield,
  Star,
  AlertCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Tür zugefallen Wien — 24h Notdienst Türöffnung",
  description:
    "Tür zugefallen in Wien? Schlüssel liegt drinnen? Unser 24h Aufsperrdienst öffnet Ihre Tür in 15–20 Minuten — beschädigungsfrei und zu fairen Fixpreisen. Jetzt anrufen!",
  keywords: [
    "Tür zugefallen Wien",
    "Tür ins Schloss gefallen Wien",
    "Tür zugeschlagen Schlüssel drinnen",
    "Wohnungstür zugefallen",
    "zugefallene Tür öffnen Wien",
    "Türöffnung Wien",
    "Schlüsseldienst Tür zugefallen",
    "Aufsperrdienst Wien Notdienst",
    "Tür zugefallen was tun Wien",
    "Ausgesperrt Tür zugefallen",
  ],
  openGraph: {
    title: "Tür zugefallen Wien — 24h Notdienst | Ausgesperrt Wien",
    description:
      "Tür zugefallen? In 15–20 Min sind wir bei Ihnen. Beschädigungsfreie Öffnung, faire Fixpreise ab 60€. ☎ Jetzt anrufen!",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "https://ausgesperrt.wien/aufsperrdienst/tuer-zugefallen",
  },
};

const faqs = [
  {
    q: "Was kostet es, wenn die Tür zugefallen ist?",
    a: "Bei einer zugefallenen Tür beginnen unsere Preise ab 60€ (Mo–Fr, 8–18 Uhr). Abends, nachts und am Wochenende gelten Notdienstpreise. Der genaue Fixpreis wird vor Beginn am Telefon vereinbart.",
  },
  {
    q: "Wird meine Tür bei der Öffnung beschädigt?",
    a: "Nein, in den allermeisten Fällen können wir zugefallene Türen komplett beschädigungsfrei öffnen. Wir verwenden professionelles Spezialwerkzeug.",
  },
  {
    q: "Wie schnell sind Sie vor Ort, wenn meine Tür zugefallen ist?",
    a: "In der Regel sind wir in 15–20 Minuten bei Ihnen. Die genaue Wartezeit teilen wir Ihnen am Telefon mit.",
  },
  {
    q: "Muss ich danach das Schloss tauschen?",
    a: "Nein, bei einer zugefallenen Tür ist kein Schlosstausch nötig. Das Schloss bleibt intakt, da die Tür nur ins Schloss gefallen und nicht versperrt ist.",
  },
];

export default function TuerZugefallenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Türöffnung bei zugefallener Tür Wien",
    description:
      "Professionelle Türöffnung bei zugefallener Tür in Wien. Beschädigungsfreie Öffnung in 15–20 Minuten, faire Fixpreise ab 60€.",
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
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/aufsperrdienst" className="hover:text-primary">
              Aufsperrdienst
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-text-primary">Tür zugefallen</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tuer-zugefallen.jpg"
            alt="Tür zugefallen Wien — Aufsperrdienst"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-sm font-semibold text-white">
              🚨 24h Notdienst — Tür zugefallen
            </div>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Tür zugefallen in Wien?
              <br />
              <span className="text-gold-light">
                Wir öffnen sie in Minuten.
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Ein kurzer Windzug, die Tür fällt ins Schloss — und der Schlüssel
              liegt drinnen. Kein Grund zur Panik: Unser 24h Aufsperrdienst ist
              in 15–20 Minuten bei Ihnen und öffnet Ihre Tür schnell,
              beschädigungsfrei und zu einem fairen Fixpreis.
            </p>
            <div className="mt-8 space-y-4">
              <CallButton size="lg" />
              <div className="flex flex-wrap gap-4">
                {[
                  "In 15–20 Min vor Ort",
                  "Beschädigungsfreie Öffnung",
                  "Faire Fixpreise ab 60€",
                ].map((pill) => (
                  <div
                    key={pill}
                    className="flex items-center gap-1.5 text-sm text-white/80"
                  >
                    <Check className="h-4 w-4 text-green-400" />
                    {pill}
                  </div>
                ))}
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
                Tür zugefallen — Was tun?
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary">
                <p>
                  Es passiert schneller als man denkt: Ein Luftzug, ein kurzer
                  Moment der Unachtsamkeit — und die Wohnungstür fällt ins
                  Schloss. Der Schlüssel liegt auf dem Küchentisch und Sie stehen
                  im Stiegenhaus. Diese Situation gehört zu den häufigsten
                  Gründen, warum Menschen in Wien einen Aufsperrdienst brauchen.
                </p>
                <p>
                  <strong>Wichtig:</strong> Versuchen Sie bitte nicht, die Tür
                  selbst mit Werkzeug oder Gewalt zu öffnen. Das kann zu
                  Beschädigungen am Schloss und an der Tür führen, was die
                  Reparatur deutlich teurer macht. Rufen Sie stattdessen unseren
                  professionellen Aufsperrdienst an.
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
              {
                step: "1",
                title: "Sie rufen uns an",
                text: "Schildern Sie kurz Ihre Situation. Wir nennen Ihnen sofort den Fixpreis am Telefon.",
              },
              {
                step: "2",
                title: "Techniker kommt",
                text: "In 15–20 Minuten ist unser qualifizierter Techniker bei Ihrer zugefallenen Tür.",
              },
              {
                step: "3",
                title: "Tür wird geöffnet",
                text: "Mit professionellem Spezialwerkzeug öffnen wir Ihre Tür beschädigungsfrei.",
              },
              {
                step: "4",
                title: "Fertig!",
                text: "Sie sind wieder in Ihrer Wohnung. Faire Abrechnung zum vereinbarten Fixpreis.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {item.text}
                  </p>
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
              {
                icon: Clock,
                title: "Schnell vor Ort",
                text: "15–20 Minuten Anfahrtszeit in ganz Wien — auch nachts und am Wochenende.",
              },
              {
                icon: Shield,
                title: "Beschädigungsfrei",
                text: "In den meisten Fällen öffnen wir Ihre zugefallene Tür komplett ohne Schäden.",
              },
              {
                icon: Star,
                title: "Faire Fixpreise",
                text: "Der Preis wird am Telefon vereinbart. Keine Anfahrtskosten, keine versteckten Gebühren.",
              },
              {
                icon: AlertCircle,
                title: "24/7 Notdienst",
                text: "Montag bis Sonntag, Feiertage inklusive — wir sind immer für Sie erreichbar.",
              },
              {
                icon: Shield,
                title: "Professionell & seriös",
                text: "Langjährige Erfahrung, professionelles Werkzeug und freundliches Auftreten.",
              },
              {
                icon: Star,
                title: "Top-Bewertungen",
                text: "Hunderte zufriedene Kunden in Wien vertrauen auf unseren Aufsperrdienst.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.08}>
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

      {/* FAQ */}
      <section className="bg-bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Häufige Fragen: Tür zugefallen
            </h2>
          </SectionReveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="rounded-xl bg-white p-6 shadow-card">
                  <h3 className="font-heading text-base font-semibold text-text-primary">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {faq.a}
                  </p>
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
              Tür zugefallen? Rufen Sie jetzt an!
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Unser Techniker ist in 15–20 Minuten bei Ihnen — rund um die Uhr,
              7 Tage die Woche.
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
