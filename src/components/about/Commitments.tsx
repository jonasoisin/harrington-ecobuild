import { FadeIn } from "@/components/ui/fade-in";

const commitments = [
  {
    title: "Material Honesty",
    body: "We use natural, often locally sourced materials — stone, timber, clay — in their honest, unfinished states. We never disguise what a material is. Its natural texture, grain, and colour are the design. This commitment ensures every Harrington Ecobuild structure is authentic, durable, and deeply connected to its place.",
  },
  {
    title: "Site Integration",
    body: "We design buildings that appear to grow from the landscape — not imposed upon it. Every project responds to the specific topography, climate, and natural light of its location. We work with the existing land rather than erasing it, so that building and site become a single unified composition.",
  },
  {
    title: "Spatial Continuity",
    body: "Our interiors feature open floor plans and a seamless flow between rooms and between inside and outside. The boundary between human habitation and the natural world is deliberately blurred. Spaces breathe — light, air, and landscape move through them freely, creating environments of real repose.",
  },
  {
    title: "Ecological Responsibility",
    body: "Organic architecture is, by its nature, sustainable. We design for longevity, not fashion. We source responsibly, minimise waste, and specify passive design strategies — orientation, thermal mass, and natural ventilation — that dramatically reduce the energy demands of every building we create.",
  },
];

export function Commitments() {
  return (
    <section className="border-b border-border py-20 canvas-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <FadeIn className="mb-16 max-w-4xl space-y-3">
          <span className="eyebrow">Our commitments</span>
          <h2>
            The principles behind every <em>project.</em>
          </h2>
        </FadeIn>

        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
          {commitments.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-1 w-6 rounded-full bg-primary" />
                  <h3>{item.title}</h3>
                </div>
                <p className="feature-text text-muted-foreground">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
