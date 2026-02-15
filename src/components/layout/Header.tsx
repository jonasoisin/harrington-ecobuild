"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Projects", href: "/projects" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-deep-red transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="relative w-32 h-10">
                            <Image
                                src="/de.png"
                                alt="PillarVolt"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            className="bg-[#8B0000] hover:bg-primary-hover text-white px-5 py-2.5 text-sm font-bold transition-all uppercase rounded-sm border border-transparent"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            className="p-2 text-secondary"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="material-icons-outlined">{isOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-deep-red p-4 flex flex-col gap-4 shadow-lg">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-secondary hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="w-full bg-deep-red hover:bg-primary-hover text-white px-5 py-3 text-sm font-bold transition-all uppercase text-center block"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
}
