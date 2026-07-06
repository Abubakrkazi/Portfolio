"use client";

import AnimatedCard from "@/components/ui/AnimatedCard";
import {
  Calendar,
  Code2,
  FileCode2,
  Sparkles,
} from "lucide-react";

import {
  GitHubRepo,
  GitHubUser,
} from "@/types/github";

interface Props {
  user: GitHubUser;
  repos: GitHubRepo[];
}

export default function GitHubAnalytics({
  user,
  repos,
}: Props) {
  const languages = new Set(
    repos
      .map((repo) => repo.language)
      .filter(Boolean)
  );

  const avgStars =
    repos.length > 0
      ? (
          repos.reduce(
            (sum, repo) => sum + repo.stargazers_count,
            0
          ) / repos.length
        ).toFixed(1)
      : "0";

  const joined = new Date(
    user.created_at
  ).getFullYear();

  const analytics = [
    {
      title: "Public Gists",
      value: user.public_gists,
      icon: FileCode2,
      color: "text-orange-400",
    },
    {
      title: "Languages Used",
      value: languages.size,
      icon: Code2,
      color: "text-green-400",
    },
    {
      title: "Avg Stars / Repo",
      value: avgStars,
      icon: Sparkles,
      color: "text-yellow-400",
    },
    {
      title: "GitHub Since",
      value: joined,
      icon: Calendar,
      color: "text-pink-400",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Repository Analytics
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {analytics.map((item, index) => {
          const Icon = item.icon;

          return (
            <AnimatedCard
              key={item.title}
              delay={index * 0.1}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-[1.03]
                hover:border-[#8245EC]
                hover:shadow-[0_0_40px_rgba(130,69,236,0.35)]
              "
            >
              <Icon
                className={`${item.color} mb-5`}
                size={32}
              />

              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.title}
              </p>
            </AnimatedCard>
          );
        })}
      </div>
    </section>
  );
}