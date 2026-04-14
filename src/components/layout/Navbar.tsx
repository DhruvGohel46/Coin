'use client';

import { motion } from 'framer-motion';
import { IoInfinite } from 'react-icons/io5';

export const Navbar = () => {
    return (
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 flex items-center justify-between w-[90%] max-w-2xl liquid-glass rounded-full"
        >
            <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-full border-2 border-black/80 flex items-center justify-center bg-white/50 backdrop-blur-md shadow-sm">
                    <IoInfinite className="text-black/80 text-sm" />
                </div>
                <span className="text-sm font-black tracking-widest uppercase whitespace-nowrap text-black/80">
                    FLIP A COIN
                </span>
            </div>

            <button className="px-5 py-2.5 rounded-full bg-black/90 text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95 transition-all hover:bg-black">
                SKIP
            </button>
        </motion.nav>
    );
};
