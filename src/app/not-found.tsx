import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-[#050414]">
      <h1 className="text-8xl font-extrabold text-[#8245EC]">404</h1>

      <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
        Oops! Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#8245EC] px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#6d35d6]"
      >
        Back to Home
      </Link>
    </main>
  );
}