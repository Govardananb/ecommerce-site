import Link from "next/link";

export default function ContactPage() {
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
                        Contact
                    </h1>
                </header>

                <section className="space-y-6 font-sans text-sm leading-relaxed opacity-70">
                    <p>
                        We prefer clear, direct communication.
                    </p>
                    <p>
                        If you have questions about your order, sizing, delivery, or anything else, you can contact us through the details provided on this page.
                    </p>
                    <div className="py-4 space-y-2">
                        <p className="opacity-60 text-xs uppercase tracking-widest">Email</p>
                        <a href="mailto:gifinitydfx@gmail.com" className="block text-lg hover:opacity-70 transition-opacity">
                            gifinitydfx@gmail.com
                        </a>
                    </div>
                    <p>
                        We usually respond within 24–48 working hours.
                    </p>
                    <p>
                        Please include your order ID (if applicable) so we can help you faster.
                    </p>
                </section>
            </div>
        </div>
    );
}
