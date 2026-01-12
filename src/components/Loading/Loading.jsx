// import React from "react";
// import { Oval } from "react-loader-spinner";
// import { motion } from "framer-motion";

// const Loading = () => {
//   return (
//     <div 
//       className="flex flex-col items-center justify-center h-screen gap-6"
//       role="status" 
//       aria-live="polite"
//     >
//       {/* Spinner */}
//       <Oval
//         height={70}
//         width={70}
//         color="#6366F1"         
//         secondaryColor="#A5B4FC" 
//         strokeWidth={4}
//         strokeWidthSecondary={4}
//         ariaLabel="loading"
//       />

//       {/* Animated Text */}
//       <motion.p
//         initial={{ opacity: 0.4 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
//         className="text-indigo-600 font-semibold text-lg"
//       >
//         Loading, please wait...
//       </motion.p>
//     </div>
//   );
// };

// export default Loading;

import React from "react";

const SkeletonCard = () => {
  return (
    <div className="border rounded-xl p-4 animate-pulse bg-base-100">
      {/* Image */}
      <div className="h-40 w-full bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>

      {/* Title */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>

      {/* Description */}
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>

      {/* Meta */}
      <div className="flex justify-between">
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
      </div>

      {/* Button */}
      <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded-lg mt-5"></div>
    </div>
  );
};

const Loading = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default Loading;
