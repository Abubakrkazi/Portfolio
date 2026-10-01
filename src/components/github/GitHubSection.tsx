"use client";

import { AlertCircle, Github, LoaderCircle } from "lucide-react";

import useGithub from "@/hooks/useGithub";

import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

import GitHubProfile from "./GitHubProfile";
import GitHubStats from "./GitHubStats";
import GitHubLanguages from "./GitHubLanguages";
import FeaturedRepo from "./FeaturedRepo";
import GitHubRepos from "./GitHubRepos";
import GitHubAnalytics from "./GitHubAnalytics";
import GitHubContribution from "./GitHubContribution";

export default function GitHubSection() {
  const {
    user,
    repos,
    loading,
    error,
  } = useGithub();

  if (loading) {
    return (
      <section
        id="github"
        aria-labelledby="github-loading-title"
        className="
          relative
          overflow-hidden
          bg-white
          py-16
          sm:py-20
          md:py-24
          lg:py-28
          dark:bg-[#081b29]
        "
      >
        <Container>
          <div
            className="
              mx-auto
              flex
              min-h-[280px]
              max-w-xl
              flex-col
              items-center
              justify-center
              text-center
              sm:min-h-[340px]
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#8245EC]/20
                bg-[#8245EC]/10
                text-[#8245EC]
                sm:h-16
                sm:w-16
              "
            >
              <LoaderCircle
                size={28}
                aria-hidden="true"
                className="animate-spin"
              />
            </div>

            <h2
              id="github-loading-title"
              className="
                mt-5
                text-2xl
                font-black
                tracking-tight
                text-slate-900
                sm:text-3xl
                dark:text-white
              "
            >
              GitHub Dashboard
            </h2>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                dark:text-gray-400
              "
            >
              Loading GitHub data...
            </p>
          </div>
        </Container>
      </section>
    );
  }

  if (error || !user) {
    return (
      <section
        id="github"
        aria-labelledby="github-error-title"
        className="
          relative
          overflow-hidden
          bg-white
          py-16
          sm:py-20
          md:py-24
          lg:py-28
          dark:bg-[#081b29]
        "
      >
        <Container>
          <div
            className="
              mx-auto
              flex
              min-h-[280px]
              max-w-xl
              flex-col
              items-center
              justify-center
              text-center
              sm:min-h-[340px]
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                text-red-500
                sm:h-16
                sm:w-16
              "
            >
              <AlertCircle
                size={28}
                aria-hidden="true"
              />
            </div>

            <h2
              id="github-error-title"
              className="
                mt-5
                text-2xl
                font-black
                tracking-tight
                text-slate-900
                sm:text-3xl
                dark:text-white
              "
            >
              GitHub Data Unavailable
            </h2>

            <p
              className="
                mt-3
                max-w-md
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                dark:text-gray-400
              "
            >
              GitHub data could not be loaded right now. Please try again
              later.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="github"
      aria-labelledby="github-section-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        dark:bg-[#081b29]
      "
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-20
          top-20
          h-56
          w-56
          rounded-full
          bg-[#8245EC]/5
          blur-[90px]
          sm:h-72
          sm:w-72
          dark:bg-[#8245EC]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          bottom-20
          h-56
          w-56
          rounded-full
          bg-cyan-400/5
          blur-[90px]
          sm:h-72
          sm:w-72
          dark:bg-cyan-400/[0.07]
        "
      />

      <Container>
        <div className="relative z-10">
          {/* Section Heading */}
          <AnimatedSection>
            <div
              className="
                mx-auto
                w-full
                max-w-3xl
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#8245EC]/20
                  bg-[#8245EC]/10
                  text-[#8245EC]
                  sm:h-14
                  sm:w-14
                "
              >
                <Github
                  size={25}
                  aria-hidden="true"
                />
              </div>

              <p
                className="
                  mt-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-[#8245EC]
                  sm:mt-6
                  sm:text-sm
                  sm:tracking-[6px]
                "
              >
                GitHub
              </p>

              <h2
                id="github-section-title"
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-900
                  sm:mt-4
                  sm:text-4xl
                  md:text-5xl
                  dark:text-white
                "
              >
                My GitHub Dashboard
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-slate-600
                  sm:mt-6
                  sm:text-base
                  sm:leading-8
                  dark:text-gray-400
                "
              >
                Explore my public repositories, coding activity, technologies,
                and development work on GitHub.
              </p>
            </div>
          </AnimatedSection>

          {/* GitHub Dashboard */}
          <div
            className="
              mt-10
              flex
              min-w-0
              flex-col
              gap-8
              sm:mt-14
              sm:gap-10
              md:mt-16
              md:gap-12
              lg:mt-20
            "
          >
            <GitHubProfile user={user} />

            <GitHubStats
              user={user}
              repos={repos}
            />

            <GitHubLanguages repos={repos} />

            <FeaturedRepo repos={repos} />

            <GitHubRepos repos={repos} />

            <GitHubAnalytics
              user={user}
              repos={repos}
            />

            <GitHubContribution />
          </div>
        </div>
      </Container>
    </section>
  );
}