"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import { AnimatedSection, Button, Container } from "./ui";

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
        bg-white
        py-28
        text-slate-900
        transition-colors
        duration-300
        dark:bg-[#081b29]
        dark:text-white
      "
    >
      <Container>
        <AnimatedSection>
          {/* Heading */}
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              My Projects
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl dark:text-white">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-gray-400">
              A selection of projects that demonstrate my technical skills,
              problem-solving abilities, and experience building modern,
              scalable web applications.
            </p>
          </div>

          {/* Project Cards */}
          <div className="mt-20 grid gap-10 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#8245EC]
                  hover:shadow-[0_0_40px_rgba(130,69,236,.20)]
                  dark:border-white/10
                  dark:bg-white/5
                  dark:shadow-none
                  dark:hover:shadow-[0_0_40px_rgba(130,69,236,.35)]
                "
              >
                {/* Project Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <span
                      className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        bg-[#8245EC]
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-white
                        shadow-lg
                      "
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-[#8245EC]
                      dark:text-white
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 leading-8 text-slate-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-[#8245EC]/20
                          bg-[#8245EC]/10
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-[#8245EC]
                          transition-all
                          duration-300
                          hover:border-[#8245EC]/50
                          hover:bg-[#8245EC]/20
                          dark:bg-[#8245EC]/20
                          dark:text-[#d9c4ff]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-4 pt-8">
                    {/* Live Demo */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        className="
                          group/live
                          w-full
                          justify-center
                          gap-2
                          font-semibold
                          transition-all
                          duration-300
                          hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]
                          active:scale-95
                        "
                      >
                        Live Demo

                        <ExternalLink
                          size={9}
                          className="
                            transition-transform
                            duration-300
                            group-hover/live:-translate-y-0.5
                            group-hover/live:translate-x-0.5
                          "
                        />
                      </Button>
                    </a>

                    {/* GitHub */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        className="
                          group/github
                          w-full
                          justify-center
                          gap-2
                          border
                          border-[#8245EC]
                          bg-transparent
                          font-semibold
                          text-[#8245EC]
                          transition-all
                          duration-300

                          hover:border-[#8245EC]
                          hover:bg-[#8245EC]
                          hover:text-white
                          hover:shadow-[0_0_25px_rgba(130,69,236,0.55)]

                          dark:border-[#8245EC]
                          dark:bg-transparent
                          dark:text-white
                          dark:hover:bg-[#8245EC]
                          dark:hover:text-white

                          active:scale-95
                        "
                      >
                        <Github
                          size={8}
                          className="
                            transition-transform
                            duration-300
                            group-hover/github:rotate-6
                            group-hover/github:scale-110
                          "
                        />

                        GitHub
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}