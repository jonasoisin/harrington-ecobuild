import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    name: "Site Integration",
    description:
      "Every building we design is shaped by its specific landscape, climate, and topography — growing from the land rather than being imposed upon it.",
  },
  {
    name: "Material Honesty",
    description:
      "We use natural, locally sourced stone, timber, and clay in their honest, unfinished states — never disguising what a material is.",
  },
  {
    name: "Form & Function",
    description:
      "Following Frank Lloyd Wright's principle, we treat form and function as one inseparable whole — beauty and purpose are never in conflict.",
  },
  {
    name: "Ecological Care",
    description:
      "We design for longevity, not fashion. Every decision — from orientation to material — minimises ecological impact across a building's full life.",
  },
];

export function Values() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <FadeIn className="mb-16 max-w-4xl space-y-3">
          <span className="eyebrow">What we stand for</span>
          <p>
            <span className="feature-heading">Four values. </span>
            <span className="feature-body">Every decision we make flows from these principles.</span>
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((item, i) => (
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
  );
}
