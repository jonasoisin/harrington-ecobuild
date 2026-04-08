import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const services = [
  {
    eyebrow: "Service 01",
    title: "Organic Architectural Design",
    body: "We design buildings that grow naturally from their sites — responding to topography, climate, and natural light. Every project begins with deep listening: to the land, the brief, and the people who will inhabit the space.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Organic architecture growing from the landscape",
    bullets: [
      "Site analysis before a single line is drawn",
      "Passive design — thermal mass, natural ventilation, solar orientation",
      "Open spatial continuity between interior and exterior",
      "Full service from planning consent to construction",
    ],
  },
  {
    eyebrow: "Service 02",
    title: "Materials & Craft Specification",
    body: "Natural, locally sourced materials are at the heart of our practice. We work with stone, timber, clay, and rammed earth — specifying each for its longevity, ecological footprint, and honest beauty, never disguising what something is.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Natural stone and timber construction detail",
    bullets: [
      "Stone, timber, and clay sourced within the project's region wherever possible",
      "Hand-crafted joinery and masonry that expresses each material's true character",
      "Material schedules specified for durability across generations",
      "Supplier audits ensuring ecological and ethical sourcing",
    ],
  },
  {
    eyebrow: "Service 03",
    title: "Landscape Integration",
    body: "Building and landscape are designed together as a single composition. We work with ecologists, soil scientists, and landscape architects to ensure the land around every structure is not just preserved — but enhanced.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop",
    imageAlt: "Building integrated seamlessly into its natural landscape",
    bullets: [
      "Minimal site disturbance — we work with existing topography",
      "Native planting strategies matched to local ecology",
      "Water management integrated into landscape form",
      "Built form and landscape reviewed as a single unified drawing",
    ],
  },
  {
    eyebrow: "Service 04",
    title: "Ecological Review",
    body: "We don't consider a project complete at handover. Every building we design receives a post-occupancy review at 12 and 24 months — assessing ecological performance, occupant well-being, and material weathering — to ensure the building continues to give back to its landscape.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop",
    imageAlt: "Architect reviewing building performance in the landscape",
    bullets: [
      "12 and 24-month post-occupancy performance assessments",
      "Passive energy performance monitoring against design targets",
      "Material weathering and maintenance guidance",
      "Ecological habitat surveys to measure biodiversity net gain",
    ],
  },
];

const capabilities = [
  {
    name: "Full Architectural Service",
    description:
      "Concept design through planning consent, technical drawings, construction monitoring, and handover — a complete service led by the same senior architect throughout.",
  },
  {
    name: "Site Analysis & Appraisal",
    description:
      "A thorough reading of topography, ecology, aspect, and natural light before a single line is drawn. We charge for this separately because it is the most important thing we do.",
  },
  {
    name: "Passive Design Strategy",
    description:
      "Orientation, shading, thermal mass, and natural ventilation optimised for each specific climate so that buildings perform without mechanical systems wherever possible.",
  },
  {
    name: "Material Specification",
    description:
      "Detailed material schedules using local stone, timber, clay, and rammed earth in their honest, natural states. Every material selected for beauty, longevity, and ecological footprint.",
  },
  {
    name: "Landscape & Ecology",
    description:
      "Site planning and landscape design that treats built form and natural environment as a single composition — working with ecologists to achieve biodiversity net gain on every project.",
  },
  {
    name: "Post-Occupancy Review",
    description:
      "Structured performance assessments at 12 and 24 months after handover. We measure energy, well-being, material performance, and ecological impact against the original design intent.",
  },
];

const process = [
  {
    step: "01",
    name: "Site visit & listening",
    description:
      "Before any design work begins, we visit the site at different times of day and in different weather. We listen to the land — its light, wind, water, and ecology — and to the people who will inhabit the building.",
  },
  {
    step: "02",
    name: "Concept design",
    description:
      "A sketch design that shows how the building grows from its site. We present it in section and plan — never in 3D renders — so that you understand the spatial experience before committing to anything.",
  },
  {
    step: "03",
    name: "Material & landscape specification",
    description:
      "We visit quarries, sawmills, and suppliers with you. Every material is chosen in its natural context, understood for how it will age, and sourced as locally as the project allows.",
  },
  {
    step: "04",
    name: "Construction & craftwork",
    description:
      "We work with a network of craftspeople who share our values. The senior architect visits site weekly. Every decision made during construction is made with the original design intent in mind.",
  },
  {
    step: "05",
    name: "Post-occupancy review",
    description:
      "At 12 and 24 months we return to measure how the building performs — energetically, ecologically, and in terms of the lives of the people who inhabit it. This is where the design is completed.",
  },
];

const news = [
  {
    date: "March 15, 2025",
    headline:
      "New partnership with the Frank Lloyd Wright Foundation to promote organic design education globally.",
  },
  {
    date: "March 10, 2025",
    headline: "Casa Piedra, Catalonia, receives LEED Platinum certification.",
  },
  {
    date: "March 2, 2025",
    headline:
      "Thornwood Community Centre shortlisted for the World Architecture Festival award.",
  },
  {
    date: "January 15, 2025",
    headline:
      "Harrington Ecobuild receives LEED Platinum certification across all 2024 residential completions.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── Page header ──────────────────────────────────────────────── */}
      <section className="border-b border-border py-20 canvas-grid sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-end">
            <div className="space-y-5 lg:col-span-3">
              <FadeIn><span className="eyebrow">What we offer</span></FadeIn>
              <FadeIn delay={80}>
                <h1>
                  Design that grows <em>naturally.</em>
                </h1>
              </FadeIn>
            </div>
            <div className="space-y-4 lg:col-span-2 lg:pb-2">
              <FadeIn delay={160}>
                <p className="prose-width-sm text-muted-foreground">
                  Every Harrington Ecobuild project begins with a conversation about the land. We
                  offer a complete range of organic architecture services built on a single
                  conviction: that buildings should grow from their sites, not be imposed upon them.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — alternating rows ──────────────────────────────── */}
      {services.map((service, i) => (
        <section
          key={service.eyebrow}
          className={`border-b border-border py-20 ${i % 2 === 1 ? "canvas-grid" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <FadeIn delay={0} direction={i % 2 === 1 ? "right" : "left"}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </FadeIn>

              {/* Text */}
              <div className="space-y-6">
                <FadeIn delay={80} className="space-y-3">
                  <span className="eyebrow">{service.eyebrow}</span>
                  <h2>
                    {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <em>{service.title.split(" ").slice(-1)[0]}</em>
                  </h2>
                </FadeIn>

                <FadeIn delay={120}>
                  <p className="feature-text text-muted-foreground prose-width">
                    {service.body}
                  </p>
                </FadeIn>

                <ul className="space-y-3">
                  {service.bullets.map((bullet, j) => (
                    <FadeIn key={bullet} delay={160 + j * 40}>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="feature-text">{bullet}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Capabilities grid ────────────────────────────────────────── */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16 max-w-4xl space-y-3">
            <span className="eyebrow">Design capabilities</span>
            <p>
              <span className="feature-heading">A complete practice. </span>
              <span className="feature-body">
                Six disciplines working together across every project.
              </span>
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, i) => (
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

      {/* ── How we work ──────────────────────────────────────────────── */}
      <section className="border-b border-border py-20 canvas-grid">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16 max-w-4xl space-y-3">
            <span className="eyebrow">How we work</span>
            <h2>
              Five stages. One continuous <em>conversation.</em>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {process.map((item, i) => (
              <FadeIn key={item.step} delay={i * 60}>
                <div className="grid gap-4 border-t border-border py-8 sm:grid-cols-[80px_1fr_2fr] sm:gap-12 lg:gap-20">
                  <span className="stat-number text-muted-foreground/30">{item.step}</span>
                  <h3 className="self-start">{item.name}</h3>
                  <p className="feature-text text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognition & press ──────────────────────────────────────── */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* Featured */}
            <FadeIn className="space-y-3">
              <span className="eyebrow">Featured recognition</span>
              <h2>
                RIBA Sustainability Award for the Glenmore <em>Residence.</em>
              </h2>
              <p className="feature-text text-muted-foreground prose-width">
                The Glenmore Residence recognised for its exceptional integration with the Scottish
                Highland landscape and its use of locally quarried sandstone in place of imported
                materials — reducing embodied carbon by over 60%.
              </p>
              <div className="pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-2.5 text-[11px] font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
                >
                  View the project <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </FadeIn>

            {/* News feed */}
            <FadeIn delay={80}>
              <span className="eyebrow mb-6 block">Latest news</span>
              <ul className="space-y-0">
                {news.map((item) => (
                  <li
                    key={item.date}
                    className="flex flex-col gap-1 border-t border-border py-5 last:border-b"
                  >
                    <span className="eyebrow">{item.date}</span>
                    <p className="feature-text cursor-pointer hover:text-muted-foreground transition-colors">
                      {item.headline}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>

          </div>
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
              Ready to build something that <em>belongs?</em>
            </h2>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mx-auto mt-4 feature-text text-muted-foreground prose-width-sm">
              Partner with our team to design a building that grows naturally from its landscape —
              honest in its materials, open in its spaces, and built to endure.
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
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-full px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
              >
                See our work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
