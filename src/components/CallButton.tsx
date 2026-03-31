"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CallButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

export default function CallButton({
  className,
  size = "md",
  label,
}: CallButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-5 py-3.5 text-sm gap-2 sm:px-8 sm:py-4 sm:text-lg sm:gap-3",
  };

  return (
    <a
      data-main-cta
      href={`tel:${COMPANY.phoneRaw}`}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-[#D4A017] to-[#F5D060] font-bold text-white shadow-lg shadow-gold/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/35",
        sizeClasses[size],
        className
      )}
    >
      <Phone className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      <span>{label || `Jetzt anrufen: ${COMPANY.phone}`}</span>
    </a>
  );
}
