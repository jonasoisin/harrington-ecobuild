import { Section } from "../ui/Section";
import { Hammer, Zap, Eye, RefreshCw } from "lucide-react";

export function Capabilities() {
    const capabilities = [
        {
            icon: Hammer,
            title: "Structural Design",
            desc: "Advanced FEA modeling for extreme marine environments.",
        },
        {
            icon: Zap,
            title: "Grid Integration",
            desc: "Smart grid synchronization and voltage stability solutions.",
        },
        {
            icon: Eye,
            title: "Remote Ops",
            desc: "24/7 autonomous monitoring and digital twins.",
        },
        {
            icon: RefreshCw,
            title: "Lifecycle Mgmt",
            desc: "Full decommissioning and sustainable asset recycling.",
        },
    ];

    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-16">
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Technical Prowess</h4>
                <h2 className="text-3xl font-bold text-secondary">Our Engineering Capabilities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilities.map((cap, index) => (
                    <div key={index} className="bg-white p-8 hover:shadow-lg transition-shadow border border-deep-red">
                        <div className="mb-6 text-gray-400">
                            <cap.icon className="w-10 h-10 stroke-1" />
                        </div>
                        <h3 className="text-lg font-bold text-secondary mb-3">{cap.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
