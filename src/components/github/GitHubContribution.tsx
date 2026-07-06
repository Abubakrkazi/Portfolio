"use client";

import Image from "next/image";

export default function GitHubContribution() {
  return (
    <div className="mt-12 space-y-8">
      {/* GitHub Streak */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
        "
      >
        <h2 className="mb-8 text-3xl font-bold text-white">
          GitHub Streak
        </h2>

            <img
  src="https://github-readme-streak-stats.herokuapp.com?user=Abubakrkazi&theme=tokyonight&hide_border=true"
  alt="GitHub Streak"
  className="w-full rounded-xl"
/>

      </div>

      {/* Activity Graph */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
        "
      >
        <h2 className="mb-8 text-3xl font-bold text-white">
          Activity Graph
        </h2>


<img
  src="https://github-readme-activity-graph.vercel.app/graph?username=Abubakrkazi&theme=tokyo-night&hide_border=true"
  alt="GitHub Activity Graph"
  className="mt-8 w-full rounded-xl"
/>
      </div>
    </div>
  );
}