import Link from "next/link";
import { products } from "@/lib/mockData";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Curated essentials for your <span className="relative whitespace-nowrap text-indigo-600">
              daily life
            </span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Discover a collection of high-quality, thoughtfully designed products that elevate your everyday routine.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button href="#featured" variant="primary">
              Shop Collection
            </Button>
            <Button href="#" variant="outline">
              Learn more &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
          <Link href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all items
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
