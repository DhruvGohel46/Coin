'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { CoinFlip } from '@/components/coin/CoinFlip';
import { IoArrowForwardOutline, IoSparklesOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

const stats = [
    { label: 'Integrity', value: '100%', sub: 'Provably Fair', icon: IoShieldCheckmarkOutline },
    { label: 'Velocity', value: '800ms', sub: 'Latency', icon: IoSparklesOutline },
    { label: 'Uptime', value: '99.9%', sub: 'Decentralized', icon: IoArrowForwardOutline },
];

import { TextReveal } from '@/components/ui/TextReveal';

import { DialSlider } from '@/components/ui/DialSlider';

export default function Home() {
    return (
        <main className="h-screen w-full flex flex-col bg-gradient-to-b from-[#f4f1ee] to-[#e4e1de] dark:from-[#1c1a19] dark:to-[#0f0e0e] overflow-hidden relative">
            <Navbar />

            {/* Main Interactive Experience */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 relative pt-20">
                {/* Header Text (Biosora Style) */}
                <div className="text-center space-y-2 mb-12">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-foreground/40 text-xs font-bold uppercase tracking-[0.4em]"
                    >
                        Session Protocol 04
                    </motion.p>
                    <div className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                        How Have You Been <br /> 
                        <span className="font-black italic">Deciding</span> Things?
                    </div>
                </div>

                <div className="relative mb-8">
                    <CoinFlip />
                </div>
            </div>

            {/* Bottom Controls (Biosora Style) */}
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-full pb-10"
            >
                <DialSlider value={78} label="Success Probability Rate" />
            </motion.div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
        </main>
    );
}
