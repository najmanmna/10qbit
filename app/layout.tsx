import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll"; 
import CustomCursor from "@/components/CustomCursor";
import PageTransitionProvider from "@/components/PageTransitionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "10QBIT | Deep-Tech Venture Studio & Advisory",
  description: "We build breakthrough companies from the intersection of AI, quantum computing, and advanced science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // THE FIX: The <html...> tag must be the absolute first thing returned
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <CustomCursor />
        <SmoothScroll>
        <PageTransitionProvider> {/* Wrap children here */}
            <Navbar />
            <main className="flex-grow pt-20 overflow-x-hidden relative z-10">
              {children}
            </main>
            <Footer />
          </PageTransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}