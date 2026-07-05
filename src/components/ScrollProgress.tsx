"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-[999]
        h-1
        bg-gradient-to-r
        from-[#8245EC]
        via-cyan-400
        to-[#8245EC]
      "
    />
  );
}