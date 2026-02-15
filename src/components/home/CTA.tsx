import { Button } from "../ui/Button";
import { PlayCircle } from "lucide-react";

export function CTA() {
    return (
        <div className="relative py-32 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1579766929949-014f3b255ae9?q=80&w=2670&auto=format&fit=crop')" // Dark architecture/office
                }}
            />
            <div className="absolute inset-0 bg-secondary/90" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-12">
                <div className="max-w-2xl text-center md:text-left">
                    <div className="w-12 h-1 bg-primary mb-8 mx-auto md:mx-0" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join the Energy Revolution
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                        Build a career that matters. At PillarVolt, we are looking for the next generation of engineers, thinkers, and doers to reshape the global energy landscape.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <Button variant="primary">FIND YOUR ROLE</Button>
                        <Button variant="outline" className="border-deep-red text-white hover:bg-white hover:text-secondary flex items-center gap-2">
                            <PlayCircle className="w-5 h-5" /> OUR STORY
                        </Button>
                    </div>
                </div>

                {/* Optional Right Side Image/Graphic if needed (e.g. video thumbnail) */}
                {/* <div className="hidden lg:block w-1/3 h-64 bg-white/5 rounded-lg border border-deep-red/10" /> */}
            </div>
        </div>
    );
}
