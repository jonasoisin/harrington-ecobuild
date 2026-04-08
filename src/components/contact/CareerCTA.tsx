"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function CareerCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <span className="eyebrow">Careers</span>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="mt-4">
            Own your career at Harrington <em>Ecobuild.</em>
          </h2>
        </FadeIn>
        <FadeIn delay={160}>
          <p className="mx-auto mt-4 feature-text text-muted-foreground prose-width-sm">
            Our architects and craftspeople are the heart of everything we build. Join a team
            dedicated to design that belongs to the land.
          </p>
        </FadeIn>
        <FadeIn delay={240}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-80"
            >
              View careers <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/company/about-us"
              className="inline-flex items-center gap-1.5 rounded-full px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
            >
              Our story
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
