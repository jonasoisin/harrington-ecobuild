"use client";

import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const offices = [
  {
    city: "Chicago",
    role: "Principal studio",
    address: "742 West Fulton Market Plaza, Suite 1800, Chicago, IL 60607, United States",
    phone: "719-212-7094",
    email: "studio@harrington-ecobuild.com",
  },
];

export function InquiryForm() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">

          {/* Form — 2 cols */}
          <div className="lg:col-span-2">
            <FadeIn className="mb-10 space-y-3">
              <span className="eyebrow">Inquiry form</span>
              <h2>
                Tell us about your <em>project.</em>
              </h2>
              <p className="feature-text text-muted-foreground prose-width">
                Whether you have a site, a brief, or simply an idea — we'd like to hear about it.
                Every Harrington Ecobuild project begins with a conversation.
              </p>
            </FadeIn>

            <FadeIn delay={80}>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="eyebrow" htmlFor="first-name">
                      First name *
                    </label>
                    <input
                      id="first-name"
                      required
                      type="text"
                      className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="eyebrow" htmlFor="last-name">
                      Last name *
                    </label>
                    <input
                      id="last-name"
                      required
                      type="text"
                      className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="eyebrow" htmlFor="email">
                      Email address *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="eyebrow" htmlFor="phone">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                      placeholder="+1 555 000 0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="eyebrow" htmlFor="inquiry-type">
                    Inquiry type *
                  </label>
                  <select
                    id="inquiry-type"
                    className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none transition-colors"
                  >
                    <option>New project inquiry</option>
                    <option>Site appraisal</option>
                    <option>Career opportunities</option>
                    <option>Media & press</option>
                    <option>General inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="eyebrow" htmlFor="site-location">
                    Site location (if known)
                  </label>
                  <input
                    id="site-location"
                    type="text"
                    className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    placeholder="Country, region, or postcode"
                  />
                </div>

                <div className="space-y-2">
                  <label className="eyebrow" htmlFor="message">
                    Your message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your site, your brief, or simply what you're thinking about…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-8 py-3 text-[11px] font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-80"
                >
                  Send message <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </FadeIn>
          </div>

          {/* Offices sidebar */}
          <div className="space-y-10">
            <FadeIn delay={160} className="space-y-3">
              <span className="eyebrow">Our studios</span>
              <p className="feature-text text-muted-foreground">
                Our studio is located in Chicago — and project offices wherever our
                work takes us.
              </p>
            </FadeIn>

            <ul className="space-y-0">
              {offices.map((office, i) => (
                <FadeIn key={office.city} delay={200 + i * 60}>
                  <li className="border-t border-border py-6 last:border-b space-y-2">
                    <span className="eyebrow">{office.role}</span>
                    <h3 className="text-base font-[550]">{office.city}</h3>
                    <div className="space-y-1.5 feature-text text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        {office.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        {office.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 shrink-0" />
                        {office.email}
                      </p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
