import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  { value: "92%",      label: "Locally sourced materials" },
  { value: "Net Zero", label: "All new projects from 2024" },
];

const news = [
  {
    date:     "March 14, 2024",
    headline: "Harrington Ecobuild named finalist for the RIBA Sustainability Award for the Glenmore Residence.",
  },
  {
    date:     "February 28, 2024",
    headline: "New partnership with the Frank Lloyd Wright Foundation to promote organic design education.",
  },
  {
    date:     "January 15, 2024",
    headline: "Harrington Ecobuild receives LEED Platinum certification across all 2023 residential completions.",
  },
];

export function SustainabilityReport() {
  return (
    <section className="border-b border-border py-20 canvas-grid">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left — report overview */}
          <div>
            <FadeIn className="space-y-3 mb-10">
              <span className="eyebrow">Sustainability report 2024</span>
              <h2>
                Architecture that gives <em>back.</em>
              </h2>
              <p className="feature-text text-muted-foreground prose-width">
                Our annual report outlines Harrington Ecobuild's commitment to material honesty,
                ecological responsibility, and carbon-conscious construction. Every project we
                deliver is designed for longevity — buildings that belong to their landscape and
                stand for generations.
              </p>
            </FadeIn>

            <dl className="grid grid-cols-2 gap-8">
              {stats.map((item, i) => (
                <FadeIn key={item.value} delay={i * 80}>
                  <dt className="stat-number">{item.value}</dt>
                  <dd className="mt-1 feature-text text-muted-foreground">{item.label}</dd>
                </FadeIn>
              ))}
            </dl>
          </div>

          {/* Right — news feed */}
          <FadeIn delay={80}>
            <div className="space-y-3 mb-8">
              <span className="eyebrow">Latest updates</span>
            </div>
            <ul className="space-y-6">
              {news.map((item) => (
                <li key={item.date} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <span className="eyebrow mb-2 block">{item.date}</span>
                  <p className="feature-text hover:text-muted-foreground transition-colors cursor-pointer">
                    {item.headline}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
