"use client";

import { Star, GitFork } from "lucide-react";

interface Repository {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

interface MostStarredRepoProps {
  repositories: Repository[];
}

export default function MostStarredRepo({
  repositories,
}: MostStarredRepoProps) {
  const mostStarredRepositories = [...repositories]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      {mostStarredRepositories.map((repo) => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            block
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#8245EC]
          "
        >
          <h3 className="text-lg font-bold text-white">
            {repo.name}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {repo.description || "No description available."}
          </p>

          <div className="mt-4 flex gap-5 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Star size={16} />
              {repo.stargazers_count}
            </span>

            <span className="flex items-center gap-2">
              <GitFork size={16} />
              {repo.forks_count}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}