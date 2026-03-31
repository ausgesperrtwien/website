import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CallButton from "@/components/CallButton";
import SectionReveal from "@/components/SectionReveal";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Ausgesperrt Wien Schlüsseldienst Wien. ☎ +43 676 911 14 12. Klosterneuburger Straße 7, 1200 Wien. 24/7 erreichbar.",
};

export default function KontaktPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <Image
          src="/kontakt.jpg"
          alt="Kontakt Ausgesperrt Wien"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Kontakt
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Ausgesperrt? Oder möchten Sie sich beraten lassen? Wir sind rund
              um die Uhr für Sie da.
            </p>
            <div className="mt-8">
              <CallButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-white p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emergency/10">
                  <Phone className="h-6 w-6 text-emergency" />
                </div>
                <h3 className="font-heading text-sm font-bold text-text-primary">
                  Telefon
                </h3>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="mt-1 block text-sm font-semibold text-primary hover:underline"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div className="rounded-xl border border-border bg-white p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold text-text-primary">
                  E-Mail
                </h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-1 block text-sm font-semibold text-primary hover:underline"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="rounded-xl border border-border bg-white p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold text-text-primary">
                  Adresse
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {COMPANY.address}
                  <br />
                  {COMPANY.zip} {COMPANY.city}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-white p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-bold text-text-primary">
                  Öffnungszeiten
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {COMPANY.hoursShort}
                  <br />
                  365 Tage im Jahr
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-secondary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                src={COMPANY.mapsEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ausgesperrt Wien Standort — Schmalzhofgasse 10/2/27, 1060 Wien"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </div>
  );
}
