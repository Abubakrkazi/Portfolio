import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300

        hover:border-[#8245EC]/50
        hover:shadow-[0_12px_35px_rgba(130,69,236,0.12)]

        sm:rounded-3xl
        sm:p-6

        md:p-7

        dark:border-white/10
        dark:bg-white/[0.04]
        dark:shadow-none
        dark:hover:border-[#8245EC]/60
        dark:hover:bg-white/[0.055]
        dark:hover:shadow-[0_12px_35px_rgba(130,69,236,0.16)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}