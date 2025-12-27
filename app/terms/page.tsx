import Link from "next/link";

export default function TermsPage() {
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
                        Terms of Service
                    </h1>
                </header>

                <section className="space-y-6 font-sans text-sm leading-relaxed opacity-70">
                    <p>
                        By using this website and placing an order, you agree to our terms.
                    </p>
                    <p>
                        These terms exist to:
                    </p>
                    <ul className="list-disc pl-4 space-y-2 opacity-80">
                        <li>ensure fair use of the platform</li>
                        <li>protect both you and us</li>
                        <li>maintain a respectful buying experience</li>
                    </ul>
                    <p>
                        All product details, prices, and policies are listed clearly.
                        Any misuse, fraudulent activity, or abuse may result in order cancellation.
                    </p>
                </section>
            </div>
        </div>
    );
}
