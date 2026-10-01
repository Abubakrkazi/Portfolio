"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="
          h-10
          w-10
          shrink-0
          rounded-full
          border
          border-slate-200
          bg-slate-100

          sm:h-11
          sm:w-11

          dark:border-white/10
          dark:bg-white/[0.04]
        "
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      title={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.06,
              y: -2,
            }
      }
      whileTap={
        shouldReduceMotion
          ? undefined
          : {
              scale: 0.95,
            }
      }
      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
      className="
        group
        relative
        inline-flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-slate-200
        bg-white/80
        text-slate-700
        shadow-sm
        backdrop-blur-xl
        transition-[background-color,border-color,color,box-shadow]
        duration-300

        hover:border-[#8245EC]/60
        hover:bg-[#8245EC]/10
        hover:text-[#8245EC]
        hover:shadow-[0_8px_24px_rgba(130,69,236,0.18)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#8245EC]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white

        sm:h-11
        sm:w-11

        dark:border-white/10
        dark:bg-white/[0.04]
        dark:text-white
        dark:shadow-none

        dark:hover:border-[#8245EC]/70
        dark:hover:bg-[#8245EC]/10
        dark:hover:shadow-[0_8px_24px_rgba(130,69,236,0.25)]

        dark:focus-visible:ring-offset-[#081b29]
      "
    >
      {isDark ? (
        <Sun
          size={20}
          aria-hidden="true"
          className="
            text-amber-400
            transition-transform
            duration-300
            group-hover:rotate-45
          "
        />
      ) : (
        <Moon
          size={20}
          aria-hidden="true"
          className="
            text-[#8245EC]
            transition-transform
            duration-300
            group-hover:-rotate-12
          "
        />
      )}
    </motion.button>
  );
}