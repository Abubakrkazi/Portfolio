"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

import type { ReactNode } from "react";

interface PrimaryButtonProps
  extends Omit<
    HTMLMotionProps<"button">,
    "children"
  > {
  children: ReactNode;
  className?: string;
}

export default function PrimaryButton({
  children,
  className = "",
  type = "button",
  disabled = false,
  ...props
}: PrimaryButtonProps) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <motion.button
      {...props}
      type={type}
      disabled={disabled}
      whileHover={
        disabled || shouldReduceMotion
          ? undefined
          : {
              scale: 1.02,
              y: -2,
            }
      }
      whileTap={
        disabled || shouldReduceMotion
          ? undefined
          : {
              scale: 0.98,
            }
      }
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`
        inline-flex
        min-h-11
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#8245EC]
        px-5
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-[0_8px_25px_rgba(130,69,236,0.22)]
        transition-colors
        duration-300

        hover:bg-[#7338df]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#8245EC]
        focus-visible:ring-offset-2

        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-50

        dark:focus-visible:ring-offset-[#050414]

        sm:px-6
        sm:py-3
        sm:text-base

        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}