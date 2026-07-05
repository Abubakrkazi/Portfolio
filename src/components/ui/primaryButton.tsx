interface Props {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
}: Props) {
  return (
    <button
      className="
      rounded-full
      bg-[#8245EC]
      px-8
      py-4
      font-semibold
      transition
      duration-300
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(130,69,236,.5)]
      "
    >
      {children}
    </button>
  );
}