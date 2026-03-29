"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { CAROUSEL_IMAGES } from "@/lib/constants";

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Unser Service in Aktion
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            {/* Main image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-bg-secondary">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -100 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={CAROUSEL_IMAGES[current].src}
                    alt={CAROUSEL_IMAGES[current].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border hover:bg-text-muted"
                  }`}
                  aria-label={`Bild ${i + 1} anzeigen`}
                />
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
