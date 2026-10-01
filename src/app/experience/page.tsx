import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Abubakr Kazi's professional experience, frontend development journey, software development work, and growing full-stack development skills.",
};

export default function ExperiencePage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--background)]
        pt-20
        text-[var(--foreground)]
      "
    >
      <Experience />
    </main>
  );
}