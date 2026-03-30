import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Settings,
  ShieldCheck,
  Plus,
  Ban,
  Lightbulb,
  Phone,
  ArrowRight,
} from "lucide-react";
import { COMPANY, IMAGES, PARTNERS, SECURITY_SERVICES } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Sicherheit",
  description:
    "Sicherheitsschlösser, Zylinder, Beschläge und Einbruchschutz von Ausgesperrt Wien. Wir installieren Produkte von EVVA, DOM, ABUS, dormakaba. Kostenlose Beratung.",
};

const iconMap: Record<string, React.ElementType> = {
  Lock,
  Settings,
  ShieldCheck,
  Plus,
  Ban,
  Lightbulb,
};

const products = [
  {
    title: "Sicherheitsschlösser",
    slug: "sicherheitsschloesser",
    text: "Hochwertige Sicherheitsschlösser für Wohnungs- und Haustüren. Wir installieren Schlösser führender Hersteller, die höchsten Einbruchschutz bieten.",
  },
  {
    title: "Sicherheitszylinder",
    slug: "sicherheitszylinder",
    text: "Professionelle Sicherheitszylinder mit Aufbohr- und Ziehschutz. Wir beraten Sie, welcher Zylinder am besten zu Ihrer Tür und Ihren Anforderungen passt.",
  },
  {
    title: "Sicherheitsbeschläge & Schutzrosetten",
    slug: "sicherheitsbeschlaege-schutzrosetten",
    text: "Montage von Schutzbeschlägen und Schutzrosetten, die das Aufbohren und Abdrehen des Zylinders verhindern, ein wichtiger Schutz gegen Einbruch.",
  },
  {
    title: "Zusatzschlösser & Balkenschlösser",
    slug: "zusatzschloesser-balkenschloesser",
    text: "Einbau von Zusatzschlössern, Kastenschlössern und Balkenschlössern für zusätzliche Sicherheit. Besonders empfehlenswert für Altbauwohnungen.",
  },
  {
    title: "Einbruchschutz nach ÖNORM",
    slug: "einbruchschutz-oenorm",
    text: "Wir beraten Sie zu allen Maßnahmen rund um Einbruchschutz nach ÖNORM. Von der Wahl des richtigen Schlosses bis zu praktischen Alltagstipps.",
  },
  {
    title: "Briefkastenschloss",
    slug: "briefkastenschloss",
    text: "Austausch von Briefkastenschlössern, schnell und unkompliziert. Ob der Schlüssel verloren ist oder das Schloss defekt, wir helfen sofort.",
  },
];

export default function SicherheitPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
                Sicherheit für
                <br />
                <span className="text-gold-light">Ihr Zuhause</span>
              </h1>
              <p className="mt-4 max-w-lg text-lg text-white/80">
                Die Einbruchrate in Wien sollte man nicht unterschätzen. Ausgesperrt Wien hat sich auf hochwertige Sicherheitsprodukte spezialisiert,
                die wir fachkundig für Sie einbauen.
              </p>
              <div className="mt-8">
                <CallButton
                  size="lg"
                  label="Kostenlose Beratung: +43 676 911 14 12"
                />
              </div>
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
              <Image
                src={IMAGES.security}
                alt="Sicherheitsschloss"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                Unsere Sicherheits-Leistungen
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Wir installieren nur Produkte führender Hersteller.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <SectionReveal key={product.title} delay={i * 0.08}>
                <Link
                  href={`/sicherheit/${product.slug}`}
                  className="group block h-full rounded-xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {product.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Mehr erfahren
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Unsere Partner-Marken
            </h2>
            <p className="mt-3 text-text-secondary">
              Wir arbeiten ausschließlich mit Top-Herstellern zusammen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {PARTNERS.map((partner) => (
                <div
                  key={partner}
                  className="rounded-xl border border-border bg-white px-8 py-4 text-lg font-bold text-text-primary shadow-card"
                >
                  {partner}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Kostenlose Sicherheitsberatung
            </h2>
            <p className="mt-3 text-text-secondary">
              Oft weiß man nicht, welche die beste Methode zum Sichern der
              eigenen Tür ist. Wir beraten Sie gerne kostenlos und
              unverbindlich.
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
