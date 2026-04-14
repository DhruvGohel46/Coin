'use client';

import { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { flipCoin } from '@/utils/api';
import { IoDiamondOutline, IoFlameOutline } from 'react-icons/io5';

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
            scale: [1, 1.2, 1],
            transition: { 
                duration: 1.5, 
                ease: [0.33, 1, 0.68, 1], // Custom bounce-like cubic-bezier
                y: { duration: 1.5, times: [0, 0.4, 1] }
            }
        });

        setRotation(totalRotation);
        setResult(response.result);
        setIsFlipping(false);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-12">
            <div className="relative w-72 h-72 [perspective:1500px]">
                <motion.div
                    animate={controls}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative w-full h-full cursor-pointer"
                    onClick={handleFlip}
                >
                    {/* Front - Heads (Rose Gold/Metallic) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#d4af37] via-[#fcf6ba] to-[#aa771c] rounded-full border-[10px] border-[#aa771c]/30 [backface-visibility:hidden] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                        <div className="relative flex flex-col items-center">
                            <div className="absolute -inset-4 bg-white/20 blur-xl rounded-full" />
                            <IoDiamondOutline className="text-[#5c4033] text-7xl mb-2 relative z-10" />
                            <span className="text-[#5c4033] font-black text-xl tracking-widest relative z-10">HEADS</span>
                        </div>
                    </div>

                    {/* Back - Tails (Chrome Metallic) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 via-white to-slate-400 rounded-full border-[10px] border-slate-300/30 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                        <div className="relative flex flex-col items-center">
                             <div className="absolute -inset-4 bg-black/5 blur-xl rounded-full" />
                            <IoFlameOutline className="text-slate-700 text-7xl mb-2 relative z-10" />
                            <span className="text-slate-700 font-black text-xl tracking-widest relative z-10">TAILS</span>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Label (Biosora Style) */}
                <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="absolute top-1/2 -right-12 translate-y-[-50%] z-20"
                >
                    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-lg">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        <span className="text-xs font-bold text-black uppercase tracking-tighter">Coin v1.02</span>
                    </div>
                </motion.div>
                
                {/* Visual Ground Shadow */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/10 rounded-full blur-2xl" />
            </div>

            <div className="flex flex-col items-center space-y-4">
                <button
                    disabled={isFlipping}
                    onClick={handleFlip}
                    className="group relative px-10 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95 disabled:opacity-70"
                >
                    <span className="relative z-10 uppercase tracking-widest">
                        {isFlipping ? 'Calculated Flight...' : 'Flip Reality'}
                    </span>
                    <motion.div 
                        initial={{ left: '-100%' }}
                        whileHover={{ left: '100%' }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-white/20 translate-y-0"
                    />
                </button>

                {result && !isFlipping && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold text-primary capitalize"
                    >
                        Success: {result}
                    </motion.p>
                )}
            </div>
        </div>
    );
};
