import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Support | PillarVolt',
    description: 'Get support and information about our operations.',
};

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-deep-red pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Support</h1>
                    <p className="text-xl text-slate-600">
                        We are here to help.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link href="/contact" className="block p-6 border border-slate-200 rounded-lg hover:border-deep-red transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Contact Support</h2>
                        <p className="text-slate-600">Get in touch with our team.</p>
                    </Link>
                    <Link href="/support/global-locations" className="block p-6 border border-slate-200 rounded-lg hover:border-deep-red transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Global Locations</h2>
                        <p className="text-slate-600">Find our offices and operational hubs worldwide.</p>
                    </Link>
                    <Link href="/support/ethics-compliance" className="block p-6 border border-slate-200 rounded-lg hover:border-deep-red transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Ethics & Compliance</h2>
                        <p className="text-slate-600">Our commitment to integrity and ethical conduct.</p>
                    </Link>
                    <Link href="/legal/privacy-policy" className="block p-6 border border-slate-200 rounded-lg hover:border-deep-red transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Privacy Policy</h2>
                        <p className="text-slate-600">Read about how we protect your data.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
