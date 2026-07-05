"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection, Button, Container } from "./ui";

const blogs = [
  {
    title: "Getting Started with Next.js",
    category: "Next.js",
    date: "July 2026",
    description:
      "Learn the fundamentals of Next.js App Router and build modern web applications.",
  },
  {
    title: "Mastering TypeScript",
    category: "TypeScript",
    date: "June 2026",
    description:
      "Understand TypeScript from beginner to advanced with practical examples.",
  },
  {
    title: "Prisma + PostgreSQL Guide",
    category: "Backend",
    date: "May 2026",
    description:
      "A complete guide to building scalable backend applications using Prisma ORM.",
  },
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="bg-[#081b29] py-28"
    >
      <Container>

        <AnimatedSection>

          {/* Heading */}

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[6px] text-[#8245EC]">
              Blogs
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Latest Articles
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              Sharing my knowledge, experience and thoughts about
              web development, programming and modern technologies.
            </p>

          </div>

          {/* Blog Grid */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {blogs.map((blog, index) => (

              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#8245EC]
                "
              >

                {/* Blog Image */}

                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#8245EC]/30 to-cyan-500/20">

                  <span className="text-xl font-bold text-white">
                    Blog Cover
                  </span>

                </div>

                {/* Content */}

                <div className="p-8">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-[#8245EC]/20 px-4 py-1 text-sm text-[#c8a8ff]">
                      {blog.category}
                    </span>

                    <span className="text-sm text-gray-400">
                      {blog.date}
                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {blog.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {blog.description}
                  </p>

                  <div className="mt-8">

                    <Link href="/blogs">

                      <Button>

                        Read More

                      </Button>

                    </Link>

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