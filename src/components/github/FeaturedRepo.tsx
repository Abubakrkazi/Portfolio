"use client";

import AnimatedCard from "@/components/ui/AnimatedCard";
import Link from "next/link";

import {
  Star,
  GitFork,
  ExternalLink,
  Github,
} from "lucide-react";

import { GitHubRepo } from "@/types/github";

interface Props {
  repos: GitHubRepo[];
}

const FEATURED_REPOS = [
  "coustom_E_comerse",
  "KrishiBazar",
  "NagarBondhu",
  "Hospital-Management",
];

export default function FeaturedRepo({ repos }: Props) {
  const featuredRepo =
    FEATURED_REPOS.map((repoName) =>
      repos.find(
        (repo) =>
          repo.name.toLowerCase() ===
          repoName.toLowerCase()
      )
    ).find(Boolean) ||
    [...repos]
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

  if (!featuredRepo) return null;

  return (
    <AnimatedCard
      className="
        rounded-3xl
        border
        border-[#8245EC]/30
        bg-gradient-to-br
        from-[#8245EC]/10
        to-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#8245EC]/60
        hover:shadow-[0_0_40px_rgba(130,69,236,0.25)]
        md:p-10
      "
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#8245EC]/20
              px-4
              py-2
              text-sm
              font-semibold
              text-[#a877ff]
            "
          >
            <Star size={16} />
            Featured Repository
          </span>

          <h2 className="mt-6 break-words text-3xl font-black text-white md:text-4xl">
            {featuredRepo.name}
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            {featuredRepo.description ||
              getCustomDescription(
                featuredRepo.name
              )}
          </p>

          {featuredRepo.language && (
            <div className="mt-7">
              <span
                className="
                  rounded-full
                  border
                  border-[#8245EC]/20
                  bg-[#8245EC]/15
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[#a877ff]
                "
              >
                {featuredRepo.language}
              </span>
            </div>
          )}
        </div>

        <div className="flex shrink-0 flex-col gap-7">
          <div className="flex gap-10">
            <div className="text-center">
              <Star
                size={26}
                className="mx-auto text-yellow-400"
              />

              <h3 className="mt-2 text-3xl font-bold text-white">
                {featuredRepo.stargazers_count}
              </h3>

              <p className="text-sm text-gray-400">
                Stars
              </p>
            </div>

            <div className="text-center">
              <GitFork
                size={26}
                className="mx-auto text-cyan-400"
              />

              <h3 className="mt-2 text-3xl font-bold text-white">
                {featuredRepo.forks_count}
              </h3>

              <p className="text-sm text-gray-400">
                Forks
              </p>
            </div>
          </div>

          <Link
            href={featuredRepo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#8245EC]
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#9357f5]
              hover:shadow-[0_0_25px_rgba(130,69,236,0.4)]
            "
          >
            <Github size={19} />
            View Repository
            <ExternalLink size={17} />
          </Link>
        </div>
      </div>
    </AnimatedCard>
  );
}

function getCustomDescription(
  repoName: string
) {
  const descriptions: Record<string, string> = {
    coustom_E_comerse:
      "A modern responsive e-commerce application built with Next.js, TypeScript, and Tailwind CSS featuring product browsing, dynamic product pages, cart, wishlist, and reusable components.",

    KrishiBazar:
      "An agriculture-focused web platform designed to connect farmers, buyers, and modern digital services through a scalable and user-friendly application.",

    NagarBondhu:
      "A modern web application focused on delivering useful digital services through a clean, scalable, and user-friendly interface.",

    "Hospital-Management":
      "A hospital management application designed to organize healthcare-related workflows, data, and services through a structured digital system.",
  };

  return (
    descriptions[repoName] ||
    "A software development project showcasing practical problem-solving, modern technologies, and clean application architecture."
  );
}