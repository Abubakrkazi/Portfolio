"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  hover?: boolean;
  className?: string;
}

export default function AnimatedCard({
  children,
  delay = 0,
  duration = 0.5,
  distance = 30,
  hover = false,
  className = "",
}: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: distance,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      whileHover={
        hover && !shouldReduceMotion
          ? {
              y: -5,
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}