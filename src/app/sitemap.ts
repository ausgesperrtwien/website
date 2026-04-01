import type { MetadataRoute } from "next";
import { SERVICES, EINSATZGEBIETE, SECURITY_SERVICES } from "@/lib/constants";

const BASE_URL = "https://ausgesperrt.wien";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ── Static pages ─────────────────────────────────────── */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/leistungen`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/aufsperrdienst`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sicherheit`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/einsatzgebiete`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  /* ── Aufsperrdienst sub-pages ─────────────────────────── */

  const aufsperrPages: MetadataRoute.Sitemap = [
    "tuer-zugefallen",
    "schluessel-verloren",
    "schluessel-abgebrochen",
    "schloss-defekt",
    "schluessel-steckt-innen",
    "nach-einbruch",
  ].map((slug) => ({
    url: `${BASE_URL}/aufsperrdienst/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ── Leistungen (service) sub-pages ───────────────────── */

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ── Sicherheit sub-pages ─────────────────────────────── */

  const securityPages: MetadataRoute.Sitemap = SECURITY_SERVICES.map((s) => ({
    url: `${BASE_URL}/sicherheit/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ── Einsatzgebiete (district) sub-pages ──────────────── */

  const districtPages: MetadataRoute.Sitemap = EINSATZGEBIETE.map((e) => ({
    url: `${BASE_URL}/einsatzgebiete/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ── Blog posts ───────────────────────────────────────── */

  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog/schluessel-abgebrochen-was-tun`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/nach-einbruch-was-tun`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [
    ...staticPages,
    ...aufsperrPages,
    ...servicePages,
    ...securityPages,
    ...districtPages,
    ...blogPosts,
  ];
}
