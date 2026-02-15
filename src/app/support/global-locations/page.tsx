import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Global Locations | PillarVolt',
    description: 'Our global presence and operational hubs.',
};

export default function GlobalLocationsPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-deep-red pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Global Locations</h1>
                    <p className="text-xl text-slate-600">
                        Operating in key energy hubs worldwide.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        With headquarters in Houston and major operations in the North Sea, Brazil, and Southeast Asia,
                        PillarVolt is positioned to serve the global energy market.
                    </p>
                </div>
            </div>
        </main>
    );
}
