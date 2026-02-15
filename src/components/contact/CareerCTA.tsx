"use client";

import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export function CareerCTA() {
    return (
        <section className="relative h-[450px] bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 flex">
                <div className="w-full md:w-1/3 bg-slate-800 flex items-center justify-center px-8 md:px-12 z-10">
                    <div className="border-l-4 border-deep-red pl-6">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Own your career at PillarVolt</h2>
                        <p className="text-slate-400 mb-6">Our people are our greatest asset. Join a team dedicated to excellence.</p>
                        <Link href="#" className="inline-block border border-deep-red text-white px-8 py-3 hover:bg-white hover:text-slate-900 transition-all font-bold tracking-widest text-xs uppercase">
                            View Careers
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block w-2/3 relative">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqq3DRgyceWClrfwPFn828WmbXd-aNJ2yaIVoJANTF5KWaMBMaKBN-HiJdPnd1Ng3vjWAHKObTHDQAuzVaDWf-BiF_HHDXKDEBKJ1K39qlD7RvIT8ckllVNLFS4ZpeLAEr1kw1W9iyyzp3_ftGDH-S3yOmf2oFW9pbyMZG7WxJ7k3d5vLApKN_Xvulv56uASdvOXdR0JNaI2pwgjZbjc9Ja6M_275y9FTE5FzR61lhIU05GohFiuIA5IErdDl_4irDPRWqAg6R4A"
                        alt="Team of engineers working together"
                        fill
                        className="object-cover"
                    />

                </div>
            </div>
        </section>
    );
}
