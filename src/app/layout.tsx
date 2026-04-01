import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ausgesperrtwien.at"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Ausgesperrt Vienna — Schlüsseldienst Wien | 24h Aufsperrdienst",
    template: "%s | Ausgesperrt Vienna Schlüsseldienst Wien",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  description:
    "Ihr zuverlässiger Schlüsseldienst in Wien und Klosterneuburg. 24/7 Notdienst, faire Fixpreise ab 79€, keine Anfahrtskosten. In 15–20 Minuten vor Ort. ☎ +43 660 172 63 00",
  keywords: [
    "Schlüsseldienst Wien",
    "Aufsperrdienst Wien",
    "Schlüsselnotdienst",
    "Türöffnung Wien",
    "Schloss wechseln Wien",
    "24h Schlüsseldienst",
    "Schlüsseldienst 1200 Wien",
    "Aufsperrdienst Klosterneuburg",
    "Ausgesperrt Vienna",
  ],
  openGraph: {
    title: "Ausgesperrt Vienna — Schlüsseldienst Wien | 24h Aufsperrdienst",
    description:
      "Ausgesperrt? In 15–20 Minuten sind wir bei Ihnen. Faire Fixpreise, keine versteckten Kosten. ☎ +43 660 172 63 00",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-bg-primary font-sans text-text-primary antialiased">
        <Header />
        <main className="pb-[60px] md:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
        <ScrollToTop />
      </body>
    </html>
  );
}
