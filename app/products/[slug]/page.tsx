"use client";

import { ImageGallery } from "@/components/ImageGallery";
import { useShop } from "@/context/ShopContext";
import { ProductActions } from "@/components/ProductActions";
import { Accordion } from "@/components/Accordion";
import { useState, useEffect, use } from "react";
import { getMockProductBySlug, MockProduct } from "@/lib/mockData";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

// Define PageProps correctly for Next.js 15+
interface PageProps {
    params: Promise<{ slug: string }>;
}

const sizes = ["S", "M", "L", "XL"];

export default function ProductPage({ params }: PageProps) {
    const { slug } = use(params);
    const [product, setProduct] = useState<MockProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const { addToCart, setIsCartOpen } = useShop();

    // Sticky Bar Handler
    const handleStickyAddToCart = () => {
        if (!product) return;
        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0] || "",
            description: selectedSize,
            category: product.category,
            slug: product.slug
        });
        setIsCartOpen(true);
    };

    useEffect(() => {
        async function loadProduct() {
            setLoading(true);
            const data = await getMockProductBySlug(slug);
            if (data) {
                setProduct(data);
            }
            setLoading(false);
        }
        loadProduct();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex items-center justify-center">
                <span className="font-sans text-xs tracking-widest uppercase opacity-40 animate-pulse">Loading Object...</span>
            </div>
        )
    }

    if (!product) {
        return notFound();
    }

    return (
        <div className="min-h-screen pt-24 lg:pt-32 px-6 pb-24 bg-background">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Product Image Gallery */}
                <div className="w-full lg:w-[80%] mx-auto">
                    <ImageGallery images={product.images} alt={product.name} />
                </div>

                {/* Product Details */}
                <div className="space-y-8 max-w-md mx-auto lg:mx-0 lg:sticky lg:top-32">
                    {/* Header */}
                    <div className="space-y-2 border-b border-white/10 pb-6">
                        <div className="flex justify-between items-start font-serif italic text-3xl opacity-90">
                            <h1>{product.name.toLowerCase()}</h1>
                            <span>${product.price}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="font-sans text-muted leading-relaxed opacity-80">
                        <p>{product.description}</p>
                    </div>

                    {/* Size Selector */}
                    <div className="space-y-4">
                        <div className="flex justify-between text-xs font-sans tracking-widest uppercase opacity-60">
                            <span>Specification</span>
                            <button className="underline hover:opacity-100">{siteConfig.product.buttons.sizing}</button>
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
                    </div>

                    {/* Desktop/Tablet Actions */}
                    <div className="pt-2 hidden md:block">
                        <ProductActions product={{
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.images[0] || "",
                            category: product.category,
                            description: product.description,
                            slug: product.slug
                        }} />
                    </div>

                    {/* Mobile Only: Simple Add to Cart */}
                    <div className="pt-2 md:hidden">
                        <ProductActions product={{
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.images[0] || "",
                            category: product.category,
                            description: product.description,
                            slug: product.slug
                        }} />
                    </div>

                    {/* Collapsible Product Specs - Moved Here */}
                    <div className="pt-2 border-t border-white/5">
                        <Accordion title={siteConfig.product.sections.details.title}>
                            <ul className="space-y-1 font-sans text-xs opacity-60 tracking-wide pb-2">
                                <li className="flex justify-between border-b border-white/5 pb-1">
                                    <span>Fabric</span>
                                    <span>{product.specs.fabric}</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-1">
                                    <span>Fit</span>
                                    <span>{product.specs.fit}</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-1">
                                    <span>Durability</span>
                                    <span>{product.specs.durability}</span>
                                </li>
                                <li className="flex justify-between pt-1">
                                    <span>Aging</span>
                                    <span>{product.specs.aging}</span>
                                </li>
                            </ul>
                        </Accordion>
                    </div>

                    {/* Ownership & Identity */}
                    <div className="pt-2 border-t border-white/5">
                        <Accordion title="Ownership & Product Identity">
                            <div className="space-y-2 font-sans text-xs opacity-60 tracking-wide pb-1">
                                <p>{siteConfig.product.sections.identity.text}</p>
                                <p className="opacity-80 pt-2 border-t border-white/5">{siteConfig.product.sections.packaging.text}</p>
                            </div>
                        </Accordion>
                    </div>

                    {/* Care Instructions */}
                    <div className="pt-2 border-t border-white/5">
                        <Accordion title={siteConfig.product.sections.care.title}>
                            <p className="font-sans text-xs opacity-60 tracking-wide">{siteConfig.product.sections.care.text}</p>
                        </Accordion>
                    </div>

                    {/* Shipping - Using Config */}
                    <div className="pt-2 border-t border-white/5">
                        <Accordion title={siteConfig.product.sections.shipping.title}>
                            <p className="text-xs">{siteConfig.product.sections.shipping.text}</p>
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* Sticky Mobile Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-white/10 p-4 md:hidden animate-fade-in-up">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex flex-col">
                        <span className="font-serif italic text-lg leading-none">{product.name.toLowerCase()}</span>
                        <span className="text-xs opacity-60 font-sans tracking-widest">${product.price}</span>
                    </div>
                    <button
                        onClick={handleStickyAddToCart}
                        className="bg-foreground text-background px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-accent hover:text-white transition-colors flex-grow max-w-[50%]"
                    >
                        {siteConfig.product.buttons.acquire}
                    </button>
                </div>
            </div>
        </div>
    );
}
