"use client";

import {
  ExternalLink,
  GitFork,
  Github,
  Star,
} from "lucide-react";

import AnimatedCard from "@/components/ui/AnimatedCard";
import type { GitHubRepo } from "@/types/github";

interface FeaturedRepoProps {
  repos: GitHubRepo[];
}

const FEATURED_REPOS = [
  "coustom_E_comerse",
  "KrishiBazar",
  "NagarBondhu",
  "Hospital-Management",
];

export default function FeaturedRepo({
  repos,
}: FeaturedRepoProps) {
  const featuredRepo =
    FEATURED_REPOS.map((repoName) =>
      repos.find(
        (repo) =>
          repo.name.toLowerCase() ===
          repoName.toLowerCase()
      )
    ).find(
      (repo): repo is GitHubRepo => Boolean(repo)
    ) ?? getMostStarredFallback(repos);

  if (!featuredRepo) {
    return null;
  }

  const description =
    featuredRepo.description ||
    getCustomDescription(featuredRepo.name);

  return (
    <AnimatedCard
      hover
      className="
        group
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-[#8245EC]/25
        bg-gradient-to-br
        from-[#8245EC]/[0.07]
        via-white
        to-cyan-400/[0.03]
        p-4
        shadow-sm
        transition-[border-color,background-color,box-shadow]
        duration-300

        hover:border-[#8245EC]/50
        hover:shadow-[0_16px_45px_rgba(130,69,236,0.12)]

        sm:rounded-3xl
        sm:p-6

        md:p-8

        lg:p-10

        dark:border-[#8245EC]/30
        dark:from-[#8245EC]/10
        dark:via-white/[0.04]
        dark:to-cyan-400/[0.04]
        dark:shadow-none

        dark:hover:border-[#8245EC]/60
        dark:hover:shadow-[0_16px_45px_rgba(130,69,236,0.16)]
      "
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          bg-[#8245EC]/5
          blur-[70px]

          sm:h-56
          sm:w-56

          dark:bg-[#8245EC]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-40
          w-40
          rounded-full
          bg-cyan-400/5
          blur-[70px]

          sm:h-52
          sm:w-52

          dark:bg-cyan-400/[0.07]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          min-w-0
          flex-col
          gap-8

          sm:gap-10

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-12
        "
      >
        {/* Repository Information */}
        <div className="min-w-0 flex-1">
          {/* Featured Badge */}
          <span
            className="
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-[#8245EC]/20
              bg-[#8245EC]/10
              px-3
              py-1.5
              text-xs
              font-semibold
              text-[#8245EC]

              sm:px-4
              sm:py-2
              sm:text-sm

              dark:border-[#8245EC]/30
              dark:bg-[#8245EC]/15
              dark:text-[#c5a5ff]
            "
          >
            <Star
              size={15}
              aria-hidden="true"
              className="shrink-0"
            />

            Featured Repository
          </span>

          {/* Repository Name */}
          <h3
            className="
              mt-5
              max-w-full
              break-words
              text-2xl
              font-black
              tracking-tight
              text-slate-900

              sm:mt-6
              sm:text-3xl

              md:text-4xl

              dark:text-white
            "
          >
            {featuredRepo.name}
          </h3>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-2xl
              break-words
              text-sm
              leading-7
              text-slate-600

              sm:mt-5
              sm:text-base
              sm:leading-8

              dark:text-gray-400
            "
          >
            {description}
          </p>

          {/* Language */}
          {featuredRepo.language && (
            <div className="mt-5 sm:mt-7">
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#8245EC]/20
                  bg-[#8245EC]/10
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-[#8245EC]

                  sm:px-4
                  sm:py-2
                  sm:text-sm

                  dark:border-[#8245EC]/30
                  dark:bg-[#8245EC]/15
                  dark:text-[#c5a5ff]
                "
              >
                {featuredRepo.language}
              </span>
            </div>
          )}
        </div>

        {/* Repository Stats + CTA */}
        <div
          className="
            flex
            w-full
            min-w-0
            flex-col
            gap-6

            sm:gap-7

            lg:w-auto
            lg:min-w-[270px]
            lg:shrink-0
          "
        >
          {/* Stats */}
          <div
            className="
              grid
              grid-cols-2
              gap-3

              sm:gap-4
            "
          >
            {/* Stars */}
            <div
              className="
                min-w-0
                rounded-2xl
                border
                border-slate-200
                bg-white/70
                p-4
                text-center
                shadow-sm

                sm:p-5

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-none
              "
            >
              <Star
                size={23}
                aria-hidden="true"
                className="
                  mx-auto
                  text-yellow-500
                  sm:h-[26px]
                  sm:w-[26px]
                "
              />

              <p
                className="
                  mt-2
                  text-2xl
                  font-black
                  text-slate-900

                  sm:text-3xl

                  dark:text-white
                "
              >
                {featuredRepo.stargazers_count}
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  font-medium
                  text-slate-500

                  sm:text-sm

                  dark:text-gray-400
                "
              >
                Stars
              </p>
            </div>

            {/* Forks */}
            <div
              className="
                min-w-0
                rounded-2xl
                border
                border-slate-200
                bg-white/70
                p-4
                text-center
                shadow-sm

                sm:p-5

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-none
              "
            >
              <GitFork
                size={23}
                aria-hidden="true"
                className="
                  mx-auto
                  text-cyan-500
                  sm:h-[26px]
                  sm:w-[26px]
                "
              />

              <p
                className="
                  mt-2
                  text-2xl
                  font-black
                  text-slate-900

                  sm:text-3xl

                  dark:text-white
                "
              >
                {featuredRepo.forks_count}
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  font-medium
                  text-slate-500

                  sm:text-sm

                  dark:text-gray-400
                "
              >
                Forks
              </p>
            </div>
          </div>

          {/* Repository Link */}
          <a
            href={featuredRepo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${featuredRepo.name} repository on GitHub`}
            className="
              inline-flex
              min-h-11
              w-full
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
            <Github
              size={19}
              aria-hidden="true"
            />

            <span>View Repository</span>

            <ExternalLink
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-[#8245EC]
          to-cyan-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </AnimatedCard>
  );
}

function getMostStarredFallback(
  repos: GitHubRepo[]
): GitHubRepo | undefined {
  return repos.reduce<GitHubRepo | undefined>(
    (mostStarred, repo) => {
      if (
        repo.name.toLowerCase() === "abubakrkazi"
      ) {
        return mostStarred;
      }

      if (!mostStarred) {
        return repo;
      }

      return repo.stargazers_count >
        mostStarred.stargazers_count
        ? repo
        : mostStarred;
    },
    undefined
  );
}

function getCustomDescription(
  repoName: string
): string {
  const descriptions: Record<string, string> = {
    coustom_E_comerse:
      "A modern responsive e-commerce application built with Next.js, TypeScript, and Tailwind CSS featuring product browsing, dynamic product pages, cart, wishlist, and reusable components.",

    KrishiBazar:
      "An agriculture-focused web platform designed to connect farmers, buyers, and modern digital services through a scalable and user-friendly application.",

    NagarBondhu:
      "A modern web application focused on delivering useful digital services through a clean, scalable, and user-friendly interface.",

    "Hospital-Management":
      "A hospital management application designed to organize healthcare-related workflows, data, and services through a structured digital system.",
  };

  return (
    descriptions[repoName] ||
    "No repository description is available."
  );
}