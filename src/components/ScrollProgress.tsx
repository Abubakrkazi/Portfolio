"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX: shouldReduceMotion
          ? scrollYProgress
          : smoothProgress,
        transformOrigin: "0% 50%",
      }}
      className="
        pointer-events-none
        fixed
        left-0
        right-0
        top-0
        z-[999]
        h-[3px]
        bg-gradient-to-r
        from-[#8245EC]
        via-cyan-400
        to-[#8245EC]

        sm:h-1
      "
    >
      {/* Subtle glow */}
      <div
        className="
          absolute
          inset-0
          bg-inherit
          opacity-40
          blur-[4px]
        "
      />
    </motion.div>
  );
}