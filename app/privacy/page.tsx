import Link from "next/link";

export default function PrivacyPage() {
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
                        Privacy Policy
                    </h1>
                </header>

                <section className="space-y-6 font-sans text-sm leading-relaxed opacity-70">
                    <p>
                        Your privacy matters.
                    </p>
                    <p>
                        We collect only the information necessary to:
                    </p>
                    <ul className="list-disc pl-4 space-y-2 opacity-80">
                        <li>process your order</li>
                        <li>deliver your product</li>
                        <li>provide customer support</li>
                    </ul>
                    <p>
                        We do not sell, rent, or misuse your data.
                    </p>
                    <p>
                        Personal information is used responsibly and stored securely.
                        We do not track behavior beyond what is required for basic website functionality.
                    </p>
                </section>
            </div>
        </div>
    );
}
