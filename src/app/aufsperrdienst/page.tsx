import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Check, Clock, Shield, Star, AlertCircle, ArrowRight } from "lucide-react";
import { COMPANY, SITUATIONS } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "24h Aufsperrdienst",
  description:
    "Ausgesperrt? Schlüssel verloren? Tür zugefallen? Ausgesperrt Vienna — Ihr 24h Aufsperrdienst in Wien und Klosterneuburg. In 15–20 Minuten vor Ort. ☎ +43 676 911 14 12",
};

const iconMap = {
  AlertCircle,
  Shield,
  Star,
  Clock,
} as const;

export default function AufsperrdienstPage() {
  return (
    <div className="pt-[72px]">
      {/* Emergency Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aufsperrdienst-hero.jpg"
            alt="Aufsperrdienst Wien — 24h Notdienst"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-sm font-semibold text-white">
                🚨 24h Notdienst
              </div>
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                Ausgesperrt?
                <br />
                <span className="text-gold-light">Wir helfen sofort.</span>
              </h1>
              <p className="mt-4 max-w-lg text-lg text-white/80">
                Als professioneller 24 Stunden Notdienst stehen wir Ihnen in
                Wien und Klosterneuburg an 7 Tagen die Woche zur Verfügung, 
                das zu einem fairen Preis.
              </p>

              <div className="mt-8 space-y-4">
                <CallButton size="lg" />
                <div className="flex flex-wrap gap-4">
                  {[
                    "In 15–20 Min vor Ort",
                    "Keine Anfahrtskosten",
                    "Faire Fixpreise",
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

      {/* Situations */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                In welcher Situation sind Sie?
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Egal was passiert ist, wir sind in 15–20 Minuten bei Ihnen.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SITUATIONS.map((sit, i) => {
              const Icon = iconMap[sit.icon as keyof typeof iconMap];
              return (
                <SectionReveal key={sit.slug} delay={i * 0.08}>
                  <Link
                    href={`/aufsperrdienst/${sit.slug}`}
                    className="group block h-full rounded-xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-bg-accent">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-primary">
                      {sit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {sit.shortText}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-gold">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Unser Versprechen
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Clock,
                  title: "Schnell",
                  text: "In 15–20 Minuten vor Ort — auch nachts und am Wochenende.",
                },
                {
                  icon: Shield,
                  title: "Seriös",
                  text: "Fairer Fixpreis, der am Telefon besprochen wird. Kein Auftrag ohne Zustimmung.",
                },
                {
                  icon: Star,
                  title: "Professionell",
                  text: "Beschädigungsfreie Öffnung in den meisten Fällen. Langjährige Erfahrung.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <CallButton size="lg" label="Jetzt anrufen — Wir helfen sofort" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
