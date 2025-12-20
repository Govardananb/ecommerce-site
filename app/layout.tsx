import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Serif, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ShopProvider } from "@/context/ShopContext";

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
                    <footer className="py-12 border-t border-white/10 mt-auto">
                        <div className="mx-auto max-w-7xl px-6 text-center space-y-4">
                            <div className="text-muted text-sm font-serif italic opacity-70">
                                &copy; {new Date().getFullYear()} Yedhart Club. Quiet builders.
                            </div>
                            <div>
                                <Link
                                    href="/ownership"
                                    className="font-sans text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 border-b border-transparent hover:border-white/40 transition-all"
                                >
                                    Ownership
                                </Link>
                            </div>
                        </div>
                    </footer>
                </ShopProvider>
            </body>
        </html>
    );
}
