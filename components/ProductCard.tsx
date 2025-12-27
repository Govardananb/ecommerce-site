import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link href={`/product/${product.id}`} className="group relative block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4 space-y-1">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                </h3>
                <p className="text-xl font-semibold text-gray-900">${product.price.toFixed(2)}</p>
            </div>
        </Link>
    );
}
