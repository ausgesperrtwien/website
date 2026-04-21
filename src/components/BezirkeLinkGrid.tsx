import Link from "next/link";
import { MapPin, Star, ChevronRight } from "lucide-react";
import { EINSATZGEBIETE, getBezirkUrl } from "@/lib/constants";

type Props = {
  /** Section heading (H2). */
  title: string;
  /** Optional intro paragraph below the heading. */
  intro?: string;
  /** Background variant. */
  bg?: "white" | "secondary" | "accent";
  /** Optional bezirk slug to exclude (e.g. on a bezirk page itself). */
  excludeSlug?: string;
  /**
   * Anchor-text builder per area. Receives the area object, returns the
   * label rendered in the card (e.g. "Schlüsseldienst Wien 1010").
   * Defaults to "Wien {plz} – {name}" / "Klosterneuburg".
   */
  anchorText?: (area: (typeof EINSATZGEBIETE)[number]) => string;
  /** Optional small footnote below the grid. */
  footnote?: string;
};

const BG: Record<NonNullable<Props["bg"]>, string> = {
  white: "bg-white",
  secondary: "bg-bg-secondary",
  accent: "bg-bg-accent",
};

export default function BezirkeLinkGrid({
  title,
  intro,
  bg = "secondary",
  excludeSlug,
  anchorText,
  footnote,
}: Props) {
  const items = EINSATZGEBIETE.filter((e) => e.slug !== excludeSlug);
  const defaultAnchor = (area: (typeof EINSATZGEBIETE)[number]) =>
    area.district === "Klosterneuburg"
      ? "Klosterneuburg"
      : `Wien ${area.plz} — ${area.name}`;
  const label = anchorText ?? defaultAnchor;

  return (
    <section className={`${BG[bg]} py-16 lg:py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            {title}
          </h2>
          {intro && (
            <p className="mx-auto mt-3 max-w-3xl text-text-secondary">
              {intro}
            </p>
          )}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {items.map((area) => (
            <li key={area.slug}>
              <Link
                href={getBezirkUrl(area)}
                className="group flex h-full items-center gap-2 rounded-lg border border-border bg-white px-3 py-2.5 text-sm transition-colors hover:border-primary hover:bg-primary/5"
              >
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="flex-1 truncate font-medium text-text-primary group-hover:text-primary">
                  {label(area)}
                </span>
                {area.hauptstandort && (
                  <Star className="h-3.5 w-3.5 shrink-0 fill-yellow-400 text-yellow-400" />
                )}
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-text-muted group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>

        {footnote && (
          <p className="mt-6 text-center text-xs text-text-muted">{footnote}</p>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/einsatzgebiete"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Alle Einsatzgebiete im Überblick
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
