"use client";

import { GitHubRepo } from "@/types/github";

interface Props {
  repos: GitHubRepo[];
}

export default function GitHubLanguages({
  repos,
}: Props) {
  const languageCount: Record<
    string,
    number
  > = {};

  repos.forEach((repo) => {
    if (!repo.language) return;

    languageCount[repo.language] =
      (languageCount[repo.language] || 0) + 1;
  });

  const allLanguages = Object.entries(
    languageCount
  ).sort((a, b) => b[1] - a[1]);

  const total = allLanguages.reduce(
    (sum, [, count]) => sum + count,
    0
  );

  const topLanguages = allLanguages.slice(
    0,
    6
  );

  if (topLanguages.length === 0) {
    return null;
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        md:p-8
      "
    >
      <h2 className="text-3xl font-bold text-white">
        Top Languages
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Based on the primary languages used across
        my public repositories.
      </p>

      <div className="mt-8 space-y-6">
        {topLanguages.map(
          ([language, count]) => {
            const percentage =
              total > 0
                ? Math.round(
                    (count / total) * 100
                  )
                : 0;

            return (
              <div key={language}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="font-medium text-white">
                    {language}
                  </span>

                  <span className="text-sm text-gray-400">
                    {percentage}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-[#8245EC]
                      transition-all
                      duration-700
                    "
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}