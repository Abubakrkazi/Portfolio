"use client";

import AnimatedCard from "@/components/ui/AnimatedCard";

import {
  Calendar,
  Code2,
  FileCode2,
  FolderGit2,
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

  const joined = new Date(
    user.created_at
  ).getFullYear();

  const analytics = [
    {
      title: "Public Repositories",
      value: user.public_repos,
      icon: FolderGit2,
      color: "text-purple-400",
    },
    {
      title: "Languages Used",
      value: languages.size,
      icon: Code2,
      color: "text-green-400",
    },
    {
      title: "Public Gists",
      value: user.public_gists,
      icon: FileCode2,
      color: "text-orange-400",
    },
    {
      title: "GitHub Since",
      value: joined,
      icon: Calendar,
      color: "text-pink-400",
    },
  ];

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Repository Analytics
        </h2>

        <p className="mt-2 text-gray-400">
          A quick overview of my GitHub
          development profile.
        </p>
      </div>

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
                hover:-translate-y-2
                hover:border-[#8245EC]/70
                hover:shadow-[0_0_40px_rgba(130,69,236,0.25)]
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/5
                "
              >
                <Icon
                  className={item.color}
                  size={30}
                />
              </div>

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