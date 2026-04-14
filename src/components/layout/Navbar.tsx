'use client';

import { motion } from 'framer-motion';
import { IoInfinite } from 'react-icons/io5';

export const Navbar = () => {
    return (
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex items-center justify-between"
        >
            <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                    <IoInfinite className="text-black text-sm" />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-black">
                    FLIP A COIN
                </span>
            </div>

            <button className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest border border-black/10 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:scale-105 active:scale-95 transition-all hover:bg-black/5">
                SKIP
            </button>
        </motion.nav>
    );
};
