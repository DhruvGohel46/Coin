'use client';

import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export const GlassCard = ({ children, className, animate = true }: GlassCardProps) => {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.9, y: 20 } : false}
      animate={animate ? { opacity: 1, scale: 1, y: 0 } : false}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={animate ? { y: -5, scale: 1.02, rotateX: 2, rotateY: 2 } : {}}
      className={cn(
        "glass-card p-6 three-d-layer transition-shadow duration-300",
        className
      )}
    >
      <div className="inner-3d">
        {children}
      </div>
    </motion.div>
  );
};
