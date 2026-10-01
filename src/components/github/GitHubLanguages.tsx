"use client";

import { useMemo } from "react";
import { Code2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { GitHubRepo } from "@/types/github";

interface GitHubLanguagesProps {
  repos: GitHubRepo[];
}

interface LanguageData {
  language: string;
  count: number;
  percentage: number;
}

export default function GitHubLanguages({
  repos,
}: GitHubLanguagesProps) {
  const shouldReduceMotion = useReducedMotion();

  const languages = useMemo<LanguageData[]>(() => {
    const languageCount = new Map<string, number>();

    repos.forEach((repo) => {
      if (!repo.language) {
        return;
      }

      languageCount.set(
        repo.language,
        (languageCount.get(repo.language) ?? 0) + 1
      );
    });

    const sortedLanguages = Array.from(
      languageCount.entries()
    ).sort((a, b) => b[1] - a[1]);

    const totalRepositoriesWithLanguage =
      sortedLanguages.reduce(
        (sum, [, count]) => sum + count,
        0
      );

    return sortedLanguages
      .slice(0, 6)
      .map(([language, count]) => ({
        language,
        count,
        percentage:
          totalRepositoriesWithLanguage > 0
            ? Math.round(
                (count /
                  totalRepositoriesWithLanguage) *
                  100
              )
            : 0,
      }));
  }, [repos]);

  if (languages.length === 0) {
    return null;
  }

  return (
    <section
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
        transition-all
        duration-300

        hover:border-[#8245EC]/40
        hover:shadow-[0_14px_40px_rgba(130,69,236,0.10)]

        sm:rounded-3xl
        sm:p-6

        md:p-8

        dark:border-white/10
        dark:bg-white/[0.04]
        dark:shadow-none

        dark:hover:border-[#8245EC]/50
        dark:hover:bg-white/[0.055]
        dark:hover:shadow-[0_14px_40px_rgba(130,69,236,0.14)]
      "
      aria-labelledby="github-languages-title"
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
          bg-[#8245EC]/5
          blur-[70px]

          sm:h-52
          sm:w-52

          dark:bg-[#8245EC]/10
        "
      />

      <div className="relative z-10">
        {/* Heading */}
        <div
          className="
            flex
            min-w-0
            items-start
            gap-3

            sm:items-center
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
              border-[#8245EC]/20
              bg-[#8245EC]/10
              text-[#8245EC]

              sm:h-12
              sm:w-12
              sm:rounded-2xl

              dark:border-[#8245EC]/30
              dark:bg-[#8245EC]/15
              dark:text-[#a877ff]
            "
          >
            <Code2
              size={24}
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0">
            <h2
              id="github-languages-title"
              className="
                text-xl
                font-bold
                tracking-tight
                text-slate-900

                sm:text-2xl
                md:text-3xl

                dark:text-white
              "
            >
              Top Languages
            </h2>

            <p
              className="
                mt-1
                max-w-2xl
                text-xs
                leading-5
                text-slate-500

                sm:text-sm
                sm:leading-6

                dark:text-gray-400
              "
            >
              Based on the primary language of my
              public repositories.
            </p>
          </div>
        </div>

        {/* Language List */}
        <div
          className="
            mt-6
            space-y-5

            sm:mt-8
            sm:space-y-6
          "
        >
          {languages.map(
            (
              {
                language,
                count,
                percentage,
              },
              index
            ) => (
              <div
                key={language}
                className="min-w-0"
              >
                {/* Label */}
                <div
                  className="
                    mb-2
                    flex
                    min-w-0
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-2
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        bg-[#8245EC]

                        sm:h-2.5
                        sm:w-2.5
                      "
                    />

                    <span
                      className="
                        min-w-0
                        truncate
                        text-sm
                        font-semibold
                        text-slate-800

                        sm:text-base

                        dark:text-white
                      "
                    >
                      {language}
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        hidden
                        text-xs
                        text-slate-400

                        min-[400px]:inline

                        sm:text-sm

                        dark:text-gray-500
                      "
                    >
                      {count}{" "}
                      {count === 1
                        ? "repo"
                        : "repos"}
                    </span>

                    <span
                      className="
                        min-w-[38px]
                        text-right
                        text-xs
                        font-semibold
                        text-[#8245EC]

                        sm:text-sm

                        dark:text-[#a877ff]
                      "
                    >
                      {percentage}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  className="
                    h-2
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-slate-100

                    sm:h-2.5

                    dark:bg-white/10
                  "
                  role="progressbar"
                  aria-label={`${language}: ${percentage}% of repositories with a detected primary language`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={percentage}
                >
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { width: `${percentage}%` }
                        : { width: 0 }
                    }
                    whileInView={{
                      width: `${percentage}%`,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: shouldReduceMotion
                        ? 0
                        : 0.7,
                      delay: shouldReduceMotion
                        ? 0
                        : Math.min(
                            index * 0.08,
                            0.4
                          ),
                      ease: "easeOut",
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#8245EC]
                      to-[#a877ff]
                    "
                  />
                </div>
              </div>
            )
          )}
        </div>

        {/* Note */}
        <p
          className="
            mt-6
            border-t
            border-slate-200
            pt-4
            text-xs
            leading-6
            text-slate-400

            sm:mt-8
            sm:pt-5

            dark:border-white/10
            dark:text-gray-500
          "
        >
          Percentages represent repository counts by
          primary language, not the amount of code
          written in each language.
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
    </section>
  );
}