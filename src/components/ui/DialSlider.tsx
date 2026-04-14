'use client';

import { motion } from 'framer-motion';
import { IoChevronBack, IoCheckmark } from 'react-icons/io5';

export const DialSlider = ({ value, label }: { value: number; label: string }) => {
    return (
        <div className="w-full max-w-sm mx-auto px-8 py-12 flex flex-col items-center">
            {/* Dial Graphic */}
            <div className="relative w-full h-24 mb-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex justify-center opacity-20 translate-y-8">
                    {Array.from({ length: 41 }).map((_, i) => (
                        <div 
                            key={i} 
                            style={{ transform: `rotate(${(i - 20) * 4}deg) translateY(-80px)` }}
                            className={`absolute w-[1px] ${i % 5 === 0 ? 'h-6 bg-foreground' : 'h-3 bg-foreground/50'}`}
                        />
                    ))}
                </div>
                <div className="text-6xl font-black">{value}</div>
            </div>
            
            <div className="text-foreground/40 text-xs font-bold uppercase tracking-[0.3em] mb-12">
                {label}
            </div>

            {/* Navigation Buttons (Biosora style) */}
            <div className="flex items-center justify-between w-full">
                <button className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center bg-white/50 backdrop-blur-sm transition-all active:scale-90">
                    <IoChevronBack className="text-lg" />
                </button>
                <div className="flex space-x-1">
                    <div className="w-8 h-1 bg-foreground/10 rounded-full" />
                    <div className="w-8 h-1 bg-foreground rounded-full" />
                    <div className="w-8 h-1 bg-foreground/10 rounded-full" />
                </div>
                <button className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg transition-all active:scale-90">
                    <IoCheckmark className="text-lg" />
                </button>
            </div>
        </div>
    );
};
