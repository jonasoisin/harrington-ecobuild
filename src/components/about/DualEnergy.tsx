import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2 } from "lucide-react";

const organicPrinciples = [
  "Buildings so thoroughly integrated with their site they appear to grow from the landscape.",
  "Stone, timber, and clay used in their honest, unfinished states — the material is the design.",
  "Orientation, thermal mass, and natural ventilation shaped by sun, wind, and season.",
  "Open spatial continuity — the boundary between interior and exterior deliberately blurred.",
];

export function DualEnergy() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Text */}
          <div className="space-y-8">
            <FadeIn className="space-y-3">
              <span className="eyebrow">Design philosophy</span>
              <h2>
                Design rooted in <em>nature.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={80}>
              <p className="feature-text text-muted-foreground prose-width">
                We design buildings so thoroughly integrated with their surroundings that they appear
                to grow naturally from the landscape — following the tradition pioneered by Frank Lloyd
                Wright and carried forward through every project we undertake.
              </p>
            </FadeIn>

            <ul className="space-y-3">
              {organicPrinciples.map((item, i) => (
                <FadeIn key={item} delay={160 + i * 40}>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="feature-text">{item}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <FadeIn delay={80} direction="left">
              <img
                alt="Organic building integrated into hillside landscape"
                className="rounded-2xl h-80 w-full object-cover"
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
              />
            </FadeIn>
            <FadeIn delay={160} direction="left">
              <img
                alt="Natural stone and timber building details"
                className="rounded-2xl mt-12 h-80 w-full object-cover"
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
              />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
