import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { CookieBanner } from "@/components/ui/cookie-banner";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const principles = [
  {
    name: "Form & Function",
    description:
      "Form and function are one — we view them as an inseparable whole, shaped by site, climate, and the lives of those who will inhabit the space.",
  },
  {
    name: "Material Honesty",
    description:
      "Stone, timber, and clay in their honest, raw states. Materials are never disguised — their natural texture and grain are integral to the design.",
  },
  {
    name: "Site Integration",
    description:
      "A building should appear to grow naturally from the landscape. Orientation, topography, and light are read before a single line is drawn.",
  },
  {
    name: "Spatial Continuity",
    description:
      "Interiors flow continuously — the boundary between inside and outside is deliberately blurred so that light, air, and landscape move freely through every space.",
  },
  {
    name: "Simplicity & Repose",
    description:
      "Uncluttered, peaceful environments that support human comfort and spiritual well-being — the quiet confidence of a building that belongs.",
  },
  {
    name: "Ecological Care",
    description:
      "We design for longevity, not fashion. Passive strategies — thermal mass, natural ventilation, local sourcing — reduce a building's impact across its full life.",
  },
];

const stats = [
  { stat: "18+",       label: "Countries with completed projects" },
  { stat: "340+",      label: "Buildings completed since 1992" },
  { stat: "Net Zero",  label: "All new projects from 2024" },
];

const bullets = [
  "Every project begins with listening — to the land, the light, and the people.",
  "We use locally sourced stone, timber, and clay in their natural, unfinished states.",
  "Open floor plans blur the line between interior and the surrounding landscape.",
  "Passive design strategies dramatically reduce energy demands across a building's life.",
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "90vh", minHeight: 560 }}>
        <img
          alt="Organic architecture integrated with natural landscape"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Glass panel anchored to bottom */}
        <div className="relative z-10 flex h-full items-end pb-10 sm:pb-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/20 bg-black/30 p-8 backdrop-blur-xl sm:p-10">
              <div className="grid gap-8 lg:grid-cols-5 lg:items-end">

                {/* Headline — 3 of 5 */}
                <div className="space-y-4 lg:col-span-3">
                  <FadeIn delay={0}>
                    <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Organic Architecture &amp; Sustainable Design
                    </span>
                  </FadeIn>
                  <FadeIn delay={80}>
                    <h1 className="text-white">
                      Built from<br />the <em>land.</em>
                    </h1>
                  </FadeIn>
                </div>

                {/* Lead + CTAs — 2 of 5 */}
                <div className="space-y-5 lg:col-span-2 lg:pb-1">
                  <FadeIn delay={160}>
                    <p className="prose-width-sm text-white/80">
                      We design structures so thoroughly integrated with their surroundings that they
                      appear to grow naturally from the landscape — following the tradition of organic
                      architecture pioneered by Frank Lloyd Wright.
                    </p>
                  </FadeIn>
                  <FadeIn delay={240}>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-black transition-opacity hover:opacity-90"
                      >
                        Our projects <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/company/about-us"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-white backdrop-blur-md transition-colors hover:bg-white/20"
                      >
                        Our philosophy
                      </Link>
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles grid ──────────────────────────────────────────── */}
      <section className="border-b border-border py-20 canvas-grid">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <FadeIn className="mb-16 max-w-4xl space-y-3">
            <span className="eyebrow">Our approach</span>
            <p>
              <span className="feature-heading">Design that belongs. </span>
              <span className="feature-body">
                Six founding principles guide every building we make — from the first site visit to the final stone.
              </span>
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => (
              <FadeIn key={item.name} delay={i * 60}>
                <Card className="h-full rounded-2xl py-0 transition hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="p-8">
                    <div className="mb-4 h-1 w-8 rounded-full bg-primary" />
                    <h3 className="mb-2">{item.name}</h3>
                    <p className="feature-text text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((item, i) => (
              <FadeIn key={item.stat} delay={i * 80} className="px-8 py-6 first:pl-0 last:pr-0 sm:py-0">
                <dt className="stat-number">{item.stat}</dt>
                <dd className="mt-1 feature-text text-muted-foreground">{item.label}</dd>
              </FadeIn>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Philosophy feature ───────────────────────────────────────── */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <div className="space-y-8">
              <FadeIn className="space-y-3">
                <span className="eyebrow">The tradition</span>
                <h2>
                  Architecture as nature <em>intended.</em>
                </h2>
              </FadeIn>

              <FadeIn delay={80}>
                <p className="text-muted-foreground prose-width">
                  At Harrington Ecobuild, every project begins with listening — to the land, the
                  light, and the people who will inhabit the space. We believe a building must grow
                  from its site rather than be imposed upon it.
                </p>
              </FadeIn>

              <ul className="space-y-3">
                {bullets.map((item, i) => (
                  <FadeIn key={item} delay={160 + i * 40}>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="feature-text">{item}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>

              <FadeIn delay={320}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-80"
                >
                  See our projects <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </FadeIn>
            </div>

            {/* Image */}
            <FadeIn delay={80} direction="left" className="relative h-[500px] overflow-hidden rounded-2xl">
              <img
                alt="Natural stone and timber architecture integrated with landscape"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
              />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Inspiration pull-quote ───────────────────────────────────── */}
      <section className="border-b border-border py-20 canvas-grid">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="space-y-6">
            <span className="eyebrow">In the words of Frank Lloyd Wright</span>
            <blockquote>
              <h2 className="text-muted-foreground">
                "Form and function are one, joined in a spiritual union."
              </h2>
            </blockquote>
            <p className="feature-text text-muted-foreground">
              The principle that defines every Harrington Ecobuild project — beauty and purpose are never in conflict.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <span className="eyebrow">Begin a project</span>
          </FadeIn>
          <FadeIn delay={80}>
            <h2 className="mt-4">
              Design that belongs to its <em>place.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mx-auto mt-4 feature-text text-muted-foreground prose-width-sm">
              Tell us about your site. Our architects will listen to the land before a single line
              is drawn.
            </p>
          </FadeIn>
          <FadeIn delay={240}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-80"
              >
                Start a conversation <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 rounded-full px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
              >
                Our services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CookieBanner />
    </main>
  );
}
