"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function GlobalLocations() {
    const locations = [
        {
            name: "North America",
            description: "Regional Headquarters overseeing onshore and offshore operations in the Gulf of Mexico.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAllfPO1RgtnqPrO5dozYQVNVLFrAqRUl60Jh3bVgZ2cNr0iXUGR8gX38GHnm0NxwZcmONBTN-67bIEXhRmkhvfPCT5nnJrQ9KQ1magKVlgnizwx2s7PFzOJgxEh4e4oKO32gxrSUdp39v2N8KcR815HJC7iFjqZ-Yr0MTqYC8iV0j7d9UWP0IMckK1MTDuvy5mQ9TyoA_lmkO-lypbyFj0qOfkqfiNW86fM_ZW3Xx76wJlBzpWpNZCbv0X2xhE87NUzPZKAYmqGA",
        },
    ];

    return (
        <section className="py-20 bg-surface-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Locations</span>
                    <h2 className="text-3xl font-display font-bold mt-2">Find us across the world</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                    {locations.map((loc, index) => (
                        <div key={index} className="bg-white shadow-sm border border-deep-red group">
                            <div className="h-48 bg-slate-200 relative overflow-hidden">
                                <Image
                                    src={loc.image}
                                    alt={`${loc.name} skyline`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary/10"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-display font-bold text-xl mb-2">{loc.name}</h3>
                                <p className="text-sm text-slate-500 mb-4 h-12">
                                    {loc.description}
                                </p>
                                <Link href="#" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                    Get Directions <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
