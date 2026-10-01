"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const glowSize = 320;

  const mouseX = useMotionValue(-glowSize);
  const mouseY = useMotionValue(-glowSize);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateDevice = () => {
      setEnabled(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!enabled || shouldReduceMotion) return;

    let animationFrame: number | null = null;

    const move = (event: MouseEvent) => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        mouseX.set(event.clientX - glowSize / 2);
        mouseY.set(event.clientY - glowSize / 2);
      });
    };

    const hideGlow = () => {
      mouseX.set(-glowSize);
      mouseY.set(-glowSize);
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    document.addEventListener("mouseleave", hideGlow);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hideGlow);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [
    enabled,
    shouldReduceMotion,
    mouseX,
    mouseY,
    glowSize,
  ]);

  if (!enabled || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x,
        y,
        willChange: "transform",
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        hidden
        h-[320px]
        w-[320px]
        rounded-full
        bg-[#8245EC]/[0.07]
        blur-[100px]

        md:block
        lg:h-[360px]
        lg:w-[360px]
        lg:bg-[#8245EC]/[0.08]
        lg:blur-[120px]

        xl:h-[400px]
        xl:w-[400px]

        dark:bg-[#8245EC]/[0.12]
        dark:lg:bg-[#8245EC]/[0.14]
      "
    />
  );
}