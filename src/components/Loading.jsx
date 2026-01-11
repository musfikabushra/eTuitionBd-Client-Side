// const SkeletonLoader = () => {
//   return (
//     <div className="flex justify-center items-center h-[60vh]">
//       <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//     </div>
//   );
// };

// export default SkeletonLoader;

const SkeletonCard = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md animate-pulse">
      {/* Image placeholder */}
      <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>

      {/* Content placeholder */}
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
      
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
