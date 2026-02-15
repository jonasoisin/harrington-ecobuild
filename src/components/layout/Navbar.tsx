"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-deep-red transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                        >
                            <div className="relative w-32 h-12">
                                <Image
                                    src="/de.png"
                                    alt="PillarVolt"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider">
                        <Link
                            href="/services"
                            className={`transition-colors ${pathname === "/services"
                                ? "text-primary"
                                : "text-slate-900 hover:text-primary"
                                }`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/projects"
                            className={`transition-colors ${pathname === "/projects"
                                ? "text-primary"
                                : "text-slate-900 hover:text-primary"
                                }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/about"
                            className={`transition-colors ${pathname === "/about"
                                ? "text-primary"
                                : "text-slate-900 hover:text-primary"
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`transition-colors ${pathname === "/contact"
                                ? "text-primary"
                                : "text-slate-900 hover:text-primary"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-slate-100 rounded-full text-slate-900 transition-colors">
                            <span className="material-icons-outlined">search</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
