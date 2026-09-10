"use client";

import Link from "next/link";

import {
  Star,
  GitFork,
  ExternalLink,
  Trophy,
} from "lucide-react";

import AnimatedCard from "@/components/ui/AnimatedCard";
import { GitHubRepo } from "@/types/github";

interface Props {
  repos: GitHubRepo[];
}

export default function MostStarredRepo({
  repos,
}: Props) {
  const mostStarredRepo = [...repos]
    .filter(
      (repo) =>
        repo.name.toLowerCase() !==
        "abubakrkazi"
    )
    .sort(
      (a, b) =>
        b.stargazers_count -
        a.stargazers_count
    )[0];

  if (!mostStarredRepo) {
    return null;
  }

  return (
    <AnimatedCard
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#8245EC]/70
        hover:shadow-[0_0_40px_rgba(130,69,236,0.25)]
        md:p-8
      "
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-yellow-500/10 p-3">
          <Trophy
            size={24}
            className="text-yellow-400"
          />
        </div>

        <div>
          <p className="text-sm text-gray-400">
            Most Starred Repository
          </p>

          <h3 className="text-2xl font-bold text-white">
            {mostStarredRepo.name}
          </h3>
        </div>
      </div>

      <p className="mt-5 leading-7 text-gray-400">
        {mostStarredRepo.description ||
          "One of my GitHub projects showcasing practical development and problem-solving skills."}
      </p>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex gap-5">
          <div className="flex items-center gap-2 text-gray-400">
            <Star
              size={18}
              className="text-yellow-400"
            />
            {mostStarredRepo.stargazers_count}
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <GitFork
              size={18}
              className="text-cyan-400"
            />
            {mostStarredRepo.forks_count}
          </div>
        </div>

        <Link
          href={mostStarredRepo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            bg-[#8245EC]/15
            p-3
            text-[#a877ff]
            transition
            hover:bg-[#8245EC]
            hover:text-white
          "
        >
          <ExternalLink size={19} />
        </Link>
      </div>
    </AnimatedCard>
  );
}