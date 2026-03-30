"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function MobileCallBar() {
  return (
    <a
      href={`tel:${COMPANY.phoneRaw}`}
      className="fixed bottom-0 left-0 right-0 z-50 flex h-[60px] items-center justify-center gap-2 bg-gradient-to-r from-[#D4A017] to-[#F5D060] text-white shadow-[0_-2px_10px_rgba(0,0,0,0.15)] md:hidden"
    >
      <Phone className="h-5 w-5" />
      <span className="text-base font-bold">
        JETZT ANRUFEN: {COMPANY.phone}
      </span>
    </a>
  );
}
