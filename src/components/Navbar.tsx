"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import ThemeToggle from "@/components/theme/ThemeToggle";

const menus = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Blogs", href: "/blogs" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        border-b
        border-slate-300/60
        bg-white/70
        shadow-[0_10px_35px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
        transition-all
        duration-300
        dark:border-white/10
        dark:bg-[#081b29]/80
        dark:shadow-[0_10px_35px_rgba(0,0,0,0.45)]
      "
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* ================= LOGO ================= */}
        <a
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
        </a>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden items-center gap-8 lg:flex">
          {menus.map((menu) => {
            const active = isActive(menu.href);

            const menuClass = `
              group/menu
              relative
              font-medium
              transition-all
              duration-300
              hover:text-[#8245EC]
              ${
                active
                  ? "text-[#8245EC]"
                  : "text-slate-700 dark:text-gray-300"
              }
            `;

            const underline = (
              <span
                className={`
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  bg-[#8245EC]
                  transition-all
                  duration-300
                  ${
                    active
                      ? "w-full"
                      : "w-0 group-hover/menu:w-full"
                  }
                `}
              />
            );

            return (
              <li key={menu.name}>
                {/* Home = Full Page Reload */}
                {menu.href === "/" ? (
                  <a href="/" className={menuClass}>
                    {menu.name}
                    {underline}
                  </a>
                ) : (
                  /* Other Pages = Next.js Navigation */
                  <Link href={menu.href} className={menuClass}>
                    {menu.name}
                    {underline}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* ================= DESKTOP RIGHT ================= */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Non-clickable Profile */}
          <div
            className="
              flex
              h-11
              w-11
              cursor-default
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border-2
              border-[#8245EC]
              bg-white
              shadow-[0_0_12px_rgba(130,69,236,0.30)]
              dark:bg-[#081b29]
            "
          >
            <Image
              src="/images/profile.png"
              alt="Abubakr Kazi"
              width={44}
              height={44}
              priority
              unoptimized
              draggable={false}
              className="
                h-full
                w-full
                select-none
                rounded-full
                object-cover
                object-top
              "
            />
          </div>
        </div>

        {/* ================= MOBILE RIGHT ================= */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-slate-900
              transition-all
              duration-300
              hover:bg-[#8245EC]/10
              hover:text-[#8245EC]
              dark:text-white
            "
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div
          className="
            border-t
            border-slate-200
            bg-white/95
            shadow-xl
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-[#081b29]/95
            lg:hidden
          "
        >
          <div className="mx-auto max-w-7xl px-6 py-5">
            <ul className="flex flex-col gap-2">
              {menus.map((menu) => {
                const active = isActive(menu.href);

                const mobileClass = `
                  block
                  rounded-xl
                  px-4
                  py-3
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-[#8245EC]/10 text-[#8245EC]"
                      : `
                        text-slate-700
                        hover:bg-[#8245EC]/10
                        hover:text-[#8245EC]
                        dark:text-gray-300
                      `
                  }
                `;

                {/* Home = Full Reload */}
                if (menu.href === "/") {
                  return (
                    <li key={menu.name}>
                      <a href="/" className={mobileClass}>
                        {menu.name}
                      </a>
                    </li>
                  );
                }

                {/* Other Pages */}
                return (
                  <li key={menu.name}>
                    <Link
                      href={menu.href}
                      onClick={() => setIsOpen(false)}
                      className={mobileClass}
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ================= MOBILE PROFILE ================= */}
            <div
              className="
                mt-5
                flex
                items-center
                justify-center
                border-t
                border-slate-200
                pt-5
                dark:border-white/10
              "
            >
              {/* Non-clickable Profile */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  cursor-default
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border-2
                  border-[#8245EC]
                  bg-white
                  shadow-[0_0_12px_rgba(130,69,236,0.30)]
                  dark:bg-[#081b29]
                "
              >
                <Image
                  src="/images/profile.png"
                  alt="Abubakr Kazi"
                  width={48}
                  height={48}
                  priority
                  unoptimized
                  draggable={false}
                  className="
                    h-full
                    w-full
                    select-none
                    rounded-full
                    object-cover
                    object-top
                  "
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}