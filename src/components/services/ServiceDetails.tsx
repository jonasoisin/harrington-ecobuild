import { Section } from "../ui/Section";
import Image from "next/image";
import { CheckCircle2, Activity, Zap, Anchor, Wind } from "lucide-react";

export function ServiceDetails() {
    return (
        <Section>
            {/* Service 1: Architectural Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
                <div className="relative h-[400px] rounded-sm overflow-hidden shadow-xl">
                    <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-3 py-1 z-10 uppercase tracking-widest">Design</div>
                    <Image
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
                        alt="Organic architecture integrated with landscape"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <div className="w-1 h-8 bg-primary mb-4" />
                    <h2 className="text-3xl font-bold text-secondary mb-6">Organic Architectural Design</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We design buildings that grow naturally from their sites — responding to topography, climate, and natural light. Every project begins with deep listening: to the land, the brief, and the people who will inhabit the space.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <Anchor className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Site Analysis & Integration</h4>
                                <p className="text-gray-500 text-sm mt-1">Thorough reading of topography, ecology, and natural light before a line is drawn.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Wind className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Passive Design Strategy</h4>
                                <p className="text-gray-500 text-sm mt-1">Orientation, thermal mass, and natural ventilation optimised for each climate.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Activity className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Spatial Continuity Planning</h4>
                                <p className="text-gray-500 text-sm mt-1">Open floor plans that blur the boundary between interior and exterior.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service 2: Materials & Craft */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <div className="w-1 h-8 bg-primary mb-4" />
                    <h2 className="text-3xl font-bold text-secondary mb-6">Materials & Craft Specification</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Natural, locally sourced materials are at the heart of our practice. We work with stone, timber, clay, and rammed earth — specifying each material for its longevity, ecological footprint, and honest beauty, never disguising what something is.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Local Material Sourcing</h4>
                                <p className="text-gray-500 text-sm mt-1">Stone, timber, and clay sourced within the project's region wherever possible.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Zap className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Craft & Joinery Detail</h4>
                                <p className="text-gray-500 text-sm mt-1">Hand-crafted joinery and masonry details specified to express the material's true character.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Activity className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Whole-Life Performance</h4>
                                <p className="text-gray-500 text-sm mt-1">Materials selected for durability across generations, not just initial cost.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative h-[400px] rounded-sm overflow-hidden shadow-xl">
                    <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-3 py-1 z-10 uppercase tracking-widest">Craft</div>
                    <Image
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
                        alt="Natural stone and timber construction"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </Section>
    );
}
