"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import CallButton from "@/components/CallButton";
import { COMPANY } from "@/lib/constants";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission via Server Action or API route
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <SectionReveal>
            <div>
              <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                Kontaktieren Sie uns
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Wir sind rund um die Uhr für Sie da.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <CallButton size="lg" />
                </div>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 text-white/90 transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-base">{COMPANY.email}</span>
                </a>

                <div className="flex items-start gap-4 text-white/90">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-base">
                    {COMPANY.address}
                    <br />
                    {COMPANY.zip} {COMPANY.city}, {COMPANY.country}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-base">{COMPANY.hours}</span>
                </div>

                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-base">
                    🇩🇪 Deutsch · 🇬🇧 English · 🇷🇺 Русский
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right: Form */}
          <SectionReveal delay={0.15}>
            <div className="rounded-2xl bg-white p-8 shadow-card-hover">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    Vielen Dank!
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="vorname"
                        className="mb-1.5 block text-sm font-medium text-text-primary"
                      >
                        Vorname *
                      </label>
                      <input
                        type="text"
                        id="vorname"
                        name="vorname"
                        required
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nachname"
                        className="mb-1.5 block text-sm font-medium text-text-primary"
                      >
                        Nachname *
                      </label>
                      <input
                        type="text"
                        id="nachname"
                        name="nachname"
                        required
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="telefon"
                      className="mb-1.5 block text-sm font-medium text-text-primary"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-text-primary"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nachricht"
                      className="mb-1.5 block text-sm font-medium text-text-primary"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <p className="text-xs text-text-muted">
                    Es werden personenbezogene Daten übermittelt und für die in
                    der{" "}
                    <a
                      href="/datenschutz"
                      className="underline hover:text-primary"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    beschriebenen Zwecke verwendet. *
                  </p>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary py-3 text-base font-semibold text-white transition-all hover:bg-primary-light hover:scale-[1.01]"
                  >
                    Anfrage senden
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
