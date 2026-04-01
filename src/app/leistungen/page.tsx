import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  Phone,
  ArrowRight,
} from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle Leistungen von Ausgesperrt Vienna: Türöffnung, Schlosswechsel, Zylindertausch, Sicherheitsberatung und mehr. 24/7 in Wien und Klosterneuburg.",
};

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

const detailedDescriptions: Record<string, string> = {
  Türöffnung:
    "Wir führen professionelle Türöffnungen aller Art durch — zugefallene Türen, abgeschlossene Wohnungs- oder Haustüren, Doppelfalztüren, Türen mit Mehrfachverriegelungen und Zusatzschlösser. In den meisten Fällen ist eine beschädigungsfreie Öffnung möglich. Unsere Techniker nutzen professionelles Werkzeug und verfügen über jahrelange Erfahrung im Bereich Öffnungstechnik.",
  "Schlüssel verloren":
    "Haben Sie Ihren Schlüssel verloren oder verlegt? Kein Grund zur Panik. Unsere Spezialisten haben das nötige Werkzeug, um Ihre Tür schnell und ohne Beschädigung zu öffnen. Danach empfehlen wir aus Sicherheitsgründen einen Zylindertausch — auch den erledigen wir sofort vor Ort.",
  "Schlüssel abgebrochen":
    "Kein Problem — das ist eine häufige Situation. Unser Techniker entfernt den abgebrochenen Schlüssel professionell, in den meisten Fällen ohne das Schloss zu beschädigen. Sollte ein Zylindertausch notwendig sein, haben wir hochwertige Ersatzteile direkt dabei.",
  "Schloss defekt / klemmt":
    "Ihr Schloss klemmt, ist schwergängig oder komplett defekt? Wir diagnostizieren das Problem vor Ort und bieten Ihnen eine fachgerechte Reparatur oder einen Austausch zu fairen Preisen. Alle Schlösser und Zylinder, die wir verbauen, sind Markenprodukte.",
  Schlosswechsel:
    "Ob nach Einbruch, Partnertrennung, Umzug oder bei defektem Schloss — wir tauschen Ihr Schloss professionell und schnell. Sie erhalten ein neues Markenprodukt mit allen neuen Schlüsseln. Der Preis wird vorab am Telefon besprochen.",
  Zylindertausch:
    "Wir tauschen Ihren Schließzylinder mit hochwertigen Markenprodukten von EVVA, DOM, ABUS und dormakaba. Ob Standardzylinder oder Sicherheitszylinder — wir haben die passende Lösung für Ihre Tür.",
  Sicherheitszylinder:
    "Installation von Sicherheitszylindern führender Hersteller für maximalen Einbruchschutz. Wir beraten Sie gerne, welcher Zylinder am besten zu Ihrer Tür und Ihren Anforderungen passt — natürlich kostenlos.",
  Sicherheitsbeschläge:
    "Montage von Schutzrosetten und Sicherheitsbeschlägen für Wohnungs- und Haustüren. Diese verhindern das Aufbohren und Abdrehen des Zylinders — ein wichtiger Schutz gegen Einbruch.",
  Zusatzschlösser:
    "Einbau von Zusatzschlössern, Kastenschlössern und Balkenschlössern für zusätzliche Sicherheit. Besonders empfehlenswert für Altbauwohnungen und Erdgeschosswohnungen.",
  Postkastenschloss:
    "Öffnung und Austausch von Briefkastenschlössern — schnell und unkompliziert. Ob der Schlüssel verloren ist oder das Schloss defekt, wir helfen sofort.",
  "Hilfe nach Einbruch":
    "Erstversorgung nach Einbruchschäden: Wohnungstüren werden sofort wieder verschließbar gemacht, abgedrehte Schließzylinder ersetzt, aufgebrochene Schlösser getauscht. Wir beraten Sie auch zu weiteren Sicherheitsmaßnahmen.",
  Sicherheitsberatung:
    "Kostenlose Beratung in allen Sicherheitsfragen. Von der Wahl des richtigen Schlosses bis zu praktischen Alltagstipps — wir helfen Ihnen, Einbrechern das Leben schwer zu machen. Vereinbaren Sie einen Beratungstermin.",
};

export default function LeistungenPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/leistungen.jpg"
            alt="Leistungen Ausgesperrt Vienna"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Unsere Leistungen
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Von der schnellen Türöffnung bis zur professionellen
              Sicherheitsberatung — wir sind Ihr kompetenter Partner in Wien und
              Klosterneuburg.
            </p>
            <div className="mt-8">
              <CallButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              const detailed =
                detailedDescriptions[service.title] || service.description;
              const isEven = i % 2 === 0;

              return (
                <SectionReveal key={service.title}>
                  <div
                    className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Icon Card */}
                    <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-bg-accent">
                      <Icon className="h-16 w-16 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="font-heading text-2xl font-bold text-text-primary">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-text-secondary">
                        {detailed}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <Link
                          href={`/leistungen/${service.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
                        >
                          Mehr erfahren
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                          href={`tel:${COMPANY.phoneRaw}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-primary"
                        >
                          <Phone className="h-4 w-4" />
                          {COMPANY.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {i < SERVICES.length - 1 && (
                    <div className="mt-16 border-t border-border" />
                  )}
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            Brauchen Sie Hilfe?
          </h2>
          <p className="mt-3 text-text-secondary">
            Rufen Sie uns an — wir sind rund um die Uhr für Sie da.
          </p>
          <div className="mt-6">
            <CallButton size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
