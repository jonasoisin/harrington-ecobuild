"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";

type Category = "All Projects" | "Residential" | "Civic & Cultural" | "Landscape" | "Commercial";

const categories: Category[] = [
  "All Projects",
  "Residential",
  "Civic & Cultural",
  "Landscape",
  "Commercial",
];

const projects = [
  {
    category: "Residential" as Category,
    location: "Scottish Highlands, UK",
    title: "The Glenmore Residence",
    description:
      "A family home quarried from local Highland sandstone, embedded into the hillside so that the land continues unbroken above the roofline. RIBA Sustainability Award 2024.",
    stats: [
      { label: "Floor Area", value: "420 m²" },
      { label: "Completion", value: "2023" },
    ],
    image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.08%20(2).jpeg",
  },
  {
    category: "Civic & Cultural" as Category,
    location: "Waikato, New Zealand",
    title: "Thornwood Community Centre",
    description:
      "A gathering place for the Waikato community — timber-framed and open to the landscape, shortlisted for the World Architecture Festival 2024.",
    stats: [
      { label: "Floor Area", value: "1,200 m²" },
      { label: "Completion", value: "2022" },
    ],
    image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.08%20(3).jpeg",
  },
  {
    category: "Residential" as Category,
    location: "Catalonia, Spain",
    title: "Casa Piedra",
    description:
      "A home of rammed earth and Catalan stone, sited on a south-facing slope to capture winter sun through deep-set timber loggias.",
    stats: [
      { label: "Floor Area", value: "680 m²" },
      { label: "Completion", value: "2024" },
    ],
    image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.08.jpeg",
  },
  {
    category: "Landscape" as Category,
    location: "Kyoto Prefecture, Japan",
    title: "Arashiyama Pavilion",
    description:
      "A contemplative pavilion at the forest edge — hinoki cypress posts, a living moss roof, and a single framed view of the bamboo grove beyond.",
    stats: [
      { label: "Floor Area", value: "85 m²" },
      { label: "Completion", value: "2023" },
    ],
    image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.09%20(1).jpeg",
  },
  {
    category: "Civic & Cultural" as Category,
    location: "Vermont, USA",
    title: "Green Mountain Arts Centre",
    description:
      "A gallery and studio space built into a granite outcrop, using the rock face as both foundation and interior wall.",
    stats: [
      { label: "Floor Area", value: "2,400 m²" },
      { label: "Completion", value: "2022" },
    ],
    image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.09.jpeg",
  },
  {
    category: "Commercial" as Category,
    location: "Copenhagen, Denmark",
    title: "Bryggen Workspace",
    description:
      "A low-rise workspace campus in reclaimed brick and Danish oak, designed around a central courtyard garden that feeds natural light and ventilation to every desk.",
    stats: [
      { label: "Floor Area", value: "3,800 m²" },
      { label: "Completion", value: "2024" },
    ],
    image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.07%20(1).jpeg",
  },
];

export function ProjectList() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-[72px] z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2 text-[11px] font-medium uppercase tracking-widest transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project grid */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 60}>
                <Card className="group h-full overflow-hidden rounded-2xl py-0 transition hover:-translate-y-0.5 hover:shadow-md">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 eyebrow rounded-full bg-background/90 px-3 py-1 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <CardContent className="p-6">
                    <span className="eyebrow mb-3 block">{project.location}</span>
                    <h3 className="mb-3">{project.title}</h3>
                    <p className="feature-text text-muted-foreground mb-6">{project.description}</p>

                    {/* Stats */}
                    <div className="mb-6 grid grid-cols-2 divide-x divide-border border-t border-border pt-5">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="px-4 first:pl-0">
                          <div className="eyebrow mb-1">{stat.label}</div>
                          <div className="text-lg font-[550]">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground">
                      Explore project <ArrowRight className="h-3 w-3" />
                    </button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <FadeIn>
              <p className="py-20 text-center feature-text text-muted-foreground">
                No projects in this category yet — check back soon.
              </p>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
