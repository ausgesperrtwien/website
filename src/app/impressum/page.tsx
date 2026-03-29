import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von MagicKey Aufsperrdienst und Montage, Klosterneuburger Straße 7, 1200 Wien.",
};

export default function ImpressumPage() {
  return (
    <div className="pt-[72px]">
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8 text-text-secondary">
            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                {COMPANY.legalName}
              </h2>
              <p>
                {COMPANY.address}
                <br />
                {COMPANY.zip} {COMPANY.city}
                <br />
                {COMPANY.country}
              </p>
              <p>
                Telefon:{" "}
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-primary hover:underline"
                >
                  {COMPANY.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-primary hover:underline"
                >
                  {COMPANY.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Vollständiger Firmenname
              </h3>
              <p>{COMPANY.legalName}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Ort der Gewerbeberechtigung
              </h3>
              <p>
                {COMPANY.address}
                <br />
                {COMPANY.zip} {COMPANY.city}, {COMPANY.country}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                UID-Nummer
              </h3>
              <p>{COMPANY.uid}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Rechtsform
              </h3>
              <p>{COMPANY.rechtsform}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Geschäftsführung
              </h3>
              <p>{COMPANY.gf}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Unternehmensgegenstand
              </h3>
              <p>{COMPANY.gegenstand}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Kammer / Berufsverband
              </h3>
              <p>{COMPANY.kammer}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Aufsichtsbehörde
              </h3>
              <p>{COMPANY.aufsicht}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Anwendbare Vorschriften
              </h3>
              <p>
                Gewerbeordnung 1994, abrufbar unter{" "}
                <a
                  href="https://www.ris.bka.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.ris.bka.gv.at
                </a>
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                Haftungsausschluss
              </h2>

              <h3 className="font-heading text-lg font-bold text-text-primary">
                Inhalt des Onlineangebotes
              </h3>
              <p>
                Der Autor übernimmt keinerlei Gewähr für die Aktualität,
                Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
                Informationen. Haftungsansprüche gegen den Autor, welche sich
                auf Schäden materieller oder ideeller Art beziehen, die durch die
                Nutzung oder Nichtnutzung der dargebotenen Informationen bzw.
                durch die Nutzung fehlerhafter und unvollständiger Informationen
                verursacht wurden, sind grundsätzlich ausgeschlossen, sofern
                seitens des Autors kein nachweislich vorsätzliches oder grob
                fahrlässiges Verschulden vorliegt.
              </p>

              <h3 className="font-heading text-lg font-bold text-text-primary">
                Verweise und Links
              </h3>
              <p>
                Bei direkten oder indirekten Verweisen auf fremde Internetseiten
                (Links), die außerhalb des Verantwortungsbereiches des Autors
                liegen, würde eine Haftungsverpflichtung ausschließlich in dem
                Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis
                hat und es ihm technisch möglich und zumutbar wäre, die Nutzung
                im Falle rechtswidriger Inhalte zu verhindern.
              </p>

              <h3 className="font-heading text-lg font-bold text-text-primary">
                Urheber- und Kennzeichenrecht
              </h3>
              <p>
                Der Autor ist bestrebt, in allen Publikationen die Urheberrechte
                der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte
                zu beachten. Alle innerhalb des Internetangebotes genannten und
                ggf. durch Dritte geschützten Marken- und Warenzeichen
                unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen
                Kennzeichenrechts und den Besitzrechten der jeweiligen
                eingetragenen Eigentümer.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Online-Streitbeilegung
              </h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/odr/
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
