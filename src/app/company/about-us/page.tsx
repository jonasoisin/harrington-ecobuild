import { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Harrington Ecobuild",
  description:
    "Learn about Harrington Ecobuild, our organic architecture philosophy, and our commitment to designing buildings that grow naturally from the landscape.",
};

const principles = [
  {
    name: "Unity of Form and Function",
    body: "Following Frank Lloyd Wright's amendment of Sullivan's famous maxim, we view form and function as one inseparable whole — beauty and purpose are never in conflict.",
  },
  {
    name: "Site Integration",
    body: "Buildings are designed to respond to the specific climate, topography, and natural light of their location. We work with the existing land rather than erasing it.",
  },
  {
    name: "Material Honesty",
    body: "Natural, often local, materials — stone, timber, and clay — are used in their raw states rather than disguised. Their natural texture and grain are the design.",
  },
  {
    name: "Spatial Continuity",
    body: "Open floor plans with seamless flow between rooms and between interior and exterior. The boundary between the built and the natural world is deliberately blurred.",
  },
  {
    name: "Simplicity and Repose",
    body: "Uncluttered, peaceful environments that cater to human comfort and spiritual well-being — the quiet confidence of a building that belongs.",
  },
];

const commitments = [
  "Safe, inclusive, and respectful working environments for every colleague and craftsperson.",
  "Close collaboration with local residents, planners, and ecologists at every stage.",
  "Locally sourced materials and responsible procurement across every project.",
  "All new projects designed to net-zero carbon standards from 2024 onwards.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Page header */}
      <section className="border-b border-border py-20 canvas-grid sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-end">
            <div className="space-y-5 lg:col-span-3">
              <FadeIn><span className="eyebrow">About us</span></FadeIn>
              <FadeIn delay={80}>
                <h1>
                  Pioneering the future of <em>organic design.</em>
                </h1>
              </FadeIn>
            </div>
            <div className="space-y-4 lg:col-span-2 lg:pb-2">
              <FadeIn delay={160}>
                <p className="prose-width-sm text-muted-foreground">
                  Designing buildings that grow naturally from the landscape — rooted in organic
                  architecture, guided by material honesty, and built for generations.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 space-y-3">
            <span className="eyebrow">Who we are</span>
            <h2>
              A practice of 200, present in <em>18 countries.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="space-y-4 text-muted-foreground feature-text prose-width">
              <p>
                We are Harrington Ecobuild, an organic architecture practice with a proud tradition.
                Our team of 200 architects, designers, and craftspeople delivers projects in more
                than 18 countries — from private residences and civic buildings to community spaces
                and landscape commissions.
              </p>
              <p>
                Founded in 1992, we have built a reputation for buildings that are deeply integrated
                with their landscapes — using natural, locally sourced materials and passive design
                strategies that stand the test of time. Our principal studio is in Edinburgh,
                Scotland, with project offices across Europe, North America, and Asia.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CEO */}
      <section className="border-b border-border py-20 canvas-grid">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 space-y-3">
            <span className="eyebrow">Leadership</span>
            <h2>
              A word from our <em>founder.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <figure className="space-y-8">
              <blockquote className="border-l-2 border-primary pl-6">
                <p className="text-xl font-[450] leading-relaxed text-foreground">
                  "Every building we create begins with a question: what does this land ask of us?
                  Good architecture is not imposed — it is drawn out of the ground itself.
                  We listen before we draw, and we draw only what belongs."
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-4 pl-6">
                <div>
                  <p className="font-[550] text-foreground">Hugo Harrington</p>
                  <p className="eyebrow mt-0.5">CEO &amp; Organic Architect</p>
                </div>
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Core principles */}
      <section className="border-b border-border py-20 canvas-grid">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 space-y-3">
            <span className="eyebrow">Organic architecture</span>
            <h2>
              Five principles. Every <em>project.</em>
            </h2>
          </FadeIn>
          <ul className="space-y-8">
            {principles.map((item, i) => (
              <FadeIn key={item.name} delay={i * 60}>
                <li className="grid gap-2 sm:grid-cols-3">
                  <h3 className="sm:col-span-1">{item.name}</h3>
                  <p className="feature-text text-muted-foreground sm:col-span-2">{item.body}</p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Commitments */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 space-y-3">
            <span className="eyebrow">Our commitments</span>
            <h2>
              A building is a gift to the land it <em>stands on.</em>
            </h2>
          </FadeIn>
          <ul className="space-y-3">
            {commitments.map((item, i) => (
              <FadeIn key={item} delay={80 + i * 40}>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="feature-text">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={240} className="mt-8">
            <p className="feature-text text-muted-foreground prose-width italic">
              In all our work we are guided by the belief that a building should be a gift to the
              land it stands on — not a burden. We design with humility, with craft, and with a deep
              respect for the natural world that sustains us all.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn><span className="eyebrow">Begin a project</span></FadeIn>
          <FadeIn delay={80}>
            <h2 className="mt-4">
              Tell us about your <em>site.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mx-auto mt-4 feature-text text-muted-foreground prose-width-sm">
              Our architects will listen to the land before a single line is drawn.
            </p>
          </FadeIn>
          <FadeIn delay={240}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-80"
              >
                Start a conversation
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-full px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
              >
                See our projects
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
