import { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Privacy Policy | Harrington Ecobuild",
  description:
    "How Harrington Ecobuild collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "What we collect",
    body: [
      "When you contact us through our website, we collect the information you provide: your name, email address, phone number, and the details of your inquiry. We may also collect your IP address and basic browser information for security and analytics purposes.",
      "We do not collect any personal data passively beyond standard server logs. We do not use tracking pixels, third-party advertising networks, or behavioural profiling tools.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information you provide solely to respond to your inquiry, progress a project relationship, or communicate relevant updates you have opted into. We do not sell, rent, or share your personal data with third parties for marketing purposes.",
      "Where we engage specialist consultants or sub-contractors on a project, we share only the information necessary for that work, under appropriate confidentiality agreements.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "We retain project-related correspondence and data for seven years from the date of project completion, in line with our professional indemnity obligations. Inquiries that do not progress to a project are deleted after 24 months.",
      "You may request deletion of your personal data at any time by contacting us at the address below. Where retention is required for legal or contractual reasons, we will inform you of the applicable period.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our website uses only essential cookies necessary for the site to function. We do not use analytics cookies, advertising cookies, or any third-party tracking. You can disable cookies in your browser settings without affecting your ability to use the site.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Under the UK GDPR and the Data Protection Act 2018, you have the right to access the personal data we hold about you, to correct inaccurate data, to request erasure, and to object to processing. To exercise any of these rights, please write to us at the address below.",
      "You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe your data has been handled unlawfully.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about this policy or requests relating to your personal data should be directed to: Data Controller, Harrington Ecobuild, 14 Charlotte Square, Edinburgh EH2 4DR, Scotland — or by email to studio@harrington-ecobuild.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Page header */}
      <section className="border-b border-border py-20 canvas-grid sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-end">
            <div className="space-y-5 lg:col-span-3">
              <FadeIn><span className="eyebrow">Legal</span></FadeIn>
              <FadeIn delay={80}>
                <h1>
                  Privacy <em>Policy.</em>
                </h1>
              </FadeIn>
            </div>
            <div className="space-y-4 lg:col-span-2 lg:pb-2">
              <FadeIn delay={160}>
                <p className="prose-width-sm text-muted-foreground">
                  We collect only what we need, keep it only as long as necessary, and never sell
                  it. Last updated February 2026.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {sections.map((section, i) => (
              <FadeIn key={section.title} delay={i * 60}>
                <div className="grid gap-6 border-t border-border py-10 sm:grid-cols-[1fr_2fr]">
                  <h2 className="text-base font-[550] tracking-tight">{section.title}</h2>
                  <div className="space-y-4">
                    {section.body.map((para, j) => (
                      <p key={j} className="feature-text text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
