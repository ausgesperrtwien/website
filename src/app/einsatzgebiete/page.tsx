import type { Metadata } from "next";
import { MapPin, Check } from "lucide-react";
import { COMPANY, EINSATZGEBIETE } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Einsatzgebiete",
  description:
    "Magic Key Schlüsseldienst — in allen Wiener Bezirken und Klosterneuburg im Einsatz. 1030, 1060, 1070, 1090, 1190, 1200 Wien. In 15–20 Minuten vor Ort.",
};

export default function EinsatzgebietePage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Unsere Einsatzgebiete
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Wien und Klosterneuburg — wir kommen schnell zu Ihnen. In 15–20
              Minuten sind wir vor Ort.
            </p>
            <div className="mt-8">
              <CallButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* All Districts */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {EINSATZGEBIETE.map((area, i) => (
              <SectionReveal key={area.district} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border shadow-card ${
                    area.hauptstandort
                      ? "border-primary bg-bg-accent"
                      : "border-border bg-white"
                  }`}
                >
                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                            area.hauptstandort
                              ? "bg-primary"
                              : "bg-bg-accent"
                          }`}
                        >
                          <MapPin
                            className={`h-6 w-6 ${
                              area.hauptstandort
                                ? "text-white"
                                : "text-primary"
                            }`}
                          />
                        </div>
                        <div>
                          <h2 className="font-heading text-xl font-bold text-text-primary">
                            {area.district === "Klosterneuburg"
                              ? "Schlüsseldienst in Klosterneuburg"
                              : `Schlüsseldienst in ${area.district} Wien — ${area.name}`}
                          </h2>
                          {area.address && (
                            <p className="mt-1 text-sm text-text-muted">
                              📍 {area.address}
                              {String(area.district) !== "Klosterneuburg" &&
                                `, ${area.district} Wien`}
                            </p>
                          )}
                          {area.hauptstandort && (
                            <span className="mt-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                              ⭐ HAUPTSTANDORT
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary">
                      {area.description}
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
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Nicht Ihren Bezirk gefunden?
            </h2>
            <p className="mt-3 text-text-secondary">
              Wir sind in ganz Wien und Klosterneuburg im Einsatz. Rufen Sie uns
              einfach an!
            </p>
            <div className="mt-6">
              <CallButton size="lg" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
