import { FadeIn } from "@/components/ui/fade-in";

export function AboutHero() {
  return (
    <section className="border-b border-border py-20 canvas-grid sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-end">

          {/* Headline — 3/5 */}
          <div className="space-y-5 lg:col-span-3">
            <FadeIn>
              <span className="eyebrow">About us</span>
            </FadeIn>
            <FadeIn delay={80}>
              <h1>
                Built from the <em>land.</em>
              </h1>
            </FadeIn>
          </div>

          {/* Lead — 2/5 */}
          <div className="space-y-4 lg:col-span-2 lg:pb-2">
            <FadeIn delay={160}>
              <p className="prose-width-sm text-muted-foreground">
                Harrington Ecobuild is a leading organic architecture practice designing buildings
                that grow naturally from their surroundings. We engineer harmony between human
                habitation and the natural world — through material honesty, site integration, and
                timeless design.
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
