"use client";

import Image from "next/image";
import {
  BookOpen,
  ExternalLink,
  Github,
  MapPin,
  Users,
} from "lucide-react";

import type { GitHubUser } from "@/types/github";

interface GitHubProfileProps {
  user: GitHubUser;
}

export default function GitHubProfile({
  user,
}: GitHubProfileProps) {
  const displayName = user.name || user.login;

  return (
    <article
      className="
        group
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300

        hover:border-[#8245EC]/40
        hover:shadow-[0_16px_45px_rgba(130,69,236,0.10)]

        sm:rounded-3xl
        sm:p-6

        md:p-8

        dark:border-white/10
        dark:bg-white/[0.04]
        dark:shadow-none

        dark:hover:border-[#8245EC]/50
        dark:hover:bg-white/[0.055]
        dark:hover:shadow-[0_16px_45px_rgba(130,69,236,0.14)]
      "
    >
      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-[#8245EC]/5
          blur-[70px]

          sm:h-52
          sm:w-52

          dark:bg-[#8245EC]/10
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Profile Image */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="
              absolute
              inset-1
              rounded-full
              bg-[#8245EC]/20
              blur-xl
              dark:bg-[#8245EC]/30
            "
          />

          <Image
            src={user.avatar_url}
            alt={`${displayName} GitHub profile`}
            width={140}
            height={140}
            className="
              relative
              h-24
              w-24
              rounded-full
              border-[3px]
              border-[#8245EC]
              object-cover
              shadow-[0_8px_30px_rgba(130,69,236,0.18)]

              sm:h-28
              sm:w-28

              md:h-[140px]
              md:w-[140px]
            "
          />
        </div>

        {/* Name */}
        <h2
          className="
            mt-5
            max-w-full
            break-words
            text-2xl
            font-bold
            tracking-tight
            text-slate-900

            sm:mt-6
            sm:text-3xl

            dark:text-white
          "
        >
          {displayName}
        </h2>

        {/* Username */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-1.5
            max-w-full
            break-all
            text-sm
            font-semibold
            text-[#8245EC]
            transition-colors
            duration-300

            hover:text-[#6d35d6]

            focus-visible:rounded
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#8245EC]

            sm:mt-2
            sm:text-base

            dark:text-[#a877ff]
            dark:hover:text-[#c5a5ff]
          "
        >
          @{user.login}
        </a>

        {/* Bio */}
        <p
          className="
            mt-4
            max-w-2xl
            break-words
            text-sm
            leading-7
            text-slate-600

            sm:mt-5
            sm:text-base
            sm:leading-8

            dark:text-gray-400
          "
        >
          {user.bio || "GitHub profile and public development activity."}
        </p>

        {/* GitHub Stats */}
        <div
          className="
            mt-6
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3

            min-[420px]:flex-row
            min-[420px]:flex-wrap
            min-[420px]:gap-x-6

            sm:mt-8
            sm:gap-x-7
            sm:gap-y-4
          "
        >
          {user.location && (
            <div
              className="
                flex
                min-w-0
                items-center
                justify-center
                gap-2
                text-sm
                text-slate-600

                sm:text-base

                dark:text-gray-300
              "
            >
              <MapPin
                size={18}
                aria-hidden="true"
                className="shrink-0 text-[#8245EC]"
              />

              <span className="min-w-0 break-words">
                {user.location}
              </span>
            </div>
          )}

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-slate-600

              sm:text-base

              dark:text-gray-300
            "
          >
            <Users
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#8245EC]"
            />

            <span>
              {user.followers}{" "}
              {user.followers === 1
                ? "Follower"
                : "Followers"}
            </span>
          </div>

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-slate-600

              sm:text-base

              dark:text-gray-300
            "
          >
            <BookOpen
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#8245EC]"
            />

            <span>
              {user.public_repos}{" "}
              {user.public_repos === 1
                ? "Repository"
                : "Repositories"}
            </span>
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${displayName}'s GitHub profile`}
          className="
            mt-8
            inline-flex
            min-h-11
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#8245EC]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-[0_8px_24px_rgba(130,69,236,0.22)]
            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-[#7338df]
            hover:shadow-[0_10px_30px_rgba(130,69,236,0.35)]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#8245EC]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-white

            sm:mt-10
            sm:px-7
            sm:py-3.5
            sm:text-base

            dark:focus-visible:ring-offset-[#081b29]
          "
        >
          <Github
            size={19}
            aria-hidden="true"
          />

          <span>Visit GitHub</span>

          <ExternalLink
            size={17}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}