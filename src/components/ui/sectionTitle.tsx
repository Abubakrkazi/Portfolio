interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`
        mx-auto
        mb-10
        w-full
        max-w-3xl
        text-center

        sm:mb-14
        md:mb-16

        ${className}
      `}
    >
      {/* Subtitle */}
      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[4px]
          text-[#8245EC]

          sm:text-sm
          sm:tracking-[6px]
        "
      >
        {subtitle}
      </p>

      {/* Title */}
      <h2
        className="
          mt-3
          text-3xl
          font-black
          tracking-tight
          text-slate-900

          sm:mt-4
          sm:text-4xl

          md:text-5xl

          dark:text-white
        "
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-slate-600

            sm:mt-6
            sm:text-base
            sm:leading-8

            dark:text-gray-400
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}