import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/Button";
import { WorldMap } from "@/components/ui/world-map";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "18+",  label: "Countries with projects" },
  { value: "340+", label: "Buildings completed" },
];

export function GlobalReach() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">

          <div className="lg:w-1/2">
            <FadeIn className="space-y-3 mb-8">
              <span className="eyebrow">Our global reach</span>
              <h2>
                A practice without <em>borders.</em>
              </h2>
              <p className="feature-text text-muted-foreground prose-width">
                Harrington Ecobuild has delivered organic architecture projects across 18 countries,
                each one shaped by its unique landscape, climate, and culture. We are inspired by the
                great tradition of site-integrated design — from Fallingwater to the Lotus Temple.
              </p>
            </FadeIn>

            <dl className="mb-10 grid grid-cols-2 divide-x divide-border">
              {stats.map((item, i) => (
                <FadeIn key={item.value} delay={i * 80} className="px-6 first:pl-0">
                  <dt className="stat-number">{item.value}</dt>
                  <dd className="mt-1 feature-text text-muted-foreground">{item.label}</dd>
                </FadeIn>
              ))}
            </dl>

            <FadeIn delay={160}>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
              >
                Download portfolio PDF <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </FadeIn>
          </div>

          <div className="lg:w-1/2">
            <WorldMap
              dots={[
                { start: { lat: 55.9533, lng: -3.1883 }, end: { lat: 34.0522,  lng: -118.2437 } },
                { start: { lat: 55.9533, lng: -3.1883 }, end: { lat: -15.7975, lng: -47.8919 } },
                { start: { lat: 55.9533, lng: -3.1883 }, end: { lat: 38.7223,  lng: -9.1393  } },
                { start: { lat: 51.5074, lng: -0.1278  }, end: { lat: 28.6139,  lng: 77.209   } },
                { start: { lat: 28.6139, lng: 77.209   }, end: { lat: 43.1332,  lng: 131.9113 } },
                { start: { lat: 28.6139, lng: 77.209   }, end: { lat: -1.2921,  lng: 36.8219  } },
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
