import { Section } from "../ui/Section";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Locations() {
    const locations = [
        {
            name: "Edinburgh, Scotland",
            desc: "Principal studio. Our founding home — where every project begins with a conversation about the land.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
        },
    ];

    return (
        <Section className="bg-gray-50">
            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-4">LOCATIONS</div>
            <h2 className="text-3xl font-bold text-secondary mb-12">Find us across the world</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {locations.map((loc, index) => (
                    <div key={index} className="bg-white border border-deep-red group cursor-pointer hover:shadow-xl transition-shadow">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={loc.image}
                                alt={loc.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-secondary mb-4">{loc.name}</h3>
                            <p className="text-sm text-gray-500 mb-8 leading-relaxed h-12">{loc.desc}</p>
                            <a href="#" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                                GET DIRECTIONS <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
