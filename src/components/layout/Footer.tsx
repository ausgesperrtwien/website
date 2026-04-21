import Link from "next/link";
import {
  COMPANY,
  EINSATZGEBIETE,
  SERVICES,
  SITUATIONS,
  getBezirkUrl,
} from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Megamenu: 5 columns on desktop, stacks on mobile */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
          {/* Col 1: Brand + Contact */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🔑</span>
              <span className="font-heading text-xl font-bold text-white">
                Ausgesperrt Vienna
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Ihr zuverlässiger Schlüsseldienst Wien und Aufsperrdienst Wien.
              Schnell, fair, professionell — 24 Stunden am Tag, 365 Tage im
              Jahr.
            </p>
            <ul className="mt-5 space-y-3">
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

          {/* Col 2: Leistungen */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
              Leistungen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/schluessel-nachmachen"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Schlüssel nachmachen
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="text-sm font-semibold text-primary-light transition-colors hover:text-white"
                >
                  Alle Leistungen →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hilfe & Notfall */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
              Hilfe & Notfall
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SITUATIONS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/aufsperrdienst/${s.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/aufsperrdienst"
                  className="text-sm font-semibold text-primary-light transition-colors hover:text-white"
                >
                  24h Aufsperrdienst →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Info */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
              Info
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/preise"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Preise & Kosten
                </Link>
              </li>
              <li>
                <Link
                  href="/sicherheit"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Sicherheitstechnik
                </Link>
              </li>
              <li>
                <Link
                  href="/einsatzgebiete"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Einsatzgebiete
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Blog & Ratgeber
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Bezirke — all 24 in 2 sub-columns */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-400">
              Schlüsseldienst Wien Bezirke
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
              {EINSATZGEBIETE.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={getBezirkUrl(e)}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {e.district === "Klosterneuburg"
                      ? "Klosterneuburg"
                      : `${e.district} ${e.name}`}
                    {e.hauptstandort && " ⭐"}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/schluesseldienst-wien"
              className="mt-4 inline-block text-sm font-semibold text-primary-light transition-colors hover:text-white"
            >
              Schlüsseldienst Wien — Übersicht →
            </Link>
            <Link
              href="/einsatzgebiete"
              className="mt-2 inline-block text-sm text-gray-300 transition-colors hover:text-white"
            >
              Alle Einsatzgebiete →
            </Link>
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
