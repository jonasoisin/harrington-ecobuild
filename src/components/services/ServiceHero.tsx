import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function ServiceHero() {
    return (
        <div className="relative h-[60vh] min-h-[500px] flex flex-col justify-center text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-stone-900/50 z-10" />

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1565509969628-97a829285038?q=80&w=2072&auto=format&fit=crop')" // Industrial pipes/complex
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-3xl space-y-6">
                    <div className="w-1 h-12 bg-primary mb-6" />
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Powering the <br />
                        <span className="text-primary">Global Transition</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                        PillarVolt delivers integrated engineering solutions across Hywind offshore wind and advanced natural gas production.
                    </p>
                    <div className="pt-8 flex gap-4">
                        <Button variant="primary">EXPLORE SERVICES</Button>
                        <Button variant="outline" className="border-deep-red text-white hover:bg-white hover:text-secondary">OUR PORTFOLIO</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
