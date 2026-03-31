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

export default function HomePage() {
  return (
    <>
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
