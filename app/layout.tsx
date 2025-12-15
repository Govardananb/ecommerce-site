import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Assuming Inter is available or default
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Modern E-Commerce",
    description: "A seamless shopping experience",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen flex flex-col bg-zinc-50 text-zinc-900`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <footer className="bg-white border-t border-zinc-200 py-8">
                    <div className="mx-auto max-w-7xl px-4 text-center text-zinc-500 text-sm">
                        &copy; {new Date().getFullYear()} Storefront. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
