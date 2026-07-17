"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const menus = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Blogs", href: "#blogs" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-slate-300/60
        bg-white/70
        backdrop-blur-xl
        shadow-[0_10px_35px_rgba(0,0,0,0.18)]
        transition-all
        duration-300

        dark:border-white/10
        dark:bg-[#081b29]/80
        dark:shadow-[0_10px_35px_rgba(0,0,0,0.45)]
      "
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}

        <Link
          href="/"
          className="
            text-2xl
            font-extrabold
            tracking-wide
            text-slate-900
            transition-all
            duration-300
            hover:scale-105
            hover:text-[#8245EC]

            dark:text-white
          "
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 lg:flex">
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.href}
                className="
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-[#8245EC]

                  dark:text-gray-300
                "
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

          <ThemeToggle />

          {/* Profile */}

          <div
            className="
              cursor-pointer
              rounded-full
              bg-gradient-to-r
              from-[#8245EC]
              to-cyan-400
              p-[2px]
              transition-all
              duration-300
              hover:scale-110
            "
          >
            <Image
              src="/profile.jpg"
              alt="Abubakr Kazi"
              width={52}
              height={52}
              priority
              className="
                rounded-full
                border
                border-[#081b29]
                object-cover

                dark:border-[#081b29]
              "
            />
          </div>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="
            text-slate-900
            transition
            hover:text-[#8245EC]

            dark:text-white

            lg:hidden
          "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* Mobile Drawer */}

      {isOpen && (
        <div
          className="
            border-t
            border-slate-200
            bg-white
            lg:hidden

            dark:border-white/10
            dark:bg-[#081b29]
          "
        >
          <ul className="flex flex-col gap-5 px-6 py-6">

            {/* Menu Items */}

            {menus.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    text-lg
                    text-slate-700
                    transition
                    hover:text-[#8245EC]

                    dark:text-gray-300
                  "
                >
                  {menu.name}
                </Link>
              </li>
            ))}

            {/* Theme Toggle */}

            <div className="flex justify-center pt-2">
              <ThemeToggle />
            </div>

            {/* Profile */}

            <div className="flex justify-center pt-2">

              <Link
                href="/profile.jpg"
                target="_blank"
              >
                <div
                  className="
                    rounded-full
                    bg-gradient-to-r
                    from-[#8245EC]
                    to-cyan-400
                    p-[2px]
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <Image
                    src="/profile.jpg"
                    alt="Abubakr Kazi"
                    width={50}
                    height={50}
                    priority
                    className="
                      rounded-full
                      border
                      border-white
                      object-cover

                      dark:border-[#081b29]
                    "
                  />
                </div>
              </Link>

            </div>

          </ul>
        </div>
      )}

    </header>
  );
}