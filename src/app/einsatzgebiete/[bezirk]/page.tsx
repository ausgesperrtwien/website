import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Euro,
  Check,
  ChevronRight,
  Shield,
  Star,
} from "lucide-react";
import { EINSATZGEBIETE, COMPANY, SERVICES } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

/* ───────── helper ───────── */
function getArea(slug: string) {
  return EINSATZGEBIETE.find((e) => e.slug === slug);
}

/* ───────── Static params for build ───────── */
export function generateStaticParams() {
  return EINSATZGEBIETE.map((e) => ({ bezirk: e.slug }));
}

/* ───────── Metadata ───────── */
type Props = { params: Promise<{ bezirk: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bezirk } = await params;
  const area = getArea(bezirk);
  if (!area) return {};

  const isKlosterneuburg = area.district === "Klosterneuburg";
  const locationLabel = isKlosterneuburg
    ? "Klosterneuburg"
    : `${area.district} Wien ${area.name}`;

  const title = `Schlüsseldienst ${locationLabel} — 24h Aufsperrdienst${area.hauptstandort ? " | Hauptstandort" : ""}`;
  const description = `Schlüsseldienst in ${locationLabel} ✓ In 15–20 Min vor Ort ✓ Faire Fixpreise ab 79€ ✓ Keine Anfahrtskosten ✓ 24/7 Notdienst ✓ Türöffnung, Schlosswechsel, Zylindertausch. Jetzt anrufen: ${COMPANY.phone}`;

  const keywords = isKlosterneuburg
    ? [
        "Schlüsseldienst Klosterneuburg",
        "Aufsperrdienst Klosterneuburg",
        "Schlüsselnotdienst Klosterneuburg",
        "Türöffnung Klosterneuburg",
        "Schloss wechseln Klosterneuburg",
        "24h Schlüsseldienst Klosterneuburg",
      ]
    : [
        `Schlüsseldienst ${area.district} Wien`,
        `Aufsperrdienst ${area.district} Wien`,
        `Schlüsseldienst ${area.name}`,
        `Aufsperrdienst ${area.name} Wien`,
        `Schlüsselnotdienst ${area.district}`,
        `Türöffnung ${area.district} Wien`,
        `Schloss wechseln ${area.district} Wien`,
        `24h Schlüsseldienst ${area.name}`,
        `Schlüsseldienst Wien ${area.name}`,
        `ausgesperrt ${area.district} Wien`,
        `Schlüssel verloren ${area.name}`,
      ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      locale: "de_AT",
      type: "website",
    },
    alternates: {
      canonical: `/einsatzgebiete/${area.slug}`,
    },
  };
}

/* ───────── Page ───────── */
export default async function BezirkPage({ params }: Props) {
  const { bezirk } = await params;
  const area = getArea(bezirk);
  if (!area) notFound();

  const isKlosterneuburg = area.district === "Klosterneuburg";
  const locationLabel = isKlosterneuburg
    ? "Klosterneuburg"
    : `${area.district} Wien — ${area.name}`;
  const locationShort = isKlosterneuburg
    ? "Klosterneuburg"
    : `${area.district} ${area.name}`;

  /* JSON-LD structured data for LocalBusiness */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${COMPANY.name} — Schlüsseldienst ${locationShort}`,
    description: area.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    url: `https://ausgesperrtwien.at/einsatzgebiete/${area.slug}`,
    image: "https://ausgesperrtwien.at/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: area.address || COMPANY.address,
      addressLocality: isKlosterneuburg ? "Klosterneuburg" : "Wien",
      postalCode: area.plz,
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.2082,
      longitude: 16.3738,
    },
    areaServed: {
      "@type": "Place",
      name: isKlosterneuburg
        ? "Klosterneuburg"
        : `${area.name}, Wien`,
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
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Debit Card",
    ...(area.hauptstandort && {
      "@type": ["LocalBusiness", "LocksmithService"],
    }),
  };

  const serviceHighlights = SERVICES.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[72px]">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="bg-bg-secondary border-b border-border"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link
                  href="/einsatzgebiete"
                  className="hover:text-primary transition-colors"
                >
                  Einsatzgebiete
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-text-primary">
                {locationShort}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {area.hauptstandort && (
                <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">
                  ⭐ HAUPTSTANDORT
                </span>
              )}
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                Schlüsseldienst in {locationLabel}
              </h1>
              <p className="mt-4 text-lg text-white/80">
                {area.description}
              </p>
              {area.address && (
                <p className="mt-2 flex items-center justify-center gap-2 text-white/70">
                  <MapPin className="h-4 w-4" />
                  {area.address}
                  {!isKlosterneuburg && `, ${area.district} Wien`}
                </p>
              )}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <CallButton size="lg" />
                <Link
                  href="/kontakt"
                  className="rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Kontakt aufnehmen
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
                { icon: Euro, text: "Faire Fixpreise ab 79€" },
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

        {/* Long Description & Details */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main content */}
              <div className="lg:col-span-2">
                <SectionReveal>
                  <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                    Ihr Aufsperrdienst &amp; Schlüsseldienst in{" "}
                    {isKlosterneuburg ? "Klosterneuburg" : area.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-secondary">
                    {area.longDescription}
                  </p>
                </SectionReveal>

                <SectionReveal delay={0.1}>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Türöffnung — beschädigungsfrei",
                      "Schlosswechsel & Zylindertausch",
                      "Sicherheitszylinder & Beschläge",
                      "Hilfe nach Einbruch",
                      "24/7 Notdienst",
                      "Faire Fixpreise ab 79€",
                      "Keine Anfahrtskosten",
                      "In 15–20 Minuten vor Ort",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <Check className="h-4 w-4 shrink-0 text-green-600" />
                        {point}
                      </div>
                    ))}
                  </div>
                </SectionReveal>

                {/* Landmarks */}
                {area.landmarks.length > 0 && (
                  <SectionReveal delay={0.15}>
                    <div className="mt-10">
                      <h3 className="font-heading text-lg font-bold text-text-primary">
                        Wir kommen zu Ihnen — egal wo in{" "}
                        {isKlosterneuburg ? "Klosterneuburg" : area.name}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary">
                        {area.anfahrt}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {area.landmarks.map((landmark) => (
                          <span
                            key={landmark}
                            className="rounded-full bg-bg-accent px-3 py-1.5 text-xs font-medium text-text-secondary"
                          >
                            📍 {landmark}
                          </span>
                        ))}
                        <span className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-muted italic">
                          … und überall sonst im {isKlosterneuburg ? "Stadtgebiet" : `${area.district}. Bezirk`}
                        </span>
                      </div>
                    </div>
                  </SectionReveal>
                )}
              </div>

              {/* Sidebar CTA */}
              <div className="lg:col-span-1">
                <SectionReveal delay={0.1}>
                  <div className="sticky top-24 rounded-2xl border border-border bg-bg-accent p-6 shadow-card">
                    <h3 className="font-heading text-lg font-bold text-text-primary">
                      Jetzt Schlüsseldienst rufen
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      Ausgesperrt in {isKlosterneuburg ? "Klosterneuburg" : `${area.name}`}
                      ? Wir kommen sofort!
                    </p>
                    <div className="mt-4">
                      <CallButton size="lg" className="w-full" />
                    </div>
                    <ul className="mt-6 space-y-3">
                      {[
                        { icon: Clock, text: "15–20 Min Anfahrt" },
                        { icon: Euro, text: "Fixpreise ab 79€" },
                        { icon: Shield, text: "Keine Anfahrtskosten" },
                        { icon: Star, text: "5-Sterne Service" },
                      ].map((item) => (
                        <li
                          key={item.text}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <item.icon className="h-4 w-4 shrink-0 text-primary" />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-border pt-4">
                      {area.address && (
                        <p className="text-xs text-text-muted">
                          📍 {area.address},{" "}
                          {isKlosterneuburg
                            ? "Klosterneuburg"
                            : `${area.plz} Wien`}
                        </p>
                      )}
                      <p className={`text-xs text-text-muted ${area.address ? "mt-1" : ""}`}>
                        📞{" "}
                        <a
                          href={`tel:${COMPANY.phoneRaw}`}
                          className="hover:text-primary"
                        >
                          {COMPANY.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Services in this area */}
        <section className="bg-bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  Unsere Leistungen in{" "}
                  {isKlosterneuburg ? "Klosterneuburg" : `${area.name}`}
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                  Professioneller Schlüsseldienst und Sicherheitstechnik — alles
                  aus einer Hand, direkt bei Ihnen vor Ort.
                </p>
              </div>
            </SectionReveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceHighlights.map((service, i) => (
                <SectionReveal key={service.slug} delay={i * 0.05}>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="group block rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
                  >
                    <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Mehr erfahren
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </Link>
                </SectionReveal>
              ))}
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

        {/* FAQ for this area */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Häufige Fragen — Schlüsseldienst{" "}
                {isKlosterneuburg ? "Klosterneuburg" : area.name}
              </h2>
            </SectionReveal>
            <div className="mt-10 space-y-6">
              {[
                {
                  q: `Was kostet der Schlüsseldienst in ${isKlosterneuburg ? "Klosterneuburg" : `${area.district} Wien`}?`,
                  a: `Bei einer zugefallenen Tür in ${isKlosterneuburg ? "Klosterneuburg" : `${area.name}`} beginnen unsere Preise ab 79€ (Mo–Fr, 8–18 Uhr). Der genaue Fixpreis wird vorab am Telefon vereinbart — kein Auftrag ohne Ihre Zustimmung. Keine versteckten Kosten, keine Anfahrtskosten.`,
                },
                {
                  q: `Wie schnell sind Sie in ${isKlosterneuburg ? "Klosterneuburg" : area.name} vor Ort?`,
                  a: `In der Regel sind wir in 15–20 Minuten bei Ihnen in ${isKlosterneuburg ? "Klosterneuburg" : area.name}. ${area.anfahrt} Die genaue Wartezeit teilen wir Ihnen am Telefon mit.`,
                },
                {
                  q: `Gibt es Anfahrtskosten nach ${isKlosterneuburg ? "Klosterneuburg" : `${area.name} (${area.district})`}?`,
                  a: "Nein! Wir verrechnen keinerlei Anfahrtskosten. Sie zahlen ausschließlich den Service an Ihrer Tür — egal in welchem Wiener Bezirk.",
                },
                {
                  q: `Sind Sie auch nachts in ${isKlosterneuburg ? "Klosterneuburg" : area.name} erreichbar?`,
                  a: `Ja, selbstverständlich! Wir sind 24 Stunden am Tag, 7 Tage die Woche erreichbar — auch nachts, am Wochenende und an Feiertagen. Unser Notdienst für ${isKlosterneuburg ? "Klosterneuburg" : `${area.name}`} ist immer einsatzbereit.`,
                },
                {
                  q: `Welche Leistungen bieten Sie in ${isKlosterneuburg ? "Klosterneuburg" : `${area.district} ${area.name}`} an?`,
                  a: `In ${isKlosterneuburg ? "Klosterneuburg" : area.name} bieten wir: Türöffnung (beschädigungsfrei), Schlosswechsel, Zylindertausch, Sicherheitszylinder, Sicherheitsbeschläge, Zusatzschlösser, Briefkastenschloss, Hilfe nach Einbruch und kostenlose Sicherheitsberatung.`,
                },
              ].map((item, i) => (
                <SectionReveal key={i} delay={i * 0.05}>
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

        {/* Other Bezirke */}
        <section className="bg-bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-center font-heading text-2xl font-bold text-text-primary">
                Weitere Einsatzgebiete in Wien
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
                Wir sind in allen Wiener Bezirken und in Klosterneuburg im
                Einsatz. Wählen Sie Ihren Bezirk:
              </p>
            </SectionReveal>
            <div className="mt-8 grid gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {EINSATZGEBIETE.filter((e) => e.slug !== area.slug).map((e) => (
                <Link
                  key={e.slug}
                  href={`/einsatzgebiete/${e.slug}`}
                  className="rounded-lg border border-border bg-white px-3 py-2.5 text-center text-sm font-medium text-text-secondary transition-colors hover:border-primary hover:text-primary"
                >
                  {e.district === "Klosterneuburg"
                    ? "Klosterneuburg"
                    : `${e.district} ${e.name}`}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <SectionReveal>
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Ausgesperrt in{" "}
                {isKlosterneuburg ? "Klosterneuburg" : `${area.name}`}?
              </h2>
              <p className="mt-3 text-white/80">
                Rufen Sie uns jetzt an — wir sind in 15–20 Minuten bei Ihnen.
                Faire Fixpreise, keine Anfahrtskosten, 24/7 erreichbar.
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
