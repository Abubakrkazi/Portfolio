"use client";

import { motion, useReducedMotion } from "framer-motion";

const circles = [
  {
    size: 260,
    top: "8%",
    left: "4%",
    color: "#8245EC",
    duration: 20,
    mobileVisible: true,
  },
  {
    size: 220,
    top: "58%",
    left: "78%",
    color: "#06B6D4",
    duration: 24,
    mobileVisible: true,
  },
  {
    size: 160,
    top: "32%",
    left: "52%",
    color: "#A855F7",
    duration: 18,
    mobileVisible: false,
  },
  {
    size: 190,
    top: "78%",
    left: "18%",
    color: "#3B82F6",
    duration: 22,
    mobileVisible: false,
  },
];

export default function FloatingBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        -z-20
        overflow-hidden
      "
    >
      {circles.map((circle, index) => (
        <motion.div
          key={`${circle.color}-${index}`}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 20, -12, 0],
                  y: [0, -25, 20, 0],
                  scale: [1, 1.05, 0.98, 1],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: circle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            backgroundColor: circle.color,
            willChange: shouldReduceMotion
              ? "auto"
              : "transform",
          }}
          className={`
            absolute
            rounded-full
            opacity-[0.05]
            blur-[80px]

            sm:opacity-[0.06]
            sm:blur-[90px]

            lg:opacity-[0.07]
            lg:blur-[110px]

            dark:opacity-[0.09]
            dark:sm:opacity-[0.10]
            dark:lg:opacity-[0.12]

            ${circle.mobileVisible ? "block" : "hidden md:block"}
          `}
        />
      ))}

      {/* Subtle overall purple ambience */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#8245EC]/[0.025]
          blur-[100px]

          sm:h-[450px]
          sm:w-[450px]

          lg:h-[600px]
          lg:w-[600px]

          dark:bg-[#8245EC]/[0.035]
        "
      />
    </div>
  );
}