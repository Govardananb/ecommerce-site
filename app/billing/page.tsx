import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export default function BillingPage() {
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
                        Billing & GST
                    </h1>
                </header>

                <section className="space-y-6 font-sans text-sm leading-relaxed opacity-70">
                    <p>
                        We believe billing should be transparent.
                    </p>
                    <ul className="list-disc pl-4 space-y-2 opacity-80">
                        <li>All product prices are shown inclusive of applicable GST</li>
                        <li>GST is calculated according to Indian government regulations</li>
                        <li>Delivery charges, if applicable, are clearly displayed at checkout</li>
                    </ul>
                    <p>
                        The amount shown before payment is the final payable amount.
                    </p>
                    <p>
                        After confirmation, a detailed invoice is shared with your order.
                    </p>
                    <p className="pt-4 opacity-90">
                        No hidden fees.<br />
                        No last-minute surprises.
                    </p>
                </section>
            </div>
        </div>
    );
}
