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

              A passionate Full Stack Developer who enjoys building
              modern, scalable and user-friendly web applications.

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

              I'm a passionate Full Stack Developer with a strong
              interest in building high-quality web applications
              using modern technologies.

              I enjoy solving real-world problems, writing clean
              and maintainable code, and continuously learning
              new technologies.

              My goal is to become a world-class Software Engineer
              and contribute to impactful products that improve
              people's lives.

            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <div className="rounded-xl bg-[#8245EC]/10 p-5">

                <h4 className="font-bold text-white">

                  Full Stack Development

                </h4>

                <p className="mt-3 text-gray-400">

                  React, Next.js, Node.js,
                  Express, MongoDB,
                  PostgreSQL & Prisma.

                </p>

              </div>

              <div className="rounded-xl bg-[#8245EC]/10 p-5">

                <h4 className="font-bold text-white">

                 Problem Solving

                </h4>

                <p className="mt-3 text-gray-400">

                  Love solving complex
                  programming challenges
                  with clean architecture.

                </p>

              </div>

              <div className="rounded-xl bg-[#8245EC]/10 p-5">

                <h4 className="font-bold text-white">

                  Continuous Learning

                </h4>

                <p className="mt-3 text-gray-400">

                  Always learning
                  new technologies,
                  frameworks and tools.

                </p>

              </div>

              <div className="rounded-xl bg-[#8245EC]/10 p-5">

                <h4 className="font-bold text-white">

                  Career Goal

                </h4>

                <p className="mt-3 text-gray-400">

                  Become an international
                  Software Engineer and
                  AI Innovator.

                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Button>

                Contact Me

              </Button>

              <Button
                className="
                border
                border-[#8245EC]
                bg-transparent
                "
              >

                My Projects

              </Button>

            </div>

          </motion.div>

        </AnimatedSection>
      </Container>
    </section>
  );
}