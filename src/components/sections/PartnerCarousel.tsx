"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "EVVA", style: "text-[#E8B500] font-black text-2xl tracking-tight" },
  { name: "DOM", style: "text-[#CC0000] font-black text-3xl tracking-wider" },
  { name: "ABUS", style: "text-[#CC0000] font-black text-2xl italic tracking-wide" },
  { name: "KABA", style: "text-[#1a1a6e] font-black text-2xl tracking-[0.3em]" },
  { name: "GRUNDMANN", style: "text-[#333] font-bold text-xl tracking-[0.25em]" },
  { name: "RB", style: "text-white bg-[#1a1a1a] rounded-lg px-3 py-1 font-black text-2xl" },
];

// Repeat enough times so the track is always full
const items = [...partners, ...partners, ...partners, ...partners];

export default function PartnerCarousel() {
  return (
    <section className="overflow-hidden bg-bg-secondary py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-text-muted"
        >
          Vertraut von führenden Marken
        </motion.p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-bg-secondary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-bg-secondary to-transparent" />

        <div className="flex w-max animate-[scroll_20s_linear_infinite] items-center gap-10">
          {items.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-[72px] w-44 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-white px-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:scale-105"
            >
              <span className={partner.style}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
