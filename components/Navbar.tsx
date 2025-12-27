"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import { BookOpen, Shirt, ShoppingBag } from 'lucide-react';

export function Navbar() {
    const { cartCount } = useShop();

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-white/5">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="hover:opacity-80 transition-opacity z-50">
                        <Image
                            src="/yedhart-club.svg"
                            alt="Yedhart Club"
                            width={55}
                            height={32}
                            priority
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* DESKTOP NAV: Text Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        <Link href="/ownership" className="text-xs font-sans tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
                            Ownership
                        </Link>
                        <Link href="/products" className="text-xs font-sans tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
                            Collection
                        </Link>
                        <Link href="/cart" className="text-xs font-sans tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity relative">
                            Cart
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-3 flex h-3 w-3 items-center justify-center rounded-full bg-accent text-[8px] text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* MOBILE NAV: Icons */}
                    <div className="flex md:hidden items-center space-x-6">
                        <Link href="/ownership" className="opacity-80 hover:opacity-100 transition-opacity">
                            <BookOpen strokeWidth={1.5} className="h-5 w-5" />
                        </Link>
                        <Link href="/products" className="opacity-80 hover:opacity-100 transition-opacity">
                            <Shirt strokeWidth={1.5} className="h-5 w-5" />
                        </Link>
                        <Link href="/cart" className="opacity-80 hover:opacity-100 transition-opacity relative">
                            <ShoppingBag strokeWidth={1.5} className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-accent text-[7px] text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
