"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Rocket,
  Target,
  ArrowRight,
} from "lucide-react";

import { AnimatedSection, Container, Button } from "./ui";

const highlights = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Problem Solving",
    description:
      "Turning technical and real-world problems into clean, maintainable, and practical software solutions.",
    icon: Lightbulb,
  },
  {
    title: "Continuous Learning",
    description:
      "Expanding my backend skills with Node.js, Express, databases, APIs, authentication, and modern development practices.",
    icon: Rocket,
  },
  {
    title: "Career Goal",
    description:
      "Growing toward full-stack development and building impactful digital products that solve meaningful real-world problems.",
    icon: Target,
  },
];

export default function About() {
  return (
    <section
      id="about"
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
      {/* Background Decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-24
          h-64
          w-64
          rounded-full
          bg-[#8245EC]/5
          blur-[90px]
          sm:h-80
          sm:w-80
          dark:bg-[#8245EC]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-64
          w-64
          rounded-full
          bg-cyan-400/5
          blur-[100px]
          sm:h-80
          sm:w-80
          dark:bg-cyan-400/5
        "
      />

      <Container>
        <AnimatedSection>
          {/* ================= HEADING ================= */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
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
              About Me
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
              Who I Am
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
              A React.js Developer focused on building modern, responsive, and
              user-friendly web applications while continuously expanding my
              skills toward full-stack development.
            </p>
          </div>

          {/* ================= MAIN CARD ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              mx-auto
              mt-10
              w-full
              max-w-6xl
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-slate-50/80
              p-5
              shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              backdrop-blur-xl

              sm:mt-14
              sm:rounded-3xl
              sm:p-7

              md:mt-16
              md:p-9

              lg:mt-20
              lg:p-10

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            "
          >
            {/* Card Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-[#8245EC]/10
                blur-[100px]
              "
            />

            {/* ================= INTRO ================= */}
            <div className="relative">
              <div
                className="
                  mb-5
                  h-1
                  w-12
                  rounded-full
                  bg-[#8245EC]
                  sm:w-14
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                  dark:text-white
                "
              >
                Hi, I&apos;m{" "}
                <span className="text-[#8245EC]">
                  Abubakr Kazi
                </span>
              </h3>

              <div
                className="
                  mt-5
                  max-w-4xl
                  space-y-4
                  text-sm
                  leading-7
                  text-slate-600
                  sm:mt-6
                  sm:space-y-5
                  sm:text-base
                  sm:leading-8
                  dark:text-gray-400
                "
              >
                <p>
                  I&apos;m a React.js Developer focused on building modern,
                  responsive, and user-friendly web applications with React,
                  Next.js, TypeScript, and Tailwind CSS.
                </p>

                <p>
                  I&apos;m currently expanding my backend skills with Node.js,
                  Express, databases, and API development as I grow toward
                  full-stack development. I enjoy solving real-world problems,
                  creating practical digital products, and continuously
                  improving my skills with modern web technologies.
                </p>

                <p>
                  My goal is to grow as a software engineer and build reliable,
                  scalable, and meaningful products that create value for users
                  and businesses.
                </p>
              </div>
            </div>

            {/* ================= HIGHLIGHT CARDS ================= */}
            <div
              className="
                relative
                mt-8
                grid
                grid-cols-1
                gap-4

                min-[520px]:grid-cols-2

                sm:mt-10
                sm:gap-5

                lg:gap-6
              "
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
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
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      group
                      relative
                      min-w-0
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-5
                      shadow-sm
                      transition-all
                      duration-300

                      hover:border-[#8245EC]/60
                      hover:shadow-[0_15px_40px_rgba(130,69,236,0.10)]

                      sm:p-6

                      dark:border-white/10
                      dark:bg-white/[0.04]
                      dark:hover:border-[#8245EC]/70
                      dark:hover:bg-white/[0.06]
                      dark:hover:shadow-[0_15px_40px_rgba(130,69,236,0.15)]
                    "
                  >
                    {/* Hover Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-12
                        -top-12
                        h-28
                        w-28
                        rounded-full
                        bg-[#8245EC]/0
                        blur-3xl
                        transition-all
                        duration-500
                        group-hover:bg-[#8245EC]/10
                      "
                    />

                    <div className="relative">
                      {/* Icon + Number */}
                      <div className="flex items-center justify-between gap-4">
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#8245EC]/10
                            text-[#8245EC]
                            transition-all
                            duration-300

                            group-hover:bg-[#8245EC]
                            group-hover:text-white

                            sm:h-12
                            sm:w-12
                          "
                        >
                          <Icon size={22} />
                        </div>

                        <span
                          className="
                            text-xs
                            font-bold
                            tracking-wider
                            text-slate-300
                            dark:text-white/15
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h4
                        className="
                          mt-5
                          text-lg
                          font-bold
                          text-slate-900
                          transition-colors
                          duration-300
                          group-hover:text-[#8245EC]
                          sm:text-xl
                          dark:text-white
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-7
                          text-slate-600
                          sm:text-[15px]
                          dark:text-gray-400
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= ACTIONS ================= */}
            <div
              className="
                relative
                mt-8
                flex
                w-full
                flex-col
                gap-3
                border-t
                border-slate-200
                pt-7

                min-[480px]:flex-row
                min-[480px]:flex-wrap

                sm:mt-10
                sm:gap-4
                sm:pt-8

                dark:border-white/10
              "
            >
              <Link
                href="/contact"
                className="
                  w-full
                  min-[480px]:w-auto
                "
              >
                <Button
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    min-[480px]:w-auto
                  "
                >
                  Let&apos;s Connect
                  <ArrowRight size={17} />
                </Button>
              </Link>

              <Link
                href="/projects"
                className="
                  w-full
                  min-[480px]:w-auto
                "
              >
                <Button
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    border
                    border-[#8245EC]
                    bg-transparent
                    text-[#8245EC]
                    shadow-none

                    hover:bg-[#8245EC]/10
                    hover:shadow-none

                    min-[480px]:w-auto

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