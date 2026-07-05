"use client";

import Link from "next/link";
import { Container } from "./ui";

const menus = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Education",
    href: "#education",
  },
  {
    title: "Blogs",
    href: "#blogs",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07131d]">

      <Container>

        <div className="py-16">

          {/* Logo */}

          <div className="text-center">

            <h2 className="text-4xl font-black text-white">

              Abubakr Kazi

            </h2>

            <p className="mt-4 text-gray-400">

              Full Stack Developer

            </p>

          </div>

          {/* Navigation */}

          <div className="mt-12 flex flex-wrap justify-center gap-8">

            {menus.map((menu) => (

              <Link
                key={menu.title}
                href={menu.href}
                className="
                text-gray-400
                transition
                duration-300
                hover:text-[#8245EC]
                "
              >
                {menu.title}
              </Link>

            ))}

          </div>

          {/* Divider */}

          <div className="my-12 border-t border-white/10" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            <p className="text-sm text-gray-500">

              © {new Date().getFullYear()} Abubakr  Kazi.
              All Rights Reserved.

            </p>

            <a
              href="#home"
              className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              text-sm
              text-white
              transition-all
              duration-300
              hover:border-[#8245EC]
              hover:bg-[#8245EC]
              "
            >

              ↑ Back To Top

            </a>

          </div>

        </div>

      </Container>

    </footer>
  );
}