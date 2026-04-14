'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '../ui/ThemeToggle';
import { IoStatsChartOutline, IoHomeOutline, IoSettingsOutline, IoInfinite } from 'react-icons/io5';

const navItems = [
    { icon: IoHomeOutline, label: 'Home', active: true },
    { icon: IoStatsChartOutline, label: 'Stats' },
    { icon: IoSettingsOutline, label: 'Preferences' }
];

export const Navbar = () => {
    return (
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex items-center justify-between"
        >
            <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
                    <IoInfinite className="text-foreground text-sm" />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase whitespace-nowrap text-foreground">
                    FLIP A COIN
                </span>
            </div>

            <button className="px-6 py-2 rounded-full bg-white/50 backdrop-blur-md text-xs font-bold uppercase tracking-widest border border-white shadow-sm hover:scale-105 active:scale-95 transition-all">
                SKIP
            </button>
        </motion.nav>
    );
};
