"use client";

import { useShop } from "@/context/ShopContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

export default function WishlistPage() {
    const { wishlist, removeFromWishlist, addToCart } = useShop();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (wishlist.length === 0) {
        return (
            <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                <p className="font-sans text-xs tracking-widest uppercase opacity-40">empty.</p>
                <Link
                    href="/products"
                    className="border-b border-white/20 pb-1 text-[10px] tracking-widest hover:border-white/60 transition-colors uppercase font-sans"
                >
                    collection
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-32 px-6 pb-24 bg-background animate-fade-in">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                {wishlist.map((product) => (
                    <div key={product.id} className="group block space-y-4">
                        <div className="relative aspect-[4/5] bg-white/5 overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Hover Actions Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <button
                                    onClick={() => addToCart(product)}
                                    className="text-xs bg-white text-black px-6 py-3 uppercase tracking-widest hover:bg-white/90 font-sans"
                                >
                                    Add to Bag
                                </button>
                                <button
                                    onClick={() => removeFromWishlist(product.id)}
                                    className="p-3 bg-white/10 text-white hover:bg-white/20 rounded-full backdrop-blur-sm"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Detailed Content */}
                        <div className="space-y-2 font-sans">
                            <p className="text-xs uppercase tracking-widest opacity-50">
                                {product.category}
                            </p>
                            <Link href={`/products/${product.slug || product.id}`} className="block space-y-1 group-hover:opacity-80 transition-opacity">
                                <div className="flex justify-between items-baseline gap-4">
                                    <h3 className="text-lg opacity-90">{product.name}</h3>
                                    <span className="text-lg opacity-90">${product.price}</span>
                                </div>
                                <p className="text-sm opacity-60 leading-relaxed line-clamp-2">
                                    {product.description}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
