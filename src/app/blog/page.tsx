import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import CallButton from "@/components/CallButton";

export const metadata: Metadata = {
  title: "Blog — Tipps & Ratgeber rund um Schlüsseldienst in Wien",
  description:
    "Nützliche Tipps, Ratgeber und Infos rund um Schlüsseldienst, Türöffnung, Einbruchschutz und Sicherheit in Wien. Vom Experten-Team von Ausgesperrt Vienna.",
};

const posts = [
  {
    slug: "nach-einbruch-was-tun",
    title: "Nach einem Einbruch — Was tun in Wien?",
    excerpt:
      "Einbruch in der Wohnung? Erfahren Sie Schritt für Schritt, was Sie sofort tun müssen: Polizei, Spurensicherung, Versicherung und Schloss tauschen.",
    date: "2026-04-01",
    readTime: "6 min",
    image: "/nach-einbruch.jpg",
  },
  {
    slug: "schluessel-abgebrochen-was-tun",
    title: "Schlüssel abgebrochen in der Tür — Was tun in Wien?",
    excerpt:
      "Der Schlüssel ist im Schloss abgebrochen? Erfahren Sie Schritt für Schritt, was Sie sofort tun sollten, welche Fehler Sie vermeiden müssen und wann ein Profi ran muss.",
    date: "2026-04-01",
    readTime: "5 min",
    image: "/schluessel-abgebrochen.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Blog & Ratgeber
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Nützliche Tipps und Informationen rund um Schlüsseldienst,
              Sicherheit und Einbruchschutz in Wien.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("de-AT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime} Lesezeit
                    </span>
                  </div>
                  <h2 className="font-heading text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                    Weiterlesen <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Brauchen Sie sofort Hilfe?
          </h2>
          <p className="mt-3 text-text-secondary">
            Unser Team ist rund um die Uhr für Sie da — rufen Sie uns jetzt an.
          </p>
          <div className="mt-6">
            <CallButton size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
