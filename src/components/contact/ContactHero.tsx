"use client";

import Image from "next/image";

export function ContactHero() {
    return (
        <section className="relative h-[400px] flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuARJ2Fa2Qm3zL_ptjpOPU87J6PlABjUrJmZ-oOhKBbh6OiCU0C1CZ5PSX5WliHp11sGl9CYyTeR_79HTrlVpwn4VGXMNMlK2nWlTtk8zBRwwhDc1R42LI4RTbOVefAXtazeKLkIwdcogc94Fskg_N9OBBcdp6DikjesEwAgUd62x0UoAqdYInLopOEwKAefk7TnGWh5aVvOw8UwSJRWyOtlRi8j6mfoqFUmqjhtXdz7lbcI3m_hnLh_OrDrlYhBKq0-Yf4EPi1AqA"
                    alt="Offshore energy station"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="pl-0">
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Partner with PillarVolt for innovative solutions in Hywind and Natural Gas. Our global team is ready to support your next breakthrough.
                    </p>
                </div>
            </div>
        </section>
    );
}
