"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/lib/mockData";

export interface CartItem extends Product {
    quantity: number;
}

interface ShopContextType {
    cart: CartItem[];
    wishlist: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
    cartTotal: number;
    cartCount: number;
    clearCart: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("yedhart_cart");
        const savedWishlist = localStorage.getItem("yedhart_wishlist");

        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
        setIsLoaded(true);
    }, []);

    // Save to local storage whenever state changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("yedhart_cart", JSON.stringify(cart));
            localStorage.setItem("yedhart_wishlist", JSON.stringify(wishlist));
        }
    }, [cart, wishlist, isLoaded]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCart((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const addToWishlist = (product: Product) => {
        setWishlist((prev) => {
            if (prev.some((item) => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeFromWishlist = (productId: string) => {
        setWishlist((prev) => prev.filter((item) => item.id !== productId));
    };

    const isInWishlist = (productId: string) => {
        return wishlist.some((item) => item.id === productId);
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <ShopContext.Provider
            value={{
                cart,
                wishlist,
                addToCart,
                removeFromCart,
                updateQuantity,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                cartTotal,
                cartCount,
                clearCart,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
}

export function useShop() {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error("useShop must be used within a ShopProvider");
    }
    return context;
}
