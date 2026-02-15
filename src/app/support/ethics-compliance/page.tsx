import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ethics & Compliance | PillarVolt',
    description: 'Our commitment to ethical business practices.',
};

export default function EthicsPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-deep-red pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Ethics & Compliance</h1>
                    <p className="text-xl text-slate-600">
                        Upholding the highest standards of integrity.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        We conduct our business with honesty, integrity, and respect. Our Code of Conduct
                        guides our interactions with employees, partners, and the communities we serve.
                    </p>
                </div>
            </div>
        </main>
    );
}
