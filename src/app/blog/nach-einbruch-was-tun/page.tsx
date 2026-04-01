import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  FileText,
  Phone,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title:
    "Nach einem Einbruch — Was tun? Schritt-für-Schritt-Anleitung | Ausgesperrt Wien",
  description:
    "Einbruch in Wien? Erfahren Sie, was Sie sofort tun sollten: Polizei, Spurensicherung, Versicherung, Schloss tauschen. Schritt-für-Schritt vom Experten.",
  openGraph: {
    title: "Nach einem Einbruch — Was tun in Wien?",
    description:
      "Schritt-für-Schritt-Anleitung nach einem Einbruch: Polizei rufen, Spuren sichern, Versicherung melden, Schlösser tauschen. So reagieren Sie richtig.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Nach einem Einbruch — Was tun in Wien?",
  description:
    "Schritt-für-Schritt-Anleitung nach einem Einbruch: Polizei rufen, Spuren sichern, Versicherung melden, Schlösser tauschen lassen.",
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
              Nach einem Einbruch&nbsp;— Was&nbsp;tun in Wien?
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Ein Einbruch ist ein Schock. Hier erfahren Sie Schritt für
              Schritt, was Sie jetzt tun müssen — von der Polizei bis zum neuen
              Schloss.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
              <time dateTime="2026-04-01">1. April 2026</time>
              <span>·</span>
              <span>6 min Lesezeit</span>
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
                  Sie kommen nach Hause und merken sofort: Etwas stimmt nicht.
                  Die Tür steht offen, Schubladen sind durchwühlt, Wertgegenstände fehlen. Ein
                  Einbruch ist eine extrem belastende Erfahrung — nicht nur
                  finanziell, sondern vor allem emotional. Viele Betroffene
                  fühlen sich danach unsicher in den eigenen vier Wänden.
                </p>
                <p>
                  In Wien werden laut Kriminalstatistik jedes Jahr tausende
                  Einbrüche in Wohnungen und Häuser verübt. Damit Sie in
                  dieser Ausnahmesituation richtig reagieren, haben wir diese
                  Schritt-für-Schritt-Anleitung zusammengestellt.
                </p>

                {/* Section 1 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  1. Betreten Sie die Wohnung nicht
                </h2>
                <p>
                  Wenn Sie Anzeichen eines Einbruchs bemerken — aufgebrochene
                  Tür, eingeschlagenes Fenster, fremde Geräusche — betreten Sie
                  die Wohnung <strong>auf keinen Fall</strong>. Der Täter
                  könnte sich noch in der Wohnung befinden.
                </p>

                <div className="not-prose my-6 space-y-3">
                  {[
                    "Verlassen Sie sofort das Stiegenhaus bzw. den Eingangsbereich",
                    "Bringen Sie sich in Sicherheit — gehen Sie zu einem Nachbarn",
                    "Rufen Sie umgehend die Polizei unter 133 oder den Notruf 112",
                    "Warten Sie auf die Polizei, bevor Sie die Wohnung betreten",
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

                {/* Section 2 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  2. Polizei verständigen und Anzeige erstatten
                </h2>
                <p>
                  Rufen Sie so schnell wie möglich die Polizei. In Wien
                  erreichen Sie den Notruf unter <strong>133</strong> (Polizei)
                  oder <strong>112</strong> (Euronotruf). Die Polizei wird:
                </p>
                <ul className="my-4 space-y-2">
                  <li>Den Tatort sichern und Spuren aufnehmen</li>
                  <li>
                    Eine <strong>Anzeige</strong> aufnehmen — diese brauchen Sie
                    später für die Versicherung
                  </li>
                  <li>
                    Empfehlungen für das weitere Vorgehen geben
                  </li>
                </ul>
                <p>
                  <strong>Wichtig:</strong> Verändern Sie bis zum Eintreffen der
                  Polizei nichts in der Wohnung. Fassen Sie keine Gegenstände
                  an, räumen Sie nichts auf und putzen Sie keine Flächen. Jede
                  Veränderung kann Spuren vernichten.
                </p>

                {/* Section 3 - Fehler */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  3. Häufige Fehler nach einem Einbruch
                </h2>

                <div className="not-prose my-6 space-y-3">
                  {[
                    {
                      text: "Sofort aufräumen und putzen",
                      reason:
                        "Fingerabdrücke, DNA-Spuren und Schuhabdrücke werden dabei zerstört.",
                    },
                    {
                      text: "Beschädigte Tür oder Fenster selbst reparieren",
                      reason:
                        "Ohne professionelle Sicherung bleibt die Wohnung weiter ungeschützt.",
                    },
                    {
                      text: "Den Einbruch nicht bei der Versicherung melden",
                      reason:
                        "Viele Haushaltsversicherungen decken Einbruchschäden ab — aber nur bei rechtzeitiger Meldung.",
                    },
                    {
                      text: "Das alte Schloss einfach weiter verwenden",
                      reason:
                        "Wenn der Einbrecher einen Schlüssel kopiert hat oder das Schloss beschädigt ist, sind Sie weiterhin gefährdet.",
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
                  4. Versicherung informieren
                </h2>
                <p>
                  Melden Sie den Einbruch so schnell wie möglich bei Ihrer
                  Haushaltsversicherung. In der Regel sind folgende Schritte
                  nötig:
                </p>
                <div className="not-prose my-6 space-y-3">
                  {[
                    "Schadensmeldung telefonisch oder online bei Ihrer Versicherung einreichen",
                    "Polizeiliche Anzeigenummer (GZ-Nummer) bereithalten",
                    "Liste der gestohlenen und beschädigten Gegenstände erstellen",
                    "Fotos der Einbruchspuren und Schäden anfertigen",
                    "Rechnungen und Kaufbelege für gestohlene Gegenstände sammeln",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-bg-secondary p-4"
                    >
                      <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Je genauer Ihre Dokumentation ist, desto reibungsloser
                  verläuft die Schadensregulierung. Tipp: Erstellen Sie
                  regelmäßig eine Inventarliste Ihrer Wertgegenstände mit Fotos
                  — das erleichtert im Ernstfall die Meldung erheblich.
                </p>

                {/* CTA Block */}
                <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-center text-white">
                  <AlertTriangle className="mx-auto mb-3 h-8 w-8 text-gold" />
                  <h3 className="font-heading text-xl font-bold">
                    Einbruch? Wir sichern Ihre Wohnung sofort.
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
                    Ausgesperrt Wien ist rund um die Uhr erreichbar. Wir
                    tauschen Ihr Schloss noch am selben Tag, sichern Türen und
                    Fenster und beraten Sie zu Einbruchschutz — in ganz Wien.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <CallButton size="lg" />
                  </div>
                </div>

                {/* Section 5 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  5. Schlösser sofort tauschen lassen
                </h2>
                <p>
                  Nach einem Einbruch sollten Sie die Schlösser an der
                  Eingangstür — und gegebenenfalls auch an Terrassentüren oder
                  Kellerzugängen — <strong>umgehend tauschen</strong> lassen.
                  Gründe dafür:
                </p>
                <ul className="my-4 space-y-2">
                  <li>
                    Das bestehende Schloss könnte vom Einbrecher beschädigt
                    worden sein und bietet keinen sicheren Verschluss mehr.
                  </li>
                  <li>
                    Falls der Einbrecher einen Schlüssel entwendet oder kopiert
                    hat, kann er jederzeit wiederkommen.
                  </li>
                  <li>
                    Ein moderner Sicherheitszylinder (z.&nbsp;B. von EVVA, DOM
                    oder ABUS) bietet deutlich besseren Schutz gegen
                    Aufbruchversuche.
                  </li>
                </ul>
                <p>
                  Bei {COMPANY.name} tauschen wir Ihren Schließzylinder noch am
                  selben Tag. Wir verbauen ausschließlich geprüfte
                  Markenzylinder und beraten Sie, welche Sicherheitsstufe für
                  Ihre Wohnung sinnvoll ist. Mehr dazu auf unserer Seite{" "}
                  <Link
                    href="/sicherheit"
                    className="text-primary font-semibold hover:underline"
                  >
                    Sicherheit & Einbruchschutz
                  </Link>
                  .
                </p>

                {/* Section 6 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  6. Einbruchschutz verbessern — damit es nicht nochmal passiert
                </h2>
                <p>
                  Statistisch gesehen ist die Wahrscheinlichkeit eines erneuten
                  Einbruchs in dieselbe Wohnung erhöht, wenn keine zusätzlichen
                  Sicherheitsmaßnahmen getroffen werden. Nutzen Sie diese
                  Gelegenheit, um Ihre Wohnung besser zu schützen:
                </p>

                <div className="not-prose my-6 space-y-3">
                  {[
                    {
                      title: "Sicherheitszylinder nachrüsten",
                      desc: "Hochwertige Zylinder mit Aufbohr- und Abreißschutz sind die erste Verteidigungslinie.",
                    },
                    {
                      title: "Sicherheitsbeschlag montieren",
                      desc: "Ein Schutzbeschlag verhindert, dass der Zylinder von außen gezogen oder abgebrochen wird.",
                    },
                    {
                      title: "Zusatzschloss oder Panzerriegel einbauen",
                      desc: "Besonders bei Altbautüren in Wien sorgt ein Panzerriegel für deutlich mehr Widerstand.",
                    },
                    {
                      title: "Fenster und Balkontüren sichern",
                      desc: "Abschließbare Fenstergriffe und Pilzkopfverriegelungen schützen die häufigsten Einstiegspunkte.",
                    },
                    {
                      title: "Beleuchtung und Anwesenheitssimulation",
                      desc: "Zeitschaltuhren für Licht und Smart-Home-Lösungen schrecken Einbrecher ab.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-bg-secondary p-4"
                    >
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <span className="text-sm font-semibold text-text-primary">
                          {item.title}
                        </span>
                        <p className="mt-1 text-xs text-text-muted">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  Wir beraten Sie gerne vor Ort und unverbindlich zu allen
                  Sicherheitsmaßnahmen. Informieren Sie sich auch über unsere
                  kompletten{" "}
                  <Link
                    href="/leistungen"
                    className="text-primary font-semibold hover:underline"
                  >
                    Leistungen
                  </Link>
                  .
                </p>

                {/* Section 7 */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  7. Psychische Belastung ernst nehmen
                </h2>
                <p>
                  Ein Einbruch hinterlässt nicht nur materielle Schäden. Viele
                  Betroffene berichten von Schlafstörungen, Angstgefühlen und
                  einem Gefühl des Kontrollverlustes. Das ist völlig normal und
                  kein Zeichen von Schwäche.
                </p>
                <p>
                  Sprechen Sie mit Familie und Freunden über das Erlebte. Wenn
                  die Belastung anhält, zögern Sie nicht, professionelle Hilfe
                  in Anspruch zu nehmen. In Wien bietet unter anderem die{" "}
                  <strong>Opferhilfe des Weißen Rings</strong> kostenlose
                  Beratung für Einbruchsopfer an.
                </p>

                {/* Checkliste */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  Checkliste: Nach dem Einbruch
                </h2>
                <div className="not-prose my-6 rounded-2xl border border-border bg-white p-6">
                  <ol className="space-y-3">
                    {[
                      "Wohnung NICHT betreten — Polizei rufen (133 / 112)",
                      "Nichts verändern — Spuren sichern lassen",
                      "Polizeiliche Anzeige erstatten (GZ-Nummer notieren)",
                      "Fotos von Einbruchspuren und Schäden machen",
                      "Versicherung umgehend informieren",
                      "Liste der gestohlenen Gegenstände erstellen",
                      "Schlösser professionell tauschen lassen",
                      "Einbruchschutz verbessern (Zylinder, Beschlag, Riegel)",
                      "Bei Bedarf: psychologische Unterstützung suchen",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-primary"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Conclusion */}
                <h2 className="font-heading text-2xl font-bold text-text-primary mt-12 mb-4">
                  Fazit
                </h2>
                <p>
                  Ein Einbruch ist eine belastende Erfahrung — aber mit den
                  richtigen Schritten können Sie schnell wieder Sicherheit in
                  Ihr Zuhause bringen. Rufen Sie zuerst die Polizei, melden Sie
                  den Schaden bei der Versicherung und lassen Sie Ihre Schlösser
                  von einem Profi tauschen.
                </p>
                <p>
                  {COMPANY.name} steht Ihnen dabei rund um die Uhr zur
                  Verfügung. Wir kommen innerhalb von 15–30 Minuten zu Ihnen,
                  sichern Ihre Tür und verbauen auf Wunsch sofort einen neuen
                  Sicherheitszylinder — alles zum Festpreis und ohne versteckte
                  Kosten.
                </p>
              </div>
            </SectionReveal>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <CallButton size="lg" />
              <p className="mt-3 text-sm text-text-muted">
                Rund um die Uhr erreichbar — in ganz Wien in 15–30 Minuten
                vor&nbsp;Ort.
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
