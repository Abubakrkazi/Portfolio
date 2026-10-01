"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import { Container } from "./ui";

const menus = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Skills", href: "/skills" },
  { title: "Projects", href: "/projects" },
  { title: "Experience", href: "/experience" },
  { title: "Education", href: "/education" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Abubakrkazi",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abubakr-kazi",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:kaziabubakr41@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-slate-200
        bg-slate-50
        text-slate-900
        transition-colors
        duration-300

        dark:border-white/10
        dark:bg-[#07131d]
        dark:text-white
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-[#8245EC]/[0.07]
          blur-[90px]

          sm:h-80
          sm:w-80

          dark:bg-[#8245EC]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-80
          w-80
          rounded-full
          bg-cyan-500/[0.04]
          blur-[100px]

          sm:h-96
          sm:w-96

          dark:bg-cyan-500/[0.06]
        "
      />

      <Container>
        <div
          className="
            relative
            z-10
            py-12

            sm:py-14
            md:py-16
            lg:py-20
          "
        >
          {/* ================= TOP ================= */}

          <div
            className="
              grid
              min-w-0
              grid-cols-1
              gap-10

              sm:gap-12

              md:grid-cols-2

              lg:grid-cols-[1.35fr_0.8fr_1fr]
              lg:gap-12

              xl:gap-16
            "
          >
            {/* =========================================
                BRAND
            ========================================= */}

            <div className="min-w-0">
              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  text-2xl
                  font-black
                  tracking-tight
                  text-slate-900
                  transition-colors
                  duration-300

                  hover:text-[#8245EC]

                  sm:text-3xl

                  dark:text-white
                "
              >
                Abubakr Kazi
                <span className="text-[#8245EC]">.</span>
              </Link>

              <p
                className="
                  mt-3
                  text-sm
                  font-semibold
                  text-[#8245EC]

                  sm:mt-4
                  sm:text-base

                  lg:text-lg
                "
              >
                React.js Developer • Full Stack Focused
              </p>

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-7
                  text-slate-600

                  sm:text-base

                  dark:text-gray-400
                "
              >
                Building modern, responsive, and user-friendly web
                applications while continuously expanding my skills across
                full-stack development.
              </p>

              {/* Location */}

              <div
                className="
                  mt-5
                  flex
                  min-w-0
                  items-start
                  gap-2
                  text-xs
                  leading-6
                  text-slate-500

                  sm:mt-6
                  sm:text-sm

                  dark:text-gray-400
                "
              >
                <MapPin
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#8245EC]
                  "
                />

                <span>Mirpur, Dhaka, Bangladesh</span>
              </div>

              {/* Social Icons */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  gap-2.5

                  sm:gap-3
                "
              >
                {socials.map((social) => {
                  const Icon = social.icon;
                  const isEmail = social.name === "Email";

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={
                        isEmail
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={social.name}
                      title={social.name}
                      className="
                        group
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        text-slate-600
                        shadow-sm
                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-[#8245EC]
                        hover:bg-[#8245EC]
                        hover:text-white
                        hover:shadow-[0_8px_20px_rgba(130,69,236,0.22)]

                        sm:h-11
                        sm:w-11

                        dark:border-white/10
                        dark:bg-white/[0.05]
                        dark:text-gray-300
                        dark:hover:border-[#8245EC]
                        dark:hover:bg-[#8245EC]
                        dark:hover:text-white
                      "
                    >
                      <Icon
                        size={18}
                        className="
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* =========================================
                QUICK LINKS
            ========================================= */}

            <div className="min-w-0">
              <h3
                className="
                  text-base
                  font-bold
                  text-slate-900

                  sm:text-lg

                  dark:text-white
                "
              >
                Quick Links
              </h3>

              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-x-4
                  gap-y-3

                  sm:mt-6
                  sm:gap-x-8
                  sm:gap-y-4

                  md:grid-cols-1

                  xl:grid-cols-2
                "
              >
                {menus.map((menu) => (
                  <Link
                    key={menu.title}
                    href={menu.href}
                    className="
                      group
                      flex
                      min-w-0
                      items-center
                      gap-2
                      text-sm
                      text-slate-600
                      transition-colors
                      duration-300

                      hover:text-[#8245EC]

                      dark:text-gray-400
                      dark:hover:text-[#8245EC]
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-slate-400
                        transition-all
                        duration-300

                        group-hover:scale-125
                        group-hover:bg-[#8245EC]
                        group-hover:shadow-[0_0_8px_#8245EC]

                        dark:bg-gray-600
                      "
                    />

                    <span className="truncate">
                      {menu.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* =========================================
                CONNECT / CTA
            ========================================= */}

            <div
              className="
                min-w-0

                md:col-span-2

                lg:col-span-1
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/70
                  p-5

                  sm:rounded-3xl
                  sm:p-6

                  lg:bg-transparent
                  lg:p-0
                  lg:border-0

                  dark:border-white/10
                  dark:bg-white/[0.035]

                  lg:dark:bg-transparent
                "
              >
                {/* Small Glow */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-[#8245EC]/10
                    blur-3xl

                    lg:hidden
                  "
                />

                <div className="relative">
                  <h3
                    className="
                      text-base
                      font-bold
                      text-slate-900

                      sm:text-lg

                      dark:text-white
                    "
                  >
                    Let&apos;s Connect
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-7
                      text-slate-600

                      sm:mt-4
                      sm:text-base

                      dark:text-gray-400
                    "
                  >
                    Interested in working together or discussing a project?
                    Feel free to get in touch.
                  </p>

                  <Link
                    href="/contact"
                    className="
                      group
                      mt-5
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#8245EC]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_8px_22px_rgba(130,69,236,0.24)]
                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-[#7138d8]
                      hover:shadow-[0_12px_28px_rgba(130,69,236,0.32)]

                      min-[420px]:w-auto

                      sm:px-6
                    "
                  >
                    Get In Touch

                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}

          <div
            className="
              my-9
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-slate-300
              to-transparent

              sm:my-10
              md:my-12

              dark:via-white/10
            "
          />

          {/* ================= BOTTOM ================= */}

          <div
            className="
              flex
              min-w-0
              flex-col
              items-center
              justify-between
              gap-5

              md:flex-row
            "
          >
            {/* Copyright */}

            <p
              className="
                max-w-full
                text-center
                text-xs
                leading-6
                text-slate-500

                sm:text-sm

                md:text-left

                dark:text-gray-500
              "
            >
              © {currentYear}{" "}
              <span
                className="
                  font-semibold
                  text-slate-700
                  dark:text-gray-300
                "
              >
                Abubakr Kazi
              </span>
              . All Rights Reserved.
            </p>

            {/* Back To Top */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2.5
                text-xs
                font-medium
                text-slate-700
                shadow-sm
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#8245EC]
                hover:bg-[#8245EC]
                hover:text-white
                hover:shadow-[0_8px_20px_rgba(130,69,236,0.22)]

                sm:px-5
                sm:text-sm

                dark:border-white/10
                dark:bg-white/[0.05]
                dark:text-gray-300
                dark:hover:border-[#8245EC]
                dark:hover:bg-[#8245EC]
                dark:hover:text-white
              "
            >
              <ArrowUp
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />

              Back to Top
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}