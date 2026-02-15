export function SustainabilityReport() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[120px]"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-display text-3xl font-extrabold uppercase mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary"></span> Sustainability Report 2024
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            Our latest Environmental, Social, and Governance (ESG) report outlines our path to becoming net-negative by 2045. We've invested $2.4B into regenerative marine ecosystems around our offshore sites.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <span className="block text-4xl font-bold text-primary mb-1">45%</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Emission Reduction</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-primary mb-1">1.2GW</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Renewable Capacity</span>
                            </div>
                        </div>

                    </div>
                    <div className="bg-slate-800/50 p-8 border border-deep-red/10">
                        <h3 className="font-display font-bold text-xl uppercase mb-8">Latest Updates</h3>
                        <div className="space-y-6">
                            <div className="border-b border-deep-red/10 pb-6">
                                <span className="text-primary text-xs font-bold uppercase block mb-2">March 14, 2024</span>
                                <h4 className="font-bold hover:text-primary transition-colors cursor-pointer">PillarVolt partners with North Sea alliance for 500MW offshore expansion.</h4>
                            </div>
                            <div className="border-b border-deep-red/10 pb-6">
                                <span className="text-primary text-xs font-bold uppercase block mb-2">February 28, 2024</span>
                                <h4 className="font-bold hover:text-primary transition-colors cursor-pointer">Quarterly Results: Natural Gas efficiency exceeds projections by 12%.</h4>
                            </div>
                            <div className="pb-6">
                                <span className="text-primary text-xs font-bold uppercase block mb-2">January 15, 2024</span>
                                <h4 className="font-bold hover:text-primary transition-colors cursor-pointer">PillarVolt receives 'Triple-A' ESG rating for the fourth consecutive year.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
