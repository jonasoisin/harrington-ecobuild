"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { LayoutGrid, Map as MapIcon, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Category = "All Projects" | "Renewables" | "Natural Gas" | "Carbon Capture" | "Oil Refining";

const projects = [
    {
        category: "Oil Refining",
        location: "Global Operations",
        title: "Modern Oil Refining",
        stats: [
            { label: "CAPACITY", value: "450 kbpd" },
            { label: "EFFICIENCY", value: "98.5%" }
        ],
        image: "https://www.mbenergy.com/fileadmin/_processed_/0/5/csm_image_raffinerie_AdobeStock_202041790_Standardlizenz_2022-03-31_1920_3ce4ef600e.jpg",
    },
];

export function ProjectList() {
    const [activeCategory, setActiveCategory] = useState<Category>("All Projects");

    const filteredProjects = activeCategory === "All Projects"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-white border-b border-deep-red sticky top-20 z-40">
                <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {(["All Projects", "Oil Refining"] as Category[]).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors rounded-sm ${activeCategory === cat
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
                            Region: Global <ChevronDown className="w-4 h-4" />
                        </div>

                    </div>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="bg-white shadow-sm hover:shadow-xl transition-shadow group">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`text-xs font-bold text-white px-3 py-1 uppercase tracking-wider ${project.category === 'Renewables' ? 'bg-green-600' :
                                        project.category === 'Natural Gas' ? 'bg-blue-900' :
                                            project.category === 'Oil Refining' ? 'bg-orange-700' :
                                                'bg-teal-600'
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-gray-400 mb-2 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {project.location}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3 leading-snug min-h-[56px]">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                                    Advanced refining capabilities delivering high-quality petroleum products globally.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6 border-t border-deep-red pt-6">
                                    {project.stats.map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
                                            <div className="text-lg font-bold text-secondary">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <button className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                                    EXPLORE PROJECT <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </Section>
        </div>
    );
}
