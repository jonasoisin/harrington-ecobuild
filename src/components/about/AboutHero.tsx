export function AboutHero() {
    return (
        <section className="relative h-[700px] flex items-center overflow-hidden">
            <img
                alt="Engineers at PillarVolt site"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480xAny/6/1/6/541616_shutterstock_2613449805_43528.jpg"
            />
            {/* Hero Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="max-w-2xl">
                    <div className="pl-0 mb-6">
                        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white leading-tight">
                            Pioneering the <br />Energy Horizon
                        </h1>
                    </div>
                    <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                        PillarVolt is a global leader in sustainable extraction and floating offshore wind technology. We engineer the bridge to a cleaner future through innovation and integrity.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-wider transition-all rounded-sm">Explore Our Impact</button>

                    </div>
                </div>
            </div>
        </section>
    );
}
