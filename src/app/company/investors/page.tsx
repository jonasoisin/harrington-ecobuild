import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Investors | PillarVolt',
    description: 'Financial information and investor relations.',
};

export default function InvestorsPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-deep-red pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Investor Relations</h1>
                    <p className="text-xl text-slate-600">
                        Delivering value through sustainable growth.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        PillarVolt is committed to transparency and delivering long-term value to our shareholders.
                        Explore our financial reports, stock information, and corporate governance.
                    </p>
                </div>
            </div>
        </main>
    );
}
