"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Container } from "./ui";

const experiences = [
  {
    year: "2023",
    title: "Started Programming Journey",
    description:
      "Began learning programming fundamentals, problem-solving, and the core concepts of web development.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Built multiple projects while developing skills in HTML, CSS, JavaScript, React, and Tailwind CSS.",
  },
  {
    year: "2025",
    title: "Backend Development",
    description:
      "Expanded into modern full-stack development with Next.js, Node.js, Express, MongoDB, PostgreSQL, and Prisma.",
  },
  {
    year: "Future",
    title: "Software Engineer",
    description:
      "Working towards becoming a highly skilled Software Engineer and building impactful software products at the intersection of full-stack development and AI.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#081b29] py-28"
    >
      <Container>
        <AnimatedSection>

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              My Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              A continuous journey of learning, building, and growing as a Full Stack Developer.
            </p>

          </div>

          <div className="relative mx-auto mt-20 max-w-4xl">

            {/* Vertical Line */}

            <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-[#8245EC]/30" />

            {experiences.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative mb-12 pl-16"
              >

                {/* Circle */}

                <div className="absolute left-0 top-2 h-10 w-10 rounded-full border-4 border-[#8245EC] bg-[#081b29]" />

                {/* Card */}

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <span className="text-sm font-semibold text-[#8245EC]">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </AnimatedSection>
      </Container>
    </section>
  );
}