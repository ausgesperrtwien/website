import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PartnerCarousel from "@/components/sections/PartnerCarousel";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Security from "@/components/sections/Security";
import FAQ from "@/components/sections/FAQ";
import EinsatzgebietePreview from "@/components/sections/EinsatzgebietePreview";
import Contact from "@/components/sections/Contact";
import { COMPANY, FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ausgesperrt Vienna — Schlüsseldienst Wien | 24h Aufsperrdienst",
  description:
    "Ausgesperrt? Ihr Schlüsseldienst Wien ist in 15–20 Min vor Ort. Aufsperrdienst Wien rund um die Uhr — faire Fixpreise ab 79€, keine Anfahrtskosten, keine versteckten Kosten.",
  keywords: [
    "Schlüsseldienst Wien",
    "Aufsperrdienst Wien",
    "Schlüsseldienst in meiner Nähe",
    "Schlüsseldienst Wien Kosten",
    "Schlüsseldienst Wien Preise",
    "24h Schlüsseldienst Wien",
    "Aufsperrdienst 24h Wien",
    "Türöffnung Wien",
    "Schlüsselnotdienst Wien",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ausgesperrt Vienna — Schlüsseldienst Wien | 24h Aufsperrdienst",
    description:
      "Ausgesperrt? Ihr Schlüsseldienst Wien ist in 15–20 Min vor Ort. Faire Fixpreise ab 79€, keine Anfahrtskosten.",
    locale: "de_AT",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LocksmithService"],
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: "https://ausgesperrtwien.at",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  image: "https://ausgesperrtwien.at/logo.png",
  logo: "https://ausgesperrtwien.at/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    postalCode: COMPANY.zip,
    addressLocality: COMPANY.city,
    addressCountry: "AT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1952,
    longitude: 16.3502,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    { "@type": "City", name: "Wien" },
    { "@type": "City", name: "Klosterneuburg" },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Debit Card",
  languages: ["Deutsch", "Englisch", "Russisch"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Schlüsseldienst Wien",
  description:
    "Professioneller Schlüsseldienst und Aufsperrdienst in Wien — 24/7 Notdienst, faire Fixpreise ab 79€, in 15–20 Minuten vor Ort.",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
    telephone: COMPANY.phone,
    url: "https://ausgesperrtwien.at",
  },
  serviceType: "Locksmith",
  areaServed: { "@type": "City", name: "Wien" },
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "79",
      priceCurrency: "EUR",
      description: "ab 79€ (Mo–Fr, 8–17 Uhr, zugefallene Tür)",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <PartnerCarousel />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Pricing />
      <Security />
      <EinsatzgebietePreview />
      <FAQ />
      <Contact />
    </>
  );
}
