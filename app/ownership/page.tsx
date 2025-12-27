import Link from "next/link";
import Image from "next/image";

export default function OwnershipPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-background animate-fade-in">
            <div className="max-w-3xl mx-auto space-y-24">

                {/* Intro */}
                <header className="space-y-6">
                    <div className="pb-4">
                        <Link href="/" className="font-sans text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                            ← Back to Home
                        </Link>
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl italic leading-none opacity-90">
                        Product identity
                    </h1>
                    <p className="font-sans text-sm tracking-widest uppercase opacity-50 border-l border-white/20 pl-4 py-1">
                        Permanence & Ownership
                    </p>
                </header>

                {/* Core Concept */}
                <section className="space-y-8 font-sans text-sm leading-relaxed opacity-80 max-w-xl">
                    <p>
                        When you purchase a Yedhart product, you receive more than the garment itself. <span className="text-white opacity-100 font-serif italic">You receive acknowledgment.</span>
                    </p>
                    <p>
                        Each piece includes a product identity, accessible through a QR code placed inside the package.
                        This identity records the product’s existence, its edition, and the moment it entered circulation.
                    </p>

                    <div className="pl-4 border-l border-white/20 py-2 space-y-4 my-8">
                        <p className="text-xs uppercase tracking-widest opacity-60">The identity:</p>
                        <ul className="space-y-2 list-none text-xs tracking-wide">
                            <li>— does not collect personal data</li>
                            <li>— does not require login or an account</li>
                            <li>— does not track usage or behavior</li>
                        </ul>
                    </div>

                    <p>
                        It exists to recognize the product — not the person.
                    </p>
                    <p className="border-b border-white/10 pb-8 pt-4 text-white opacity-90 font-serif italic text-lg">
                        Ownership, for us, is not transactional. It is a moment in the brand’s timeline, preserved with respect.
                    </p>
                </section>

                {/* Identity Card - Full Width */}
                <div className="w-full">
                    <div className="relative aspect-[1.58/1] w-full max-w-2xl mx-auto">
                        <Image
                            src="https://ik.imagekit.io/gov/card.png"
                            alt="Yedhart Ownership Card"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            priority
                            unoptimized
                        />
                    </div>
                </div>



                {/* Footer Statement */}
                <footer className="pt-24 border-t border-white/10 text-center space-y-6">
                    <p className="font-sans text-sm opacity-60 max-w-lg mx-auto leading-relaxed">
                        We build things to last. This system ensures the history of your item lasts as long as the item itself.
                    </p>
                </footer>

            </div>
        </div>
    );
}
