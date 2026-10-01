"use client";

import { useMemo, useState } from "react";
import {
  ExternalLink,
  GitFork,
  Search,
  Star,
} from "lucide-react";

import AnimatedCard from "@/components/ui/AnimatedCard";
import type { GitHubRepo } from "@/types/github";

interface GitHubReposProps {
  repos: GitHubRepo[];
}

export default function GitHubRepos({
  repos,
}: GitHubReposProps) {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");

  const latestRepos = useMemo(() => {
    return [...repos]
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() -
          new Date(a.updated_at).getTime()
      )
      .slice(0, 9);
  }, [repos]);

  const languages = useMemo(() => {
    const availableLanguages = repos
      .map((repo) => repo.language)
      .filter(
        (repoLanguage): repoLanguage is string =>
          Boolean(repoLanguage)
      );

    return [
      "All",
      ...Array.from(new Set(availableLanguages)).sort(),
    ];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return latestRepos.filter((repo) => {
      const matchesSearch =
        normalizedSearch === "" ||
        repo.name.toLowerCase().includes(normalizedSearch) ||
        repo.description
          ?.toLowerCase()
          .includes(normalizedSearch);

      const matchesLanguage =
        language === "All" ||
        repo.language === language;

      return matchesSearch && matchesLanguage;
    });
  }, [latestRepos, search, language]);

  return (
    <section className="mt-10 w-full sm:mt-12">
      {/* Heading */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h2
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            sm:text-3xl
            dark:text-white
          "
        >
          Latest Repositories
        </h2>

        <p
          className="
            max-w-2xl
            text-sm
            leading-7
            text-slate-600
            sm:text-base
            dark:text-gray-400
          "
        >
          Explore my latest public repositories and development work.
        </p>
      </div>

      {/* Search + Language Filter */}
      <div
        className="
          mt-6
          flex
          w-full
          flex-col
          gap-3
          sm:mt-8
          sm:gap-4
          lg:flex-row
        "
      >
        {/* Search */}
        <div className="relative min-w-0 flex-1">
          <Search
            size={19}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              dark:text-gray-500
            "
          />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search repositories..."
            aria-label="Search repositories"
            className="
              w-full
              min-w-0
              rounded-xl
              border
              border-slate-200
              bg-white
              py-3
              pl-11
              pr-4
              text-sm
              text-slate-900
              outline-none
              transition-all
              duration-300

              placeholder:text-slate-400

              hover:border-slate-300

              focus:border-[#8245EC]
              focus:ring-2
              focus:ring-[#8245EC]/20

              sm:rounded-2xl
              sm:py-3.5
              sm:pl-12
              sm:pr-5
              sm:text-base

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-white
              dark:placeholder:text-gray-500

              dark:hover:border-white/20

              dark:focus:border-[#8245EC]
              dark:focus:bg-white/[0.055]
              dark:focus:ring-[#8245EC]/30
            "
          />
        </div>

        {/* Language Filter */}
        <select
          value={language}
          onChange={(event) =>
            setLanguage(event.target.value)
          }
          aria-label="Filter repositories by language"
          className="
            w-full
            cursor-pointer
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-3
            text-sm
            text-slate-900
            outline-none
            transition-all
            duration-300

            hover:border-slate-300

            focus:border-[#8245EC]
            focus:ring-2
            focus:ring-[#8245EC]/20

            sm:rounded-2xl
            sm:px-5
            sm:py-3.5
            sm:text-base

            lg:w-auto
            lg:min-w-[190px]

            dark:border-white/10
            dark:bg-[#081b29]
            dark:text-white

            dark:hover:border-white/20

            dark:focus:border-[#8245EC]
            dark:focus:ring-[#8245EC]/30
          "
        >
          {languages.map((lang) => (
            <option
              key={lang}
              value={lang}
            >
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Result Information */}
      <div
        className="
          mt-4
          flex
          flex-wrap
          items-center
          justify-between
          gap-2
          text-xs
          text-slate-500
          sm:text-sm
          dark:text-gray-500
        "
      >
        <span>
          Showing {filteredRepos.length} of{" "}
          {latestRepos.length} repositories
        </span>

        {(search || language !== "All") && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setLanguage("All");
            }}
            className="
              font-medium
              text-[#8245EC]
              transition-colors
              hover:text-[#6d35d6]
              focus-visible:rounded
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#8245EC]
            "
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Repository Grid */}
      <div
        className="
          mt-7
          grid
          grid-cols-1
          gap-4
          sm:mt-10
          sm:gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {filteredRepos.length === 0 && (
          <div
            className="
              col-span-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-10
              text-center
              shadow-sm

              sm:rounded-3xl
              sm:p-12

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:shadow-none
            "
          >
            <Search
              size={30}
              aria-hidden="true"
              className="mx-auto text-[#8245EC]"
            />

            <h3
              className="
                mt-4
                text-xl
                font-bold
                text-slate-900
                sm:text-2xl
                dark:text-white
              "
            >
              No Repository Found
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                dark:text-gray-400
              "
            >
              Try another keyword or programming language.
            </p>
          </div>
        )}

        {filteredRepos.map((repo, index) => (
          <AnimatedCard
            key={repo.id}
            delay={Math.min(index * 0.06, 0.3)}
            hover
            className="
              group
              flex
              h-full
              min-w-0
              flex-col
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

              md:p-7

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:shadow-none

              dark:hover:border-[#8245EC]/60
              dark:hover:bg-white/[0.055]
              dark:hover:shadow-[0_14px_40px_rgba(130,69,236,0.15)]
            "
          >
            {/* Repository Header */}
            <div
              className="
                flex
                min-w-0
                items-start
                justify-between
                gap-3
              "
            >
              <h3
                className="
                  min-w-0
                  break-words
                  text-lg
                  font-bold
                  leading-7
                  text-slate-900
                  sm:text-xl
                  dark:text-white
                "
              >
                {repo.name}
              </h3>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${repo.name} repository on GitHub`}
                title={`Open ${repo.name} on GitHub`}
                className="
                  inline-flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#8245EC]/20
                  bg-[#8245EC]/5
                  text-[#8245EC]
                  transition-all
                  duration-300

                  hover:border-[#8245EC]
                  hover:bg-[#8245EC]
                  hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#8245EC]
                "
              >
                <ExternalLink
                  size={17}
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Description */}
            <p
              className="
                mt-4
                line-clamp-3
                min-h-[4.5rem]
                break-words
                text-sm
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
                dark:text-gray-400
              "
            >
              {repo.description ||
                "No description available."}
            </p>

            {/* Language */}
            <div className="mt-5 flex flex-wrap gap-2">
              {repo.language && (
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
                  {repo.language}
                </span>
              )}
            </div>

            {/* Footer */}
            <div
              className="
                mt-auto
                flex
                flex-col
                gap-3
                border-t
                border-slate-200
                pt-5

                min-[400px]:flex-row
                min-[400px]:items-center
                min-[400px]:justify-between

                dark:border-white/10
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-slate-500
                  dark:text-gray-400
                "
              >
                <span
                  className="flex items-center gap-1.5"
                  title={`${repo.stargazers_count} stars`}
                >
                  <Star
                    size={17}
                    aria-hidden="true"
                    className="text-[#8245EC]"
                  />

                  {repo.stargazers_count}
                </span>

                <span
                  className="flex items-center gap-1.5"
                  title={`${repo.forks_count} forks`}
                >
                  <GitFork
                    size={17}
                    aria-hidden="true"
                    className="text-[#8245EC]"
                  />

                  {repo.forks_count}
                </span>
              </div>

              <time
                dateTime={repo.updated_at}
                className="
                  text-xs
                  text-slate-500
                  sm:text-sm
                  dark:text-gray-500
                "
              >
                {new Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  timeZone: "UTC",
                }).format(new Date(repo.updated_at))}
              </time>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}