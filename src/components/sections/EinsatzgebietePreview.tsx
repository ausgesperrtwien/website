"use client";

import { MapPin } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { EINSATZGEBIETE, getBezirkUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function EinsatzgebietePreview() {
  return (
    <section className="bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Unser Einsatzgebiet
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Wien und Klosterneuburg, wir kommen zu Ihnen.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {EINSATZGEBIETE.map((area, i) => (
            <SectionReveal key={area.district} delay={i * 0.05}>
              <Link
                href={getBezirkUrl(area)}
                className={cn(
                  "group flex items-start gap-3 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
                  area.hauptstandort
                    ? "border-primary bg-bg-accent"
                    : "border-border bg-white shadow-card"
                )}
              >
                <MapPin
                  className={cn(
                    "mt-0.5 h-5 w-5 shrink-0",
                    area.hauptstandort ? "text-primary" : "text-primary-light"
                  )}
                />
                <div>
                  <p className="font-heading text-sm font-bold text-text-primary">
                    {area.district === "Klosterneuburg"
                      ? "Klosterneuburg"
                      : `${area.district} Wien — ${area.name}`}
                  </p>
                  {area.address && (
                    <p className="mt-1 text-xs text-text-muted">
                      {area.address}
                    </p>
                  )}
                  {area.hauptstandort && (
                    <span className="mt-2 inline-block rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                      HAUPTSTANDORT
                    </span>
                  )}
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
