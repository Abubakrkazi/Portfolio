"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, FileText } from "lucide-react";
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

/* =========================================================
   OPTIONAL LOCAL BLOG IMAGES
========================================================= */

const blogImages: Record<string, string> = {
  "What Are AI Agents? A Complete Beginner’s Guide (2026)":
    "/images/blog-1.jpg",

  "The Quantum Search Revolution: Grover’s Algorithm Unveiled":
    "/images/blog-2.jpg",
};

/* =========================================================
   GET IMAGE FROM MEDIUM HTML
========================================================= */

function getImageFromHtml(html?: string) {
  if (!html) return "";

  const match = html.match(
    /<img[^>]+src=["']([^"']+)["']/i
  );

  return match?.[1] || "";
}

/* =========================================================
   SELECT BLOG IMAGE
========================================================= */

function getBlogImage(item: RSSItem) {
  if (blogImages[item.title]) {
    return blogImages[item.title];
  }

  if (item.thumbnail) {
    return item.thumbnail;
  }

  const contentImage = getImageFromHtml(item.content);

  if (contentImage) {
    return contentImage;
  }

  const descriptionImage = getImageFromHtml(item.description);

  if (descriptionImage) {
    return descriptionImage;
  }

  return "/images/blog-placeholder.jpg";
}

/* =========================================================
   CLEAN MEDIUM DESCRIPTION
========================================================= */

function cleanDescription(html?: string) {
  if (!html) return "";

  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= 150) {
    return text;
  }

  return `${text.slice(0, 150).trim()}...`;
}

/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* =========================================================
   LOADING SKELETON
========================================================= */

function BlogSkeleton() {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        sm:rounded-3xl
        dark:border-white/10
        dark:bg-white/[0.04]
      "
    >
      <div
        className="
          aspect-[16/9]
          w-full
          animate-pulse
          bg-slate-200
          dark:bg-white/10
        "
      />

      <div className="p-5 sm:p-6 lg:p-7">
        <div
          className="
            h-4
            w-32
            animate-pulse
            rounded-full
            bg-slate-200
            dark:bg-white/10
          "
        />

        <div
          className="
            mt-5
            h-6
            w-full
            animate-pulse
            rounded-lg
            bg-slate-200
            dark:bg-white/10
          "
        />

        <div
          className="
            mt-3
            h-6
            w-3/4
            animate-pulse
            rounded-lg
            bg-slate-200
            dark:bg-white/10
          "
        />

        <div className="mt-6 space-y-2">
          <div
            className="
              h-3
              w-full
              animate-pulse
              rounded-full
              bg-slate-200
              dark:bg-white/10
            "
          />

          <div
            className="
              h-3
              w-full
              animate-pulse
              rounded-full
              bg-slate-200
              dark:bg-white/10
            "
          />

          <div
            className="
              h-3
              w-2/3
              animate-pulse
              rounded-full
              bg-slate-200
              dark:bg-white/10
            "
          />
        </div>

        <div
          className="
            mt-7
            h-12
            w-full
            animate-pulse
            rounded-full
            bg-slate-200
            dark:bg-white/10
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   BLOGS
========================================================= */

export default function Blogs() {
  const [posts, setPosts] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function fetchBlogs() {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaziabubakr87"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch blogs: ${response.status}`
          );
        }

        const data = await response.json();

        if (!active) return;

        if (!Array.isArray(data.items)) {
          console.warn(
            "Medium feed is unavailable or still being processed:",
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

            description:
              cleanDescription(
                item.description || item.content
              ) ||
              "Read the full article on Medium.",

            thumbnail: getBlogImage(item),
          })
        );

        setPosts(blogs);
      } catch (error) {
        if (!active) return;

        console.error("BLOG FETCH ERROR:", error);
        setPosts([]);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    fetchBlogs();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="blogs"
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
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-[#8245EC]/5
          blur-[100px]
          dark:bg-[#8245EC]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-cyan-400/5
          blur-[110px]
        "
      />

      <Container>
        <AnimatedSection>
          {/* ================= HEADING ================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-3xl
              text-center
            "
          >
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
              Blogs
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
              Latest Articles
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
              A collection of technical articles where I share insights,
              lessons, and ideas from my journey in software development and
              modern technology.
            </p>
          </div>

          {/* ================= LOADING ================= */}

          {loading && (
            <div
              className="
                relative
                z-10
                mt-10
                grid
                grid-cols-1
                gap-5
                sm:mt-14
                sm:gap-6
                md:mt-16
                md:grid-cols-2
                lg:gap-7
                xl:mt-20
                xl:grid-cols-3
              "
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <BlogSkeleton key={index} />
              ))}
            </div>
          )}

          {/* ================= EMPTY ================= */}

          {!loading && posts.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                relative
                z-10
                mx-auto
                mt-12
                max-w-xl
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-5
                py-10
                text-center
                sm:mt-16
                sm:rounded-3xl
                sm:px-8
                sm:py-12
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#8245EC]/10
                  text-[#8245EC]
                "
              >
                <FileText size={26} />
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-bold
                  text-slate-900
                  sm:text-xl
                  dark:text-white
                "
              >
                Articles are unavailable right now
              </h3>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-500
                  sm:text-base
                  dark:text-gray-400
                "
              >
                My latest Medium articles could not be loaded. Please check
                back again shortly.
              </p>
            </motion.div>
          )}

          {/* ================= BLOG GRID ================= */}

          {!loading && posts.length > 0 && (
            <div
              className="
                relative
                z-10
                mt-10
                grid
                grid-cols-1
                items-stretch
                gap-5
                sm:mt-14
                sm:gap-6
                md:mt-16
                md:grid-cols-2
                lg:gap-7
                xl:mt-20
                xl:grid-cols-3
              "
            >
              {posts.map((post, index) => (
                <motion.article
                  key={post.link}
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    duration: 0.45,
                    delay: Math.min(index * 0.07, 0.3),
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    group
                    flex
                    min-w-0
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    shadow-sm
                    transition-all
                    duration-300

                    hover:border-[#8245EC]/70
                    hover:shadow-[0_20px_50px_rgba(130,69,236,0.12)]

                    sm:rounded-3xl

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:shadow-none
                    dark:hover:border-[#8245EC]/70
                    dark:hover:bg-white/[0.055]
                    dark:hover:shadow-[0_20px_50px_rgba(130,69,236,0.18)]
                  "
                >
                  {/* ================= IMAGE ================= */}

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${post.title} on Medium`}
                    className="
                      relative
                      block
                      aspect-[16/9]
                      w-full
                      shrink-0
                      overflow-hidden
                      bg-slate-200
                      dark:bg-white/10
                    "
                  >
                    <img
                      src={
                        post.thumbnail ||
                        "/images/blog-placeholder.jpg"
                      }
                      alt={post.title}
                      loading="lazy"
                      onError={(event) => {
                        const image = event.currentTarget;

                        if (
                          !image.src.endsWith(
                            "/images/blog-placeholder.jpg"
                          )
                        ) {
                          image.src =
                            "/images/blog-placeholder.jpg";
                        }
                      }}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/45
                        via-black/5
                        to-transparent
                      "
                    />

                    {/* Medium Badge */}
                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        border
                        border-white/20
                        bg-black/40
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-white
                        backdrop-blur-md
                        sm:text-xs
                      "
                    >
                      Medium
                    </span>
                  </a>

                  {/* ================= CONTENT ================= */}

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      p-5
                      sm:p-6
                      lg:p-7
                    "
                  >
                    {/* Date */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-semibold
                        text-[#8245EC]
                        sm:text-sm
                      "
                    >
                      <CalendarDays
                        size={15}
                        className="shrink-0"
                      />

                      <span>
                        {formatDate(post.pubDate)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-4
                        line-clamp-2
                        text-xl
                        font-bold
                        leading-snug
                        text-slate-900
                        transition-colors
                        duration-300

                        group-hover:text-[#8245EC]

                        sm:text-2xl

                        dark:text-white
                      "
                    >
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-3
                        line-clamp-3
                        flex-1
                        text-sm
                        leading-7
                        text-slate-600
                        sm:mt-4
                        sm:text-[15px]
                        dark:text-gray-400
                      "
                    >
                      {post.description}
                    </p>

                    {/* Button */}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-6
                        block
                        w-full
                        sm:mt-7
                      "
                    >
                      <Button
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                        "
                      >
                        Read on Medium
                        <ArrowUpRight size={17} />
                      </Button>
                    </a>
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