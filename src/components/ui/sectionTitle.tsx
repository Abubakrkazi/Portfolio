interface Props {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="uppercase tracking-[6px] text-[#8245EC] font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}