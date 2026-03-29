"use client";

import {
  Lock,
  Settings,
  ShieldCheck,
  Plus,
  Ban,
  Lightbulb,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { PARTNERS, SECURITY_SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Lock,
  Settings,
  ShieldCheck,
  Plus,
  Ban,
  Lightbulb,
};

export default function Security() {
  return (
    <>
      {/* Parallax image window – scroll reveals / covers image */}
      <div
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h2 className="font-heading text-5xl font-bold uppercase tracking-[0.15em] text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            Sicherheit
          </h2>
        </div>
      </div>

      {/* Content section */}
      <section className="relative z-10 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
                Sicherheit für Ihr Zuhause
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                Wir installieren nur Produkte führender Hersteller.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-2xl space-y-5">
              {SECURITY_SERVICES.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <div
                    key={service.text}
                    className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/60 px-5 py-4 transition-all duration-200 hover:border-gold/25 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold/15 to-gold/5 ring-1 ring-gold/15">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-base font-medium text-gray-900">
                      {service.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </SectionReveal>

          {/* Partner Logos */}
          <SectionReveal delay={0.2}>
            <div className="mx-auto mt-12 max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-400">
                Unsere Partner
              </p>
              <div className="flex flex-wrap gap-3">
                {PARTNERS.map((partner) => (
                  <div
                    key={partner}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
