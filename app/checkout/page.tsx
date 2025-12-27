"use client";

import { useShop } from "@/context/ShopContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useShop();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        clearCart();
        router.push('/success');
    };

    if (!mounted) return null;

    if (cart.length === 0) {
        if (typeof window !== 'undefined') router.push('/cart');
        return null;
    }

    return (
        <div className="min-h-screen pt-32 px-6 pb-24 bg-background">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                {/* Left: Form */}
                <div className="space-y-12 animate-fade-in">
                    <div className="pb-4">
                        <Link href="/cart" className="font-sans text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                            ← Back to Cart
                        </Link>
                    </div>
                    <header className="space-y-2 border-b border-white/10 pb-8">
                        <h1 className="font-serif text-4xl italic opacity-90">Checkout</h1>
                        <p className="font-sans text-xs tracking-widest uppercase opacity-60">
                            shipping & payment
                        </p>
                    </header>

                    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="font-serif text-xl opacity-80">contact info</h3>
                            <div className="grid gap-4">
                                <input required type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-sans focus:border-white outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-serif text-xl opacity-80">shipping info</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <input required type="text" placeholder="First Name" className="bg-transparent border-b border-white/20 py-3 text-sm font-sans focus:border-white outline-none transition-colors" />
                                <input required type="text" placeholder="Last Name" className="bg-transparent border-b border-white/20 py-3 text-sm font-sans focus:border-white outline-none transition-colors" />
                            </div>
                            <input required type="text" placeholder="Address" className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-sans focus:border-white outline-none transition-colors" />
                            <div className="grid grid-cols-2 gap-4">
                                <input required type="text" placeholder="City" className="bg-transparent border-b border-white/20 py-3 text-sm font-sans focus:border-white outline-none transition-colors" />
                                <input required type="text" placeholder="Postal Code" className="bg-transparent border-b border-white/20 py-3 text-sm font-sans focus:border-white outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-serif text-xl opacity-80">payment</h3>
                            <div className="p-4 border border-white/10 rounded-sm space-y-4 opacity-50 cursor-not-allowed">
                                <p className="font-sans text-xs">Payment Gateway Integration Pending</p>
                                <p className="font-serif italic text-sm">Simulated transaction for demo.</p>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Right: Summary */}
                <div className="lg:sticky lg:top-32 h-fit bg-white/5 p-8 space-y-8 animate-fade-in">
                    {/* <h3 className="font-serif text-xl opacity-80 border-b border-white/10 pb-4">in your bag.</h3> */}

                    <ul className="space-y-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                        {cart.map((item) => (
                            <li key={item.id} className="flex gap-4">
                                <div className="relative w-16 h-20 bg-white/10 flex-shrink-0 opacity-80">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background rounded-full flex items-center justify-center text-[10px] font-bold">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-serif text-sm opacity-90">{item.name}</p>
                                    <p className="font-sans text-xs opacity-60 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t border-white/10 pt-6 space-y-4">
                        <div className="flex justify-between font-sans text-xs uppercase opacity-60">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-sans text-xs uppercase opacity-60">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-serif text-xl italic pt-4 border-t border-white/10">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>

                        <button
                            type="submit"
                            form="checkout-form"
                            disabled={isProcessing}
                            className="w-full bg-foreground text-background py-4 text-xs font-sans tracking-widest uppercase hover:bg-accent hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                        >
                            {isProcessing ? "Processing..." : "Place Order"}
                        </button>

                        <div className="text-center space-y-2 pt-4 opacity-40 font-sans text-[10px]">
                            <p>{siteConfig.policies.billing.gstText}</p>
                            <p>Cancellations accepted within 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
