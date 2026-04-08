

import { ContactHero } from "@/components/contact/ContactHero";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { CareerCTA } from "@/components/contact/CareerCTA";

export default function Contact() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <ContactHero />
            <InquiryForm />
            <CareerCTA />
        </main>
    );
}
