"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const { cartCount, wishlist } = useShop();
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-white/5">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex h-20 justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="hover:opacity-80 transition-opacity z-50">
                            <Image
                                src="/yedhart-club.svg"
                                alt="Yedhart Club"
                                width={120}
                                height={70}
                                priority
                                className="h-12 w-auto"
                            />
                        </Link>

                        {/* DESKTOP NAV: Inline Links */}
                        <div className="hidden md:flex items-center space-x-12">
                            <Link href="/ownership" className="text-xs font-sans tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
                                Ownership
                            </Link>
                            <Link href="/shop" className="text-xs font-sans tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
                                Objects
                            </Link>
                            <Link href="/cart" className="text-xs font-sans tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity relative">
                                Registry
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-3 flex h-3 w-3 items-center justify-center rounded-full bg-accent text-[8px] text-white">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* MOBILE NAV: Hamburger Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden z-50 p-2 hover:opacity-70 transition-opacity"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU: Side Reveal (Right) */}
            <div className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-background z-40 border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col justify-center items-start px-12 space-y-12">
                    <Link
                        href="/ownership"
                        className="font-serif text-3xl italic hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Ownership
                    </Link>
                    <Link
                        href="/shop"
                        className="font-serif text-3xl italic hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Objects
                    </Link>
                    <Link
                        href="/cart"
                        className="font-serif text-3xl italic hover:text-accent transition-colors flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Registry
                        {cartCount > 0 && (
                            <span className="font-sans text-xs not-italic bg-accent text-white w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <div className="absolute bottom-12 left-12">
                        <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-30">
                            Yedhart Club
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
