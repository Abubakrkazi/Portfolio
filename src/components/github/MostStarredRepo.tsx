"use client";

import {
  ExternalLink,
  GitFork,
  Star,
  Trophy,
} from "lucide-react";

import AnimatedCard from "@/components/ui/AnimatedCard";
import type { GitHubRepo } from "@/types/github";

interface MostStarredRepoProps {
  repos: GitHubRepo[];
}

export default function MostStarredRepo({
  repos,
}: MostStarredRepoProps) {
  const eligibleRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase() !== "abubakrkazi"
  );

  const mostStarredRepo = eligibleRepos.reduce<
    GitHubRepo | undefined
  >((currentMostStarred, repo) => {
    if (!currentMostStarred) {
      return repo;
    }

    return repo.stargazers_count >
      currentMostStarred.stargazers_count
      ? repo
      : currentMostStarred;
  }, undefined);

  if (!mostStarredRepo) {
    return null;
  }

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
        border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-[border-color,background-color,box-shadow]
        duration-300

        hover:border-[#8245EC]/50
        hover:shadow-[0_14px_40px_rgba(130,69,236,0.12)]

        sm:rounded-3xl
        sm:p-6

        md:p-8

        dark:border-white/10
        dark:bg-white/[0.04]
        dark:shadow-none

        dark:hover:border-[#8245EC]/60
        dark:hover:bg-white/[0.055]
        dark:hover:shadow-[0_14px_40px_rgba(130,69,236,0.16)]
      "
    >
      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-yellow-400/5
          blur-[70px]

          sm:h-52
          sm:w-52

          dark:bg-yellow-400/[0.07]
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div
          className="
            flex
            min-w-0
            items-start
            gap-3
            sm:gap-4
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-yellow-500/20
              bg-yellow-500/10
              text-yellow-500

              sm:h-12
              sm:w-12
              sm:rounded-2xl
            "
          >
            <Trophy
              size={23}
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0">
            <p
              className="
                text-xs
                font-medium
                text-slate-500
                sm:text-sm
                dark:text-gray-400
              "
            >
              Most Starred Repository
            </p>

            <h3
              className="
                mt-1
                break-words
                text-xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-2xl
                dark:text-white
              "
            >
              {mostStarredRepo.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-3xl
            break-words
            text-sm
            leading-7
            text-slate-600

            sm:text-base
            sm:leading-8

            dark:text-gray-400
          "
        >
          {mostStarredRepo.description ||
            "No repository description is available."}
        </p>

        {/* Language */}
        {mostStarredRepo.language && (
          <div className="mt-5">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#8245EC]/20
                bg-[#8245EC]/10
                px-3
                py-1
                text-xs
                font-semibold
                text-[#8245EC]

                sm:text-sm

                dark:border-[#8245EC]/30
                dark:bg-[#8245EC]/15
                dark:text-[#c5a5ff]
              "
            >
              {mostStarredRepo.language}
            </span>
          </div>
        )}

        {/* Footer */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-4
            border-t
            border-slate-200
            pt-5

            min-[400px]:flex-row
            min-[400px]:items-center
            min-[400px]:justify-between

            sm:mt-7

            dark:border-white/10
          "
        >
          {/* Stats */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
              text-sm
              text-slate-500

              sm:gap-5
              sm:text-base

              dark:text-gray-400
            "
          >
            <span
              className="flex items-center gap-1.5"
              title={`${mostStarredRepo.stargazers_count} stars`}
            >
              <Star
                size={18}
                aria-hidden="true"
                className="text-yellow-500"
              />

              {mostStarredRepo.stargazers_count}
            </span>

            <span
              className="flex items-center gap-1.5"
              title={`${mostStarredRepo.forks_count} forks`}
            >
              <GitFork
                size={18}
                aria-hidden="true"
                className="text-cyan-500"
              />

              {mostStarredRepo.forks_count}
            </span>
          </div>

          {/* Repository Link */}
          <a
            href={mostStarredRepo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${mostStarredRepo.name} repository on GitHub`}
            title={`Open ${mostStarredRepo.name} on GitHub`}
            className="
              inline-flex
              min-h-10
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[#8245EC]/20
              bg-[#8245EC]/10
              px-4
              py-2.5
              text-sm
              font-semibold
              text-[#8245EC]
              transition-all
              duration-300

              hover:border-[#8245EC]
              hover:bg-[#8245EC]
              hover:text-white
              hover:shadow-[0_8px_24px_rgba(130,69,236,0.22)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#8245EC]

              min-[400px]:w-auto

              dark:border-[#8245EC]/30
              dark:bg-[#8245EC]/15
              dark:text-[#c5a5ff]

              dark:hover:border-[#8245EC]
              dark:hover:bg-[#8245EC]
              dark:hover:text-white
            "
          >
            View Repository

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
          from-yellow-400
          via-[#8245EC]
          to-cyan-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </AnimatedCard>
  );
}