import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EINSATZGEBIETE } from "@/lib/constants";
import BezirkPageContent, {
  buildBezirkMetadata,
} from "@/components/BezirkPageContent";

const PLZ = "1190";
const AREA = EINSATZGEBIETE.find(
  (e) => e.plz === PLZ && e.district !== "Klosterneuburg"
);

export const metadata: Metadata = AREA ? buildBezirkMetadata(AREA) : {};

export default function Page() {
  if (!AREA) notFound();
  return <BezirkPageContent area={AREA} />;
}
