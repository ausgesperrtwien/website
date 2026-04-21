"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import {
  DoorOpen,
  KeyRound,
  Scissors,
  Wrench,
  RefreshCw,
  Settings,
  ShieldCheck,
  Home,
  Plus,
  Mail,
  AlertTriangle,
  Lightbulb,
  Copy,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const iconMap: Record<string, React.ElementType> = {
  DoorOpen,
  KeyRound,
  Scissors,
  Wrench,
  RefreshCw,
  Settings,
  ShieldCheck,
  Home,
  Plus,
  Mail,
  AlertTriangle,
  Lightbulb,
};

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Was wir bieten
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Unsere Leistungen
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Schnell, sauber und fair. In Wien und Klosterneuburg.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <SectionReveal key={service.title} delay={i * 0.05}>
                <Link href={`/leistungen/${service.slug}`} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 ring-1 ring-gold/15 transition-all duration-300 group-hover:from-gold/30 group-hover:to-gold/10 group-hover:ring-gold/35 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.12)]">
                    <Icon className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                </Link>
              </SectionReveal>
            );
          })}
          <SectionReveal delay={SERVICES.length * 0.05}>
            <Link href="/schluessel-nachmachen" className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 ring-1 ring-gold/15 transition-all duration-300 group-hover:from-gold/30 group-hover:to-gold/10 group-hover:ring-gold/35 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.12)]">
                <Copy className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-900">
                Schlüssel nachmachen
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                Wohnungs-, Sicherheits- (EVVA, ABUS, DOM) und Briefkastenschlüssel — Fixpreis am Telefon, zentral in 1060 Wien.
              </p>
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
