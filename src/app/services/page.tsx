"use client";

import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <div className="bg-background-light text-slate-900 transition-colors duration-300 font-sans">
            <section
                className="relative min-h-[70vh] flex items-center pt-20 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000')`,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
                    <div className="max-w-3xl">
                        <div className="border-l-4 border-deep-red pl-6 mb-8 border-deep-red">
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight font-display">
                                Services <br />
                                <span className="text-primary">What we do.</span>
                            </h1>
                            <p className="text-base sm:text-lg text-slate-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                                Our industry is experiencing fundamental challenges. From climate change and geopolitics to the energy markets, we are facing new realities. Some see them as threats. In PillarVolt, we believe our job is to turn them into opportunities. That's why we're looking for new ways to utilise our expertise in the energy industry, exploring opportunities in new energy as well as driving innovation in oil and gas around the world. We know that the future has to be low carbon. Our ambition is to be the world's most carbon-efficient oil and gas producer, as well as driving innovation in offshore wind and renewable energy.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#services"
                                    className="bg-primary hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center"
                                >
                                    Explore Services{" "}
                                    <span className="material-icons-outlined ml-2 text-sm">
                                        arrow_forward
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-10">
                            <div className="relative group overflow-hidden rounded-lg aspect-[16/9]">
                                <img
                                    alt="Offshore wind farm in the ocean"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ21lqMqpmhxFfACqQXzqYl3cEjrSvfrG8X8fXHpleUlPlimxBcrBRZsIUxvtwWqx3QdUg6-PoDyTjx0_SY1BvXMcGzBT4p6k-8K9Mv2hy_zkyg6sgmm20t1EbLIzxinhAqj6lWjb71KQQcVAnq8dJzt7cxVWa5H6g0R_hltXUZInX0I7AmHqtatX6Abd3DmR61zE0BP6BatumMyZXa72_566WaE_cLCGjzPxJwkcLjj8gIvurnnSsNOkHJXQoYF6Pv8UKeFYDxA"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="bg-primary text-white text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1">
                                        Innovation
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="border-l-4 border-deep-red pl-6 mb-6">
                                    <h2 className="text-3xl font-bold mb-4 font-display">
                                        Hywind Offshore Solutions
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        We are pioneers in floating wind technology, enabling energy
                                        harvest in deep-water environments where traditional
                                        fixed-bottom turbines cannot reach. Our Hywind solutions
                                        maximize wind yield while minimizing environmental
                                        footprint.
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="material-icons-outlined text-primary mr-3 text-xl">
                                            layers
                                        </span>
                                        <div>
                                            <span className="font-bold block">
                                                Floating Foundation Engineering
                                            </span>
                                            <span className="text-sm text-slate-500">
                                                Stability designs for ultra-deep water applications.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-icons-outlined text-primary mr-3 text-xl">
                                            settings_input_component
                                        </span>
                                        <div>
                                            <span className="font-bold block">
                                                Subsea Infrastructure
                                            </span>
                                            <span className="text-sm text-slate-500">
                                                Complex dynamic cabling and anchoring systems.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-icons-outlined text-primary mr-3 text-xl">
                                            precision_manufacturing
                                        </span>
                                        <div>
                                            <span className="font-bold block">
                                                Predictive Maintenance
                                            </span>
                                            <span className="text-sm text-slate-500">
                                                AI-driven turbine health monitoring and remote
                                                servicing.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <div className="relative group overflow-hidden rounded-lg aspect-[16/9]">
                                <img
                                    alt="Natural gas processing facility"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAXIz_c0LagGiBx-_p5wiMMgv5xs-Py5teX1IN2AwUl7vrwC6yyTYH9eRpQpRBWNuZqiNcqDh4V8k2h-qdol0e9cqDdXai3VYWZIUDOD1hiECE8RzrEPh1gmvl4bQJuQ9LKCvNSrpH6cy_1SMEEyJtyv93cQT6gm9ALG3JnkcJ3c_cLPQyFZ7_VBF3NXB2o7Swuq_Yd5RFChTB5xgsbEcH6EUfvnxqyLSWxZ14mPvIm6UhLr7_drFOANmdq_ktpZGI7BcsVYy_Tg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="bg-primary text-white text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1">
                                        Stability
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="border-l-4 border-deep-red pl-6 mb-6">
                                    <h2 className="text-3xl font-bold mb-4 font-display">
                                        Natural Gas Production
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Providing critical base-load energy through advanced
                                        extraction and processing. We focus on low-emission
                                        production techniques and efficient distribution networks to
                                        bridge the gap to a renewable future.
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="material-icons-outlined text-primary mr-3 text-xl">
                                            explore
                                        </span>
                                        <div>
                                            <span className="font-bold block">
                                                Seismic Exploration
                                            </span>
                                            <span className="text-sm text-slate-500">
                                                High-resolution 4D mapping of natural gas reserves.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-icons-outlined text-primary mr-3 text-xl">
                                            factory
                                        </span>
                                        <div>
                                            <span className="font-bold block">
                                                Processing Facilities
                                            </span>
                                            <span className="text-sm text-slate-500">
                                                Next-gen LNG liquefaction and purification plants.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-icons-outlined text-primary mr-3 text-xl">
                                            eco
                                        </span>
                                        <div>
                                            <span className="font-bold block">Emissions Control</span>
                                            <span className="text-sm text-slate-500">
                                                Methane capture and carbon sequestration technologies.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 border-y border-deep-red">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
                            Technical Prowess
                        </h2>
                        <h3 className="text-4xl font-bold font-display">
                            Our Engineering Capabilities
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 border border-deep-red hover:border-deep-red transition-colors group">
                            <span className="material-icons-outlined text-4xl text-slate-400 group-hover:text-primary transition-colors mb-4">
                                architecture
                            </span>
                            <h4 className="text-xl font-bold mb-3 font-display">Structural Design</h4>
                            <p className="text-sm text-slate-500">
                                Advanced FEA modeling for extreme marine environments.
                            </p>
                        </div>
                        <div className="bg-white p-8 border border-deep-red hover:border-deep-red transition-colors group">
                            <span className="material-icons-outlined text-4xl text-slate-400 group-hover:text-primary transition-colors mb-4">
                                electric_bolt
                            </span>
                            <h4 className="text-xl font-bold mb-3 font-display">Grid Integration</h4>
                            <p className="text-sm text-slate-500">
                                Smart grid synchronization and voltage stability solutions.
                            </p>
                        </div>
                        <div className="bg-white p-8 border border-deep-red hover:border-deep-red transition-colors group">
                            <span className="material-icons-outlined text-4xl text-slate-400 group-hover:text-primary transition-colors mb-4">
                                visibility
                            </span>
                            <h4 className="text-xl font-bold mb-3 font-display">Remote Ops</h4>
                            <p className="text-sm text-slate-500">
                                24/7 autonomous monitoring and digital twins.
                            </p>
                        </div>
                        <div className="bg-white p-8 border border-deep-red hover:border-deep-red transition-colors group">
                            <span className="material-icons-outlined text-4xl text-slate-400 group-hover:text-primary transition-colors mb-4">
                                handyman
                            </span>
                            <h4 className="text-xl font-bold mb-3 font-display">Lifecycle Mgmt</h4>
                            <p className="text-sm text-slate-500">
                                Full decommissioning and sustainable asset recycling.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-2/3 relative overflow-hidden h-[500px]">
                            <div className="absolute inset-0 bg-black flex items-end p-12">
                                <div className="border-l-4 border-deep-red pl-6">
                                    <h3 className="text-3xl font-bold text-white mb-4 font-display">
                                        PillarVolt Expands Hywind Project in Northern North Sea
                                    </h3>
                                    <p className="text-slate-300 mb-6 max-w-lg">
                                        New milestone reached in offshore wind deployment with the
                                        installation of five additional floating units.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 bg-slate-100 p-8">
                            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest flex items-center font-display">
                                <span className="material-icons-outlined mr-2">feed</span> News
                                Feed
                            </h3>
                            <div className="space-y-8">
                                <div className="group cursor-pointer">
                                    <p className="text-xs text-primary font-bold mb-1">
                                        MARCH 15, 2025
                                    </p>
                                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                                        Partnership with global leaders to advance subsea cable
                                        technology.
                                    </h4>
                                </div>
                                <div className="group cursor-pointer">
                                    <p className="text-xs text-primary font-bold mb-1">
                                        MARCH 10, 2025
                                    </p>
                                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                                        PillarVolt announces Q1 2025 financial results.
                                    </h4>
                                </div>
                                <div className="group cursor-pointer">
                                    <p className="text-xs text-primary font-bold mb-1">
                                        MARCH 02, 2025
                                    </p>
                                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                                        New safety record achieved across all offshore assets.
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                    <svg
                        viewBox="0 0 400 400"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        <path
                            d="M0,200 Q100,0 200,200 T400,200"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        ></path>
                        <path
                            d="M0,250 Q100,50 200,250 T400,250"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        ></path>
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-8 font-display">
                        Ready to evolve your energy portfolio?
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
                        Partner with our world-class engineering teams to design, deploy,
                        and maintain high-performance energy infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a
                            href="mailto:consult@pillarvolt.com"
                            className="bg-primary hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-widest transition-all"
                        >
                            Request a Consultation
                        </a>

                    </div>
                </div>
            </section>


        </div>
    );
}
