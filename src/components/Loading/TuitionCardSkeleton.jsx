import React from "react";
import { motion } from "framer-motion";

const TuitionCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div className="relative bg-base-100 rounded-[2rem] p-7 shadow-lg border border-base-300 flex flex-col h-full overflow-hidden animate-pulse">

        {/* Decorative Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-base-300/30 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-24 rounded-full bg-base-300" />
            <div className="h-8 w-8 rounded-lg bg-base-300" />
          </div>

          {/* Title */}
          <div className="mb-5">
            <div className="h-3 w-28 bg-base-300 rounded mb-2" />
            <div className="h-8 w-40 bg-base-300 rounded-lg" />
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-base-200">
              <div className="h-3 w-16 bg-base-300 rounded mb-2" />
              <div className="h-4 w-full bg-base-300 rounded" />
            </div>

            <div className="p-3 rounded-2xl bg-base-200">
              <div className="h-3 w-16 bg-base-300 rounded mb-2" />
              <div className="h-4 w-20 bg-base-300 rounded" />
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Button */}
          <div className="h-14 rounded-2xl bg-base-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default TuitionCardSkeleton;
