"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Image from "next/image";
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#081b29]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-white transition hover:text-[#8245EC]"
        >
          {"Portfolio"}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.href}
                className="text-gray-300 transition duration-300 hover:text-[#8245EC]"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Profile */}

<div className="hidden lg:block">
  <Link href="/resume.pdf" target="_blank">
    <div
      className="
      rounded-full
      p-[2px]
      bg-gradient-to-r
      from-[#8245EC]
      to-cyan-400
      transition-all
      duration-300
      hover:scale-110
      cursor-pointer
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
        object-cover
        border
        border-[#081b29]
        "
      />
    </div>
  </Link>
</div>

        {/* Mobile Menu Button */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#081b29] lg:hidden">
          <ul className="flex flex-col gap-5 px-6 py-6">
            {menus.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-gray-300 transition hover:text-[#8245EC]"
                >
                  {menu.name}
                </Link>
              </li>
            ))}

        <Link href="/resume.pdf" target="_blank">
  <div
    className="
      rounded-full
      p-[2px]
      bg-gradient-to-r
      from-[#8245EC]
      to-cyan-400
      transition-all
      duration-300
      hover:scale-110
    "
  >
   <Image
  src="/images/profile.jpg"
  alt="Abubakr Kazi"
  width={50}
  height={50}
  priority
  className="
    rounded-full
    object-cover
    border
    border-[#081b29]
  "
/>
  </div>
</Link>
          </ul>
        </div>
      )}
    </header>
  );
}