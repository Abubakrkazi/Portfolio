import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Abubakr Kazi using React, Next.js, TypeScript, Node.js, databases, and modern web development technologies.",
};

export default function ProjectsPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--background)]
        pt-20
        text-[var(--foreground)]
      "
    >
      <Projects />
    </main>
  );
}