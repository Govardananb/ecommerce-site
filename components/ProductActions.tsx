"use client";

import { useShop } from "@/context/ShopContext";
import { Product } from "@/lib/mockData";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function ProductActions({ product }: { product: Product }) {
    const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();
    const [inWishlist, setInWishlist] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const [isAcquiring, setIsAcquiring] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setInWishlist(isInWishlist(product.id));
    }, [isInWishlist, product.id]);

    const handleWishlist = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
            setInWishlist(false);
        } else {
            addToWishlist(product);
            setInWishlist(true);
        }
    };

    const handleAddToCart = () => {
        addToCart(product);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    const handleAcquireNow = () => {
        setIsAcquiring(true);
        addToCart(product);
        // Simulate brief processing for UX
        setTimeout(() => {
            router.push('/checkout');
        }, 500);
    };

    return (
        <div className="flex flex-col gap-4 mt-8">
            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={handleAddToCart}
                    className="bg-white/5 hover:bg-white/10 text-foreground border border-white/10 py-4 uppercase tracking-[0.2em] text-[10px] font-sans transition-all"
                >
                    {addedToCart ? "Added" : "Add to Registry"}
                </button>

                <button
                    onClick={handleAcquireNow}
                    disabled={isAcquiring}
                    className="bg-white text-black py-4 uppercase tracking-[0.2em] text-[10px] font-sans hover:bg-white/90 transition-all disabled:opacity-50"
                >
                    {isAcquiring ? "Redirecting..." : "Acquire Now"}
                </button>
            </div>

            <button
                onClick={handleWishlist}
                className={`w-full py-2 text-[10px] font-sans tracking-widest uppercase hover:opacity-80 transition-colors ${inWishlist ? "opacity-100 italic" : "opacity-40"}`}
            >
                {inWishlist ? "Saved to Wishlist" : "Save to Wishlist"}
            </button>
        </div>
    );
}
