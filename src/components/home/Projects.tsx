import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export function Projects() {
    const projects = [
        {
            title: "Autonomous Rig Operations: Brazil Presalt",
            desc: "Deploying AI-driven drilling systems to maximize ROP and safety in challenging deepwater formations.",
            image: "https://images.unsplash.com/photo-1591886196621-0e122756d1eb?q=80&w=2070&auto=format&fit=crop", // Construction vehicle
            link: "#",
        },
        {
            title: "North Sea Life Extension Phase III",
            desc: "A tailored subsea intervention solution that extended the life of mature gas wells by over 15 years.",
            image: "https://images.unsplash.com/photo-1621252179027-94459d2713dc?q=80&w=2070&auto=format&fit=crop", // Oil rig
            link: "#",
        },
        {
            title: "Hywind Tampen: Floating Wind Excellence",
            desc: "Powering oil and gas platforms with clean, floating wind energy to drastically reduce carbon footprint.",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop", // Wind
            link: "#",
        },
    ];

    return (
        <Section>
            <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-1 bg-primary" />
                <h2 className="text-3xl font-bold text-secondary">Recent Global Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white group cursor-pointer hover:shadow-xl transition-shadow border border-deep-red pb-6">
                        <div className="relative h-64 overflow-hidden mb-6">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="px-6">
                            <h3 className="text-xl font-bold text-secondary mb-4 leading-snug">{project.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.desc}</p>
                            <a href={project.link} className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                                EXPLORE <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button variant="secondary" className="px-12 bg-gray-100 text-secondary hover:bg-gray-200">SEE MORE PROJECTS</Button>
            </div>
        </Section>
    );
}
