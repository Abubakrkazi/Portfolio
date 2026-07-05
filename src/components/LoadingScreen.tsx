"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  loading: boolean;
};

export default function LoadingScreen({
  loading,
}: Props) {
  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: .8,
            },
          }}
          className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-[#081b29]
          "
        >

          <div className="text-center">

            <motion.h1
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
              text-6xl
              font-black
              text-white
              "
            >

              Abubakr Kazi

            </motion.h1>

            <p className="mt-4 text-gray-400">

              Full Stack Developer

            </p>

            <motion.div
              animate={{
                opacity: [.2, 1, .2],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="
              mt-8
              h-2
              w-48
              rounded-full
              bg-[#8245EC]
              mx-auto
              "
            />

            <p className="mt-6 text-sm text-gray-500">

              Loading.......................

            </p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}