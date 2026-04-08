import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harrington Ecobuild | Organic Architecture & Sustainable Design",
  description:
    "Harrington Ecobuild is a leading organic architecture practice designing buildings that grow naturally from their surroundings. We engineer harmony between human habitation and the natural world.",
  openGraph: {
    title: "Harrington Ecobuild | Organic Architecture & Sustainable Design",
    description:
      "Harrington Ecobuild designs buildings rooted in organic architecture — integrating structure, site, and nature into a seamless whole.",
    url: "https://harrington-ecobuild.com",
    siteName: "Harrington Ecobuild",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Harrington Ecobuild Organic Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harrington Ecobuild",
    description: "Organic architecture that grows naturally from the landscape. Design rooted in nature.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
