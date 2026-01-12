// import { useEffect, useState } from "react";
// import { Search, ChevronLeft, ChevronRight } from "lucide-react";
// import TutorCard from "./TutorCard";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import TutorCardSkeleton from "../../components/Loading/TutorCardSkeleton";



// const AllTutors = () => {
//   const axiosSecure = useAxiosSecure();
//   const [tutors, setTutors] = useState([]);
//   // const [, setPage] = useState(1);
//   // const [totalPages] = useState(1);
//   const [searchTerm] = useState("");
// const [loading, setLoading] = useState(true);


// // useEffect(() => {
// //   axiosSecure
// //     .get(`/tutors?search=${searchTerm}`)
// //     .then((res) => {
// //       setTutors(res.data || []);
// //     })
// //     .catch((err) => {
// //       console.error("Error fetching tutors:", err);
// //     });
// // }, [searchTerm, axiosSecure]);

// useEffect(() => {
//   setLoading(true); 
//   axiosSecure
//     .get(`/tutors?search=${searchTerm}`)
//     .then((res) => {
//       setTutors(res.data || []);
//       setLoading(false); // done loading
//     })
//     .catch((err) => {
//       console.error("Error fetching tutors:", err);
//       setLoading(false); // also stop loading if error
//     });
// }, [searchTerm, axiosSecure]);


//   return (
//     <div className=" min-h-screen pb-20 pt-24">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header & Search */}
//         <div className=" p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
//           <div>
//             <h2 className="text-2xl mb-2 font-bold text-gray-800">All <span className=" bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent md:text-2xltracking-wide">Available</span> Tutors</h2>
//             <p className="text-sm text-gray-500">Find the right mentor for your academic needs</p>
//           </div>
//         </div>

//         {/* Tutors Grid */}
//         {/* {tutors.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


// {loading
//   ? Array.from({ length: 6 }).map((_, i) => <TutorCardSkeleton key={i} />)
//   : tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
// }

//           </div>
//         ) : (
//           <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
//             <p className="text-gray-500">No tutors found matching your search.</p>
//           </div>
//         )} */}

//         {/* Tutors Grid */}
// {loading ? (
//   // Skeleton loader দেখাবে যখন data fetch হচ্ছে
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {Array.from({ length: 6 }).map((_, i) => (
//       <TutorCardSkeleton key={i} />
//     ))}
//   </div>
// ) : tutors.length > 0 ? (
//   // Tutors দেখাবে যখন data লোড হয়ে গেছে
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {tutors.map((tutor) => (
//       <TutorCard key={tutor._id} tutor={tutor} />
//     ))}
//   </div>
// ) : (
//   // Tutors না থাকলে fallback message
//   <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
//     <p className="text-gray-500">No tutors found matching your search.</p>
//   </div>
// )}

//       </div>
//     </div>
//   );
// };

// export default AllTutors;


import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import TutorCard from "./TutorCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TutorCardSkeleton from "../../components/Loading/TutorCardSkeleton";

const AllTutors = () => {
  const axiosSecure = useAxiosSecure();
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   axiosSecure
  //     .get(`/tutors?search=${searchTerm}`)
  //     .then((res) => {
  //       setTutors(res.data || []);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching tutors:", err);
  //       setTutors([]); // ensure empty array
  //       setLoading(false);
  //     });
  // }, [searchTerm, axiosSecure]);


  useEffect(() => {
  setLoading(true);
  const startTime = Date.now();

  axiosSecure
    .get(`/tutors?search=${searchTerm}`)
    .then((res) => {
      const elapsed = Date.now() - startTime;
      const delay = Math.max(500 - elapsed, 0);
      setTimeout(() => {
        setTutors(res.data || []);
        setLoading(false);
      }, delay);
    })
    .catch((err) => {
      console.error("Error fetching tutors:", err);
      const elapsed = Date.now() - startTime;
      const delay = Math.max(500 - elapsed, 0);
      setTimeout(() => {
        setTutors([]);
        setLoading(false);
      }, delay);
    });
}, [searchTerm, axiosSecure]);

  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header & Search */}
        <div className="p-6 rounded-2xl  flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <div>
            <h2 className="text-5xl mb-5 font-bold">
              All{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent md:text-2xltracking-wide">
                Available
              </span>{" "}
              Tutors
            </h2>
            <p className="text-sm text-gray-500 text-center">
              Find the right mentor for your academic needs
            </p>
          </div>


        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <TutorCardSkeleton key={i} />
            ))}

          {!loading &&
            tutors.length > 0 &&
            tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)}

          {!loading && tutors.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 col-span-full">
              <p className="text-gray-500">No tutors found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTutors;
