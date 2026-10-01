"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
}

const dots = [0, 1, 2];

export default function LoadingScreen({
  loading,
}: LoadingScreenProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="portfolio-loader"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  scale: 1.01,
                  filter: "blur(3px)",
                }
          }
          transition={{
            duration: shouldReduceMotion
              ? 0.2
              : 0.45,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            min-h-[100dvh]
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-[#050414]
            px-4
            py-6

            sm:px-6
            md:px-8
          "
        >
          {/* Background Glow */}
          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.35, 0.2],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#8245EC]/20
              blur-[80px]

              sm:h-[380px]
              sm:w-[380px]
              sm:blur-[100px]

              md:h-[500px]
              md:w-[500px]
              md:blur-[120px]
            "
          />

          {/* Cyan Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-cyan-500/[0.07]
              blur-[80px]

              sm:h-64
              sm:w-64

              lg:h-80
              lg:w-80
              lg:blur-[110px]
            "
          />

          {/* Purple Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-20
              -right-20
              h-48
              w-48
              rounded-full
              bg-[#8245EC]/10
              blur-[80px]

              sm:h-64
              sm:w-64

              lg:h-80
              lg:w-80
              lg:blur-[110px]
            "
          />

          {/* Grid */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
              [background-size:42px_42px]
            "
          />

          {/* Top Fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-32
              bg-gradient-to-b
              from-[#050414]
              to-transparent

              sm:h-40
            "
          />

          {/* Bottom Fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-[#050414]
              to-transparent

              sm:h-40
            "
          />

          {/* Main Content */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: 14,
                    scale: 0.98,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: shouldReduceMotion
                ? 0
                : 0.55,
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              flex
              w-full
              max-w-[420px]
              flex-col
              items-center
              text-center

              sm:max-w-[480px]
            "
          >
            {/* Profile */}
            <div
              className="
                relative
                flex
                items-center
                justify-center
              "
            >
              {/* Profile Glow */}
              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.1, 1],
                        opacity: [
                          0.2,
                          0.45,
                          0.2,
                        ],
                      }
                }
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-[96px]
                  w-[96px]
                  rounded-full
                  bg-[#8245EC]/40
                  blur-2xl

                  sm:h-[120px]
                  sm:w-[120px]

                  md:h-[135px]
                  md:w-[135px]
                "
              />

              {/* Static Ring */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-[7px]
                  rounded-full
                  border
                  border-white/10

                  sm:-inset-[9px]
                "
              />

              {/* Primary Ring */}
              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { rotate: 360 }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-[7px]
                  rounded-full
                  border-2
                  border-transparent
                  border-r-[#8245EC]
                  border-t-[#8245EC]

                  sm:-inset-[9px]
                "
              />

              {/* Secondary Ring */}
              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { rotate: -360 }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-[13px]
                  rounded-full
                  border
                  border-transparent
                  border-b-cyan-400/40

                  sm:-inset-[16px]
                "
              />

              {/* Image */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        scale: 0.85,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.5,
                  delay: shouldReduceMotion
                    ? 0
                    : 0.1,
                }}
                className="
                  relative
                  h-[82px]
                  w-[82px]
                  overflow-hidden
                  rounded-full
                  border-2
                  border-[#8245EC]
                  bg-[#081b29]
                  shadow-[0_0_30px_rgba(130,69,236,0.30)]

                  min-[375px]:h-[92px]
                  min-[375px]:w-[92px]

                  sm:h-[108px]
                  sm:w-[108px]

                  md:h-[120px]
                  md:w-[120px]
                "
              >
                <Image
                  src="/images/profile.png"
                  alt="Abubakr Kazi"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 374px) 82px, (max-width: 639px) 92px, (max-width: 767px) 108px, 120px"
                  className="
                    select-none
                    object-cover
                    object-top
                  "
                />
              </motion.div>

              {/* Status Indicator */}
              <motion.span
                aria-hidden="true"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.15, 1],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-0
                  right-0
                  z-20
                  h-4
                  w-4
                  rounded-full
                  border-[3px]
                  border-[#050414]
                  bg-emerald-400

                  sm:h-[18px]
                  sm:w-[18px]
                "
              />
            </div>

            {/* Welcome */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.4,
                delay: shouldReduceMotion
                  ? 0
                  : 0.15,
              }}
              className="
                mt-7
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#a987f3]

                sm:mt-9
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Welcome to my portfolio
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      y: 10,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.45,
                delay: shouldReduceMotion
                  ? 0
                  : 0.25,
              }}
              className="
                mt-3
                text-[clamp(1.75rem,8vw,2.75rem)]
                font-black
                leading-tight
                tracking-[-0.03em]
                text-white
              "
            >
              Abubakr{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#a987f3]
                  via-[#8245EC]
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Kazi
              </span>
            </motion.h1>

            {/* Designation */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      y: 8,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.4,
                delay: shouldReduceMotion
                  ? 0
                  : 0.35,
              }}
              className="
                mt-3
                flex
                max-w-full
                flex-wrap
                items-center
                justify-center
                gap-x-2
                gap-y-1
                px-2
                text-xs
                font-medium
                text-gray-400

                min-[375px]:text-sm

                sm:mt-4
                sm:text-base
              "
            >
              <span>React.js Developer</span>

              <span
                aria-hidden="true"
                className="text-[#8245EC]"
              >
                •
              </span>

              <span>
                Full Stack Focused
              </span>
            </motion.div>

            {/* Divider */}
            <motion.div
              aria-hidden="true"
              initial={
                shouldReduceMotion
                  ? { scaleX: 1 }
                  : { scaleX: 0 }
              }
              animate={{ scaleX: 1 }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.6,
                delay: shouldReduceMotion
                  ? 0
                  : 0.45,
              }}
              className="
                mt-6
                flex
                items-center
                gap-2

                sm:mt-7
              "
            >
              <span className="h-px w-7 bg-white/10 sm:w-10" />

              <span
                className="
                  h-1.5
                  w-1.5
                  rotate-45
                  bg-[#8245EC]
                "
              />

              <span className="h-px w-7 bg-white/10 sm:w-10" />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.4,
                delay: shouldReduceMotion
                  ? 0
                  : 0.5,
              }}
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2

                sm:mt-7
              "
            >
              <span
                className="
                  text-xs
                  font-medium
                  tracking-wide
                  text-gray-400

                  sm:text-sm
                "
              >
                Loading Portfolio
              </span>

              <div
                aria-hidden="true"
                className="flex items-center gap-1"
              >
                {dots.map((dot) => (
                  <motion.span
                    key={dot}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 0.7 }
                        : {
                            opacity: [
                              0.25,
                              1,
                              0.25,
                            ],
                            y: [0, -3, 0],
                          }
                    }
                    transition={{
                      duration: 1,
                      repeat:
                        shouldReduceMotion
                          ? 0
                          : Infinity,
                      delay:
                        shouldReduceMotion
                          ? 0
                          : dot * 0.18,
                      ease: "easeInOut",
                    }}
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#a987f3]

                      sm:h-1.5
                      sm:w-1.5
                    "
                  />
                ))}
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div
              aria-hidden="true"
              className="
                relative
                mt-4
                h-[3px]
                w-[min(72vw,250px)]
                overflow-hidden
                rounded-full
                bg-white/[0.08]

                sm:mt-5
                sm:w-[280px]
              "
            >
              {shouldReduceMotion ? (
                <div
                  className="
                    h-full
                    w-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-[#8245EC]
                    to-cyan-400
                  "
                />
              ) : (
                <motion.div
                  animate={{
                    x: ["-120%", "320%"],
                  }}
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-[38%]
                    rounded-full
                    bg-gradient-to-r
                    from-transparent
                    via-[#8245EC]
                    to-cyan-400
                    shadow-[0_0_15px_rgba(130,69,236,0.7)]
                  "
                />
              )}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.4,
                delay: shouldReduceMotion
                  ? 0
                  : 0.65,
              }}
              className="
                mt-6
                flex
                max-w-full
                items-center
                justify-center
                gap-2
                px-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-gray-600

                min-[375px]:text-[10px]
                min-[375px]:tracking-[0.18em]

                sm:mt-8
                sm:tracking-[0.25em]
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-1
                  w-1
                  shrink-0
                  rounded-full
                  bg-[#8245EC]
                "
              />

              <span>
                Building Digital Experiences
              </span>

              <span
                aria-hidden="true"
                className="
                  h-1
                  w-1
                  shrink-0
                  rounded-full
                  bg-[#8245EC]
                "
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}