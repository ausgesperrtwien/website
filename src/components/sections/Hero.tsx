"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY, IMAGES } from "@/lib/constants";
import KeyAnimation from "@/components/KeyAnimation";
import CallButton from "@/components/CallButton";
import Link from "next/link";
import { Check } from "lucide-react";

const trustPills = [
  "In 15 bis 20 Min vor Ort",
  "Keine Anfahrtskosten",
  "Faire Fixpreise",
  "24/7 erreichbar",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={IMAGES.hero}
        alt="Wohnungstür in Wien"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-primary/65" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              <span>🔐</span>
              <span>24h Notdienst • Wien &amp; Klosterneuburg</span>
            </motion.div>

            {/* H1 */}
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Ausgesperrt?{" "}
              <span className="text-gold-light">
                Wir sind in 15 bis 20 Minuten bei Ihnen.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Ihr zuverlässiger Schlüsseldienst in Wien. Faire Fixpreise, keine
              versteckten Kosten. Tag und Nacht für Sie im Einsatz.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CallButton size="lg" />
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Kostenlos anfragen →
              </Link>
            </div>

            {/* Trust Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {trustPills.map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-sm"
                >
                  <Check className="h-3.5 w-3.5 text-green-400" />
                  {pill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Key Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden items-center justify-center lg:flex"
          >
            <KeyAnimation />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
