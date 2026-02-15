import type { Metadata } from "next";
import { Inter, Montserrat, Lexend, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});



export const metadata: Metadata = {
  title: "PillarVolt | Powering the Future",
  description: "PillarVolt is a global leader in sustainable extraction and floating offshore wind technology. We engineer the bridge to a cleaner future.",
  openGraph: {
    title: "PillarVolt | Powering the Future",
    description: "PillarVolt is a global leader in sustainable extraction and floating offshore wind technology.",
    url: "https://pillarvolt-energy.com",
    siteName: "PillarVolt",
    images: [
      {
        url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "PillarVolt Offshore Wind",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PillarVolt",
    description: "Powering the Future of Energy with Hywind and Natural Gas solutions.",
    images: ["https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"],
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${lexend.variable} font-sans antialiased text-slate-900 bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
