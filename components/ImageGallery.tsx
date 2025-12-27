"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageGalleryProps {
    images: string[];
    alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Filter out empty strings just in case
    const validImages = images.filter((img) => img);

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const scrollPosition = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;

        // Calculate the current index based on scroll position
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    if (validImages.length === 0) {
        return (
            <div className="relative w-full aspect-[4/5] bg-white/5 overflow-hidden flex items-center justify-center">
                <span className="text-xs uppercase opacity-30">No Image</span>
            </div>
        );
    }

    return (
        <div className="relative w-full">
            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide aspect-[4/5]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {validImages.map((src, index) => (
                    <div
                        key={index}
                        className="relative min-w-full w-full h-full snap-center bg-white/5"
                    >
                        <Image
                            src={src}
                            alt={`${alt} - View ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Dots Indicator */}
            {validImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    {validImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (scrollRef.current) {
                                    scrollRef.current.scrollTo({
                                        left: index * scrollRef.current.offsetWidth,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "bg-white w-3"
                                    : "bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
