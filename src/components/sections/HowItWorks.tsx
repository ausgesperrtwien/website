"use client";

import { Phone, Euro, Zap } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import CallButton from "@/components/CallButton";
import { COMPANY } from "@/lib/constants";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Anrufen",
    subtitle: COMPANY.phone,
    text: "Wir sind rund um die Uhr erreichbar. Kein Wartemenü, kein Callcenter.",
  },
  {
    number: "02",
    icon: Euro,
    title: "Preis erfahren",
    subtitle: "Fairer Fixpreis",
    text: "Wir nennen Ihnen sofort einen fairen Fixpreis. Kein Auftrag ohne Ihre Zustimmung.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Schnelle Hilfe",
    subtitle: "In 15–20 Minuten",
    text: "In 15–20 Minuten sind wir bei Ihnen. Diskret, professionell, schadenfrei.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-bg-secondary to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              So einfach funktioniert&apos;s
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 0.15}>
              <div className="relative rounded-xl border border-border bg-white p-8 text-center shadow-card">
                {/* Number badge */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {step.number}
                </div>
                <div className="mb-3 flex justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {step.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.text}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-12 text-center">
            <CallButton
              size="lg"
              label="Jetzt anrufen — Wir helfen sofort"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
