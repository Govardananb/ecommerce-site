import Link from "next/link";

export default function ShippingPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-background animate-fade-in">
            <div className="max-w-2xl mx-auto space-y-12">
                <header className="space-y-6">
                    <div className="pb-4">
                        <Link href="/" className="font-sans text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                            ← Back to Home
                        </Link>
                    </div>
                    <h1 className="font-serif text-4xl italic leading-none opacity-90">
                        Shipping & Delivery
                    </h1>
                </header>

                <section className="space-y-6 font-sans text-sm leading-relaxed opacity-70">
                    <p>
                        Orders are processed with care.
                    </p>
                    <ul className="list-disc pl-4 space-y-2 opacity-80">
                        <li>Dispatch typically happens within 24–48 hours</li>
                        <li>Delivery usually takes 4–5 working days</li>
                    </ul>
                    <p>
                        Delivery timelines may vary based on location or courier operations.
                    </p>
                    <p>
                        If there’s a delay, we’ll communicate it clearly.
                    </p>
                    <p>
                        We prioritize accuracy and condition over rushing shipments.
                    </p>
                </section>
            </div>
        </div>
    );
}
