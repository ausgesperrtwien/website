"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Navbar with spinning gradient border */}
      <div className="fixed top-3 left-1/2 z-[999] w-[92%] max-w-[1320px] -translate-x-1/2 rounded-2xl p-[2px] transition-all duration-500">
        {/* Spinning gradient layer */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
          aria-hidden
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[200%]"
            style={{
              background: "conic-gradient(from 0deg, #1E40AF, #3B82F6, #93C5FD, #FDE68A, #F59E0B, #D97706, #F59E0B, #FDE68A, #93C5FD, #3B82F6, #1E40AF)",
              animation: "spin-border 5s linear infinite",
            }}
          />
        </div>

        <header
          className={cn(
            "relative z-10 rounded-[14px] transition-all duration-500",
            scrolled
              ? "bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
              : "bg-white"
          )}
        >
          <div className="mx-auto px-6 lg:px-10">
            <div className="flex h-[64px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5 shrink-0 transition-opacity duration-200 hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Ausgesperrt Vienna – Schlüsseldienst"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
              <span className="font-heading text-base font-bold text-text-primary leading-tight hidden sm:block">
                Ausgesperrt Vienna
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-[14px] font-medium transition-all duration-200",
                      isActive
                        ? "text-primary"
                        : "text-text-secondary hover:text-primary"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex shrink-0">
              <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-green-700">24/7</span>
              </div>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F5D060] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-gold/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/40"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#F5D060] text-white shadow-lg shadow-gold/30"
                aria-label="Jetzt anrufen"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                  mobileOpen
                    ? "bg-primary text-white"
                    : "bg-bg-secondary text-text-primary hover:bg-bg-accent"
                )}
                aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border/30 bg-white lg:hidden"
            >
              <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all",
                          isActive
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "text-text-primary hover:bg-bg-accent"
                        )}
                      >
                        {isActive && (
                          <Shield className="h-4 w-4" />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.06 + 0.05 }}
                  className="pt-2"
                >
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A017] to-[#F5D060] px-4 py-4 text-base font-bold text-white shadow-lg shadow-gold/25"
                  >
                    <Phone className="h-5 w-5" />
                    Jetzt anrufen: {COMPANY.phone}
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      </div>
    </>
  );
}
