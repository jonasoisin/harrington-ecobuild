import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Leadership() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <FadeIn className="mb-16 max-w-4xl space-y-3">
          <span className="eyebrow">Executive leadership</span>
          <h2>
            Led by architects, <em>not managers.</em>
          </h2>
          <p className="feature-text text-muted-foreground prose-width">
            Led by architects and designers with over 150 years of combined experience in organic
            architecture, sustainable construction, and landscape integration.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <Card className="rounded-2xl py-0 max-w-lg">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="https://i.ibb.co/bGNPkKY/IMG-3651.jpg"
                    alt="Hugo Harrington"
                    fill
                    className="object-cover grayscale transition-all hover:grayscale-0"
                  />
                </div>
                <div>
                  <h4>Hugo Harrington</h4>
                  <span className="eyebrow mt-0.5">Chief Executive Officer · Organic Architect</span>
                </div>
              </div>
              <p className="feature-text text-muted-foreground">
                Our clients rely on us to bring clarity and vision to complex design challenges.
                Every project demands deep understanding of site, material, and the people who will
                live and work within it. At Harrington Ecobuild, design decisions are led by senior
                architects who are present from the first sketch to the final stone.
              </p>
            </CardContent>
          </Card>
        </FadeIn>

      </div>
    </section>
  );
}
