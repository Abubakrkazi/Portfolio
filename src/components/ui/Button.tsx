"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: Props) {
  return (
    <motion.button
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.05,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.96,
            }
      }
      transition={{
        duration: 0.2,
      }}
      type={type}
      onClick={onClick}
      disabled={disabled}
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
        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:hover:shadow-none
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}