'use client';

import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="group relative p-3 rounded-2xl glass-card transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle Theme"
        >
            <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                {theme === 'light' ? (
                    <IoMoonOutline className="text-2xl text-slate-700" />
                ) : (
                    <IoSunnyOutline className="text-2xl text-amber-300" />
                )}
            </motion.div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
    );
};
