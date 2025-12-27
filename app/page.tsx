import Link from "next/link";
import Image from "next/image";
import { getMockProducts } from "@/lib/mockData";

export default async function Home() {
  const products = await getMockProducts();
  const featured = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Intro Removed */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 text-center">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in-up-local {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-local {
            animation: fade-in-up-local 0.8s ease-out forwards;
          }
        `}} />
        <div className="max-w-6xl space-y-10 z-10 animate-fade-in">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-[family-name:var(--font-instrument)] text-7xl md:text-[7rem] lg:text-[8rem] leading-[0.95] tracking-tight lowercase text-balance opacity-90">
              authenticity as a daily practice, not a statement.
            </h1>
            <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-50 pt-4">
              Yedhart Club
            </p>
          </div>

          <div className="pt-8 w-full flex justify-center">
            <Link
              href="/products"
              className="inline-block bg-white text-black px-10 py-4 text-[10px] tracking-[0.25em] uppercase font-sans hover:bg-white/90 transition-colors duration-300"
            >
              Discover
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection - Thumbnails Only */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
            {featured.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="block group">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5 opacity-100 transition-opacity duration-500">
                  <Image
                    src={product.images[0]}
                    alt="Product"
                    fill
                    className="object-cover transition-all duration-700"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block border-b border-white/20 pb-1 text-[10px] tracking-[0.2em] uppercase font-sans hover:border-white/60 transition-colors"
            >
              view all
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section - Improved Text */}
      <section className="py-32 px-6 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-on-scroll">
          <div className="space-y-6 font-serif text-2xl md:text-4xl italic opacity-80 leading-relaxed">
            <p>silent ambition.</p>
            <p>the discipline of unseen work.</p>
            <p>creating objects that age with you.</p>
          </div>

          <div className="pt-8 opacity-60">
            <Link href="/story" className="inline-block text-[20px] font-sans tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white/80 transition-colors">
              our philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section - Moving Cards */}
      <section className="py-24 border-t border-white/5 overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll {
                animation: scroll 30s linear infinite;
            }
            `
        }} />
        <div className="flex w-max gap-8 animate-scroll hover:pause">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8">
              {[
                { text: "Quality is unmatched. It feels like wearing armor.", author: "Alex D." },
                { text: "Finally, a brand that understands silence.", author: "Sarah M." },
                { text: "More than clothes. It's a mindset.", author: "David K." }
              ].map((review, index) => (
                <div key={index} className="w-[300px] bg-white/5 p-8 space-y-6 flex flex-col justify-between border border-white/5">
                  <p className="font-serif text-xl italic opacity-80 leading-relaxed">"{review.text}"</p>
                  <p className="font-sans text-[10px] tracking-widest uppercase opacity-40">{review.author}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture Section - Member Access/Login */}
      <section className="py-24 px-6 border-t border-white/5 text-center">
        <div className="max-w-md mx-auto space-y-8 animate-on-scroll">
          <header className="space-y-2">
            <h3 className="font-serif text-2xl italic opacity-90">member access.</h3>
            <p className="font-sans text-xs tracking-widest uppercase opacity-50">
              login to view private releases
            </p>
          </header>
          <form className="flex flex-col md:flex-row gap-4 border-b border-white/10 pb-2 focus-within:border-white/40 transition-colors">
            <input
              type="email"
              placeholder="email address"
              className="bg-transparent w-full text-center md:text-left text-sm font-sans focus:outline-none placeholder:opacity-30"
            />
            <button type="submit" className="text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 whitespace-nowrap">
              enter
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
