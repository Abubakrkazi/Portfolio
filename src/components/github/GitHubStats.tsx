"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  Users,
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

export default function GitHubStats({
  user,
  repos,
}: Props) {
  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repos.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const stats = [
    {
      title: "Repositories",
      value: user.public_repos,
      icon: FolderGit2,
    },
    {
      title: "Followers",
      value: user.followers,
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
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
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
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">
                  {item.title}
                </p>

                <h3 className="mt-2 text-4xl font-bold text-white">
                  <CountUp
                    end={Number(item.value)}
                    duration={2.2}
                  />
                </h3>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-[#8245EC]/20
                  p-4
                  text-[#8245EC]
                "
              >
                <Icon size={30} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}