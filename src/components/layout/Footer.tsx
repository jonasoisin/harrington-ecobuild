import Link from "next/link";
import Image from "next/image";

const company = [
  { name: "About Us",      href: "/company/about-us" },
  { name: "Services",      href: "/services" },
  { name: "Projects",      href: "/projects" },
  { name: "Sustainability",href: "/company/sustainability" },
  { name: "Investors",     href: "/company/investors" },
];

const support = [
  { name: "Contact",        href: "/contact" },
  { name: "Global Locations", href: "/support/global-locations" },
  { name: "Ethics & Compliance", href: "/support/ethics-compliance" },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms-of-service" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="relative mb-6 block h-8 w-28">
              <Image
                src="/logo.png"
                alt="Harrington Ecobuild"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="feature-text text-muted-foreground prose-width">
              Organic architecture rooted in the natural world. We design buildings that grow from the
              landscape — shaped by site, material, and the people who inhabit them.
            </p>
          </div>

          {/* Company */}
          <div>
            <span className="eyebrow mb-5 block">Company</span>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="feature-text text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <span className="eyebrow mb-5 block">Support</span>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="feature-text text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="feature-text text-muted-foreground">
            © {new Date().getFullYear()} Harrington Ecobuild. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/legal/cookie-settings" className="feature-text text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
