"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Services",  href: "/services" },
  { name: "Projects",  href: "/projects" },
  { name: "About",     href: "/company/about-us" },
];

export function Header() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed z-30 w-full border-b transition-colors duration-150",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="relative h-8 w-28 shrink-0">
          <Image
            src="/logo.png"
            alt="Harrington Ecobuild"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={[
                "eyebrow transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground" : "text-muted-foreground",
              ].join(" ")}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2 text-[11px] font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-80"
          >
            Contact <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative h-8 w-8 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {/* Menu icon — fades out when open */}
          <Menu
            className={[
              "absolute inset-0 m-auto h-5 w-5 transition-all duration-200",
              menuOpen ? "scale-0 rotate-180 opacity-0" : "scale-100 rotate-0 opacity-100",
            ].join(" ")}
          />
          {/* X icon — fades in when open */}
          <X
            className={[
              "absolute inset-0 m-auto h-5 w-5 transition-all duration-200",
              menuOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-180 opacity-0",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background/95 px-4 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="eyebrow py-1 text-muted-foreground hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-[11px] font-medium uppercase tracking-widest text-primary-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Contact <ArrowRight className="h-3 w-3" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
