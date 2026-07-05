"use client";

import { motion } from "framer-motion";

const circles = [
  {
    size: 250,
    top: "10%",
    left: "5%",
    color: "#8245EC",
    duration: 18,
  },
  {
    size: 180,
    top: "60%",
    left: "80%",
    color: "#06B6D4",
    duration: 22,
  },
  {
    size: 120,
    top: "35%",
    left: "55%",
    color: "#A855F7",
    duration: 15,
  },
  {
    size: 160,
    top: "80%",
    left: "20%",
    color: "#3B82F6",
    duration: 20,
  },
];

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">

      {circles.map((circle, index) => (

        <motion.div
          key={index}
          animate={{
            y: [-40, 40, -40],
            x: [-20, 20, -20],
          }}
          transition={{
            repeat: Infinity,
            duration: circle.duration,
            ease: "easeInOut",
          }}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            background: circle.color,
          }}
          className="
            absolute
            rounded-full
            opacity-10
            blur-[120px]
          "
        />

      ))}

    </div>
  );
}