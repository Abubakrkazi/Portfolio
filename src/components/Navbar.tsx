"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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

  // Close mobile menu after route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close mobile menu with Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        w-full
        border-b
        border-slate-200/80
        bg-white/80
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        transition-colors
        duration-300

        dark:border-white/10
        dark:bg-[#081b29]/85
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      {/* ================= MAIN NAVBAR ================= */}

      <nav
        className="
          mx-auto
          flex
          h-[68px]
          w-full
          max-w-7xl
          items-center
          justify-between
          gap-3
          px-4

          sm:h-[72px]
          sm:px-6

          lg:px-8
        "
      >
        {/* ================= LOGO ================= */}

        <Link
          href="/"
          aria-label="Portfolio Home"
          className="
            shrink-0
            text-xl
            font-black
            tracking-tight
            text-slate-900
            transition-all
            duration-300

            hover:text-[#8245EC]

            min-[375px]:text-2xl

            dark:text-white
          "
        >
          Portfolio
          <span className="text-[#8245EC]">.</span>
        </Link>

        {/* ================= DESKTOP MENU ================= */}

        <ul
          className="
            hidden
            min-w-0
            items-center
            gap-4

            lg:flex

            xl:gap-7
          "
        >
          {menus.map((menu) => {
            const active = isActive(menu.href);

            const menuClass = `
              group/menu
              relative
              whitespace-nowrap
              text-[13px]
              font-medium
              transition-colors
              duration-300
              hover:text-[#8245EC]

              xl:text-sm

              ${
                active
                  ? "text-[#8245EC]"
                  : "text-slate-700 dark:text-gray-300"
              }
            `;

            const underline = (
              <span
                aria-hidden="true"
                className={`
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  rounded-full
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
                <Link
                  href={menu.href}
                  className={menuClass}
                  aria-current={active ? "page" : undefined}
                >
                  {menu.name}
                  {underline}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ================= DESKTOP RIGHT ================= */}

        <div
          className="
            hidden
            shrink-0
            items-center
            gap-3

            lg:flex
          "
        >
          <ThemeToggle />

          {/* Non-clickable Profile */}

          <div
            title="Abubakr Kazi"
            className="
              flex
              h-11
              w-11
              cursor-default
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#8245EC]/70
              bg-white
              p-[2px]
              shadow-[0_0_15px_rgba(130,69,236,0.18)]

              dark:bg-[#081b29]
              dark:shadow-[0_0_15px_rgba(130,69,236,0.25)]
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

        <div
          className="
            flex
            shrink-0
            items-center
            gap-1.5

            min-[375px]:gap-2

            sm:gap-3

            lg:hidden
          "
        >
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="
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
              text-slate-800
              shadow-sm
              transition-all
              duration-300

              hover:border-[#8245EC]/40
              hover:bg-[#8245EC]/10
              hover:text-[#8245EC]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#8245EC]
              focus-visible:ring-offset-2

              dark:border-white/10
              dark:bg-white/[0.05]
              dark:text-white
              dark:hover:border-[#8245EC]/50
              dark:hover:bg-[#8245EC]/10
              dark:hover:text-[#c8a8ff]
              dark:focus-visible:ring-offset-[#081b29]
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="flex"
                >
                  <X size={22} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="flex"
                >
                  <Menu size={22} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              border-t
              border-slate-200
              bg-white/95
              shadow-[0_15px_35px_rgba(15,23,42,0.08)]
              backdrop-blur-xl

              lg:hidden

              dark:border-white/10
              dark:bg-[#081b29]/95
              dark:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
            "
          >
            <div
              className="
                mx-auto
                max-h-[calc(100dvh-68px)]
                w-full
                max-w-7xl
                overflow-y-auto
                overscroll-contain
                px-4
                py-4

                sm:max-h-[calc(100dvh-72px)]
                sm:px-6
                sm:py-5
              "
            >
              {/* Navigation */}

              <ul className="flex flex-col gap-1">
                {menus.map((menu, index) => {
                  const active = isActive(menu.href);

                  const mobileClass = `
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    sm:py-3

                    ${
                      active
                        ? `
                            bg-[#8245EC]/10
                            text-[#8245EC]
                          `
                        : `
                            text-slate-700
                            hover:bg-[#8245EC]/[0.07]
                            hover:text-[#8245EC]

                            dark:text-gray-300
                            dark:hover:bg-[#8245EC]/10
                            dark:hover:text-[#c8a8ff]
                          `
                    }
                  `;

                  const content = (
                    <>
                      <span>{menu.name}</span>

                      <span
                        aria-hidden="true"
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#8245EC]
                          transition-all
                          duration-300

                          ${
                            active
                              ? `
                                  scale-100
                                  shadow-[0_0_8px_rgba(130,69,236,0.6)]
                                `
                              : `
                                  scale-0
                                  group-hover:scale-100
                                `
                          }
                        `}
                      />
                    </>
                  );

                  return (
                    <motion.li
                      key={menu.name}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.025,
                      }}
                    >
                      <Link
                        href={menu.href}
                        onClick={() => setIsOpen(false)}
                        className={mobileClass}
                        aria-current={
                          active ? "page" : undefined
                        }
                      >
                        {content}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* ================= MOBILE PROFILE ================= */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                  border-t
                  border-slate-200
                  px-1
                  pt-4

                  dark:border-white/10
                "
              >
                {/* Non-clickable Profile */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    cursor-default
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-[#8245EC]/70
                    bg-white
                    p-[2px]
                    shadow-[0_0_15px_rgba(130,69,236,0.20)]

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

                <div className="min-w-0">
                  <p
                    className="
                      truncate
                      text-sm
                      font-bold
                      text-slate-900

                      dark:text-white
                    "
                  >
                    Abubakr Kazi
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-xs
                      text-slate-500

                      dark:text-gray-400
                    "
                  >
                    React.js Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}