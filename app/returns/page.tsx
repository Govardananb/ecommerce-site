import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export default function ReturnsPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-background animate-fade-in">
            <div className="max-w-2xl mx-auto space-y-12">
                <div className="pb-4">
                    <Link href="/" className="font-sans text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                        ← Back to Home
                    </Link>
                </div>
                <header className="space-y-6">
                    <h1 className="font-serif text-4xl italic leading-none opacity-90">
                        Returns & Cancellations
                    </h1>
                </header>

                <section className="space-y-12 font-sans text-sm leading-relaxed opacity-70">
                    <p>
                        We keep our return process simple and intentional.
                    </p>

                    <div className="space-y-4">
                        <h3 className="font-serif text-lg italic opacity-90 text-white">Cancellations</h3>
                        <ul className="list-disc pl-4 space-y-2 opacity-80">
                            <li>Orders can be cancelled within 24 hours of placing the order</li>
                            <li>Requests after this window cannot be accepted</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-serif text-lg italic opacity-90 text-white">Returns</h3>
                        <p>Return requests must be initiated within 24 hours of delivery</p>
                        <p>Products must be:</p>
                        <ul className="list-disc pl-4 space-y-2 opacity-80">
                            <li>unused</li>
                            <li>unworn</li>
                            <li>returned with original tags and packaging intact</li>
                        </ul>
                    </div>

                    <p>
                        Once a return request is approved, instructions will be shared.
                    </p>

                    <p>
                        We encourage mindful purchases.
                        Each piece is produced and shipped with care.
                    </p>
                </section>
            </div>
        </div>
    );
}
