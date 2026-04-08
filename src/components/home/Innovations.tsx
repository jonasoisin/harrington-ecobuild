import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Innovations() {
    const innovations = [
        {
            title: "Harrington Ecobuild & TechLink Launch OceanLab™",
            desc: "A first-of-its-kind initiative aimed to accelerate the development of advanced subsea completion technologies.",
            image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop", // Lab/Tech
            link: "#",
        },
        {
            title: "Sustainable Decommissioning Strategies",
            desc: "Well abandonment is the final chapter in an asset's lifecycle. It requires precision and planning to meet environmental standards.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop", // Forest/Nature
            link: "#",
        },
        {
            title: "The 2025 Energy Efficiency Report",
            desc: "From groundbreaking launches to digital twins, this year brought smarter, more efficient performance across our entire reservoir lifecycle.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data/Report
            link: "#",
        },
    ];

    return (
        <Section className="bg-gray-50">
            <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-1 bg-primary" />
                <h2 className="text-3xl font-bold text-secondary">Explore our latest innovations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {innovations.map((item, index) => (
                    <div key={index} className="bg-white group cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-secondary mb-4 leading-snug">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                            <a href={item.link} className="text-primary font-bold text-sm flex items-center gap-2 uppercase tracking-wide hover:gap-3 transition-all">
                                EXPLORE <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button variant="secondary" className="px-12">SEE MORE INNOVATIONS</Button>
            </div>
        </Section>
    );
}
