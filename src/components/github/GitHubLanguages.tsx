"use client";

import { GitHubRepo } from "@/types/github";

interface Props {
  repos: GitHubRepo[];
}

export default function GitHubLanguages({ repos }: Props) {
  const languageCount: Record<string, number> = {};

  repos.forEach((repo) => {
    if (!repo.language) return;

    languageCount[repo.language] =
      (languageCount[repo.language] || 0) + 1;
  });

  const languages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const total = languages.reduce(
    (sum, [, value]) => sum + value,
    0
  );

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <h2 className="text-3xl font-bold text-white">
        Top Languages
      </h2>

      <div className="mt-8 space-y-6">
        {languages.map(([language, count]) => {
          const percentage = Math.round(
            (count / total) * 100
          );

          return (
            <div key={language}>
              <div className="mb-2 flex justify-between">
                <span className="font-medium text-white">
                  {language}
                </span>

                <span className="text-gray-400">
                  {percentage}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#8245EC] transition-all duration-700"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}