import Link from "next/link";

export default function TrackPage() {
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
                        Track Your Order
                    </h1>
                </header>

                <section className="space-y-6 font-sans text-sm leading-relaxed opacity-70">
                    <p>
                        Once your order is placed, it moves through a short and careful process.
                    </p>
                    <p>
                        After dispatch, you’ll receive a tracking link via email or message.
                        Use that link to check the current status of your shipment at any time.
                    </p>
                    <p>
                        If your tracking information hasn’t updated yet, give it a little time.
                        Courier systems may take a few hours to reflect movement.
                    </p>
                    <p>
                        If you’re unsure or need help, feel free to reach out.
                        We’re here to assist.
                    </p>
                </section>
            </div>
        </div>
    );
}
