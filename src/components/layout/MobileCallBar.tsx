"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Small delay to let the new page render its CTA
    const timer = setTimeout(() => {
      const target = document.querySelector("[data-main-cta]");
      if (!target) {
        setVisible(true);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(target);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return (
    <a
      href={`tel:${COMPANY.phoneRaw}`}
      className={`fixed bottom-0 left-0 right-0 z-50 flex h-[60px] items-center justify-center gap-2 bg-gradient-to-r from-[#D4A017] to-[#F5D060] text-white shadow-[0_-2px_10px_rgba(0,0,0,0.15)] transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Phone className="h-5 w-5" />
      <span className="text-base font-bold">
        JETZT ANRUFEN: {COMPANY.phone}
      </span>
    </a>
  );
}
