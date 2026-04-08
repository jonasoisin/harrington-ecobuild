import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export function Projects() {
    const projects = [
        {
            title: "The Glenmore Residence, Scottish Highlands",
            desc: "A private home built from local sandstone and larch timber, sited to disappear into the hillside. Cantilevered terraces echo the rock outcroppings beneath.",
            image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.07%20(1).jpeg",
            link: "#",
        },
        {
            title: "Thornwood Community Centre, New Zealand",
            desc: "A civic gathering space nestled into a native forest. Rammed earth walls and a living roof integrate the building seamlessly with its woodland setting.",
            image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.07.jpeg",
            link: "#",
        },
        {
            title: "Casa Piedra, Catalonia",
            desc: "A family home using ancient Catalan dry-stone walling traditions combined with contemporary spatial planning — open, light-filled, and indivisible from its terraced landscape.",
            image: "/img66/WhatsApp%20Image%202026-04-08%20at%2007.10.08%20(1).jpeg",
            link: "#",
        },
    ];

    return (
        <Section>
            <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-1 bg-primary" />
                <h2 className="text-3xl font-bold text-secondary">Recent Projects</h2>
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
