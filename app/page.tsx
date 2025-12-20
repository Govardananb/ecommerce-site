import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 text-center">
        <div className="max-w-4xl space-y-10 z-10 animate-fade-in">
          <p className="text-xs md:text-sm tracking-[0.3em] font-sans uppercase opacity-50">
            est. 2025
          </p>

          <div className="space-y-4">
            <h1 className="font-serif text-7xl md:text-9xl leading-none tracking-tight">
              Yedhart
            </h1>
            <p className="font-serif text-3xl md:text-5xl italic opacity-80 font-light">
              The authentic you
            </p>
          </div>

          <p className="font-sans text-muted max-w-lg mx-auto leading-relaxed text-sm md:text-base tracking-wide opacity-80 text-balance">
            we are quiet builders. <br className="hidden md:block" />
            crafting objects for the long-term thinker. <br className="hidden md:block" />
            no hype, just substance.
          </p>

          <div className="pt-8">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase font-sans hover:bg-accent hover:text-white transition-all duration-300 ease-out"
            >
              Discover your tee
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 px-6 space-y-24 border-t border-white/5">
        {/* Core Concept */}
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-on-scroll">
          <p className="font-serif text-2xl md:text-3xl italic opacity-90 leading-relaxed text-balance">
            "Yedhart exists at the intersection of real emotion and intentional living. It's for people who reject performative culture and choose substance over spectacle—those who build quietly, feel deeply, and commit to the long game."
          </p>
        </div>

        {/* Origin Narrative */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1 animate-on-scroll">
            <div className="space-y-2">
              <span className="text-xs font-sans tracking-[0.2em] uppercase opacity-50">Brand Story</span>
              <h2 className="font-serif text-4xl md:text-5xl opacity-90">The Origin.</h2>
            </div>

            <div className="space-y-6 font-sans text-muted leading-loose text-sm md:text-base opacity-80">
              <p>
                In a world of manufactured personas, we chose to build strictly for the authentic. No hype, just substance.
              </p>
            </div>

            <Link href="/story" className="inline-block text-xs font-sans tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white/80 transition-colors">
              Read the full story &rarr;
            </Link>
          </div>

          <div className="aspect-[4/5] relative bg-white/5 order-1 md:order-2 grayscale hover:grayscale-0 transition-all duration-700 ease-out overflow-hidden group">
            {/* Abstract/Mood Image Placeholder */}
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
              <div className="relative z-10 text-center space-y-2 opacity-30 group-hover:opacity-50 transition-opacity">
                <span className="block font-serif italic text-4xl">substance</span>
                <span className="block font-sans text-xs tracking-widest uppercase">over spectacle</span>
              </div>
              {/* Decorative element */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teaser (No Grid) */}
      <section className="py-32 px-6 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-12 animate-on-scroll">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl italic">the collection.</h2>
            <p className="font-sans text-sm text-muted opacity-60 max-w-md mx-auto">
              Explore a curated selection of essential objects designed for the authentic self.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-block border border-white/10 hover:border-white/40 hover:bg-white/5 px-12 py-4 text-xs tracking-widest uppercase font-sans transition-all duration-300"
          >
            View All Objects
          </Link>
        </div>
      </section>
    </div>
  );
}
