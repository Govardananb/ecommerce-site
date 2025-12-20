export default function OwnershipPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-background animate-fade-in">
            <div className="max-w-3xl mx-auto space-y-24">

                {/* Intro */}
                <header className="space-y-6">
                    <h1 className="font-serif text-5xl md:text-6xl italic leading-none opacity-90">
                        Product Identity System.
                    </h1>
                    <p className="font-sans text-sm tracking-widest uppercase opacity-50 border-l border-white/20 pl-4 py-1">
                        Ownership, Made Visible
                    </p>
                </header>

                {/* Core Concept */}
                <section className="space-y-8 font-sans text-sm leading-relaxed opacity-80 max-w-xl">
                    <p>
                        When you purchase one of our products, you don’t just receive the item.
                        You receive a digital identity that proves you own it and records your place in our brand’s history.
                    </p>
                    <p className="border-b border-white/10 pb-8">
                        This identity is permanent, public, and free to access.
                    </p>
                </section>

                {/* Grid Modules */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                    {/* Module 1 */}
                    <div className="space-y-4">
                        <h2 className="font-serif text-2xl italic opacity-90">What Comes With the Product</h2>
                        <ul className="space-y-4 font-sans text-xs tracking-wide opacity-60">
                            <li>Inside every product package, you will find a small card with a QR code.</li>
                            <li>This QR code is not a promotion.</li>
                            <li>It is not a coupon.</li>
                            <li className="text-accent opacity-100">It is a proof of ownership.</li>
                        </ul>
                    </div>

                    {/* Module 2 */}
                    <div className="space-y-4">
                        <h2 className="font-serif text-2xl italic opacity-90">What Happens When You Scan</h2>
                        <ol className="space-y-4 font-sans text-xs tracking-wide opacity-60 list-decimal list-inside">
                            <li>You scan the QR code using your phone</li>
                            <li>It opens a public webpage</li>
                            <li>That page displays your product’s identity record</li>
                        </ol>
                        <p className="font-sans text-xs opacity-40 pt-2">
                            No login. No app. No wallet. Just a page that exists independently on the internet.
                        </p>
                    </div>

                </div>

                {/* Identity Breakdown */}
                <section className="bg-white/5 p-8 md:p-12 space-y-8">
                    <h2 className="font-serif text-3xl italic opacity-90">What the Identity Page Shows</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs tracking-widest uppercase opacity-70">
                        <div className="space-y-4">
                            <div className="border-b border-white/10 pb-2">Unique Asset ID</div>
                            <div className="border-b border-white/10 pb-2">Product Name & Edition</div>
                            <div className="border-b border-white/10 pb-2">Date Issued</div>
                        </div>
                        <div className="space-y-4">
                            <div className="border-b border-white/10 pb-2">Ownership State</div>
                            <div className="border-b border-white/10 pb-2">Heritage Note</div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Sections */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <h3 className="font-serif text-xl italic opacity-80">Why This Is Different From a Receipt</h3>
                        <p className="font-sans text-sm leading-loose opacity-60">
                            Receipts disappear. Accounts get deleted. Platforms change.
                            This identity page is publicly accessible, has a permanent link, and does not depend on any app.
                            <span className="block mt-4 text-accent opacity-100">As long as the internet exists, the record exists.</span>
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-serif text-xl italic opacity-80">What “Ownership State” Means</h3>
                        <p className="font-sans text-sm leading-loose opacity-60">
                            We don’t label people as customers. Each identity includes a state, based on when the product was acquired.
                            States like <span className="text-white">Early Holder</span>, <span className="text-white">First Observer</span>, or <span className="text-white">Archive Member</span> cannot be purchased later or upgraded. They exist to acknowledge timing, not spending.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-serif text-xl italic opacity-80">Does This Collect Personal Data?</h3>
                        <div className="font-sans text-sm tracking-widest uppercase opacity-50 space-y-2">
                            <p>No name.</p>
                            <p>No email.</p>
                            <p>No tracking.</p>
                            <p>No login.</p>
                            <p className="pt-4 normal-case tracking-normal opacity-100 text-white">The identity records the product, not the person.</p>
                        </div>
                    </div>
                </div>

                {/* Footer Statement */}
                <footer className="pt-24 border-t border-white/10 text-center space-y-6">
                    <h2 className="font-serif text-3xl italic opacity-90">Why We Built This</h2>
                    <p className="font-sans text-sm opacity-60 max-w-lg mx-auto leading-relaxed">
                        Because ownership should feel acknowledged, not invisible.
                        This system exists to respect the people who choose our work and to preserve their place in it.
                    </p>
                </footer>

            </div>
        </div>
    );
}
