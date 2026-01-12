import React from "react";

const TutorCardSkeleton = () => {
  return (
    <div className="animate-pulse group relative bg-base-100 rounded-[2.5rem] p-4 shadow-xl shadow-base-300/50 border border-base-300">
      {/* Image placeholder */}
      <div className="relative h-72 w-full rounded-[2rem] mb-6 bg-base-200"></div>

      {/* Tutor Info placeholder */}
      <div className="px-3 pb-4 space-y-3">
        {/* Name */}
        <div className="h-6 bg-base-300 rounded w-3/4"></div>
        {/* Qualification */}
        <div className="h-4 bg-base-300 rounded w-1/2"></div>
        {/* Location */}
        <div className="h-3 bg-base-300 rounded w-1/3 mt-2"></div>
        {/* Button */}
        <div className="h-10 bg-base-300 rounded-2xl mt-4 w-full"></div>
      </div>
    </div>
  );
};

export default TutorCardSkeleton;
