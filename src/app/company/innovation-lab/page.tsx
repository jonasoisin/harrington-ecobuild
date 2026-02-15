import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Innovation Lab | PillarVolt',
    description: 'Exploring new frontiers in energy technology.',
};

export default function InnovationPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-deep-red pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Innovation Lab</h1>
                    <p className="text-xl text-slate-600">
                        Where the future of energy is engineered.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        Our Innovation Lab is dedicated to researching and developing breakthrough technologies
                        to enhance efficiency, safety, and sustainability in the energy sector.
                    </p>
                </div>
            </div>
        </main>
    );
}
