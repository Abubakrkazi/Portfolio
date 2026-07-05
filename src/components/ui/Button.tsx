"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      type={type}
      onClick={onClick}
      className={`
        rounded-full
        bg-[#8245EC]
        px-8
        py-4
        font-semibold
        text-white
        shadow-lg
        transition
        hover:shadow-[0_0_30px_rgba(130,69,236,.45)]
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}