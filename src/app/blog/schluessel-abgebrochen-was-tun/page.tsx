import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Schlüssel abgebrochen in der Tür — Was tun? | Ausgesperrt Wien",
  description:
    "Der Schlüssel ist im Schloss abgebrochen? Erfahren Sie, was Sie sofort tun sollten, welche Fehler Sie vermeiden müssen und wann Sie einen Schlüsseldienst in Wien rufen sollten.",
  openGraph: {
    title: "Schlüssel abgebrochen in der Tür — Was tun in Wien?",
    description:
      "Schritt-für-Schritt-Anleitung: Schlüssel im Schloss abgebrochen. Erste Hilfe, häufige Fehler & wann ein Profi in Wien hilft.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Schlüssel abgebrochen in der Tür — Was tun in Wien?",
  description:
    "Schritt-für-Schritt-Anleitung: Schlüssel im Schloss abgebrochen. Erste Hilfe, häufige Fehler & wann Sie einen professionellen Schlüsseldienst in Wien rufen sollten.",
  datePublished: "2026-04-01",
  author: {
    "@type": "Organization",
    name: COMPANY.name,
    url: "https://ausgesperrtwien.at",
  },
  publisher: {
    "@type": "Organization",
    name: COMPANY.name,
  },
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[72px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zum Blog
            </Link>
            <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Schlüssel abgebrochen in der Tür&nbsp;— Was&nbsp;tun in Wien?
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Der Schlüssel ist im Schloss stecken geblieben und abgebrochen?
              Keine Panik. Hier erfahren Sie Schritt für Schritt, was jetzt zu
              tun ist.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
              <time dateTime="2026-04-01">1. April 2026</time>
              <span>·</span>
              <span>5 min Lesezeit</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="prose prose-lg max-w-none text-text-secondary">
                {/* Intro */}
                <p>
                  Es passiert schneller, als man denkt: Ein kurzer Moment der
                  Unachtsamkeit, ein alter oder verschlissener Schlüssel — und
                  schon bricht er im Schloss ab. Plötzlich stehen Sie vor der
                  verschlossenen Tür und der Rest des Schlüssels steckt im
                  Zylinder. Gerade in Wien, wo viele Altbauwohnungen noch
                  ältere Schließsysteme haben, kommt das häufiger vor als
                  gedacht.
                </p>
                <p>
                  In diesem Ratgeber erklären wir Ihnen genau, was Sie in
                  dieser Situation tun sollten — und vor allem, welche Fehler
                  Sie unbedingt vermeiden müssen.
                </p>

                {/* Section 1 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  1. Ruhe bewahren — Keine Panik
                </h2>
                <p>
                  Der erste und wichtigste Schritt: Bleiben Sie ruhig. Ein
                  abgebrochener Schlüssel ist ärgerlich, aber in den meisten
                  Fällen kein Grund zur Panik. Das Schloss ist in der Regel
                  nicht beschädigt, und der verbliebene Schlüsselteil kann
                  professionell entfernt werden, ohne das Schloss zu
                  zerstören.
                </p>

                {/* Section 2 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  2. Was Sie sofort tun sollten
                </h2>

                <div className="not-prose my-6 space-y-3">
                  {[
                    "Versuchen Sie NICHT, den Schlüsselrest mit Gewalt herauszuziehen",
                    "Drehen Sie nicht am verbliebenen Stück — das kann den Zylinder verklemmen",
                    "Prüfen Sie, ob ein Stück des Schlüssels herausragt",
                    "Falls ein Stück herausschaut: Mit einer Spitzzange vorsichtig gerade herausziehen",
                    "Bewegen Sie den Schlüsselrest nur in Richtung \u201EHerausziehen\u201C, niemals drehen",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-bg-secondary p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-sm text-text-primary">{item}</span>
                    </div>
                  ))}
                </div>

                <p>
                  Wenn der abgebrochene Teil bündig mit dem Schloss abschließt
                  oder sogar darin verschwunden ist, sollten Sie keine weiteren
                  Versuche mehr unternehmen. In diesem Fall brauchen Sie einen
                  professionellen{" "}
                  <Link
                    href="/aufsperrdienst"
                    className="text-primary font-semibold hover:underline"
                  >
                    Aufsperrdienst in Wien
                  </Link>
                  .
                </p>

                {/* Section 3 - Errors */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  3. Häufige Fehler, die Sie vermeiden sollten
                </h2>

                <div className="not-prose my-6 space-y-3">
                  {[
                    {
                      text: "Schlüssel mit einem Draht oder einer Nadel herausstochern",
                      reason:
                        "Dadurch kann der Schlüsselrest tiefer ins Schloss geschoben werden.",
                    },
                    {
                      text: "Sekundenkleber verwenden, um den Schlüssel zu \u201Everlängern\u201C",
                      reason:
                        "Der Kleber kann ins Schloss gelangen und den Zylinder komplett blockieren.",
                    },
                    {
                      text: "Das Schloss selbst ausbauen oder aufbrechen",
                      reason:
                        "Ohne Fachkenntnisse beschädigen Sie die Tür und das Schloss — und es wird deutlich teurer.",
                    },
                    {
                      text: "Einen unseriösen Not-Schlüsseldienst anrufen",
                      reason:
                        "Unseriöse Anbieter bohren das Schloss sofort auf, obwohl eine schonende Öffnung möglich wäre.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                    >
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <div>
                        <span className="text-sm font-semibold text-text-primary">
                          {item.text}
                        </span>
                        <p className="mt-1 text-xs text-text-muted">
                          {item.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section 4 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  4. Wann Sie einen Schlüsseldienst rufen sollten
                </h2>
                <p>
                  Wenn der abgebrochene Schlüssel nicht mehr greifbar ist oder
                  Sie keinen Ersatzschlüssel haben, führt kein Weg an einem
                  professionellen Schlüsseldienst vorbei. Gerade in Wien ist es
                  wichtig, einen{" "}
                  <strong>seriösen, regionalen Anbieter</strong> zu wählen.
                </p>
                <p>Achten Sie auf folgende Punkte:</p>
                <ul className="my-4 space-y-2">
                  <li>
                    <strong>Festpreise:</strong> Seriöse Anbieter nennen den
                    Preis vorab — ohne versteckte Zuschläge.
                  </li>
                  <li>
                    <strong>Lokale Präsenz:</strong> Ein Wiener Unternehmen mit
                    echter Adresse ist vertrauenswürdiger als eine anonyme
                    Hotline.
                  </li>
                  <li>
                    <strong>Schadensfreie Öffnung:</strong> Profis versuchen
                    immer zuerst, das Schloss ohne Beschädigung zu öffnen.
                  </li>
                  <li>
                    <strong>Rechnung und Gewerbeschein:</strong> Lassen Sie sich
                    immer eine ordentliche Rechnung ausstellen.
                  </li>
                </ul>

                {/* CTA Block */}
                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-center text-white">
                  <AlertTriangle className="mx-auto mb-3 h-8 w-8 text-gold" />
                  <h3 className="font-heading text-xl font-bold">
                    Schlüssel abgebrochen? Wir helfen sofort.
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
                    Ausgesperrt Wien ist rund um die Uhr für Sie da — mit Festpreis,
                    schadensfreier Öffnung und in ganz Wien in 15–30 Minuten vor Ort.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <CallButton size="lg" />
                  </div>
                </div>

                {/* Section 5 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  5. Was kostet ein Schlüsseldienst bei abgebrochenem Schlüssel?
                </h2>
                <p>
                  Die Kosten hängen von mehreren Faktoren ab: Tageszeit, Art
                  des Schlosses und ob eine schadensfreie Öffnung möglich ist.
                  Bei {COMPANY.name} arbeiten wir mit transparenten
                  Festpreisen:
                </p>
                <ul className="my-4 space-y-2">
                  <li>
                    <strong>Tagsüber (06:00–22:00):</strong> ab 49&nbsp;€
                  </li>
                  <li>
                    <strong>Nachts, Sonn- und Feiertage:</strong> ab 98&nbsp;€
                  </li>
                </ul>
                <p>
                  Im Preis sind Anfahrt, Arbeitszeit und die Öffnung
                  inkludiert. Sollte ein neuer Zylinder notwendig sein, wird
                  das vorab besprochen und transparent abgerechnet.
                </p>

                {/* Section 6 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  6. So beugen Sie einem Schlüsselbruch vor
                </h2>
                <p>
                  Damit Ihnen das in Zukunft nicht mehr passiert, hier einige
                  Tipps zur Vorbeugung:
                </p>
                <ul className="my-4 space-y-2">
                  <li>
                    <strong>Schlüssel regelmäßig prüfen:</strong> Verbogene oder
                    angeknackste Schlüssel sofort austauschen lassen.
                  </li>
                  <li>
                    <strong>Schloss schmieren:</strong> Ein Tropfen
                    Graphitspray im Schlüsselloch sorgt für leichtgängiges
                    Drehen.
                  </li>
                  <li>
                    <strong>Keine Gewalt:</strong> Wenn sich der Schlüssel
                    schwer drehen lässt, nicht mit Kraft nachhelfen.
                  </li>
                  <li>
                    <strong>Ersatzschlüssel anfertigen lassen:</strong> Gerade
                    bei älteren Schlüsseln lohnt sich eine Ersatzkopie, bevor
                    der Originalschlüssel bricht.
                  </li>
                  <li>
                    <strong>Schließzylinder modernisieren:</strong>{" "}
                    Wenn Sie in einem Wiener Altbau wohnen, kann ein moderner
                    Sicherheitszylinder langfristig Probleme vermeiden.
                    Informieren Sie sich über unsere{" "}
                    <Link
                      href="/sicherheit"
                      className="text-primary font-semibold hover:underline"
                    >
                      Sicherheitslösungen
                    </Link>
                    .
                  </li>
                </ul>

                {/* Conclusion */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  Fazit
                </h2>
                <p>
                  Ein abgebrochener Schlüssel ist kein Weltuntergang — wenn Sie
                  richtig reagieren. Bewahren Sie Ruhe, vermeiden Sie die
                  häufigsten Fehler und rufen Sie im Zweifelsfall einen
                  professionellen Schlüsseldienst. {COMPANY.name} ist Ihr
                  verlässlicher Partner in Wien: Wir sind rund um die Uhr
                  erreichbar, arbeiten mit Festpreisen und öffnen Ihre Tür in
                  den meisten Fällen komplett schadensfrei.
                </p>
              </div>
            </SectionReveal>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <CallButton size="lg" />
              <p className="mt-3 text-sm text-text-muted">
                Rund um die Uhr erreichbar — in ganz Wien in 15–30 Minuten vor&nbsp;Ort.
              </p>
            </div>

            {/* Back link */}
            <div className="mt-16 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Alle Blogbeiträge
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
