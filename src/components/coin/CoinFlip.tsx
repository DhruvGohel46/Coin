'use client';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { flipCoin } from '@/utils/api';
import { IoSunnyOutline, IoCloudyNightOutline } from 'react-icons/io5';

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
            y: [-10, -250, 0],
            scale: [1, 1.1, 1],
            transition: { 
                duration: 1.6, 
                ease: [0.33, 1, 0.68, 1], // Custom bounce-like cubic-bezier
                y: { duration: 1.6, times: [0, 0.4, 1] }
            }
        });

        setRotation(totalRotation);
        setResult(response.result);
        setIsFlipping(false);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-16">
            <div className="relative w-80 h-80 perspective-[1500px]">
                <motion.div
                    animate={controls}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative w-full h-full cursor-pointer group"
                    onClick={handleFlip}
                >
                    {/* Front - Heads (Pristine White/Silver) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#ffffff] via-[#f8f9fa] to-[#e9ecef] rounded-full border-8 border-white backface-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1),inset_0_-10px_20px_rgba(0,0,0,0.05)]">
                        <div className="relative flex flex-col items-center">
                            <IoSunnyOutline className="text-black/80 text-8xl mb-4 relative z-10 font-light" />
                            <span className="text-black/80 font-black text-2xl tracking-[0.3em] relative z-10">DAY</span>
                        </div>
                    </div>

                    {/* Back - Tails (Soft Cool Gray) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] rounded-full border-8 border-white backface-hidden transform-[rotateY(180deg)] shadow-[0_30px_60px_rgba(0,0,0,0.1),inset_0_-10px_20px_rgba(0,0,0,0.05)]">
                        <div className="relative flex flex-col items-center">
                            <IoCloudyNightOutline className="text-black/70 text-8xl mb-4 relative z-10 font-light" />
                            <span className="text-black/70 font-black text-2xl tracking-[0.3em] relative z-10">NIGHT</span>
                        </div>
                    </div>
                </motion.div>

                {/* Minimalist Floating Label */}
                <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="absolute top-1/2 -right-16 translate-y-[-50%] z-20"
                >
                    <div className="flex items-center space-x-2 bg-white px-5 py-2.5 rounded-full border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                        <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em]">Live</span>
                    </div>
                </motion.div>
                
                {/* Visual Ground Shadow */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/4 rounded-full blur-xl" />
            </div>

            <div className="flex flex-col items-center space-y-6">
                <button
                    disabled={isFlipping}
                    onClick={handleFlip}
                    className="group relative px-12 py-5 bg-black text-white font-medium text-sm rounded-full overflow-hidden transition-all hover:bg-black/90 active:scale-95 disabled:opacity-50 shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
                >
                    <span className="relative z-10 uppercase tracking-[0.2em]">
                        {isFlipping ? 'Computing...' : 'Toss Coin'}
                    </span>
                    <motion.div 
                        initial={{ left: '-100%' }}
                        whileHover={{ left: '100%' }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-white/10 translate-y-0"
                    />
                </button>

                {result && !isFlipping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        className="text-sm font-medium text-black/60 uppercase tracking-[0.2em]"
                    >
                        Result: <span className="font-bold text-black">{result === 'heads' ? 'DAY' : 'NIGHT'}</span>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
