"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="
        group
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-110
        hover:border-[#8245EC]
        hover:bg-[#8245EC]/10
        hover:shadow-[0_0_25px_rgba(130,69,236,0.35)]
        active:scale-95
      "
    >
      {isDark ? (
        <Sun
          size={22}
          className="
            text-yellow-400
            transition-all
            duration-300
            group-hover:rotate-180
          "
        />
      ) : (
        <Moon
          size={22}
          className="
            text-[#8245EC]
            transition-all
            duration-300
            group-hover:-rotate-12
          "
        />
      )}
    </button>
  );
}