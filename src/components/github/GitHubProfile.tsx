"use client";

import Image from "next/image";
import { ExternalLink, MapPin, Users, BookOpen } from "lucide-react";
import { GitHubUser } from "@/types/github";

interface GitHubProfileProps {
  user: GitHubUser;
}

export default function GitHubProfile({
  user,
}: GitHubProfileProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-[#8245EC]
      "
    >
      <div className="flex flex-col items-center text-center">

        <Image
          src={user.avatar_url}
          alt={user.name}
          width={140}
          height={140}
          className="rounded-full border-4 border-[#8245EC]"
        />

        <h2 className="mt-6 text-3xl font-bold text-white">
          {user.name}
        </h2>

        <p className="mt-2 text-[#8245EC]">
          @{user.login}
        </p>

        <p className="mt-5 max-w-xl text-gray-400">
          {user.bio || "No bio available."}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">

          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={18} />
            {user.location || "Unknown"}
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <Users size={18} />
            {user.followers} Followers
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <BookOpen size={18} />
            {user.public_repos} Repositories
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
          gap-2
          rounded-xl
          bg-[#8245EC]
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:scale-105
          "
        >
          Visit GitHub
          <ExternalLink size={18} />
        </a>

      </div>
    </div>
  );
}