"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection, Button, Container } from "./ui";

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
}

const blogImages: Record<string, string> = {
  "What Are AI Agents? A Complete Beginner’s Guide (2026)":
    "/images/blog-1.jpg",

  "The Quantum Search Revolution: Grover’s Algorithm Unveiled":
    "/images/blog-2.jpg",
};
export default function Blogs() {
  const [posts, setPosts] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaziabubakr87",
        );

        const data = await res.json();

        if (!data.items || !Array.isArray(data.items)) {
          console.warn("Medium feed is still being processed:", data);
          return;
        }

        const blogs = data.items.map((item: RSSItem, index: number) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,

          description: item.description.replace(/<[^>]+>/g, "").slice(0, 140),

          thumbnail: blogImages[item.title] || "/images/blog-placeholder.jpg",
        }));

        setPosts(blogs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="bg-[#081b29] py-28">
      <Container>
        <AnimatedSection>
          <div className="text-center">
            <p
              className="
              font-semibold
              uppercase
              tracking-[6px]
              text-[#8245EC]
            "
            >
              Blogs
            </p>

            <h2
              className="
              mt-4
              text-4xl
              font-black
              text-white
              md:text-5xl
            "
            >
              Latest Articles
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-2xl
              leading-8
              text-gray-400
            "
            >
              A collection of technical articles where I share insights,
              lessons, and ideas from my journey in software development.
            </p>
          </div>

          {loading && (
            <div
              className="
              mt-20
              text-center
              text-gray-400
            "
            >
              Loading latest blogs...
            </div>
          )}

          {!loading && (
            <div
              className="
              mt-20
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
            >
              {posts.map((post, index) => (
                <motion.article
                  key={post.link}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{
                    once: true,
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
                  hover:-translate-y-3
                  hover:border-[#8245EC]
                  hover:shadow-[0_0_40px_rgba(130,69,236,.35)]
                  "
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-7">
                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-[#8245EC]
                      "
                    >
                      <CalendarDays size={16} />

                      {new Date(post.pubDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                    <h3
                      className="
                      mt-4
                      line-clamp-2
                      text-2xl
                      font-bold
                      text-white
                      transition
                      group-hover:text-[#8245EC]
                      "
                    >
                      {post.title}
                    </h3>

                    <p
                      className="
                      mt-4
                      line-clamp-3
                      leading-7
                      text-gray-400
                      "
                    >
                      {post.description}
                    </p>

                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        className="
                        mt-8
                        w-full
                        justify-center
                        gap-2
                        "
                      >
                        Read on Medium
                        <ArrowUpRight size={18} />
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}
