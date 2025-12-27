export function ProductSkeleton() {
    return (
        <div className="space-y-4 h-full flex flex-col relative animate-pulse">
            {/* Image Placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden bg-white/5" />

            {/* Content Placeholder */}
            <div className="space-y-2 flex-grow flex flex-col">
                {/* Title Line */}
                <div className="h-6 bg-white/10 w-3/4 rounded-sm" />

                {/* Pinned Bottom Area */}
                <div className="pt-4 mt-auto flex justify-between items-baseline gap-4 border-t border-white/5">
                    <div className="h-4 bg-white/10 w-16 rounded-sm" />
                </div>
            </div>
        </div>
    );
}
