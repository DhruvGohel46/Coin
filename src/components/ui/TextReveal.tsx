'use client';

import { motion } from 'framer-motion';

export const TextReveal = ({ text }: { text: string }) => {
    const characters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child: import('framer-motion').Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                    className="inline-block"
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};
