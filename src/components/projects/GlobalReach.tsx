import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { WorldMap } from "../ui/world-map";

export function GlobalReach() {
    return (
        <Section className="bg-white">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-2xl mb-2">OUR GLOBAL <span className="text-primary">REACH</span></h4>

                    <p className="text-gray-600 mt-6 mb-12 text-lg leading-relaxed">
                        PillarVolt operates across 24 countries, managing over $140 billion in energy assets. Our project development pipeline focus is centered on regions with high potential for renewable transition and existing infrastructure optimization.
                    </p>

                    <div className="grid grid-cols-2 gap-12 mb-12">
                        <div>
                            <div className="text-4xl font-bold text-primary mb-1">24+</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Countries Operating</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-1">15.2GW</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Renewable Capacity</div>
                        </div>
                    </div>

                    <Button variant="primary">DOWNLOAD PORTFOLIO PDF</Button>
                </div>

                <div className="lg:w-1/2">
                    <WorldMap
                        dots={[
                            {
                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                            },
                            {
                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            },
                            {
                                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                            },
                            {
                                start: { lat: 51.5074, lng: -0.1278 }, // London
                                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            },
                            {
                                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                            },
                            {
                                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                            },
                        ]}
                    />
                </div>
            </div>
        </Section>
    );
}
