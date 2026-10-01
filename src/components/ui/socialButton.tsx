"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SocialButtonProps {
  href: string;
  children: ReactNode;
  label: string;
  className?: string;
}

export default function SocialButton({
  href,
  children,
  label,
  className = "",
}: SocialButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const isExternal =
    href.startsWith("http://") || href.startsWith("https://");

  return (
    <motion.a
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.06,
              y: -3,
            }
      }
      whileTap={
        shouldReduceMotion
          ? undefined
          : {
              scale: 0.96,
            }
      }
      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
      className={`
        inline-flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-[#8245EC]/25
        bg-[#8245EC]/5
        text-slate-700
        shadow-sm
        transition-[background-color,border-color,color,box-shadow]
        duration-300

        hover:border-[#8245EC]
        hover:bg-[#8245EC]
        hover:text-white
        hover:shadow-[0_8px_24px_rgba(130,69,236,0.25)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#8245EC]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white

        sm:h-11
        sm:w-11

        md:h-12
        md:w-12

        dark:border-[#8245EC]/30
        dark:bg-white/[0.04]
        dark:text-gray-300

        dark:hover:border-[#8245EC]
        dark:hover:bg-[#8245EC]
        dark:hover:text-white

        dark:focus-visible:ring-offset-[#081b29]

        ${className}
      `}
    >
      {children}
    </motion.a>
  );
}