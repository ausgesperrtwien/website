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
  AlertCircle,
  KeyRound,
  Scissors,
  Wrench,
  Lock,
  ShieldAlert,
} from "lucide-react";
import {
  EINSATZGEBIETE,
  COMPANY,
  SERVICES,
  SITUATIONS,
  getBezirkUrl,
  getNeighbors,
} from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import BezirkeLinkGrid from "@/components/BezirkeLinkGrid";

const SITUATION_ICONS: Record<string, typeof AlertCircle> = {
  "tuer-zugefallen": AlertCircle,
  "schluessel-verloren": KeyRound,
  "schluessel-abgebrochen": Scissors,
  "schloss-defekt": Wrench,
  "schluessel-steckt-innen": Lock,
  "nach-einbruch": ShieldAlert,
};

type Area = (typeof EINSATZGEBIETE)[number];

export default function BezirkPageContent({ area }: { area: Area }) {
  const isKlosterneuburg = area.district === "Klosterneuburg";
  const locationShort = isKlosterneuburg
    ? "Klosterneuburg"
    : `${area.plz} ${area.name}`;
  // Derive bezirk number from PLZ: "1020" → 2, "1100" → 10
  const bezirksNr = !isKlosterneuburg
    ? parseInt(area.plz.slice(1, 3), 10)
    : null;
  const canonicalUrl = `https://ausgesperrtwien.at${getBezirkUrl(area)}`;

  /* JSON-LD: LocalBusiness */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${COMPANY.name} — Schlüsseldienst ${locationShort}`,
    alternateName: isKlosterneuburg
      ? ["Schlüsseldienst Klosterneuburg", "Aufsperrdienst Klosterneuburg"]
      : [
          `Schlüsseldienst ${area.plz} Wien`,
          `Schlüsseldienst Wien ${area.plz}`,
          `Aufsperrdienst ${area.plz} Wien`,
          `Aufsperrdienst Wien ${area.plz}`,
        ],
    description: area.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    url: canonicalUrl,
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
      latitude: area.latitude,
      longitude: area.longitude,
    },
    areaServed: {
      "@type": "Place",
      name: isKlosterneuburg ? "Klosterneuburg" : `${area.name}, Wien`,
      postalCode: area.plz,
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

  /* JSON-LD: Service (targets "Schlüsseldienst {plz} Wien" as a named service) */
  const serviceJsonLd = !isKlosterneuburg
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Schlüsseldienst ${area.plz} Wien`,
        alternateName: `Aufsperrdienst Wien ${area.plz}`,
        serviceType: "Schlüsseldienst / Aufsperrdienst",
        description: `Professioneller Schlüsseldienst ${area.plz} Wien und Aufsperrdienst Wien ${area.plz} — Türöffnung, Schlosswechsel, Zylindertausch. 24/7 Notdienst, Fixpreise ab 79€, keine Anfahrtskosten.`,
        provider: {
          "@type": "LocalBusiness",
          name: COMPANY.name,
          telephone: COMPANY.phone,
          url: "https://ausgesperrtwien.at",
        },
        areaServed: {
          "@type": "Place",
          name: `${area.name}, Wien`,
          postalCode: area.plz,
          addressCountry: "AT",
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "79",
            priceCurrency: "EUR",
            description: "Fixpreis ab 79€, keine Anfahrtskosten",
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: COMPANY.phone,
          availableLanguage: ["German", "English", "Russian"],
        },
      }
    : null;

  const serviceHighlights = SERVICES.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}

      <div className="pt-[72px]">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Einsatzgebiete", href: "/einsatzgebiete" },
            { label: locationShort },
          ]}
        />

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
                {isKlosterneuburg
                  ? "Schlüsseldienst Klosterneuburg — 24h Aufsperrdienst"
                  : `Schlüsseldienst ${area.plz} Wien — Aufsperrdienst ${area.name}`}
              </h1>
              <p className="mt-4 text-lg text-white/80">{area.description}</p>
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
                    {isKlosterneuburg
                      ? "Ihr Aufsperrdienst & Schlüsseldienst in Klosterneuburg"
                      : `Schlüsseldienst Wien ${area.plz} — Ihr Aufsperrdienst im ${bezirksNr}. Bezirk (${area.name})`}
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-secondary">
                    {area.longDescription}
                  </p>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    Sie brauchen einen Ersatzschlüssel?{" "}
                    <Link
                      href="/schluessel-nachmachen"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Schlüssel nachmachen in Wien
                    </Link>{" "}
                    bieten wir ebenfalls — Wohnungsschlüssel, Sicherheitsschlüssel
                    (EVVA, ABUS, DOM mit Sperrkarte) und Briefkastenschlüssel,
                    Fixpreis am Telefon.
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
                          … und überall sonst im{" "}
                          {isKlosterneuburg
                            ? "Stadtgebiet"
                            : `${area.district}. Bezirk`}
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
                      Ausgesperrt in{" "}
                      {isKlosterneuburg ? "Klosterneuburg" : `${area.name}`}?
                      Wir kommen sofort!
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
                    <Link
                      href="/preise"
                      className="mt-5 inline-flex w-full items-center justify-center gap-1 rounded-lg border border-primary px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      Detaillierte Preisliste →
                    </Link>
                    <div className="mt-6 border-t border-border pt-4">
                      {area.address && (
                        <p className="text-xs text-text-muted">
                          📍 {area.address},{" "}
                          {isKlosterneuburg
                            ? "Klosterneuburg"
                            : `${area.plz} Wien`}
                        </p>
                      )}
                      <p
                        className={`text-xs text-text-muted ${area.address ? "mt-1" : ""}`}
                      >
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

        {/* Hilfe-Situationen — contextual links to /aufsperrdienst/* */}
        <section className="bg-bg-accent py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                  Ausgesperrt in{" "}
                  {isKlosterneuburg ? "Klosterneuburg" : `${area.name}`}? So
                  helfen wir
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                  Egal in welcher Notsituation Sie sich befinden — unser
                  Aufsperrdienst{" "}
                  {isKlosterneuburg
                    ? "Klosterneuburg"
                    : `Wien ${area.plz}`}{" "}
                  ist in 15–20 Minuten bei Ihnen. Wählen Sie Ihre Situation:
                </p>
              </div>
            </SectionReveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SITUATIONS.map((s, i) => {
                const Icon = SITUATION_ICONS[s.slug] ?? AlertCircle;
                const locationSuffix = isKlosterneuburg
                  ? "in Klosterneuburg"
                  : `in ${area.plz} Wien`;
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
                            {s.title} {locationSuffix}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                            {s.shortText}
                          </p>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                            Soforthilfe{" "}
                            {isKlosterneuburg
                              ? "Klosterneuburg"
                              : `Wien ${area.plz}`}
                            <ChevronRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </SectionReveal>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/aufsperrdienst"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Alle 24h-Notfallsituationen ansehen
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Nachbarbezirke — geographic neighbors */}
        {(() => {
          const neighbors = getNeighbors(area.district);
          if (neighbors.length === 0) return null;
          return (
            <section className="py-16 lg:py-20">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <SectionReveal>
                  <div className="text-center">
                    <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                      Schlüsseldienst in der Nähe von{" "}
                      {isKlosterneuburg ? "Klosterneuburg" : area.name}
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
                      Sie sind in einem Nachbarbezirk ausgesperrt? Auch dort
                      sind wir Ihr schneller Aufsperrdienst — direkt zur
                      passenden Bezirksseite:
                    </p>
                  </div>
                </SectionReveal>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {neighbors.map((n, i) => (
                    <SectionReveal key={n.slug} delay={i * 0.04}>
                      <Link
                        href={getBezirkUrl(n)}
                        className="group flex h-full items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-card transition-all hover:border-primary hover:shadow-lg"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-sm font-bold text-text-primary group-hover:text-primary transition-colors">
                            {n.district === "Klosterneuburg"
                              ? "Schlüsseldienst Klosterneuburg"
                              : `Schlüsseldienst Wien ${n.plz}`}
                          </h3>
                          <p className="mt-0.5 text-xs text-text-muted">
                            {n.district === "Klosterneuburg"
                              ? "Nachbargemeinde · 24h Aufsperrdienst"
                              : `${n.name} · ${n.district}. Bezirk`}
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                            Zum Bezirk
                            <ChevronRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* FAQ for this area */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Häufige Fragen — Schlüsseldienst{" "}
                {isKlosterneuburg ? "Klosterneuburg" : `${area.plz} Wien`}
              </h2>
            </SectionReveal>
            <div className="mt-10 space-y-6">
              {[
                {
                  q: isKlosterneuburg
                    ? "Was kostet der Schlüsseldienst in Klosterneuburg?"
                    : `Was kostet der Schlüsseldienst ${area.plz} Wien?`,
                  a: isKlosterneuburg
                    ? `Bei einer zugefallenen Tür in Klosterneuburg beginnen unsere Preise ab 79€ (Mo–Fr, 8–17 Uhr). Der genaue Fixpreis wird vorab am Telefon vereinbart — kein Auftrag ohne Ihre Zustimmung. Keine versteckten Kosten, keine Anfahrtskosten.`
                    : `Unser Aufsperrdienst Wien ${area.plz} (${area.name}) beginnt ab 79€ (Mo–Fr, 8–17 Uhr). Der genaue Fixpreis für den Schlüsseldienst ${area.plz} Wien wird vorab am Telefon vereinbart — kein Auftrag ohne Ihre Zustimmung. Keine versteckten Kosten, keine Anfahrtskosten.`,
                },
                {
                  q: isKlosterneuburg
                    ? "Wie schnell sind Sie in Klosterneuburg vor Ort?"
                    : `Wie schnell ist der Aufsperrdienst Wien ${area.plz} vor Ort?`,
                  a: isKlosterneuburg
                    ? `In der Regel sind wir in 15–20 Minuten bei Ihnen in Klosterneuburg. ${area.anfahrt} Die genaue Wartezeit teilen wir Ihnen am Telefon mit.`
                    : `Als Schlüsseldienst ${area.plz} Wien sind wir in der Regel in 15–20 Minuten bei Ihnen in ${area.name}. ${area.anfahrt} Die genaue Wartezeit teilen wir Ihnen am Telefon mit.`,
                },
                {
                  q: isKlosterneuburg
                    ? "Gibt es Anfahrtskosten nach Klosterneuburg?"
                    : `Gibt es Anfahrtskosten beim Schlüsseldienst Wien ${area.plz}?`,
                  a: `Nein! Wir verrechnen keinerlei Anfahrtskosten — weder als Schlüsseldienst ${isKlosterneuburg ? "Klosterneuburg" : `${area.plz} Wien`} noch in einem anderen Bezirk. Sie zahlen ausschließlich den Service an Ihrer Tür.`,
                },
                {
                  q: isKlosterneuburg
                    ? "Ist der Schlüsseldienst Klosterneuburg auch nachts erreichbar?"
                    : `Ist der Schlüsseldienst ${area.plz} Wien auch nachts erreichbar?`,
                  a: isKlosterneuburg
                    ? `Ja, selbstverständlich! Wir sind 24 Stunden am Tag, 7 Tage die Woche erreichbar — auch nachts, am Wochenende und an Feiertagen. Unser Notdienst für Klosterneuburg ist immer einsatzbereit.`
                    : `Ja! Unser Aufsperrdienst ${area.plz} Wien ist rund um die Uhr erreichbar — auch nachts, am Wochenende und an Feiertagen. Der Schlüsseldienst Wien ${area.plz} schläft nie.`,
                },
                {
                  q: isKlosterneuburg
                    ? "Welche Leistungen bieten Sie in Klosterneuburg an?"
                    : `Welche Leistungen bietet der Aufsperrdienst ${area.plz} Wien?`,
                  a: isKlosterneuburg
                    ? `In Klosterneuburg bieten wir: Türöffnung (beschädigungsfrei), Schlosswechsel, Zylindertausch, Sicherheitszylinder, Sicherheitsbeschläge, Zusatzschlösser, Briefkastenschloss, Hilfe nach Einbruch und kostenlose Sicherheitsberatung.`
                    : `Unser Schlüsseldienst Wien ${area.plz} (${area.name}) bietet: Türöffnung (beschädigungsfrei), Schlosswechsel, Zylindertausch, Sicherheitszylinder, Sicherheitsbeschläge, Zusatzschlösser, Briefkastenschloss, Hilfe nach Einbruch und kostenlose Sicherheitsberatung.`,
                },
                {
                  q: isKlosterneuburg
                    ? "Öffnen Sie auch beschädigungsfreie Türen in Klosterneuburg?"
                    : `Aufsperrdienst ${area.plz} Wien — öffnen Sie auch beschädigungsfrei?`,
                  a: isKlosterneuburg
                    ? `Ja! Unsere Techniker öffnen Ihre Tür in Klosterneuburg in den allermeisten Fällen ohne jegliche Beschädigung. Durch spezielle Öffnungswerkzeuge und geschultes Personal können Türen meist beschädigungsfrei geöffnet werden.`
                    : `Ja! Als Schlüsseldienst ${area.plz} Wien öffnen wir Ihre Tür in ${area.name} in den allermeisten Fällen beschädigungsfrei. Unser Aufsperrdienst Wien ${area.plz} verwendet professionelle Öffnungswerkzeuge — so bleibt Ihr Schloss intakt.`,
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
        <BezirkeLinkGrid
          title="Weitere Einsatzgebiete — Schlüsseldienst Wien"
          intro="Unser Schlüsseldienst Wien ist in allen Bezirken verfügbar — von Schlüsseldienst Wien 1010 bis Schlüsseldienst Wien 1230. Wählen Sie Ihren Bezirk:"
          bg="secondary"
          excludeSlug={area.slug}
          anchorText={(e) =>
            e.district === "Klosterneuburg"
              ? "Klosterneuburg"
              : `Wien ${e.plz} — ${e.name}`
          }
        />

        {/* Bottom CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <SectionReveal>
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                {isKlosterneuburg
                  ? "Ausgesperrt in Klosterneuburg? Schlüsseldienst sofort!"
                  : `Schlüsseldienst ${area.plz} Wien — Ausgesperrt in ${area.name}?`}
              </h2>
              <p className="mt-3 text-white/80">
                {isKlosterneuburg
                  ? "Rufen Sie uns jetzt an — wir sind in 15–20 Minuten bei Ihnen. Faire Fixpreise, keine Anfahrtskosten, 24/7 erreichbar."
                  : `Ihr Aufsperrdienst Wien ${area.plz} ist sofort einsatzbereit — in 15–20 Minuten bei Ihnen. Faire Fixpreise ab 79€, keine Anfahrtskosten, 24/7 erreichbar.`}
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

/* Helper exports for route files (generateMetadata) */
export function buildBezirkMetadata(area: Area) {
  const isKlosterneuburg = area.district === "Klosterneuburg";
  const title = isKlosterneuburg
    ? `Schlüsseldienst Klosterneuburg — 24h Aufsperrdienst${area.hauptstandort ? " | Hauptstandort" : ""}`
    : `Schlüsseldienst ${area.plz} Wien — Aufsperrdienst ${area.name} | 24h Notdienst ab 79€${area.hauptstandort ? " | Hauptstandort" : ""}`;

  const description = isKlosterneuburg
    ? `Schlüsseldienst Klosterneuburg in Ihrer Nähe ✓ In 15–20 Min vor Ort ✓ Faire Fixpreise ab 79€ ✓ Keine Anfahrtskosten ✓ 24/7 Notdienst ✓ Türöffnung, Schlosswechsel, Zylindertausch. Jetzt anrufen: ${COMPANY.phone}`
    : `Schlüsseldienst ${area.plz} Wien & Aufsperrdienst Wien ${area.plz} (${area.name}) — In 15–20 Min vor Ort ✓ Faire Fixpreise ab 79€ ✓ Keine Anfahrtskosten ✓ 24/7 Notdienst. Jetzt anrufen: ${COMPANY.phone}`;

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
        `Schlüsseldienst ${area.plz} Wien`,
        `Schlüsseldienst Wien ${area.plz}`,
        `Aufsperrdienst ${area.plz} Wien`,
        `Aufsperrdienst Wien ${area.plz}`,
        `Schlüsseldienst ${area.plz}`,
        `Schlüsseldienst ${area.plz} Wien ${area.name}`,
        `Schlüsseldienst ${area.name}`,
        `Aufsperrdienst ${area.name} Wien`,
        `Schlüsseldienst in meiner Nähe ${area.name}`,
        `Aufsperrdienst in der Nähe ${area.plz} Wien`,
        `Schlüsselnotdienst ${area.plz}`,
        `Türöffnung ${area.plz} Wien`,
        `Schloss wechseln ${area.plz} Wien`,
        `24h Schlüsseldienst ${area.name}`,
        `Schlüsseldienst Wien ${area.name}`,
        `ausgesperrt ${area.plz} Wien`,
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
      type: "website" as const,
    },
    alternates: {
      canonical: getBezirkUrl(area),
    },
  };
}
