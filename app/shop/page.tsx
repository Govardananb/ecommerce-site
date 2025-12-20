import { products } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-background animate-fade-in">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                {products.map((product) => (
                    <Link href={`/product/${product.id}`} key={product.id} className="group block space-y-4">
                        {/* Image */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* Detailed Content */}
                        <div className="space-y-2 font-sans">
                            <p className="text-xs uppercase tracking-widest opacity-50">
                                {product.category}
                            </p>
                            <div className="flex justify-between items-baseline gap-4">
                                <h3 className="text-lg opacity-90 group-hover:text-accent transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <span className="text-lg opacity-90">${product.price}</span>
                            </div>
                            <p className="text-sm opacity-60 leading-relaxed line-clamp-2">
                                {product.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
