"use client";

import { useShop } from "@/context/ShopContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                <p className="font-sans text-xs tracking-widest uppercase opacity-40">registry empty.</p>
                <Link
                    href="/shop"
                    className="border-b border-white/20 pb-1 text-[10px] tracking-widest hover:border-white/60 transition-colors uppercase font-sans"
                >
                    collection
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-32 px-6 pb-24 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Cart Items */}
                    <div className="lg:col-span-8 space-y-12">
                        <ul className="divide-y divide-white/5">
                            {cart.map((item) => (
                                <li key={item.id} className="py-8 flex gap-8 group animate-fade-in">
                                    <Link href={`/product/${item.id}`} className="relative w-24 aspect-[3/4] bg-white/5 overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </Link>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <Link href={`/product/${item.id}`}>
                                                    <h3 className="font-sans text-sm uppercase tracking-wider opacity-90 hover:opacity-60 transition-opacity">
                                                        {item.name.toLowerCase()}
                                                    </h3>
                                                </Link>
                                                <p className="font-sans text-[10px] tracking-widest uppercase opacity-40 mt-1">
                                                    ${item.price}
                                                </p>
                                            </div>
                                            <p className="font-sans text-sm opacity-80">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-end">
                                            {/* Quantity Control */}
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center border border-white/10">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 hover:bg-white/5 transition-colors"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-6 text-center font-sans text-[10px]">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 hover:bg-white/5 transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-[10px] font-sans tracking-widest uppercase opacity-40 hover:opacity-100 hover:text-red-400 transition-all"
                                            >
                                                remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 bg-white/5 p-8 space-y-8 animate-fade-in">
                        <div className="space-y-4 font-sans text-xs tracking-wide opacity-80">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between opacity-50">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-6">
                            <div className="flex justify-between items-baseline mb-8">
                                <span className="font-serif text-lg italic">Total</span>
                                <span className="font-sans text-xl">${cartTotal.toFixed(2)}</span>
                            </div>

                            <Link
                                href="/checkout"
                                className="block w-full bg-foreground text-background text-center py-4 text-xs font-sans tracking-widest uppercase hover:bg-accent hover:text-white transition-colors duration-300"
                            >
                                Secure Acquisition
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
