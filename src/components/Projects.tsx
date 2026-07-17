"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { AnimatedSection, Button, Container } from "./ui";

export const projects = [
  {
    title: "KrishiBazar AI",
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
    githubUrl: "#",
    featured: true,
  },

  {
    title: "Vehicle Rental System",
    image: "/images/projects/vehicle-rental.png",
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
    githubUrl: "#",
    featured: false,
  },

  {
    title: "Portfolio Website",
    image: "/images/projects/portfolio.png",
    description:
      "A modern developer portfolio built to showcase my projects, technical skills, experience, education, GitHub activity, and technical articles.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#081b29] py-28"
    >
      <Container>

        <AnimatedSection>

          {/* Heading */}

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              My Projects
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
             A selection of projects that demonstrate my technical skills, problem-solving abilities, and experience building modern, scalable web applications.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-10 lg:grid-cols-3">

            {projects.map((project, index) => (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#8245EC]
                  hover:shadow-[0_0_40px_rgba(130,69,236,.35)]
                "
              >

                {/* Image */}

                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      to-transparent
                    "
                  />

                </div>

                {/* Content */}

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-white">

                    {project.title}

                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">

                    {project.description}

                  </p>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          bg-[#8245EC]/20
                          px-4
                          py-2
                          text-sm
                          text-[#d9c4ff]
                        "
                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

<div className="mt-8 flex gap-4">

  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button className="w-full justify-center">
      Live Demo
    </Button>
  </a>

  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button
      className="
        w-full
        justify-center
        border
        border-[#8245EC]
        bg-transparent
      "
    >
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