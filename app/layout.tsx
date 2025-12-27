import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, Youtube, Mail } from "lucide-react";
import { Instrument_Serif, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ShopProvider } from "@/context/ShopContext";
import { siteConfig } from "@/lib/siteConfig";

const instrumentSerif = Instrument_Serif({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-instrument",
    display: "swap",
    style: ["normal", "italic"],
});

const ibmPlexSerif = IBM_Plex_Serif({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-ibm-plex",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Yedhart Club",
    description: "for those who build in silence",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${instrumentSerif.variable} ${ibmPlexSerif.variable} antialiased min-h-screen flex flex-col`}
            >
                <ShopProvider>
                    <Navbar />
                    <main className="flex-grow flex flex-col">
                        {children}
                    </main>
                    <footer className="pt-24 pb-12 border-t border-white/10 mt-auto bg-black text-white">
                        <div className="mx-auto max-w-7xl px-6">

                            {/* 3-Column Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-24">

                                {/* Column 1: Quick Links */}
                                <div className="space-y-6">
                                    <h4 className="font-serif text-lg italic opacity-90">Quick links</h4>
                                    <nav className="flex flex-col space-y-3 font-sans text-xs tracking-wide opacity-60">
                                        <Link href="/track" className="hover:opacity-100 transition-opacity w-fit">Track your order</Link>
                                        <Link href="/contact" className="hover:opacity-100 transition-opacity w-fit">Contact</Link>
                                        <Link href="/story" className="hover:opacity-100 transition-opacity w-fit">About Yedhart</Link>
                                        <Link href="/returns" className="hover:opacity-100 transition-opacity w-fit">Returns & cancellations</Link>
                                    </nav>
                                </div>

                                {/* Column 2: Policies */}
                                <div className="space-y-6">
                                    <h4 className="font-serif text-lg italic opacity-90">Policies</h4>
                                    <nav className="flex flex-col space-y-3 font-sans text-xs tracking-wide opacity-60">
                                        <Link href="/privacy" className="hover:opacity-100 transition-opacity w-fit">Privacy policy</Link>
                                        <Link href="/ownership" className="hover:opacity-100 transition-opacity w-fit">Ownership & product identity</Link>
                                        <Link href="/shipping" className="hover:opacity-100 transition-opacity w-fit">Shipping & delivery</Link>
                                        <Link href="/terms" className="hover:opacity-100 transition-opacity w-fit">Terms of service</Link>
                                        <Link href="/billing" className="hover:opacity-100 transition-opacity w-fit">Billing & gst</Link>
                                    </nav>
                                </div>

                                {/* Column 3: Empty / Breathing Space */}
                                <div className="hidden md:block">
                                    {/* Intentionally empty for balance */}
                                </div>
                            </div>

                            {/* Category Strip */}
                            <div className="w-full text-center border-t border-white/5 py-8">
                                <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-20 select-none">
                                    oversized tees <span className="mx-2">|</span> foundation pieces <span className="mx-2">|</span> daily-wear essentials <span className="mx-2">|</span> archive editions <span className="mx-2">|</span> quiet uniforms
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center gap-6 pb-16 opacity-40">
                                <Link href="#" className="hover:opacity-100 transition-opacity">
                                    <Instagram size={18} strokeWidth={1.5} />
                                </Link>
                                <Link href="#" className="hover:opacity-100 transition-opacity">
                                    <Youtube size={18} strokeWidth={1.5} />
                                </Link>
                                <Link href="mailto:gifinitydfx@gmail.com" className="hover:opacity-100 transition-opacity">
                                    <Mail size={18} strokeWidth={1.5} />
                                </Link>
                            </div>

                            {/* Footer Base */}
                            <div className="text-center space-y-2 font-sans text-[10px] tracking-wide opacity-40">
                                <p>© 2025 yedhart club</p>
                                <p className="opacity-60">built quietly. made to last.</p>
                            </div>

                        </div>
                    </footer>
                </ShopProvider>
            </body>
        </html>
    );
}
