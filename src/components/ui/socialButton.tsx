"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function SocialButton({
  href,
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -5,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Link
        href={href}
        className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-[#8245EC]/30
        bg-[#111827]
        transition-all
        hover:bg-[#8245EC]
        hover:text-white
        "
      >
        {children}
      </Link>
    </motion.div>
  );
}