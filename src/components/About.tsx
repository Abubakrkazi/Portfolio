"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { AnimatedSection, Container, Button } from "./ui";

export default function About() {
  return (
    <section
      id="about"
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
          {/* Section Title */}
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl dark:text-white">
              Who I Am
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-gray-400">
              A Full Stack Developer focused on building scalable,
              user-centered web applications and intelligent software
              solutions using modern technologies.
            </p>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              mt-20
              rounded-3xl
              border
              border-slate-200
              bg-slate-50/80
              p-10
              shadow-sm
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/5
              dark:shadow-none
            "
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Hi, I'm Abubakr Kazi
            </h3>

            <p className="mt-8 leading-9 text-slate-600 dark:text-gray-400">
              I'm a Full Stack Developer focused on building scalable,
              user-centric web applications with modern technologies.
              <br />
              <br />
              I enjoy turning complex problems into clean, maintainable
              solutions and continuously improving my skills across software
              engineering, system design, and emerging technologies.
              <br />
              <br />
              My long-term goal is to build impactful software products that
              solve real-world problems and create meaningful value for people
              and businesses.
            </p>

            {/* Highlights */}
{/* About Highlight Cards */}
<div className="mt-10 grid gap-6 md:grid-cols-2">
  {[
    {
      title: "Full Stack Development",
      description:
        "Building modern web applications with React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and Prisma.",
    },
    {
      title: "Problem Solving",
      description:
        "Designing clean, maintainable solutions for complex technical and real-world problems.",
    },
    {
      title: "Continuous Learning",
      description:
        "Constantly exploring new technologies, frameworks, tools, and software engineering practices.",
    },
    {
      title: "Career Goal",
      description:
        "Growing into a highly skilled Software Engineer and building impactful products at the intersection of software and AI.",
    },
  ].map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:border-[#8245EC]
        hover:shadow-[0_0_30px_rgba(130,69,236,.18)]
        dark:border-white/10
        dark:bg-white/5
        dark:hover:shadow-[0_0_30px_rgba(130,69,236,.30)]
      "
    >
      {/* Number */}
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-[#8245EC]/10
          font-bold
          text-[#8245EC]
          transition
          duration-300
          group-hover:bg-[#8245EC]
          group-hover:text-white
        "
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Title */}
      <h4 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
        {item.title}
      </h4>

      {/* Description */}
      <p className="mt-3 leading-7 text-slate-600 dark:text-gray-400">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link href="/contact">
                <Button>Let's Connect</Button>
              </Link>

              <Link href="/projects">
                <Button
                  className="
                    border
                    border-[#8245EC]
                    bg-transparent
                    text-[#8245EC]
                    hover:bg-[#8245EC]/10
                    dark:text-white
                  "
                >
                  View My Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
}