"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

import { AnimatedSection, Container } from "./ui";

export const projects = [
  {
    title: "KrishiBazar",
    image: "/images/projects/krishibazar.png",
    description:
      "An AI-powered agriculture platform designed to help Bangladeshi farmers with intelligent farming solutions, crop disease detection, weather insights, and personalized agricultural guidance.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AI",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Abubakrkazi/KrishiBazar",
    featured: true,
  },
  {
    title: "Vehicle Rental System",
    image: "/images/projects/vehicle.png",
    description:
      "A full-stack vehicle rental platform with vehicle management, booking workflows, authentication, and a scalable backend architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Abubakrkazi/vehicle_rental",
    featured: false,
  },
  {
    title: "Wall of Humanity",
    image: "/images/projects/wall-of-humanity.png",
    description:
      "A community-driven web platform designed to connect people, share meaningful stories, support humanitarian initiatives, and create positive social impact through a modern digital experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Abubakrkazi/Wall-of-Humanity",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-16
        text-slate-900
        transition-colors
        duration-300

        sm:py-20
        md:py-24
        lg:py-28

        dark:bg-[#081b29]
        dark:text-white
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-16
          h-80
          w-80
          rounded-full
          bg-[#8245EC]/5
          blur-[110px]

          dark:bg-[#8245EC]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-cyan-400/5
          blur-[110px]
        "
      />

      <Container>
        <AnimatedSection>
          {/* ================= HEADING ================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-3xl
              text-center
            "
          >
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[4px]
                text-[#8245EC]

                sm:text-sm
                sm:tracking-[6px]
              "
            >
              My Projects
            </p>

            <h2
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
              Featured Projects
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
              A selection of projects that demonstrate my technical skills,
              problem-solving abilities, and experience building modern,
              practical web applications.
            </p>
          </div>

          {/* ================= PROJECT GRID ================= */}

          <div
            className="
              relative
              z-10
              mt-10
              grid
              w-full
              grid-cols-1
              gap-5

              sm:mt-14
              sm:gap-6

              md:mt-16
              md:grid-cols-2

              xl:mt-20
              xl:grid-cols-3
              xl:gap-7
            "
          >
            {projects.map((project, index) => {
              const hasLiveDemo =
                Boolean(project.liveUrl) &&
                project.liveUrl !== "#";

              return (
                <motion.article
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.1, 0.25),
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    flex
                    min-w-0
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50/80
                    shadow-sm
                    transition-all
                    duration-300

                    hover:border-[#8245EC]/60
                    hover:shadow-[0_18px_45px_rgba(130,69,236,0.12)]

                    sm:rounded-3xl

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:shadow-none
                    dark:hover:border-[#8245EC]/70
                    dark:hover:bg-white/[0.055]
                    dark:hover:shadow-[0_18px_45px_rgba(130,69,236,0.16)]
                  "
                >
                  {/* ================= IMAGE ================= */}

                  <div
                    className="
                      relative
                      aspect-[16/10]
                      w-full
                      overflow-hidden
                      bg-slate-200

                      dark:bg-white/[0.04]
                    "
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="
                        (max-width: 767px) 100vw,
                        (max-width: 1279px) 50vw,
                        33vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out

                        group-hover:scale-[1.05]
                      "
                    />

                    {/* Overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/55
                        via-black/[0.04]
                        to-transparent
                      "
                    />

                    {/* Featured Badge */}

                    {project.featured && (
                      <div
                        className="
                          absolute
                          left-3
                          top-3
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          border-white/15
                          bg-[#8245EC]
                          px-3
                          py-1.5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-white
                          shadow-lg

                          sm:left-4
                          sm:top-4
                          sm:text-xs
                        "
                      >
                        <Sparkles
                          size={12}
                          className="shrink-0"
                        />

                        Featured
                      </div>
                    )}

                    {/* GitHub Corner Link */}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} GitHub repository`}
                      className="
                        absolute
                        right-3
                        top-3
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/35
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-300

                        hover:border-[#8245EC]
                        hover:bg-[#8245EC]

                        sm:right-4
                        sm:top-4
                        sm:h-10
                        sm:w-10
                      "
                    >
                      <Github size={17} />
                    </a>
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      flex-col
                      p-4

                      sm:p-6

                      lg:p-7
                    "
                  >
                    {/* Number + Title */}

                    <div
                      className="
                        flex
                        min-w-0
                        items-start
                        justify-between
                        gap-3
                      "
                    >
                      <h3
                        className="
                          min-w-0
                          break-words
                          text-xl
                          font-bold
                          leading-snug
                          text-slate-900
                          transition-colors
                          duration-300

                          group-hover:text-[#8245EC]

                          sm:text-2xl

                          dark:text-white
                        "
                      >
                        {project.title}
                      </h3>

                      <span
                        className="
                          shrink-0
                          text-sm
                          font-bold
                          text-slate-300

                          dark:text-white/10
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Description */}

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-slate-600

                        sm:mt-4
                        sm:text-[15px]

                        lg:text-base
                        lg:leading-8

                        dark:text-gray-400
                      "
                    >
                      {project.description}
                    </p>

                    {/* ================= TECHNOLOGIES ================= */}

                    <div
                      className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2

                        sm:mt-6
                      "
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-[#8245EC]/20
                            bg-[#8245EC]/[0.07]
                            px-2.5
                            py-1.5
                            text-[10px]
                            font-medium
                            text-[#8245EC]
                            transition-all
                            duration-300

                            hover:border-[#8245EC]/50
                            hover:bg-[#8245EC]/15

                            min-[375px]:text-[11px]

                            sm:px-3
                            sm:text-xs

                            dark:bg-[#8245EC]/15
                            dark:text-[#d9c4ff]
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ================= BUTTONS ================= */}

                    <div
                      className="
                        mt-auto
                        grid
                        grid-cols-1
                        gap-3
                        pt-6

                        min-[420px]:grid-cols-2

                        sm:pt-7
                      "
                    >
                      {/* Live Demo */}

                      {hasLiveDemo ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live demo`}
                          className="
                            group/live
                            inline-flex
                            min-h-11
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-[#8245EC]
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-[0_8px_22px_rgba(130,69,236,0.22)]
                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:bg-[#7138d8]
                            hover:shadow-[0_12px_28px_rgba(130,69,236,0.32)]
                          "
                        >
                          Live Demo

                          <ExternalLink
                            size={16}
                            className="
                              shrink-0
                              transition-transform
                              duration-300

                              group-hover/live:-translate-y-0.5
                              group-hover/live:translate-x-0.5
                            "
                          />
                        </a>
                      ) : (
                        <div
                          aria-disabled="true"
                          className="
                            inline-flex
                            min-h-11
                            w-full
                            cursor-not-allowed
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-slate-200
                            bg-slate-100
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-slate-400

                            dark:border-white/10
                            dark:bg-white/[0.04]
                            dark:text-gray-500
                          "
                        >
                          Demo Soon

                          <ExternalLink
                            size={15}
                            className="shrink-0"
                          />
                        </div>
                      )}

                      {/* GitHub */}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} GitHub repository`}
                        className="
                          group/github
                          inline-flex
                          min-h-11
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          border
                          border-[#8245EC]
                          bg-transparent
                          px-4
                          py-3
                          text-sm
                          font-semibold
                          text-[#8245EC]
                          transition-all
                          duration-300

                          hover:-translate-y-0.5
                          hover:bg-[#8245EC]
                          hover:text-white
                          hover:shadow-[0_10px_25px_rgba(130,69,236,0.25)]

                          dark:text-white
                        "
                      >
                        <Github
                          size={16}
                          className="
                            shrink-0
                            transition-transform
                            duration-300

                            group-hover/github:rotate-6
                            group-hover/github:scale-110
                          "
                        />

                        GitHub

                        <ArrowUpRight
                          size={15}
                          className="
                            shrink-0
                            transition-transform
                            duration-300

                            group-hover/github:-translate-y-0.5
                            group-hover/github:translate-x-0.5
                          "
                        />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}