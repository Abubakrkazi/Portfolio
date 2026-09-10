"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Activity,
  Flame,
  Github,
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
  const [events, setEvents] = useState<
    GitHubEvent[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    async function fetchActivity() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `https://api.github.com/users/${USERNAME}/events/public?per_page=100`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch GitHub activity"
          );
        }

        const data: GitHubEvent[] =
          await response.json();

        setEvents(data);
      } catch (error) {
        console.error(
          "GitHub activity error:",
          error
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchActivity();
  }, []);

  const activityData =
    useMemo<ActivityDay[]>(() => {
      const days: ActivityDay[] = [];

      for (
        let i = DAYS - 1;
        i >= 0;
        i--
      ) {
        const date = new Date();

        date.setHours(0, 0, 0, 0);
        date.setDate(
          date.getDate() - i
        );

        const dateKey = formatDateKey(date);

        const count = events.filter(
          (event) => {
            const eventDate = new Date(
              event.created_at
            );

            return (
              formatDateKey(eventDate) ===
              dateKey
            );
          }
        ).length;

        days.push({
          date: dateKey,

          label: date.toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
            }
          ),

          count,
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
      (sum, day) =>
        sum + day.count,
      0
    );

  return (
    <div className="space-y-8">
      {/* ========================= */}
      {/* GitHub Streak */}
      {/* ========================= */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#8245EC]/40
          hover:shadow-[0_0_40px_rgba(130,69,236,0.20)]
          md:p-8
        "
      >
        <div className="mb-8 flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-orange-500/10
            "
          >
            <Flame
              size={25}
              className="text-orange-400"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              GitHub Streak
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              My GitHub contribution and
              coding consistency.
            </p>
          </div>
        </div>

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-white/5
            bg-black/10
            p-3
          "
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=tokyonight&hide_border=true`}
            alt={`${USERNAME} GitHub Streak`}
            loading="lazy"
            className="
              mx-auto
              w-full
              max-w-4xl
              rounded-xl
              object-contain
            "
          />
        </div>
      </div>

      {/* ========================= */}
      {/* Activity Graph */}
      {/* ========================= */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#8245EC]/40
          hover:shadow-[0_0_40px_rgba(130,69,236,0.20)]
          md:p-8
        "
      >
        {/* Header */}

        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#8245EC]/15
              "
            >
              <Activity
                size={25}
                className="text-[#a877ff]"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Activity Graph
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Recent public GitHub
                activity.
              </p>
            </div>
          </div>

          <div
            className="
              rounded-xl
              border
              border-[#8245EC]/20
              bg-[#8245EC]/10
              px-4
              py-2
            "
          >
            <span className="text-sm text-gray-400">
              Last {DAYS} days
            </span>

            <span className="ml-2 font-bold text-[#a877ff]">
              {totalActivity}
            </span>
          </div>
        </div>

        {/* Loading */}

        {loading && (
          <div className="mt-10 flex h-64 items-center justify-center">
            <div className="text-center">
              <div
                className="
                  mx-auto
                  h-10
                  w-10
                  animate-spin
                  rounded-full
                  border-4
                  border-white/10
                  border-t-[#8245EC]
                "
              />

              <p className="mt-4 text-gray-400">
                Loading GitHub activity...
              </p>
            </div>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div
            className="
              mt-10
              rounded-2xl
              border
              border-red-500/20
              bg-red-500/5
              p-8
              text-center
            "
          >
            <p className="text-red-400">
              Unable to load GitHub
              activity.
            </p>
          </div>
        )}

        {/* Graph */}

        {!loading && !error && (
          <>
            <div
              className="
                mt-10
                overflow-x-auto
                rounded-2xl
                border
                border-white/5
                bg-black/10
                p-5
                md:p-7
              "
            >
              <div className="min-w-[750px]">
                {/* Graph */}

                <div className="flex h-64 items-end gap-3">
                  {activityData.map(
                    (day) => {
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
                              bg-[#111827]
                              px-2
                              py-1
                              text-xs
                              text-white
                              opacity-0
                              shadow-xl
                              transition
                              group-hover:opacity-100
                            "
                          >
                            {day.count} activities
                          </div>

                          {/* Bar */}

                          <div className="flex h-[180px] w-full items-end justify-center">
                            <div
                              className="
                                w-full
                                max-w-[34px]
                                rounded-t-lg
                                bg-gradient-to-t
                                from-[#8245EC]
                                to-[#b78cff]
                                transition-all
                                duration-500
                                group-hover:shadow-[0_0_20px_rgba(130,69,236,0.7)]
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
                              text-gray-300
                            "
                          >
                            {day.count}
                          </span>

                          {/* Date */}

                          <span
                            className="
                              mt-2
                              whitespace-nowrap
                              text-[10px]
                              text-gray-500
                            "
                          >
                            {day.label}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Bottom */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p className="text-sm text-gray-500">
                Based on recent public GitHub
                events.
              </p>

              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[#a877ff]
                  transition
                  hover:text-white
                "
              >
                <Github size={17} />

                View GitHub Activity
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function formatDateKey(
  date: Date
) {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}