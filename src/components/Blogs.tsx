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
  description?: string;
  content?: string;
  thumbnail?: string;
}

/*
  Optional:
  কোনো নির্দিষ্ট blog-এর জন্য নিজের local image ব্যবহার করতে চাইলে
  এখানে title + image path দিতে পারো।
*/
const blogImages: Record<string, string> = {
  "What Are AI Agents? A Complete Beginner’s Guide (2026)":
    "/images/blog-1.jpg",

  "The Quantum Search Revolution: Grover’s Algorithm Unveiled":
    "/images/blog-2.jpg",
};

/* Extract first image from Medium article HTML */
function getImageFromHtml(html?: string) {
  if (!html) return "";

  const match = html.match(
    /<img[^>]+src=["']([^"']+)["']/i
  );

  return match?.[1] || "";
}

/* Decide which image should be displayed */
function getBlogImage(item: RSSItem) {
  // 1. Manually assigned local image
  if (blogImages[item.title]) {
    return blogImages[item.title];
  }

  // 2. RSS thumbnail
  if (item.thumbnail) {
    return item.thumbnail;
  }

  // 3. Image inside Medium content
  const contentImage = getImageFromHtml(item.content);

  if (contentImage) {
    return contentImage;
  }

  // 4. Image inside description
  const descriptionImage = getImageFromHtml(item.description);

  if (descriptionImage) {
    return descriptionImage;
  }

  // 5. Final fallback
  return "/images/blog-placeholder.jpg";
}

/* Remove HTML tags from Medium description */
function cleanDescription(html?: string) {
  if (!html) return "";

  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
    .slice(0, 140);
}

export default function Blogs() {
  const [posts, setPosts] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaziabubakr87"
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.status}`);
        }

        const data = await res.json();

        if (!data.items || !Array.isArray(data.items)) {
          console.warn(
            "Medium feed is still being processed:",
            data
          );

          setPosts([]);
          return;
        }

        const blogs: RSSItem[] = data.items.map(
          (item: RSSItem) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,

            description: cleanDescription(
              item.description || item.content
            ),

            thumbnail: getBlogImage(item),
          })
        );

        setPosts(blogs);
      } catch (error) {
        console.error("BLOG FETCH ERROR:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section
      id="blogs"
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
              Blogs
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl dark:text-white">
              Latest Articles
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-gray-400">
              A collection of technical articles where I share insights,
              lessons, and ideas from my journey in software development.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="mt-20 text-center text-slate-500 dark:text-gray-400">
              Loading latest blogs...
            </div>
          )}

          {/* Empty */}
          {!loading && posts.length === 0 && (
            <div className="mt-20 text-center text-slate-500 dark:text-gray-400">
              No articles found right now.
            </div>
          )}

          {/* Blog Grid */}
          {!loading && posts.length > 0 && (
            <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                    border-slate-200
                    bg-slate-50
                    shadow-sm
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-3
                    hover:border-[#8245EC]
                    hover:shadow-[0_0_40px_rgba(130,69,236,.18)]
                    dark:border-white/10
                    dark:bg-white/5
                    dark:shadow-none
                    dark:hover:shadow-[0_0_40px_rgba(130,69,236,.35)]
                  "
                >
                  {/* Blog Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/images/blog-placeholder.jpg";
                      }}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm font-medium text-[#8245EC]">
                      <CalendarDays size={16} />

                      {new Date(post.pubDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-4
                        line-clamp-2
                        text-2xl
                        font-bold
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-[#8245EC]
                        dark:text-white
                      "
                    >
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 line-clamp-3 leading-7 text-slate-600 dark:text-gray-400">
                      {post.description}
                    </p>

                    {/* Button */}
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="mt-8 w-full justify-center gap-2">
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