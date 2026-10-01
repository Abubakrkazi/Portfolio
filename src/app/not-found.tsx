import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[var(--background)]
        px-4
        py-20
        text-[var(--foreground)]
        sm:px-6
        lg:px-8
      "
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#8245EC]/10
          blur-[100px]
          sm:h-80
          sm:w-80
          dark:bg-[#8245EC]/15
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-1/4
          h-40
          w-40
          rounded-full
          bg-cyan-400/5
          blur-[80px]
          sm:h-56
          sm:w-56
          dark:bg-cyan-400/10
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-2xl
          text-center
        "
      >
        {/* Icon */}
        <div
          className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-[#8245EC]/20
            bg-[#8245EC]/10
            text-[#8245EC]
            sm:h-16
            sm:w-16
          "
        >
          <FileQuestion
            size={28}
            aria-hidden="true"
          />
        </div>

        {/* 404 */}
        <h1
          className="
            mt-6
            text-7xl
            font-black
            leading-none
            tracking-tight
            text-[#8245EC]
            sm:text-8xl
            md:text-9xl
          "
        >
          404
        </h1>

        {/* Title */}
        <h2
          className="
            mt-5
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            sm:mt-6
            sm:text-3xl
            md:text-4xl
            dark:text-white
          "
        >
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-4
            max-w-lg
            text-sm
            leading-7
            text-slate-600
            sm:text-base
            sm:leading-8
            dark:text-slate-400
          "
        >
          The page you&apos;re looking for doesn&apos;t exist, may have been
          moved, or is no longer available.
        </p>

        {/* Home Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#8245EC]
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_8px_24px_rgba(130,69,236,0.22)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#7338df]
              hover:shadow-[0_10px_30px_rgba(130,69,236,0.35)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#8245EC]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-white

              sm:px-7
              sm:py-3.5
              sm:text-base

              dark:focus-visible:ring-offset-[#050414]
            "
          >
            <ArrowLeft
              size={18}
              aria-hidden="true"
            />

            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}