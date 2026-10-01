import type { Metadata } from "next";
import Blogs from "@/components/Blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read articles by Abubakr Kazi about web development, software engineering, AI, and modern technologies.",
};

export default function BlogsPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[var(--background)]
        pt-20
        text-[var(--foreground)]
      "
    >
      <Blogs />
    </main>
  );
}