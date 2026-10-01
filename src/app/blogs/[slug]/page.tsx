import type { Metadata } from "next";

interface BlogDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatSlug(slug: string) {
  return decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = formatSlug(slug);

  const description = `Read "${title}" by Abubakr Kazi.`;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const title = formatSlug(slug);

  return (
    <main
      className="
        min-h-screen
        bg-[var(--background)]
        pt-20
        text-[var(--foreground)]
      "
    >
      <section
        className="
          relative
          flex
          min-h-[calc(100vh-5rem)]
          items-center
          justify-center
          overflow-hidden
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:px-8
        "
      >
        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-64
            w-64
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#8245EC]/10
            blur-[100px]

            sm:h-80
            sm:w-80

            dark:bg-[#8245EC]/15
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-3xl
            text-center
          "
        >
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
            Blog Article
          </p>

          <h1
            className="
              mt-4
              break-words
              text-3xl
              font-black
              tracking-tight
              text-slate-900

              sm:text-4xl
              md:text-5xl

              dark:text-white
            "
          >
            {title}
          </h1>

          <p
            className="
              mx-auto
              mt-5
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
            Blog details will be available here.
          </p>
        </div>
      </section>
    </main>
  );
}