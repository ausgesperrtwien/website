import Link from "next/link";
import { COMPANY, NAV_LINKS, EINSATZGEBIETE } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🔑</span>
              <span className="font-heading text-xl font-bold text-white">
                Ausgesperrt Vienna
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Ihr zuverlässiger Schlüsseldienst in Wien und Klosterneuburg.
              Schnell, fair, professionell, 24 Stunden am Tag, 365 Tage im
              Jahr.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Startseite
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-emergency" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary-light" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.zip} {COMPANY.city}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="h-4 w-4 text-primary-light" />
                {COMPANY.hoursShort}
              </li>
            </ul>
          </div>

          {/* Col 4: Einsatzgebiete */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
              Einsatzgebiete
            </h3>
            <ul className="mt-4 space-y-3">
              {EINSATZGEBIETE.filter(
                (e) => e.hauptstandort || ["1010", "1030", "1070", "1090", "1190", "1200", "Klosterneuburg"].includes(e.district)
              ).map((e) => (
                <li key={e.district}>
                  <Link
                    href={`/einsatzgebiete/${e.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    📍{" "}
                    {e.district === "Klosterneuburg"
                      ? "Klosterneuburg"
                      : `${e.district} Wien — ${e.name}`}
                    {e.hauptstandort && " ⭐"}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/einsatzgebiete"
                  className="text-sm font-semibold text-primary-light transition-colors hover:text-white"
                >
                  Alle Bezirke →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 {COMPANY.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://htd.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-yellow-300 transition-colors hover:text-gray-300"
            >
              Website von HTD Solutions
            </a>
            <Link
              href="/impressum"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
