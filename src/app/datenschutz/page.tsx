import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Ausgesperrt Vienna Aufsperrdienst und Montage gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="pt-[72px]">
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8 text-text-secondary">
            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                1. Verantwortlicher
              </h2>
              <p>
                {COMPANY.legalName}
                <br />
                {COMPANY.address}, {COMPANY.zip} {COMPANY.city}
                <br />
                Telefon:{" "}
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-primary hover:underline">
                  {COMPANY.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
                  {COMPANY.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p>
                Beim Besuch unserer Website werden automatisch folgende Daten
                durch den Browser übermittelt und in Server-Logfiles gespeichert:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP-Adresse des anfragenden Rechners (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich zur Sicherstellung eines
                störungsfreien Betriebs der Website und zur Verbesserung unseres
                Angebots ausgewertet. Eine Zuordnung zu bestimmten Personen ist
                nicht möglich. Eine Zusammenführung mit anderen Datenquellen wird
                nicht vorgenommen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                3. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular auf unserer Website
                kontaktieren, werden die von Ihnen eingegebenen Daten (Vorname,
                Nachname, E-Mail-Adresse, Telefonnummer und Nachricht) zum Zweck
                der Bearbeitung Ihrer Anfrage bei uns gespeichert. Die
                Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse). Ihre Daten werden nach Erledigung Ihrer
                Anfrage gelöscht, sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                4. Cookies
              </h2>
              <p>
                Unsere Website verwendet Cookies. Bei Cookies handelt es sich um
                Textdateien, die auf Ihrem Endgerät gespeichert werden und die
                eine Analyse der Nutzung der Website ermöglichen. Technisch
                notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO gesetzt. Sonstige Cookies werden nur mit Ihrer Einwilligung
                gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Sie können die Speicherung
                von Cookies durch eine entsprechende Einstellung Ihrer
                Browser-Software verhindern.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                5. Google Maps
              </h2>
              <p>
                Auf unserer Kontaktseite nutzen wir Google Maps zur Darstellung
                unseres Standortes. Anbieter ist die Google Ireland Limited
                (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4,
                Irland. Beim Laden der Karte wird eine Verbindung zu den Servern
                von Google hergestellt. Dabei kann Ihre IP-Adresse an Google
                übermittelt werden. Die Nutzung erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
                ansprechenden Darstellung unseres Standortes). Weitere
                Informationen finden Sie in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                6. Ihre Rechte
              </h2>
              <p>Sie haben das Recht:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
                  personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger
                  oder Vervollständigung Ihrer bei uns gespeicherten
                  personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
                  personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
                  bereitgestellt haben, in einem strukturierten, gängigen und
                  maschinenlesbaren Format zu erhalten;
                </li>
                <li>
                  gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung
                  jederzeit gegenüber uns zu widerrufen;
                </li>
                <li>
                  gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu
                  beschweren. In der Regel können Sie sich hierfür an die
                  Aufsichtsbehörde am Sitz des Verantwortlichen wenden:
                  Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030
                  Wien.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-text-primary">
                7. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
                Januar 2025. Durch die Weiterentwicklung unserer Website oder
                aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann
                es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
