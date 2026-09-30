"use client";

import Link from "next/link";
import {
  ArrowUp,
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
        overflow-hidden
        border-t
        border-slate-200
        bg-slate-50
        transition-colors
        duration-300
        dark:border-white/10
        dark:bg-[#07131d]
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-[#8245EC]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-96
          w-96
          rounded-full
          bg-cyan-500/5
          blur-[120px]
        "
      />

      <Container>
        <div className="relative py-16">
          {/* ================= TOP ================= */}
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[1.3fr_1fr_1fr]
              lg:gap-16
            "
          >
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="
                  inline-block
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-900
                  transition-colors
                  duration-300
                  hover:text-[#8245EC]
                  dark:text-white
                "
              >
                Abubakr Kazi
                <span className="text-[#8245EC]">.</span>
              </Link>

              <p
                className="
                  mt-4
                  text-lg
                  font-semibold
                  text-[#8245EC]
                "
              >
                React.js Developer • Full Stack Focused
              </p>

              <p
                className="
                  mt-4
                  max-w-md
                  leading-7
                  text-slate-600
                  dark:text-gray-400
                "
              >
                Building modern, responsive, and user-friendly web
                applications while continuously expanding my skills
                across full-stack development.
              </p>

              {/* Location */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-500
                  dark:text-gray-400
                "
              >
                <MapPin
                  size={17}
                  className="shrink-0 text-[#8245EC]"
                />

                <span>Mirpur, Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>
              <h3
                className="
                  text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Quick Links
              </h3>

              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-x-8
                  gap-y-4
                "
              >
                {menus.map((menu) => (
                  <Link
                    key={menu.title}
                    href={menu.href}
                    className="
                      group
                      flex
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
                        rounded-full
                        bg-slate-400
                        transition-all
                        duration-300
                        group-hover:bg-[#8245EC]
                        group-hover:shadow-[0_0_8px_#8245EC]
                        dark:bg-gray-600
                      "
                    />

                    {menu.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= CONNECT ================= */}
            <div>
              <h3
                className="
                  text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Let&apos;s Connect
              </h3>

              <p
                className="
                  mt-4
                  leading-7
                  text-slate-600
                  dark:text-gray-400
                "
              >
                Interested in working together or discussing a project?
                Feel free to get in touch.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.name === "Email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        social.name === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={social.name}
                      title={social.name}
                      className="
                        group
                        flex
                        h-11
                        w-11
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
                        hover:shadow-[0_10px_25px_rgba(130,69,236,0.25)]
                        dark:border-white/10
                        dark:bg-white/5
                        dark:text-gray-300
                        dark:hover:border-[#8245EC]
                        dark:hover:bg-[#8245EC]
                        dark:hover:text-white
                      "
                    >
                      <Icon
                        size={19}
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

              {/* Contact Button */}
              <Link
                href="/contact"
                className="
                  mt-7
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#8245EC]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(130,69,236,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#7138d8]
                  hover:shadow-[0_15px_35px_rgba(130,69,236,0.35)]
                "
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div
            className="
              my-12
              h-px
              bg-gradient-to-r
              from-transparent
              via-slate-300
              to-transparent
              dark:via-white/10
            "
          />

          {/* ================= BOTTOM ================= */}
          <div
            className="
              flex
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
                text-center
                text-sm
                text-slate-500
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
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-5
                py-2.5
                text-sm
                font-medium
                text-slate-700
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#8245EC]
                hover:bg-[#8245EC]
                hover:text-white
                hover:shadow-[0_10px_25px_rgba(130,69,236,0.25)]
                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-300
                dark:hover:border-[#8245EC]
                dark:hover:bg-[#8245EC]
                dark:hover:text-white
              "
            >
              <ArrowUp
                size={16}
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