"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maximilian Berger",
    avatar: "/review-1.png",
    rating: 5,
    text: "Innerhalb von 20 Minuten war der Techniker da und hat die Tür beschädigungsfrei geöffnet. Absolut professionell, freundlich und fair im Preis. Das verdanke ich diesem Team.",
  },
  {
    name: "Thomas Lechner",
    avatar: "/review-2.png",
    rating: 5,
    text: "Um 2 Uhr nachts ausgesperrt und trotzdem sofort jemanden erreicht. Super freundlich, schnell und transparent. Klare Empfehlung für jeden in Wien!",
  },
];

function StarRating({
  count,
  cardDelay,
}: {
  count: number;
  cardDelay: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: cardDelay + 0.4 + i * 0.08,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Star className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />
          </motion.div>
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: cardDelay + 0.8, duration: 0.3 }}
        className="ml-1 text-sm font-bold text-gray-800"
      >
        {count}.0
      </motion.span>
    </div>
  );
}

function ReviewCard({
  review,
  index,
  width,
}: {
  review: (typeof reviews)[number];
  index: number;
  width?: string;
}) {
  const cardDelay = 1.2 + index * 0.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        delay: cardDelay,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="flex items-start gap-3.5 max-lg:w-full rounded-xl bg-white px-4 py-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
      style={{ width: width || undefined }}
    >
      {/* Large avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: cardDelay + 0.15, duration: 0.25 }}
        className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gray-200 ring-2 ring-gray-100"
      >
        <Image
          src={review.avatar}
          alt={review.name}
          fill
          className="object-cover"
          sizes="44px"
        />
      </motion.div>

      {/* Name, stars, text — all right of avatar */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: cardDelay + 0.2, duration: 0.25 }}
            className="text-sm font-bold text-gray-900"
          >
            {review.name}
          </motion.span>
          <StarRating count={review.rating} cardDelay={cardDelay} />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: cardDelay + 0.9, duration: 0.35 }}
          className="mt-1 text-[13px] leading-[1.55] text-gray-500"
        >
          {review.text}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function FloatingReviews({ variant }: { variant: "desktop" | "mobile" }) {
  if (variant === "desktop") {
    const widths = ["40vw", "50vw"];
    return (
      <div className="pointer-events-none absolute bottom-20 right-0 z-20 hidden flex-col items-end gap-2 lg:flex xl:right-8 2xl:right-14">
        {reviews.map((review, i) => (
          <div
            key={review.name}
            className="pointer-events-auto"
            style={{ marginRight: i === 0 ? 0 : 56 }}
          >
            <ReviewCard review={review} index={i} width={widths[i]} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative z-20 mt-8 flex flex-col gap-3 lg:hidden">
      {reviews.map((review, i) => (
        <ReviewCard key={review.name} review={review} index={i} />
      ))}
    </div>
  );
}
