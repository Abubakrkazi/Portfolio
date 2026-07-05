interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-5
      py-4
      text-white
      outline-none
      transition-all
      placeholder:text-gray-400
      focus:border-[#8245EC]
      focus:ring-2
      focus:ring-[#8245EC]/30
      ${className}
      `}
    />
  );
}