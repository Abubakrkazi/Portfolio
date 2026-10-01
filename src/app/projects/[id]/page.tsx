import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FolderKanban } from "lucide-react";

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

function formatProjectId(id: string) {
  return decodeURIComponent(id)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const projectTitle = formatProjectId(id);

  const description = `Explore ${projectTitle}, a project built by Abubakr Kazi.`;

  return {
    title: projectTitle,
    description,

    openGraph: {
      title: projectTitle,
      description,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${projectTitle} project`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: projectTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;
  const projectTitle = formatProjectId(id);

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[var(--background)]
        pt-20
        text-[var(--foreground)]
      "
    >
      <section
        className="
          relative
          flex
          min-h-[calc(100svh-5rem)]
          items-center
          justify-center
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:px-8
        "
      >
        {/* Background Effects */}
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
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-0
            top-1/4
            h-40
            w-40
            rounded-full
            bg-cyan-400/5
            blur-[80px]
            sm:h-56
            sm:w-56
            dark:bg-cyan-400/10
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
          {/* Icon */}
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#8245EC]/20
              bg-[#8245EC]/10
              text-[#8245EC]
              sm:h-16
              sm:w-16
            "
          >
            <FolderKanban
              size={28}
              aria-hidden="true"
            />
          </div>

          {/* Subtitle */}
          <p
            className="
              mt-6
              text-xs
              font-semibold
              uppercase
              tracking-[4px]
              text-[#8245EC]
              sm:text-sm
              sm:tracking-[6px]
            "
          >
            Project Details
          </p>

          {/* Title */}
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
            {projectTitle}
          </h1>

          {/* Description */}
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
            Detailed information about this project will be available here.
          </p>

          {/* Back Button */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="/projects"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#8245EC]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_24px_rgba(130,69,236,0.22)]
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#7338df]
                hover:shadow-[0_10px_30px_rgba(130,69,236,0.35)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#8245EC]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-white

                sm:px-7
                sm:py-3.5
                sm:text-base

                dark:focus-visible:ring-offset-[#081b29]
              "
            >
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />

              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}