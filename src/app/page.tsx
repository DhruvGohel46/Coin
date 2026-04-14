'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { CoinFlip } from '@/components/coin/CoinFlip';
import { DialSlider } from '@/components/ui/DialSlider';

export default function Home() {
    return (
        <main className="h-screen w-full flex flex-col bg-white overflow-hidden relative">
            <Navbar />

            {/* Main Interactive Experience */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 relative pt-20">
                {/* Header Text */}
                <div className="text-center space-y-2 mb-12">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-black/40 text-xs font-bold uppercase tracking-[0.4em]"
                    >
                        Session Protocol 04
                    </motion.p>
                    <div className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-black">
                        How Have You Been <br /> 
                        <span className="font-black italic">Deciding</span> Things?
                    </div>
                </div>

                <div className="relative mb-8">
                    <CoinFlip />
                </div>
            </div>

            {/* Bottom Controls */}
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-full pb-10"
            >
                <DialSlider value={78} label="Success Probability Rate" />
            </motion.div>

            {/* Subtle Gradient Overlay for Depth */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-black/2 via-transparent to-black/3" />
        </main>
    );
}
