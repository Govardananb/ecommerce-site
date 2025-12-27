"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMockProducts, MockProduct } from "@/lib/mockData";
import { ProductSkeleton } from "@/components/ProductSkeleton";

export default function ProductsPage() {
    const [products, setProducts] = useState<MockProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getMockProducts();
                setProducts(data);
            } catch (error) {
                console.error("Failed to load products", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 pb-24 px-6 md:px-[15%] lg:px-[15%] bg-background">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24">
                    {[...Array(6)].map((_, i) => (
                        <ProductSkeleton key={i} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-[15%] lg:px-[15%] bg-background animate-fade-in">
            <header className="mb-24 text-center space-y-6">
                <h1 className="font-serif text-4xl italic opacity-90">collection.</h1>
                <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-50 max-w-md mx-auto leading-relaxed">
                    no artificial scarcity. buy when ready.<br />pieces are meant to stay.
                </p>
            </header>

            <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24">
                {products.map((product) => (
                    <Link href={`/products/${product.slug}`} key={product.id} className="group block space-y-4 h-full flex flex-col relative">
                        {/* Image - Fixed 4:5 Aspect Ratio */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                            {product.images[0] ? (
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-xs opacity-50 uppercase tracking-widest">
                                    No Image
                                </div>
                            )}
                        </div>

                        {/* Detailed Content */}
                        <div className="space-y-2 font-sans flex-grow flex flex-col">
                            {/* Title - Max 2 lines */}
                            <h3 className="text-lg uppercase tracking-wide opacity-90 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                {product.name}
                            </h3>

                            {/* Pinned Bottom Area */}
                            <div className="pt-4 mt-auto flex justify-between items-baseline gap-4 border-t border-white/5">
                                <span className="text-sm font-serif italic opacity-80">${product.price}</span>
                                <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    View Details
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
