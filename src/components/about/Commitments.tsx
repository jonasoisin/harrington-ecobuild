export function Commitments() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Respecting People */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-sm text-primary">
                                <span className="material-icons-outlined">diversity_3</span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3 text-slate-900">Respecting People</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We are committed to providing a safe and secure environment for everyone working at our facilities and job sites. PillarVolt's safety and security value is Zero Harm. We provide an environment recognised for its equality and diversity, and we treat everyone with fairness, respect and dignity. We do not tolerate any intimidation or harassment of colleagues or others affected by our operations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Relating to Business Partners */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-sm text-primary">
                                <span className="material-icons-outlined">handshake</span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3 text-slate-900">Relating to Business Partners</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We seek to work with others who share our commitment to ethics and compliance. We believe in the benefits of competition, and PillarVolt always competes in a fair and ethically justifiable manner.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Working with Communities */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-sm text-primary">
                                <span className="material-icons-outlined">groups</span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3 text-slate-900">Working with Communities</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We aim to create lasting value for local communities through our business activities. Our contribution may include building local capacity and capability as well as social investment. We will conduct our business consistently with the United Nations Guiding Principles on Business and Human Rights and the ten principles of the United Nations Global Compact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sustainability */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-sm text-primary">
                                <span className="material-icons-outlined">eco</span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-3 text-slate-900">Sustainability</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Can an oil and gas company be part of a sustainable energy future? We are working actively to reduce climate emissions, put a price on carbon, and benefit societies around the world. We are determined to develop resources responsibly and create lasting value for communities. Our industry needs to be part of the solution. We aim to be recognised as the most carbon-efficient oil and gas producer, committed to creating lasting value for communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
