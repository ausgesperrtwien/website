"use client";

import { Star } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { REVIEWS } from "@/lib/constants";

// TODO: Replace with Google Places API reviews

export default function Reviews() {
  return (
    <section className="bg-gradient-to-b from-bg-secondary to-bg-accent/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Basierend auf echten Google-Bewertungen aus Wien
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <SectionReveal key={review.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-card">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {review.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {review.location} — {review.date}
                    </p>
                  </div>

                  {/* Google Badge */}
                  <div className="flex items-center gap-1 rounded-full bg-bg-secondary px-3 py-1">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="text-xs font-medium text-text-muted">
                      Google
                    </span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/place/Magic+Key+-+Aufsperrdienst"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Alle Bewertungen auf Google ansehen →
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
