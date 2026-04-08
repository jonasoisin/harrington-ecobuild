import { Button } from "../ui/Button";
import { ArrowRight, ShieldCheck, Zap, Globe, Users } from "lucide-react";
import { Section } from "../ui/Section";

export function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] flex flex-col justify-center text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-stone-900/40 z-10" />

            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop')"
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-20 flex-grow flex flex-col justify-center">
                <div className="max-w-3xl space-y-6">
                    <div className="w-1 h-12 bg-primary mb-6" /> {/* Red line element */}
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Architecture <br />
                        from the Land
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light">
                        We design buildings that grow naturally from the landscape — integrating structure, site, and natural materials into spaces that are honest, serene, and built to endure.
                    </p>
                    <div className="pt-8">
                        <Button variant="white" className="gap-2">
                            EXPLORE OUR WORK <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar items */}
            <div className="relative z-20 bg-stone-900/60 backdrop-blur-sm border-t border-deep-red/10">
                <div className="container mx-auto px-4 md:px-6 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex items-start gap-4">
                            <Users className="w-6 h-6 text-white shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Site Integration</h3>
                                <p className="text-sm text-gray-300">Buildings rooted in their landscape</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="w-6 h-6 text-white shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Material Honesty</h3>
                                <p className="text-sm text-gray-300">Stone, timber, and clay in their natural state</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Zap className="w-6 h-6 text-white shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Spatial Continuity</h3>
                                <p className="text-sm text-gray-300">Indoor and outdoor as a seamless whole</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Globe className="w-6 h-6 text-white shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Built to Endure</h3>
                                <p className="text-sm text-gray-300">Designed for generations, not seasons</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
