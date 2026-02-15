"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    // Logic to show/hide can be added here. 
    // Currently defaulting to false to match original 'display: none' behavior.
    // If you want to show it, set initial state to true or use useEffect.

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-6 left-6 max-w-sm bg-white p-6 shadow-2xl border border-deep-red z-[100] transition-transform duration-500">
            <button
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                onClick={() => setIsVisible(false)}
            >
                <span className="material-icons-outlined text-sm">close</span>
            </button>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                This website uses cookies to enhance your experience and analyze traffic. To learn more, view our <Link className="text-primary underline" href="#">Privacy Policy</Link>.
            </p>
            <button
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2 text-sm transition-colors uppercase tracking-widest"
                onClick={() => setIsVisible(false)}
            >
                Accept All
            </button>
        </div>
    );
}
