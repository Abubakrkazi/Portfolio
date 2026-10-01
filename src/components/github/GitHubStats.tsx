"use client";

import CountUp from "react-countup";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FolderGit2,
  GitFork,
  Star,
  Users,
} from "lucide-react";

import type {
  GitHubRepo,
  GitHubUser,
} from "@/types/github";

interface GitHubStatsProps {
  user: GitHubUser;
  repos: GitHubRepo[];
}

export default function GitHubStats({
  user,
  repos,
}: GitHubStatsProps) {
  const shouldReduceMotion = useReducedMotion();

  const totalStars = repos.reduce(
    (sum, repo) =>
      sum + Number(repo.stargazers_count || 0),
    0
  );

  const totalForks = repos.reduce(
    (sum, repo) =>
      sum + Number(repo.forks_count || 0),
    0
  );

  const stats = [
    {
      title: "Repositories",
      value: Number(user.public_repos || 0),
      icon: FolderGit2,
    },
    {
      title: "Followers",
      value: Number(user.followers || 0),
      icon: Users,
    },
    {
      title: "Stars",
      value: totalStars,
      icon: Star,
    },
    {
      title: "Forks",
      value: totalForks,
      icon: GitFork,
    },
  ];

  return (
    <div
      className="
        grid
        w-full
        grid-cols-2
        gap-3
        sm:gap-4
        md:gap-5
        lg:grid-cols-4
        lg:gap-6
      "
    >
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion
                ? 0
                : 0.45,
              delay: shouldReduceMotion
                ? 0
                : Math.min(index * 0.07, 0.21),
              ease: "easeOut",
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -5 }
            }
            className="
              group
              relative
              min-w-0
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              transition-[border-color,background-color,box-shadow]
              duration-300

              hover:border-[#8245EC]/50
              hover:shadow-[0_12px_35px_rgba(130,69,236,0.12)]

              sm:p-5

              md:rounded-3xl
              md:p-6

              lg:p-7

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:shadow-none

              dark:hover:border-[#8245EC]/60
              dark:hover:bg-white/[0.055]
              dark:hover:shadow-[0_12px_35px_rgba(130,69,236,0.16)]
            "
          >
            {/* Decorative Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-20
                w-20
                rounded-full
                bg-[#8245EC]/5
                blur-2xl
                transition-opacity
                duration-300

                group-hover:bg-[#8245EC]/10

                sm:h-24
                sm:w-24

                dark:bg-[#8245EC]/10
                dark:group-hover:bg-[#8245EC]/15
              "
            />

            <div
              className="
                relative
                z-10
                flex
                min-w-0
                flex-col
                gap-4

                sm:gap-5

                xl:flex-row
                xl:items-center
                xl:justify-between
              "
            >
              {/* Content */}
              <div className="min-w-0">
                <p
                  className="
                    truncate
                    text-xs
                    font-medium
                    text-slate-500

                    sm:text-sm
                    md:text-base

                    dark:text-gray-400
                  "
                >
                  {item.title}
                </p>

                <h3
                  className="
                    mt-1
                    text-2xl
                    font-black
                    tracking-tight
                    text-slate-900

                    sm:mt-2
                    sm:text-3xl

                    md:text-4xl

                    dark:text-white
                  "
                >
                  {shouldReduceMotion ? (
                    item.value.toLocaleString()
                  ) : (
                    <CountUp
                      end={item.value}
                      duration={2}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                </h3>
              </div>

              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#8245EC]/15
                  bg-[#8245EC]/10
                  text-[#8245EC]
                  transition-all
                  duration-300

                  group-hover:border-[#8245EC]/30
                  group-hover:bg-[#8245EC]/15

                  sm:h-11
                  sm:w-11

                  md:h-12
                  md:w-12
                  md:rounded-2xl

                  lg:h-14
                  lg:w-14

                  dark:border-[#8245EC]/20
                  dark:bg-[#8245EC]/15
                  dark:text-[#a877ff]
                "
              >
                <Icon
                  size={24}
                  aria-hidden="true"
                  className="
                    sm:h-[26px]
                    sm:w-[26px]
                    lg:h-[28px]
                    lg:w-[28px]
                  "
                />
              </div>
            </div>

            {/* Bottom Accent */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                bg-gradient-to-r
                from-[#8245EC]
                to-cyan-400
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
}