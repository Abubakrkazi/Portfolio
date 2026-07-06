"use client";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Link from "next/link";
import {
  Star,
  GitFork,
  ExternalLink,
} from "lucide-react";

import { GitHubRepo } from "@/types/github";

interface Props {
  repos: GitHubRepo[];
}

export default function FeaturedRepo({
  repos,
}: Props) {
  const featuredRepo = [...repos].sort(
    (a, b) =>
      b.stargazers_count - a.stargazers_count
  )[0];

  if (!featuredRepo) return null;

  return (
  <AnimatedCard
  className="
    mt-12
    rounded-3xl
    border
    border-[#8245EC]/30
    bg-gradient-to-br
    from-[#8245EC]/10
    to-white/5
    p-10
    backdrop-blur-xl
    transition-all
    duration-500
    hover:shadow-[0_0_40px_rgba(130,69,236,0.35)]
  "
>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <span
            className="
            rounded-full
            bg-[#8245EC]/20
            px-4
            py-2
            text-sm
            font-semibold
            text-[#8245EC]
            "
          >
            ⭐ Featured Repository
          </span>

          <h2 className="mt-6 text-4xl font-black text-white">
            {featuredRepo.name}
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            {featuredRepo.description ||
              "No description available."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {featuredRepo.language && (
              <span
                className="
                rounded-full
                bg-[#8245EC]/20
                px-4
                py-2
                text-sm
                text-[#8245EC]
                "
              >
                {featuredRepo.language}
              </span>
            )}

          </div>

        </div>

        <div className="flex flex-col gap-6">

          <div className="flex gap-8">

            <div className="text-center">

              <Star
                className="mx-auto text-yellow-400"
              />

              <h3 className="mt-2 text-3xl font-bold text-white">
                {featuredRepo.stargazers_count}
              </h3>

              <p className="text-gray-400">
                Stars
              </p>

            </div>

            <div className="text-center">

              <GitFork
                className="mx-auto text-cyan-400"
              />

              <h3 className="mt-2 text-3xl font-bold text-white">
                {featuredRepo.forks_count}
              </h3>

              <p className="text-gray-400">
                Forks
              </p>

            </div>

          </div>

          <Link
            href={featuredRepo.html_url}
            target="_blank"
            className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#8245EC]
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            "
          >
            View Repository

            <ExternalLink size={20} />

          </Link>

        </div>

      </div>
   </AnimatedCard>
  );
}