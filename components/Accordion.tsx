"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left group"
            >
                <span className="font-sans text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    {title}
                </span>
                <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                    {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={1} />
                    ) : (
                        <Plus className="w-4 h-4" strokeWidth={1} />
                    )}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="font-sans text-sm leading-loose text-muted opacity-80">
                    {children}
                </div>
            </div>
        </div>
    );
}
