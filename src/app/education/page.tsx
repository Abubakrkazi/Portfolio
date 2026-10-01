import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Explore Abubakr Kazi's educational background, academic journey, and Computer Science and Engineering studies.",
};

export default function EducationPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--background)]
        pt-20
        text-[var(--foreground)]
      "
    >
      <Education />
    </main>
  );
}