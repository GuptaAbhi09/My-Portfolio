import type { Metadata } from "next";
import { Syne, Manrope, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import InteractiveEffects from "@/components/InteractiveEffects";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Abhishek Gupta — Full Stack Developer",
  description: "Full Stack Developer with 8 months internship experience. Specializing in Next.js, TypeScript, Supabase, and PostgreSQL.",
  openGraph: {
    title: "Abhishek Gupta — Full Stack Developer",
    description: "Developing production-ready web and mobile applications with modern tech stacks.",
    url: "https://abhishekgupta.dev",
    siteName: "Abhishek Gupta Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Gupta — Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, TypeScript, and Supabase.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} ${dmMono.variable}`}>
        <InteractiveEffects />
        <Navbar />
        {children}
        {/* Grain Texture Filter */}
        <svg style={{ position: "fixed", top: 0, left: 0, width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
      </body>
    </html>
  );
}
