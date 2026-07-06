"use client";

import { useMemo, useState } from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Link from "next/link";
import {
  Star,
  GitFork,
  ExternalLink,
  Search,
} from "lucide-react";

import { GitHubRepo } from "@/types/github";

interface Props {
  repos: GitHubRepo[];
}

export default function GitHubRepos({
  repos,
}: Props) {
  const [search, setSearch] = useState("");

  const [language, setLanguage] = useState("All");

  const latestRepos = [...repos]
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    )
    .slice(0, 12);

 const languages = useMemo(() => {
  return [
    "All",
    ...new Set(
      repos
        .map((repo) => repo.language)
        .filter(
          (language): language is string =>
            language !== null
        )
    ),
  ];
}, [repos]);

  const filteredRepos = latestRepos.filter((repo) => {
    const matchesSearch =
      repo.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLanguage =
      language === "All" ||
      repo.language === language;

    return matchesSearch && matchesLanguage;
  });

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-3">

        <h2 className="text-3xl font-bold text-white">
          Latest Repositories
        </h2>

        <p className="text-gray-400">
          Explore my latest open-source work.
        </p>

      </div>

      {/* Search + Filter */}

      <div className="mt-8 flex flex-col gap-4 lg:flex-row">

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search repository..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              py-3
              pl-12
              pr-5
              text-white
              outline-none
              backdrop-blur-xl
              transition-all
              focus:border-[#8245EC]
            "
          />

        </div>

        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
          className="
            rounded-2xl
            border
            border-white/10
            bg-[#081b29]
            px-5
            py-3
            text-white
            outline-none
            transition-all
            focus:border-[#8245EC]
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

      {/* Repository Grid */}

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {filteredRepos.length === 0 && (
          <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

            <h3 className="text-2xl font-bold text-white">
              No Repository Found
            </h3>

            <p className="mt-3 text-gray-400">
              Try another keyword or language.
            </p>

          </div>
        )}

        {filteredRepos.map((repo, index) => (
          <AnimatedCard
            key={repo.id}
            delay={index * 0.08}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-7
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:scale-[1.03]
              hover:border-[#8245EC]
              hover:shadow-[0_0_40px_rgba(130,69,236,0.35)]
            "
          >
            <div className="flex items-start justify-between">

              <h3 className="text-xl font-bold text-white">
                {repo.name}
              </h3>

              <Link
                href={repo.html_url}
                target="_blank"
              >
                <ExternalLink
                  size={20}
                  className="text-[#8245EC]"
                />
              </Link>

            </div>

            <p className="mt-4 line-clamp-3 text-gray-400">
              {repo.description ??
                "No description available."}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              {repo.language && (
                <span className="rounded-full bg-[#8245EC]/20 px-3 py-1 text-sm text-[#8245EC]">
                  {repo.language}
                </span>
              )}

            </div>

            <div className="mt-8 flex items-center justify-between">

              <div className="flex gap-5">

                <div className="flex items-center gap-1 text-gray-400">

                  <Star size={18} />

                  {repo.stargazers_count}

                </div>

                <div className="flex items-center gap-1 text-gray-400">

                  <GitFork size={18} />

                  {repo.forks_count}

                </div>

              </div>

              <span className="text-sm text-gray-500">
                {new Date(
                  repo.updated_at
                ).toLocaleDateString()}
              </span>

            </div>

          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}

