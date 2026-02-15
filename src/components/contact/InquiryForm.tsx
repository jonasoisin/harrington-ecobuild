"use client";

import { Button } from "../ui/Button";
import { ChevronRight, Rss, Share2, Camera, PlayCircle } from "lucide-react";
import Link from "next/link";

export function InquiryForm() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <div className="mb-10">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Inquiry Form</span>
                        <h2 className="text-3xl font-display font-bold mt-2 mb-6">How can we help you?</h2>
                    </div>
                    <form action="#" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">First Name *</label>
                                <input
                                    className="w-full bg-surface-light border border-black focus:border-deep-red focus:ring-0 transition-all p-4 rounded-sm"
                                    required
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Last Name *</label>
                                <input
                                    className="w-full bg-surface-light border border-black focus:border-deep-red focus:ring-0 transition-all p-4 rounded-sm"
                                    required
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Email Address *</label>
                                <input
                                    className="w-full bg-surface-light border border-black focus:border-deep-red focus:ring-0 transition-all p-4 rounded-sm"
                                    required
                                    type="email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Phone Number</label>
                                <input
                                    className="w-full bg-surface-light border border-black focus:border-deep-red focus:ring-0 transition-all p-4 rounded-sm"
                                    type="tel"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Inquiry Type *</label>
                            <select className="w-full bg-surface-light border border-black focus:border-deep-red focus:ring-0 transition-all p-4 rounded-sm text-slate-900 border-r-8 border-transparent">
                                <option>General Inquiry</option>
                                <option>Career Opportunities</option>
                                <option>Media & Press</option>
                                <option>Technical Support</option>
                                <option>Investor Relations</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Message *</label>
                            <textarea
                                className="w-full bg-surface-light border border-black focus:border-deep-red focus:ring-0 transition-all p-4 rounded-sm"
                                required
                                rows={6}
                            ></textarea>
                        </div>
                        <Button
                            className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-10 transition-colors uppercase tracking-widest flex items-center gap-2 group h-auto rounded-sm"
                            type="submit"
                        >
                            Submit Request
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>
                </div>
                <div className="space-y-12">
                    <div className="bg-surface-light p-8 rounded-sm">
                        <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                            <Rss className="w-6 h-6 text-primary" />
                            Global Reach
                        </h3>
                        <div className="space-y-6">
                            <div className="border-b border-deep-red pb-4">
                                <h4 className="font-bold uppercase tracking-wide text-xs text-primary mb-1">Corporate HQ</h4>
                                <p className="text-sm leading-relaxed text-slate-600">555 W 5th St, Los Angeles, CA 90013, United States</p>
                                <p className="text-sm font-semibold mt-2 text-slate-900">+1 571-554-3285</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 border border-deep-red rounded-sm">
                        <h3 className="text-xl font-display font-bold mb-6">Stay Connected</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600">
                                <Share2 className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600">
                                <Camera className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600">
                                <PlayCircle className="w-5 h-5" />
                            </Link>
                        </div>
                        <p className="text-sm text-slate-500 mt-6 leading-relaxed">
                            Follow our journey as we pioneer sustainable energy solutions across the globe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
