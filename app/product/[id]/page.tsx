import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/mockData";
import { Button } from "@/components/Button";

// This simulates fetching data. In a real app, this would be an async call.
function getProduct(id: string) {
    return products.find((p) => p.id === id);
}

// Correctly typing params for Next.js App Router dynamic routes
// Note: In Next.js 15+, params is a Promise, but for 13/14 it's usually just an object.
// Given strict TS, we'll try the standard approach. If it fails build, we'll adjust.
interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const product = getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                {/* Image Gallery */}
                <div className="flex flex-col-reverse">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={800}
                            height={800}
                            className="h-full w-full object-cover object-center"
                            priority
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                    <div className="mt-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">${product.price.toFixed(2)}</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="sr-only">Description</h3>
                        <div className="space-y-6 text-base text-gray-700">
                            <p>{product.description}</p>
                        </div>
                    </div>

                    <div className="mt-10 flex">
                        <Button className="w-full sm:max-w-xs" variant="primary">
                            Add to Cart
                        </Button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Free shipping on all orders over $100
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
