import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  disabled,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      disabled={disabled}
      className={`
        w-full
        min-w-0
        rounded-xl
        border
        border-slate-200
        bg-white
        px-4
        py-3
        text-sm
        text-slate-900
        outline-none
        transition-all
        duration-300

        placeholder:text-slate-400

        hover:border-slate-300

        focus:border-[#8245EC]
        focus:ring-2
        focus:ring-[#8245EC]/20

        disabled:cursor-not-allowed
        disabled:bg-slate-100
        disabled:opacity-60

        sm:rounded-2xl
        sm:px-5
        sm:py-4
        sm:text-base

        dark:border-white/10
        dark:bg-white/[0.04]
        dark:text-white
        dark:placeholder:text-gray-500

        dark:hover:border-white/20

        dark:focus:border-[#8245EC]
        dark:focus:bg-white/[0.055]
        dark:focus:ring-[#8245EC]/30

        dark:disabled:bg-white/[0.03]

        ${className}
      `}
    />
  );
}