export default function StoryPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 bg-background animate-fade-in">
            <div className="max-w-3xl mx-auto space-y-24">

                {/* Header */}
                <header className="space-y-6">
                    <span className="text-xs font-sans tracking-[0.2em] uppercase opacity-50">Brand Story</span>
                    <h1 className="font-serif text-5xl md:text-6xl italic leading-none opacity-90">
                        The Origin Narrative.
                    </h1>
                </header>

                {/* Main Content */}
                <section className="space-y-8 font-sans text-muted leading-loose text-sm md:text-base opacity-80">
                    <p>
                        In a world of manufactured personas and algorithmic performances, Yedhart was born from a simple question:
                        <span className="italic text-foreground"> What if we stopped performing and started being?</span>
                    </p>
                    <p>
                        Yedhart Club is not for the loudest voice in the room—it's for the person listening, observing, building something real while everyone else chases validation. It's for the designer who codes at 2 AM, the athlete training in silence, the artist refining their craft in shadows.
                    </p>
                    <p>
                        We believe authenticity isn't a marketing term—it's a discipline. "Real heart" means showing up daily with genuine intention, staying true when no one's watching, and building a legacy that outlives the trends.
                    </p>
                    <p className="border-l-2 border-accent/50 pl-4 italic text-foreground opacity-90 my-12">
                        Each piece we create is a wearable reminder: keep it real, stay building, trust the process.
                    </p>
                </section>

                {/* Footer Quote */}
                <footer className="pt-24 border-t border-white/10 text-center space-y-6">
                    <p className="font-serif text-2xl italic opacity-90">
                        "Substance over spectacle."
                    </p>
                </footer>

            </div>
        </div>
    );
}
