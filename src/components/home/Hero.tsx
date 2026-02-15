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
                        Powering the <br />
                        Future of Energy
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light">
                        As an industry leader in Hywind and Natural Gas, we collaborate and engineer solutions to maximize asset value and drive global sustainability.
                    </p>
                    <div className="pt-8">
                        <Button variant="white" className="gap-2">
                            EXPLORE SOLUTIONS <ArrowRight className="w-4 h-4" />
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
                                <h3 className="font-bold text-lg">Collaboration</h3>
                                <p className="text-sm text-gray-300">Partnering for excellence</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="w-6 h-6 text-white shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Sustainability</h3>
                                <p className="text-sm text-gray-300">Net-zero transition leader</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Zap className="w-6 h-6 text-white shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Innovation</h3>
                                <p className="text-sm text-gray-300">Engineering tomorrow</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Globe className="w-6 h-6 text-white shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Reliability</h3>
                                <p className="text-sm text-gray-300">Performance you can trust</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
