"use client";

import { products } from "@/lib/mockData";
import { ProductActions } from "@/components/ProductActions";
import { Accordion } from "@/components/Accordion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, use } from "react";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
    const { id } = use(params);
    const product = products.find((p) => p.id === id);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    if (!product) {
        notFound();
    }

    const sizes = ["S", "M", "L", "XL"];

    return (
        <div className="min-h-screen pt-32 px-6 pb-24 bg-background">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Product Image - Minimized */}
                <div className="relative w-full lg:w-[80%] mx-auto aspect-[3/4] bg-white/5 overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                </div>

                {/* Product Details */}
                <div className="space-y-8 max-w-md mx-auto lg:mx-0 lg:sticky lg:top-32">
                    {/* Minimal Header */}
                    <div className="space-y-2 border-b border-white/10 pb-6">
                        <div className="flex justify-between items-start font-serif italic text-3xl opacity-90">
                            <h1>{product.name.toLowerCase()}</h1>
                            <span>${product.price}</span>
                        </div>
                    </div>



                    {/* Size Selector */}
                    <div className="space-y-4">
                        <div className="flex justify-between text-xs font-sans tracking-widest uppercase opacity-60">
                            <span>Specification</span>
                            <button className="underline hover:opacity-100">Sizing Index</button>
                        </div>
                        <div className="flex gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-10 h-10 flex items-center justify-center font-sans text-xs border transition-all duration-300 ${selectedSize === size
                                        ? "border-accent bg-accent/10 text-accent"
                                        : "border-white/10 hover:border-white/40 opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        {!selectedSize && (
                            <p className="text-[10px] text-red-400 font-sans tracking-widest uppercase opacity-0 h-4 transition-opacity">
                                Required
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="pt-2">
                        <ProductActions product={product} />
                    </div>

                    {/* Collapsible Details */}
                    <div className="pt-4 border-t border-white/5">
                        <Accordion title="Details & Care">
                            <p className="text-xs">Premium cotton. Wash cold, hang dry.</p>
                        </Accordion>
                        <Accordion title="Shipping">
                            <p className="text-xs">Free worldwide shipping on all orders.</p>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
