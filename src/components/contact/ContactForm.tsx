"use client";

import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function ContactForm() {
    return (
        <Section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-primary font-bold uppercase tracking-widest text-xs">INQUIRY FORM</div>
                    </div>
                    <h1 className="text-4xl font-bold text-secondary mb-12">How can we help you?</h1>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-wider">First Name *</label>
                                <input type="text" className="w-full bg-gray-50 border-b border-deep-red p-4 focus:outline-none focus:border-deep-red transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-wider">Last Name *</label>
                                <input type="text" className="w-full bg-gray-50 border-b border-deep-red p-4 focus:outline-none focus:border-deep-red transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-wider">Email Address *</label>
                                <input type="email" className="w-full bg-gray-50 border-b border-deep-red p-4 focus:outline-none focus:border-deep-red transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-secondary uppercase tracking-wider">Phone Number</label>
                                <input type="tel" className="w-full bg-gray-50 border-b border-deep-red p-4 focus:outline-none focus:border-deep-red transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-secondary uppercase tracking-wider">Message *</label>
                            <textarea rows={6} className="w-full bg-gray-50 border-b border-deep-red p-4 focus:outline-none focus:border-deep-red transition-colors resize-none"></textarea>
                        </div>

                        <Button type="submit" className="w-full md:w-auto px-12">SUBMIT REQUEST</Button>
                    </form>
                </div>

                <div className="space-y-12">
                    {/* Offices */}
                    <div className="bg-gray-50 p-8">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-secondary mb-8">
                            Global Reach
                        </h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Corporate HQ</h4>
                                <p className="text-sm text-gray-600">555 W 5th St, Los Angeles, CA 90013, United States</p>
                                <p className="text-sm text-secondary font-bold mt-2">+1 571-554-3285</p>
                            </div>
                        </div>
                    </div>

                    {/* Socials / Stay Connected */}
                    <div>
                        <h3 className="text-lg font-bold text-secondary mb-4">Stay Connected</h3>
                        <div className="flex gap-4 mb-4">
                            {/* Icons would go here */}
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                {/* Icon */}
                            </div>
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                {/* Icon */}
                            </div>
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                {/* Icon */}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 max-w-xs">Follow our journey as we pioneer sustainable energy solutions across the globe.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
