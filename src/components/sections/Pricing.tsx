"use client";

import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { PRICING_POINTS } from "@/lib/constants";
import CounterAnimation from "@/components/CounterAnimation";

export default function Pricing() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Schlüsseldienst Wien — Faire, transparente Preise
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-lg rounded-2xl bg-white p-8 text-center shadow-card-hover">
            <p className="text-sm font-medium uppercase tracking-wider text-text-secondary">
              Türöffnung (zugefallene Tür) in Wien
            </p>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-lg text-text-secondary">ab</span>
              <span className="font-heading text-6xl font-bold text-primary">
                <CounterAnimation end={79} prefix="" suffix="" />
              </span>
              <span className="text-2xl font-semibold text-primary">€</span>
            </div>
            <p className="mt-2 text-sm text-text-secondary">
              Mo bis Fr, 8–17 Uhr
            </p>
            <Link
              href="/preise"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Komplette Preisliste ansehen
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.25}>
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {PRICING_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 text-white/90"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
