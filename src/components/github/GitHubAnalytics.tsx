"use client";

import {
  CalendarDays,
  Code2,
  FileCode2,
  FolderGit2,
} from "lucide-react";

import AnimatedCard from "@/components/ui/AnimatedCard";

import type {
  GitHubRepo,
  GitHubUser,
} from "@/types/github";

interface GitHubAnalyticsProps {
  user: GitHubUser;
  repos: GitHubRepo[];
}

export default function GitHubAnalytics({
  user,
  repos,
}: GitHubAnalyticsProps) {
  const uniqueLanguages = new Set(
    repos
      .map((repo) => repo.language)
      .filter(
        (language): language is string =>
          Boolean(language)
      )
  );

  const createdAt = new Date(user.created_at);

  const joinedYear = Number.isNaN(
    createdAt.getTime()
  )
    ? "—"
    : createdAt.getUTCFullYear();

  const analytics = [
    {
      title: "Public Repositories",
      value: Number(user.public_repos || 0),
      icon: FolderGit2,
      iconClassName: "text-[#8245EC]",
      iconBackground:
        "border-[#8245EC]/20 bg-[#8245EC]/10",
    },
    {
      title: "Primary Languages",
      value: uniqueLanguages.size,
      icon: Code2,
      iconClassName: "text-emerald-500",
      iconBackground:
        "border-emerald-500/20 bg-emerald-500/10",
    },
    {
      title: "Public Gists",
      value: Number(user.public_gists || 0),
      icon: FileCode2,
      iconClassName: "text-orange-500",
      iconBackground:
        "border-orange-500/20 bg-orange-500/10",
    },
    {
      title: "GitHub Since",
      value: joinedYear,
      icon: CalendarDays,
      iconClassName: "text-pink-500",
      iconBackground:
        "border-pink-500/20 bg-pink-500/10",
    },
  ];

  return (
    <section
      className="w-full"
      aria-labelledby="github-analytics-title"
    >
      {/* Heading */}
      <div className="mb-6 sm:mb-8">
        <h2
          id="github-analytics-title"
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            sm:text-3xl
            dark:text-white
          "
        >
          Repository Analytics
        </h2>

        <p
          className="
            mt-2
            max-w-2xl
            text-sm
            leading-7
            text-slate-600
            sm:text-base
            dark:text-gray-400
          "
        >
          A quick overview of my public GitHub profile and
          repository data.
        </p>
      </div>

      {/* Analytics Grid */}
      <div
        className="
          grid
          w-full
          grid-cols-2
          gap-3
          sm:gap-4
          md:gap-5
          lg:grid-cols-4
          lg:gap-6
        "
      >
        {analytics.map((item, index) => {
          const Icon = item.icon;

          return (
            <AnimatedCard
              key={item.title}
              delay={Math.min(index * 0.07, 0.21)}
              hover
              className="
                group
                relative
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
                hover:shadow-[0_12px_35px_rgba(130,69,236,0.12)]

                sm:p-5

                md:rounded-3xl
                md:p-6

                lg:p-7

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:shadow-none

                dark:hover:border-[#8245EC]/60
                dark:hover:bg-white/[0.055]
                dark:hover:shadow-[0_12px_35px_rgba(130,69,236,0.16)]
              "
            >
              {/* Decorative Glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-[#8245EC]/5
                  blur-2xl

                  sm:h-24
                  sm:w-24

                  dark:bg-[#8245EC]/10
                "
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    transition-transform
                    duration-300

                    group-hover:scale-105

                    sm:h-12
                    sm:w-12
                    sm:rounded-2xl

                    md:h-14
                    md:w-14

                    ${item.iconBackground}
                  `}
                >
                  <Icon
                    size={23}
                    aria-hidden="true"
                    className={`
                      sm:h-[26px]
                      sm:w-[26px]
                      md:h-[28px]
                      md:w-[28px]
                      ${item.iconClassName}
                    `}
                  />
                </div>

                {/* Value */}
                <p
                  className="
                    mt-4
                    break-words
                    text-2xl
                    font-black
                    tracking-tight
                    text-slate-900

                    sm:mt-5
                    sm:text-3xl

                    md:text-4xl

                    dark:text-white
                  "
                >
                  {item.value}
                </p>

                {/* Label */}
                <p
                  className="
                    mt-1.5
                    break-words
                    text-xs
                    font-medium
                    leading-5
                    text-slate-500

                    sm:mt-2
                    sm:text-sm
                    sm:leading-6

                    md:text-base

                    dark:text-gray-400
                  "
                >
                  {item.title}
                </p>
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
        })}
      </div>
    </section>
  );
}