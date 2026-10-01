import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore Abubakr Kazi's technical skills and technologies, including React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Prisma, Tailwind CSS, and modern web development tools.",
};

export default function SkillsPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--background)]
        pt-20
        text-[var(--foreground)]
      "
    >
      <Skills />
    </main>
  );
}