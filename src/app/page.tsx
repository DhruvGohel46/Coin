'use client';

import { Navbar } from '@/components/layout/Navbar';
import { CoinFlip } from '@/components/coin/CoinFlip';

export default function Home() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-white">
            {/* Ambient Fluid Background */}
            <div className="absolute inset-0 bg-linear-to-br from-[#ffffff] via-[#f0f4f8] to-[#e1e5ee] animate-ambient -z-10" />
            
            {/* Subtle Gradient Orbs to create refraction behind the glass */}
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-pink-50/50 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
            
            <Navbar />

            {/* Main Interactive Glass Container */}
            <div className="relative w-full max-w-lg aspect-square sm:aspect-video sm:max-w-4xl liquid-glass-heavy rounded-[3rem] flex flex-col items-center justify-center p-8 mt-16 mx-4">
                <CoinFlip />
            </div>
        </main>
    );
}
