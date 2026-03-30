import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Check, ChevronRight } from "lucide-react";
import { COMPANY, EINSATZGEBIETE } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Einsatzgebiete — Schlüsseldienst in allen Wiener Bezirken",
  description:
    "Ausgesperrt Wien Schlüsseldienst — in allen 23 Wiener Bezirken und Klosterneuburg im Einsatz. Hauptstandort 1060 Mariahilf. In 15–20 Minuten vor Ort. Faire Fixpreise ab 60€, keine Anfahrtskosten.",
  keywords: [
    "Schlüsseldienst Wien Bezirke",
    "Aufsperrdienst Wien alle Bezirke",
    "Schlüsseldienst 1060 Wien",
    "Schlüsseldienst Wien Mariahilf",
    "Schlüsseldienst Klosterneuburg",
    ...EINSATZGEBIETE.filter((e) => e.district !== "Klosterneuburg").map(
      (e) => `Schlüsseldienst ${e.district} Wien`
    ),
  ],
  alternates: {
    canonical: "/einsatzgebiete",
  },
};

/* JSON-LD for Service with areaServed */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  url: "https://ausgesperrt.wien/einsatzgebiete",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: "Wien",
    postalCode: COMPANY.zip,
    addressCountry: "AT",
  },
  areaServed: EINSATZGEBIETE.map((e) => ({
    "@type": "Place",
    name:
      e.district === "Klosterneuburg"
        ? "Klosterneuburg"
        : `${e.name}, ${e.district} Wien`,
  })),
};

export default function EinsatzgebietePage() {
  const hauptstandort = EINSATZGEBIETE.find((e) => e.hauptstandort);
  const otherAreas = EINSATZGEBIETE.filter((e) => !e.hauptstandort);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[72px]">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                Schlüsseldienst in allen Wiener Bezirken
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Von unserem Hauptstandort in 1060 Mariahilf versorgen wir alle
                23 Wiener Bezirke und Klosterneuburg. In 15–20 Minuten sind wir
                vor Ort.
              </p>
              <div className="mt-8">
                <CallButton size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Hauptstandort highlighted */}
        {hauptstandort && (
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionReveal>
                <Link
                  href={`/einsatzgebiete/${hauptstandort.slug}`}
                  className="group block overflow-hidden rounded-2xl border-2 border-primary bg-bg-accent shadow-card transition-shadow hover:shadow-lg"
                >
                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="font-heading text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                            Schlüsseldienst in {hauptstandort.district} Wien —{" "}
                            {hauptstandort.name}
                          </h2>
                          <p className="mt-1 text-sm text-text-muted">
                            📍 {hauptstandort.address},{" "}
                            {hauptstandort.district} Wien
                          </p>
                          <span className="mt-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                            ⭐ HAUPTSTANDORT
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-6 w-6 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary">
                      {hauptstandort.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      {[
                        "Keine Anfahrtskosten",
                        "Faire Fixpreise",
                        "In 15–20 Min vor Ort",
                        "24/7 erreichbar",
                      ].map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-1.5 text-xs font-medium text-text-secondary"
                        >
                          <Check className="h-3.5 w-3.5 text-green-600" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            </div>
          </section>
        )}

        {/* All Districts Grid */}
        <section className="bg-bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Alle Einsatzgebiete
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
                Wählen Sie Ihren Bezirk für detaillierte Informationen zu
                unserem Schlüsseldienst in Ihrer Nähe.
              </p>
            </SectionReveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherAreas.map((area, i) => (
                <SectionReveal key={area.slug} delay={i * 0.03}>
                  <Link
                    href={`/einsatzgebiete/${area.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:border-primary hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-accent">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                          {area.district === "Klosterneuburg"
                            ? "Klosterneuburg"
                            : `${area.district} ${area.name}`}
                        </h3>
                        {area.address && (
                          <p className="mt-0.5 truncate text-xs text-text-muted">
                            📍 {area.address}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm text-text-secondary">
                      {area.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Mehr erfahren
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <SectionReveal>
              <h2 className="font-heading text-2xl font-bold text-white">
                Ausgesperrt? Wir sind für ganz Wien da!
              </h2>
              <p className="mt-3 text-white/80">
                Egal in welchem Bezirk — wir kommen schnell und
                unkompliziert. Faire Fixpreise, keine Anfahrtskosten, 24/7
                erreichbar.
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
