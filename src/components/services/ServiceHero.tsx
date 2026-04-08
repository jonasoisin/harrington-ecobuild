import { FadeIn } from "@/components/ui/fade-in";

export function ServiceHero() {
  return (
    <section className="border-b border-border py-20 canvas-grid sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-end">

          <div className="space-y-5 lg:col-span-3">
            <FadeIn>
              <span className="eyebrow">What we offer</span>
            </FadeIn>
            <FadeIn delay={80}>
              <h1>
                Design that grows <em>naturally.</em>
              </h1>
            </FadeIn>
          </div>

          <div className="space-y-4 lg:col-span-2 lg:pb-2">
            <FadeIn delay={160}>
              <p className="prose-width-sm text-muted-foreground">
                Harrington Ecobuild delivers integrated organic architecture services — from
                residential and civic buildings to landscape design — all rooted in a symbiotic
                relationship with the natural world.
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
