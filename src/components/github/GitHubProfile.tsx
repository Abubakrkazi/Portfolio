"use client";

import Image from "next/image";

import {
  ExternalLink,
  MapPin,
  Users,
  BookOpen,
  Github,
} from "lucide-react";

import { GitHubUser } from "@/types/github";

interface GitHubProfileProps {
  user: GitHubUser;
}

export default function GitHubProfile({
  user,
}: GitHubProfileProps) {
  const displayName =
    user.name || user.login;

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#8245EC]/60
        hover:shadow-[0_0_40px_rgba(130,69,236,0.2)]
        md:p-8
      "
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#8245EC]/30 blur-xl" />

          <Image
            src={user.avatar_url}
            alt={`${displayName} GitHub profile`}
            width={140}
            height={140}
            priority
            className="
              relative
              rounded-full
              border-4
              border-[#8245EC]
              object-cover
            "
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-white">
          {displayName}
        </h2>

        <p className="mt-2 font-medium text-[#a877ff]">
          @{user.login}
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          {user.bio ||
            "Full Stack Developer building modern and scalable web applications."}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-4">
          {user.location && (
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin
                size={18}
                className="text-[#a877ff]"
              />
              {user.location}
            </div>
          )}

          <div className="flex items-center gap-2 text-gray-300">
            <Users
              size={18}
              className="text-[#a877ff]"
            />

            {user.followers}{" "}
            {user.followers === 1
              ? "Follower"
              : "Followers"}
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <BookOpen
              size={18}
              className="text-[#a877ff]"
            />

            {user.public_repos}{" "}
            {user.public_repos === 1
              ? "Repository"
              : "Repositories"}
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#8245EC]
            px-7
            py-3.5
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#9357f5]
            hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]
          "
        >
          <Github size={19} />
          Visit GitHub
          <ExternalLink size={17} />
        </a>
      </div>
    </div>
  );
}