"use client";

import useGithub from "@/hooks/useGithub";

import GitHubProfile from "./GitHubProfile";
import GitHubStats from "./GitHubStats";
import GitHubLanguages from "./GitHubLanguages";
import FeaturedRepo from "./FeaturedRepo";
import GitHubRepos from "./GitHubRepos";
import GitHubAnalytics from "./GitHubAnalytics";
import GitHubContribution from "./GitHubContribution";

export default function GitHubSection() {
  const { user, repos, loading, error } = useGithub();

  if (loading) {
    return (
      <section
        id="github"
        className="bg-[#081b29] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black text-white">
            GitHub
          </h2>

          <p className="mt-6 text-center text-gray-400">
            Loading GitHub Dashboard...
          </p>
        </div>
      </section>
    );
  }

  if (error || !user) {
    return (
      <section
        id="github"
        className="bg-[#081b29] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black text-white">
            GitHub
          </h2>

          <p className="mt-6 text-center text-red-400">
            Failed to load GitHub data.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="github"
      className="bg-[#081b29] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
            GitHub
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            My GitHub Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            Live GitHub statistics, repositories,
            programming languages and analytics.
          </p>

        </div>

        {/* Profile */}

        <div className="mt-20">
          <GitHubProfile user={user} />
        </div>

        {/* Stats */}

        <div className="mt-12">
          <GitHubStats
            user={user}
            repos={repos}
          />
        </div>

        {/* Languages */}

        <div className="mt-12">
          <GitHubLanguages
            repos={repos}
          />
        </div>

        {/* Featured Repository */}

        <div className="mt-12">
          <FeaturedRepo
            repos={repos}
          />
        </div>

        {/* Latest Repositories */}

        <div className="mt-12">
          <GitHubRepos
            repos={repos}
          />
        </div>

        {/* Repository Analytics */}

        <div className="mt-12">
          <GitHubAnalytics
            user={user}
            repos={repos}
          />
        </div>

        {/* GitHub Streak + Activity Graph */}

        <div className="mt-12">
          <GitHubContribution />
        </div>

      </div>
    </section>
  );
}