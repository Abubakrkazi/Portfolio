interface Props {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-[#8245EC]
      px-4
      py-1.5
      text-sm
      font-medium
      text-white
      "
    >
      {children}
    </span>
  );
}