"use client";

import { TRUST_POINTS } from "@/lib/constants";
import {
  Clock,
  MapPin,
  Ban,
  Coins,
  Lock,
  Star,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  MapPin,
  Ban,
  Coins,
  Lock,
  Star,
};

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-white to-bg-secondary py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {TRUST_POINTS.map((point) => {
              const Icon = iconMap[point.icon];
              return (
                <div
                  key={point.text}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-accent">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">
                    {point.text}
                  </span>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
