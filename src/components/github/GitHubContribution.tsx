"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Activity,
  ExternalLink,
  Flame,
  Github,
  LoaderCircle,
} from "lucide-react";

interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
}

interface ActivityDay {
  date: string;
  label: string;
  count: number;
}

const USERNAME = "Abubakrkazi";
const DAYS = 14;

export default function GitHubContribution() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchActivity() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `https://api.github.com/users/${USERNAME}/events/public?per_page=100`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            `GitHub API request failed with status ${response.status}`
          );
        }

        const data: GitHubEvent[] =
          await response.json();

        setEvents(data);
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        ) {
          return;
        }

        console.error(
          "GitHub activity error:",
          error
        );

        setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchActivity();

    return () => {
      controller.abort();
    };
  }, []);

  const activityData =
    useMemo<ActivityDay[]>(() => {
      const activityByDate = new Map<
        string,
        number
      >();

      events.forEach((event) => {
        const eventDate = new Date(
          event.created_at
        );

        if (
          Number.isNaN(eventDate.getTime())
        ) {
          return;
        }

        const key = formatDateKey(eventDate);

        activityByDate.set(
          key,
          (activityByDate.get(key) ?? 0) + 1
        );
      });

      const days: ActivityDay[] = [];

      for (
        let i = DAYS - 1;
        i >= 0;
        i--
      ) {
        const date = new Date();

        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() - i);

        const dateKey = formatDateKey(date);

        days.push({
          date: dateKey,
          label: date.toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
            }
          ),
          count:
            activityByDate.get(dateKey) ?? 0,
        });
      }

      return days;
    }, [events]);

  const maxActivity = Math.max(
    ...activityData.map(
      (day) => day.count
    ),
    1
  );

  const totalActivity =
    activityData.reduce(
      (sum, day) => sum + day.count,
      0
    );

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* GitHub Streak */}
      <article
        className="
          relative
          w-full
          min-w-0
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-sm
          transition-all
          duration-300

          hover:border-[#8245EC]/40
          hover:shadow-[0_14px_40px_rgba(130,69,236,0.10)]

          sm:rounded-3xl
          sm:p-6

          md:p-8

          dark:border-white/10
          dark:bg-white/[0.04]
          dark:shadow-none

          dark:hover:border-[#8245EC]/50
          dark:hover:bg-white/[0.055]
          dark:hover:shadow-[0_14px_40px_rgba(130,69,236,0.14)]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-orange-400/5
            blur-[70px]

            dark:bg-orange-400/[0.07]
          "
        />

        <div
          className="
            relative
            z-10
            mb-5
            flex
            min-w-0
            items-center
            gap-3

            sm:mb-7
            sm:gap-4
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-orange-500/20
              bg-orange-500/10
              text-orange-500

              sm:h-12
              sm:w-12
              sm:rounded-2xl
            "
          >
            <Flame
              size={24}
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0">
            <h2
              className="
                text-xl
                font-bold
                tracking-tight
                text-slate-900

                sm:text-2xl
                md:text-3xl

                dark:text-white
              "
            >
              GitHub Streak
            </h2>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-slate-500

                sm:text-sm
                sm:leading-6

                dark:text-gray-400
              "
            >
              A visual overview of my GitHub
              streak activity.
            </p>
          </div>
        </div>

        <div
          className="
            relative
            z-10
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            p-2

            sm:rounded-2xl
            sm:p-3

            dark:border-white/5
            dark:bg-black/10
          "
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=tokyonight&hide_border=true`}
            alt={`${USERNAME} GitHub streak statistics`}
            loading="lazy"
            decoding="async"
            className="
              mx-auto
              block
              h-auto
              w-full
              max-w-4xl
              rounded-lg
              object-contain

              sm:rounded-xl
            "
          />
        </div>
      </article>

      {/* Recent Public Activity */}
      <article
        className="
          relative
          w-full
          min-w-0
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-sm
          transition-all
          duration-300

          hover:border-[#8245EC]/40
          hover:shadow-[0_14px_40px_rgba(130,69,236,0.10)]

          sm:rounded-3xl
          sm:p-6

          md:p-8

          dark:border-white/10
          dark:bg-white/[0.04]
          dark:shadow-none

          dark:hover:border-[#8245EC]/50
          dark:hover:bg-white/[0.055]
          dark:hover:shadow-[0_14px_40px_rgba(130,69,236,0.14)]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-[#8245EC]/5
            blur-[70px]

            dark:bg-[#8245EC]/10
          "
        />

        {/* Header */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-5
          "
        >
          <div
            className="
              flex
              min-w-0
              items-center
              gap-3

              sm:gap-4
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#8245EC]/20
                bg-[#8245EC]/10
                text-[#8245EC]

                sm:h-12
                sm:w-12
                sm:rounded-2xl

                dark:bg-[#8245EC]/15
                dark:text-[#a877ff]
              "
            >
              <Activity
                size={24}
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0">
              <h2
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-slate-900

                  sm:text-2xl
                  md:text-3xl

                  dark:text-white
                "
              >
                Recent Public Activity
              </h2>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-slate-500

                  sm:text-sm
                  sm:leading-6

                  dark:text-gray-400
                "
              >
                Recent events from my public
                GitHub activity.
              </p>
            </div>
          </div>

          <div
            className="
              inline-flex
              w-fit
              shrink-0
              items-center
              rounded-xl
              border
              border-[#8245EC]/20
              bg-[#8245EC]/10
              px-3
              py-2
              text-xs

              sm:px-4
              sm:text-sm

              dark:border-[#8245EC]/30
              dark:bg-[#8245EC]/15
            "
          >
            <span
              className="
                text-slate-500
                dark:text-gray-400
              "
            >
              Last {DAYS} days
            </span>

            <span
              className="
                ml-2
                font-bold
                text-[#8245EC]

                dark:text-[#a877ff]
              "
            >
              {loading ? "—" : totalActivity}
            </span>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div
            className="
              relative
              z-10
              mt-8
              flex
              min-h-[220px]
              items-center
              justify-center

              sm:mt-10
              sm:min-h-[260px]
            "
          >
            <div
              role="status"
              aria-live="polite"
              className="text-center"
            >
              <LoaderCircle
                size={36}
                aria-hidden="true"
                className="
                  mx-auto
                  animate-spin
                  text-[#8245EC]
                "
              />

              <p
                className="
                  mt-4
                  text-sm
                  text-slate-500

                  sm:text-base

                  dark:text-gray-400
                "
              >
                Loading GitHub activity...
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div
            role="status"
            className="
              relative
              z-10
              mt-8
              rounded-2xl
              border
              border-red-500/20
              bg-red-500/5
              p-6
              text-center

              sm:mt-10
              sm:p-8
            "
          >
            <p
              className="
                text-sm
                font-medium
                text-red-500

                sm:text-base

                dark:text-red-400
              "
            >
              Unable to load recent GitHub
              activity.
            </p>
          </div>
        )}

        {/* Activity Graph */}
        {!loading && !error && (
          <>
            <div
              className="
                relative
                z-10
                mt-8
                overflow-x-auto
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-4

                sm:mt-10
                sm:p-5

                md:p-7

                dark:border-white/5
                dark:bg-black/10
              "
            >
              <div className="min-w-[680px]">
                <div
                  className="
                    flex
                    h-60
                    items-end
                    gap-2.5

                    sm:h-64
                    sm:gap-3
                  "
                >
                  {activityData.map((day) => {
                    const height =
                      day.count === 0
                        ? 4
                        : Math.max(
                            12,
                            (day.count /
                              maxActivity) *
                              100
                          );

                    return (
                      <div
                        key={day.date}
                        className="
                          group
                          flex
                          h-full
                          min-w-0
                          flex-1
                          flex-col
                          items-center
                          justify-end
                        "
                      >
                        {/* Tooltip */}
                        <div
                          className="
                            pointer-events-none
                            mb-2
                            whitespace-nowrap
                            rounded-lg
                            bg-slate-900
                            px-2
                            py-1
                            text-xs
                            text-white
                            opacity-0
                            shadow-xl
                            transition-opacity
                            duration-200

                            group-hover:opacity-100
                            group-focus-within:opacity-100
                          "
                        >
                          {day.count}{" "}
                          {day.count === 1
                            ? "event"
                            : "events"}
                        </div>

                        {/* Bar */}
                        <div
                          className="
                            flex
                            h-[170px]
                            w-full
                            items-end
                            justify-center

                            sm:h-[180px]
                          "
                        >
                          <div
                            role="img"
                            tabIndex={0}
                            aria-label={`${day.label}: ${day.count} public GitHub ${
                              day.count === 1
                                ? "event"
                                : "events"
                            }`}
                            className="
                              w-full
                              max-w-[32px]
                              rounded-t-md
                              bg-gradient-to-t
                              from-[#8245EC]
                              to-[#b78cff]
                              outline-none
                              transition-all
                              duration-300

                              hover:shadow-[0_0_18px_rgba(130,69,236,0.5)]

                              focus-visible:ring-2
                              focus-visible:ring-[#8245EC]

                              sm:max-w-[34px]
                              sm:rounded-t-lg
                            "
                            style={{
                              height: `${height}%`,
                              opacity:
                                day.count === 0
                                  ? 0.2
                                  : 1,
                            }}
                          />
                        </div>

                        {/* Count */}
                        <span
                          className="
                            mt-2
                            text-xs
                            font-semibold
                            text-slate-700

                            dark:text-gray-300
                          "
                        >
                          {day.count}
                        </span>

                        {/* Date */}
                        <span
                          className="
                            mt-1.5
                            whitespace-nowrap
                            text-[10px]
                            text-slate-500

                            sm:mt-2

                            dark:text-gray-500
                          "
                        >
                          {day.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="
                relative
                z-10
                mt-5
                flex
                flex-col
                gap-3

                sm:mt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:gap-4
              "
            >
              <p
                className="
                  max-w-2xl
                  text-xs
                  leading-6
                  text-slate-500

                  sm:text-sm

                  dark:text-gray-500
                "
              >
                Based on recent public GitHub
                events. This is not the same as
                GitHub&apos;s contribution
                calendar.
              </p>

              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${USERNAME}'s GitHub profile`}
                className="
                  inline-flex
                  w-fit
                  shrink-0
                  items-center
                  gap-2
                  rounded-lg
                  font-semibold
                  text-[#8245EC]
                  transition-colors
                  duration-300

                  hover:text-[#6d35d6]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#8245EC]

                  dark:text-[#a877ff]
                  dark:hover:text-white
                "
              >
                <Github
                  size={17}
                  aria-hidden="true"
                />

                View GitHub Activity

                <ExternalLink
                  size={14}
                  aria-hidden="true"
                />
              </a>
            </div>
          </>
        )}
      </article>
    </div>
  );
}

function formatDateKey(
  date: Date
): string {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}