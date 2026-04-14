'use client';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { flipCoin } from '@/utils/api';

export const CoinFlip = () => {
    const [isFlipping, setIsFlipping] = useState(false);
    const [result, setResult] = useState<'heads' | 'tails' | null>(null);
    const controls = useAnimation();
    const [rotation, setRotation] = useState(0);

    const handleFlip = async () => {
        if (isFlipping) return;
        
        setIsFlipping(true);
        setResult(null);

        // Call API
        const response: any = await flipCoin();
        
        // Random number of full rotations plus target face
        // Each 180 deg is a face swap
        const extraRotations = (Math.floor(Math.random() * 5) + 5) * 360; 
        const targetRotation = response.result === 'heads' ? 0 : 180;
        const totalRotation = rotation + extraRotations + targetRotation;

        await controls.start({
            rotateY: totalRotation,
            y: [-10, -280, 0],
            scale: [1, 1.15, 1],
            transition: { 
                duration: 1.8, 
                ease: [0.33, 1, 0.68, 1], // Custom bounce-like cubic-bezier
                y: { duration: 1.8, times: [0, 0.4, 1] }
            }
        });

        setRotation(totalRotation);
        setResult(response.result);
        setIsFlipping(false);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-12">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 perspective-[2000px]">
                <motion.div
                    animate={controls}
                    className="relative w-full h-full cursor-pointer preserve-3d"
                    onClick={handleFlip}
                >
                    {/* Solid Edge/Thickness implementation using multiple layers */}
                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-gray-300 via-white to-gray-200 transform-[translateZ(0px)] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-2 border-white" />
                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-gray-200 via-white to-gray-300 transform-[translateZ(-5px)]" />
                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-gray-300 via-white to-gray-200 transform-[translateZ(-10px)]" />

                    {/* Front - Heads (Liquid Glass Interface) */}
                    <div className="absolute inset-0 rounded-full liquid-glass backface-hidden transform-[translateZ(10px)] overflow-hidden border-2 border-white/90">
                        <div className="relative flex flex-col items-center justify-center w-full h-full bg-white/20 shadow-[inset_0_0_40px_rgba(255,255,255,1)]">
                            {/* Specular curved lighting overlay */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-linear-to-b from-white to-white/0 rounded-full blur-[2px] opacity-90" />
                            <span className="text-black/80 font-black text-4xl sm:text-5xl tracking-[0.3em] relative z-10 ml-2 drop-shadow-md">HEADS</span>
                        </div>
                    </div>

                    {/* Back - Tails (Liquid Glass Interface) */}
                    <div className="absolute inset-0 rounded-full liquid-glass backface-hidden transform-[rotateY(180deg)_translateZ(10px)] overflow-hidden border-2 border-white/90">
                        <div className="relative flex flex-col items-center justify-center w-full h-full bg-slate-50/30 shadow-[inset_0_0_40px_rgba(255,255,255,1)]">
                            {/* Specular curved lighting overlay */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-linear-to-b from-white to-white/0 rounded-full blur-[2px] opacity-90" />
                            <span className="text-black/70 font-black text-4xl sm:text-5xl tracking-[0.3em] relative z-10 ml-2 drop-shadow-md">TAILS</span>
                        </div>
                    </div>
                </motion.div>
                
                {/* Ground Ambient Reflection/Shadow */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-56 h-8 bg-black/5 rounded-full blur-2xl" />
            </div>

            <div className="flex flex-col items-center space-y-6 pt-8">
                <button
                    disabled={isFlipping}
                    onClick={handleFlip}
                    className="group relative px-14 py-4 liquid-glass-heavy text-black font-extrabold text-xs rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                    <span className="relative z-10 uppercase tracking-[0.3em]">
                        {isFlipping ? 'Computing...' : 'Toss Coin'}
                    </span>
                    <motion.div 
                        initial={{ left: '-100%' }}
                        whileHover={{ left: '100%' }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-white/40 translate-y-0"
                    />
                </button>

                {/* Smooth Result Reveal */}
                <div className="h-6">
                    {result && !isFlipping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            className="text-xs font-black text-black/40 uppercase tracking-[0.4em]"
                        >
                            Result: <span className="text-black ml-2">{result}</span>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};
