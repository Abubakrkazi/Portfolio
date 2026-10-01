import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        max-w-full
        items-center
        justify-center
        rounded-full
        border
        border-[#8245EC]/30
        bg-[#8245EC]/10
        px-3
        py-1.5
        text-xs
        font-semibold
        leading-none
        text-[#8245EC]
        transition-colors
        duration-300

        sm:px-4
        sm:text-sm

        dark:border-[#8245EC]/40
        dark:bg-[#8245EC]/15
        dark:text-[#d8c3ff]

        ${className}
      `}
    >
      {children}
    </span>
  );
}