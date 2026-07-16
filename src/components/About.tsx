"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Container, Button } from "./ui";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#081b29] py-28"
    >
      <Container>
        <AnimatedSection>

          {/* Section Title */}

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#8245EC] font-semibold">

              About Me

            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">

              Who I Am

            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">

A Full Stack Developer focused on building scalable, user-centered web applications and intelligent software solutions using modern technologies.

            </p>

          </div>

          {/* Card */}

          <motion.div

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: .6 }}

            className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            "

          >

            <h3 className="text-3xl font-bold text-white">

              Hi, I'm Abubakr Kazi

            </h3>

            <p className="mt-8 leading-9 text-gray-400">



I'm a Full Stack Developer focused on building scalable, user-centric web applications with modern technologies.

I enjoy turning complex problems into clean, maintainable solutions and continuously improving my skills across software engineering, system design, and emerging technologies.

My long-term goal is to build impactful software products that solve real-world problems and create meaningful value for people and businesses.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <div className="rounded-xl bg-[#8245EC]/10 p-5">

                <h4 className="font-bold text-white">

                  Full Stack Development

                </h4>

                <p className="mt-3 text-gray-400">

Building modern web applications with React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and Prisma.              

                </p>

              </div>

              <div className="rounded-xl bg-[#8245EC]/10 p-5">

                <h4 className="font-bold text-white">

                 Problem Solving

                </h4>

                <p className="mt-3 text-gray-400">

                  Designing clean, maintainable solutions for complex technical and real-world problems.

                </p>

              </div>

              <div className="rounded-xl bg-[#8245EC]/10 p-5">

                <h4 className="font-bold text-white">

                  Continuous Learning

                </h4>

                <p className="mt-3 text-gray-400">

Constantly exploring new technologies, frameworks, tools, and software engineering practices.

                </p>

              </div>

              <div className="rounded-xl bg-[#8245EC]/10 p-5">

                <h4 className="font-bold text-white">

                  Career Goal

                </h4>

                <p className="mt-3 text-gray-400">

                 Growing into a highly skilled Software Engineer and building impactful products at the intersection of software and AI.

                </p>

              </div>

            </div>

            {/* Buttons */}

<div className="mt-12 flex flex-wrap gap-5">

  <a href="#contact">
    <Button>
      Let's Connect
    </Button>
  </a>

  <a href="#projects">
    <Button
      className="
      border
      border-[#8245EC]
      bg-transparent
      "
    >
     View My Projects
    </Button>
  </a>

</div>

           

          </motion.div>

        </AnimatedSection>
      </Container>
    </section>
  );
}