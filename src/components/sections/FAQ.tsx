"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-br from-bg-secondary to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Häufige Fragen
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl bg-white shadow-card"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="pr-4 font-heading text-base font-semibold text-text-primary">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-text-muted transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
