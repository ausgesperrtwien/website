import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EINSATZGEBIETE } from "@/lib/constants";
import BezirkPageContent, {
  buildBezirkMetadata,
} from "@/components/BezirkPageContent";

const KLOSTERNEUBURG = EINSATZGEBIETE.find(
  (e) => e.district === "Klosterneuburg"
);

export const metadata: Metadata = KLOSTERNEUBURG
  ? buildBezirkMetadata(KLOSTERNEUBURG)
  : {};

export default function Page() {
  if (!KLOSTERNEUBURG) notFound();
  return <BezirkPageContent area={KLOSTERNEUBURG} />;
}
