'use client';

import { motion } from 'framer-motion';
import { IoChevronBack, IoCheckmark } from 'react-icons/io5';

export const DialSlider = ({ value, label }: { value: number; label: string }) => {
    return (
        <div className="w-full max-w-sm mx-auto px-8 py-12 flex flex-col items-center">
            {/* Dial Graphic */}
            <div className="relative w-full h-24 mb-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex justify-center opacity-30 translate-y-8">
                    {Array.from({ length: 41 }).map((_, i) => (
                        <div 
                            key={i} 
                            style={{ transform: `rotate(${(i - 20) * 4}deg) translateY(-80px)` }}
                            className={`absolute w-px ${i % 5 === 0 ? 'h-6 bg-black' : 'h-3 bg-black/40'}`}
                        />
                    ))}
                </div>
                <div className="text-6xl font-black text-black">{value}</div>
            </div>
            
            <div className="text-black/40 text-xs font-bold uppercase tracking-[0.3em] mb-12">
                {label}
            </div>

            {/* Navigation Buttons (Minimalist style) */}
            <div className="flex items-center justify-between w-full">
                <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white transition-all hover:bg-black/5 active:scale-90 text-black">
                    <IoChevronBack className="text-lg" />
                </button>
                <div className="flex space-x-1.5">
                    <div className="w-8 h-1 bg-black/10 rounded-full" />
                    <div className="w-8 h-1 bg-black rounded-full" />
                    <div className="w-8 h-1 bg-black/10 rounded-full" />
                </div>
                <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all hover:bg-black/90 active:scale-90">
                    <IoCheckmark className="text-lg" />
                </button>
            </div>
        </div>
    );
};
