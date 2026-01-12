import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TuitionCard from "./TuitionCard";
import TuitionCardSkeleton from "../../components/Loading/TuitionCardSkeleton";



const AllTuitions = () => {
  const [tuitions, setTuitions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterClass, setFilterClass] = useState("All");
  const [filterSubject, setFilterSubject] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
  let timer;
  setLoading(true);

  axiosSecure.get("/tuitions").then(res => {
    setTuitions(res.data || []);
    timer = setTimeout(() => setLoading(false), 700);
  });

  return () => clearTimeout(timer);
}, [axiosSecure]);


  /* 🔍 Search */
  const searched = tuitions.filter((t) =>
    `${t.subject} ${t.location} ${t.class}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* 🎯 Filter */
  const filtered = searched.filter(
    (t) =>
      (filterClass === "All" || t.class === filterClass) &&
      (filterSubject === "All" || t.subject === filterSubject) &&
      (filterLocation === "All" || t.location === filterLocation)
  );

  /* 🔃 Sort */
  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "budgetHigh") return b.budget - a.budget;
    if (sortOption === "budgetLow") return a.budget - b.budget;
    if (sortOption === "dateNew") return new Date(b.date) - new Date(a.date);
    if (sortOption === "dateOld") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  /* 📄 Pagination */
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentTuitions = sorted.slice(start, start + itemsPerPage);

  /* ❌ NO DATA AFTER LOAD */
  if (sorted.length === 0) {
    return (
      <p className="text-center mt-20 text-base-content text-lg">
        No tuitions found.
      </p>
    );
  }

  const classOptions = ["All", ...new Set(tuitions.map((t) => t.class))];
  const subjectOptions = ["All", ...new Set(tuitions.map((t) => t.subject))];
  const locationOptions = ["All", ...new Set(tuitions.map((t) => t.location))];

  return (
    <div className="container mx-auto px-4 py-8 text-base-content">
      <h1 className="text-5xl font-bold mb-10 text-center">
        All{" "}
        <span className="bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent">
          Tuitions
        </span>
      </h1>

      {/* 🔍 Search + Sort */}
      <div className="bg-base-100 shadow-md rounded-lg p-6 mb-6 border">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by subject, location, class..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 rounded-md w-full bg-base-200"
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 rounded-md bg-base-200"
          >
            <option value="">Sort by</option>
            <option value="budgetHigh">Budget: High → Low</option>
            <option value="budgetLow">Budget: Low → High</option>
            <option value="dateNew">Newest</option>
            <option value="dateOld">Oldest</option>
          </select>
        </div>

        {/* 🎯 Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <select value={filterClass} onChange={(e) => setFilterClass(e.target.value)} className="px-4 py-2 bg-base-200 rounded">
            {classOptions.map((c, i) => <option key={i}>{c}</option>)}
          </select>

          <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)} className="px-4 py-2 bg-base-200 rounded">
            {subjectOptions.map((s, i) => <option key={i}>{s}</option>)}
          </select>

          <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} className="px-4 py-2 bg-base-200 rounded">
            {locationOptions.map((l, i) => <option key={i}>{l}</option>)}
          </select>
        </div>
      </div>

      {/* 📦 Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* 🔄 Skeleton while loading */}
  {loading &&
    Array.from({ length: itemsPerPage }).map((_, i) => (
      <TuitionCardSkeleton key={i} />
    ))
  }

  {/* ✅ Real data after load */}
  {!loading &&
    currentTuitions.map((t) => (
      <TuitionCard key={t._id} tuition={t} />
    ))
  }
      </div>

      {/* 📄 Pagination */}
      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-base-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllTuitions;
