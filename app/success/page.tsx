import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center animate-fade-in">
            <div className="max-w-xl space-y-12">
                <div className="space-y-4">
                    <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-40">
                        Order Confirmed
                    </p>
                    <h1 className="font-serif text-6xl md:text-7xl italic opacity-90">
                        thank you.
                    </h1>
                </div>

                <div className="space-y-6 font-sans text-muted leading-relaxed opacity-80 text-sm md:text-base">
                    <p>
                        your order has been received with gratitude.
                    </p>
                    <p>
                        inside your package, you will find your product identity card. scan it to claim ownership and view the permanent record of this acquisition.
                    </p>
                    <p className="italic font-serif opacity-60 text-lg pt-4">
                        welcome to the quiet builders club.
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        href="/products"
                        className="inline-block border-b border-white/20 pb-1 text-xs tracking-widest hover:border-white/60 transition-colors uppercase font-sans"
                    >
                        continue to shop
                    </Link>
                </div>
            </div>
        </div>
    );
}
