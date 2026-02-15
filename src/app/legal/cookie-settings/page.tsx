import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Settings | PillarVolt',
    description: 'Manage your cooking preferences.',
};

export default function CookieSettingsPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-deep-red pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Cookie Settings</h1>
                    <p className="text-xl text-slate-600">
                        Control how we use cookies.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        You can adjust your cookie preferences to control the types of cookies we set on your device.
                    </p>
                    {/* Add cookie management UI here */}
                </div>
            </div>
        </main>
    );
}
