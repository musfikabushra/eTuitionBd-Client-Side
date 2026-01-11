// import React from "react";
// import { Outlet, NavLink, useLocation } from "react-router-dom";
// import {
//   FaBook, FaPlusCircle, FaUsers, FaMoneyBillWave, FaCog,
//   FaChalkboardTeacher, FaClipboardList, FaChartLine, FaHome
// } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
// import useAuth from "../hooks/useAuth";
// import useRole from "../hooks/useRole";

// const DashboardLayout = () => {
//   const { user } = useAuth() ?? {};
//   const { role } = useRole();
//   const location = useLocation();

//   const linkStyle = ({ isActive }) =>
//     isActive
//       ? "flex items-center gap-3 bg-indigo-600 text-white px-4 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
//       : "flex items-center gap-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 px-4 py-3 rounded-xl transition-all duration-300";

//   return (
//     <div className="flex min-h-screen bg-slate-50">
//       {/* --- Sidebar --- */}
//       <aside className="w-64 md:w-72 bg-white border-r border-slate-200 flex flex-col justify-between fixed top-0 left-0 h-screen shadow-sm z-20">
//         {/* Logo */}
//         <div className="p-6">
//           <h2 className="text-2xl font-black flex items-center gap-2 text-white px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-primary shadow-lg">
//             <MdDashboard className="text-3xl" />
//             <span className="tracking-tight">eTuitionBd</span>
//           </h2>
//           <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-2 pl-1">
//             Dashboard Panel
//           </p>
//         </div>

//         {/* Nav Links */}
//         <nav className="flex-grow px-4 flex flex-col gap-2 overflow-y-auto pb-6 custom-scrollbar">
//           {/* Overview link for all roles */}
//           <NavLink to="/dashboard/overview" className={linkStyle}>
//             <FaChartLine size={18} /> Overview
//           </NavLink>

//           {role === "Student" && (
//             <>
//               <NavLink to="/dashboard/student/my-tuitions" className={linkStyle}><FaBook size={18} /> My Tuitions</NavLink>
//               <NavLink to="/dashboard/student/post-tuition" className={linkStyle}><FaPlusCircle size={18} /> Post Tuition</NavLink>
//               <NavLink to="/dashboard/student/applied-tutors" className={linkStyle}><FaUsers size={18} /> Applied Tutors</NavLink>
//               <NavLink to="/dashboard/student/payments" className={linkStyle}><FaMoneyBillWave size={18} /> Payments</NavLink>
//             </>
//           )}

//           {role === "Tutor" && (
//             <>
//               <NavLink to="/dashboard/tutor/my-applications" className={linkStyle}><FaClipboardList size={18} /> My Applications</NavLink>
//               <NavLink to="/dashboard/tutor/ongoing-tuitions" className={linkStyle}><FaChalkboardTeacher size={18} /> Ongoing Tuitions</NavLink>
//               <NavLink to="/dashboard/tutor/revenue" className={linkStyle}><FaMoneyBillWave size={18} /> Revenue</NavLink>
//             </>
//           )}

//           {role === "Admin" && (
//             <>
//               <NavLink to="/dashboard/admin/users" className={linkStyle}><FaUsers size={18} /> User Management</NavLink>
//               <NavLink to="/dashboard/admin/tuitions" className={linkStyle}><FaBook size={18} /> Tuition Management</NavLink>
//               <NavLink to="/dashboard/admin/reports" className={linkStyle}><FaChartLine size={18} /> Reports & Analytics</NavLink>
//             </>
//           )}

//           <div className="my-4 border-t border-slate-100"></div>
//           <NavLink to="/dashboard/profile" className={linkStyle}><FaCog size={18} /> Profile Settings</NavLink>
//           <NavLink to="/" className={linkStyle}><FaHome size={18} /> Back to Home</NavLink>
//         </nav>

//         {/* User Info */}
//         <div className="p-4 m-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold border border-indigo-200">
//             {user?.displayName?.charAt(0) || "U"}
//           </div>
//           <div className="overflow-hidden">
//             <p className="text-sm font-bold text-slate-700 truncate">{user?.displayName || "User"}</p>
//             <p className="text-[10px] text-slate-400 font-bold uppercase">{role}</p>
//           </div>
//         </div>
//       </aside>

//       {/* --- Main Content --- */}
//       <main className="flex-1 ml-64 md:ml-72 flex flex-col min-h-screen">
//         {/* Top Header */}
//         <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
//           <h1 className="text-xl font-bold text-slate-800 capitalize mt-1">
//             {location.pathname.split("/").pop().replace("-", " ")}
//           </h1>
//           <div className="flex items-center gap-4">
//             <div className="text-right hidden sm:block">
//               <p className="text-xs font-bold text-slate-500 uppercase leading-none mb-1">Current Role</p>
//               <p className="text-sm font-black text-indigo-600">{role}</p>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <div className="p-8 grow overflow-y-auto">
//           <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 min-h-full">
//             <Outlet />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;


import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import {
  FaBook, FaPlusCircle, FaUsers, FaMoneyBillWave, FaCog,
  FaChalkboardTeacher, FaClipboardList, FaChartLine, FaHome
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Sun, Moon } from "lucide-react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { user } = useAuth() ?? {};
  const { role } = useRole();
  const location = useLocation();

  /* 🌗 Theme State */
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const linkStyle = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 bg-primary text-primary-content px-4 py-3 rounded-xl font-semibold shadow-md"
      : "flex items-center gap-3 text-base-content/70 hover:bg-base-200 px-4 py-3 rounded-xl transition";

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* --- Sidebar --- */}
      <aside className="w-64 md:w-72 bg-base-100 border-r border-base-300 fixed top-0 left-0 h-screen flex flex-col justify-between z-20">
        {/* Logo */}
        <div className="p-6">
          <h2 className="text-2xl font-black flex items-center gap-2 text-white px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-indigo-500 to-primary">
            <MdDashboard className="text-3xl" />
            eTuitionBd
          </h2>
          <p className="text-[10px] uppercase tracking-widest font-bold text-base-content/50 mt-2 pl-1">
            Dashboard Panel
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-grow px-4 flex flex-col gap-2 overflow-y-auto pb-6">
          <NavLink to="/dashboard" className={linkStyle}>
            <FaChartLine /> Overview
          </NavLink>

          {role === "Student" && (
            <>
              <NavLink to="/dashboard/student/my-tuitions" className={linkStyle}><FaBook /> My Tuitions</NavLink>
              <NavLink to="/dashboard/student/post-tuition" className={linkStyle}><FaPlusCircle /> Post Tuition</NavLink>
              <NavLink to="/dashboard/student/applied-tutors" className={linkStyle}><FaUsers /> Applied Tutors</NavLink>
              <NavLink to="/dashboard/student/payments" className={linkStyle}><FaMoneyBillWave /> Payments</NavLink>
            </>
          )}

          {role === "Tutor" && (
            <>
              <NavLink to="/dashboard/tutor/my-applications" className={linkStyle}><FaClipboardList /> My Applications</NavLink>
              <NavLink to="/dashboard/tutor/ongoing-tuitions" className={linkStyle}><FaChalkboardTeacher /> Ongoing Tuitions</NavLink>
              <NavLink to="/dashboard/tutor/revenue" className={linkStyle}><FaMoneyBillWave /> Revenue</NavLink>
            </>
          )}

          {role === "Admin" && (
            <>
              <NavLink to="/dashboard/admin/users" className={linkStyle}><FaUsers /> User Management</NavLink>
              <NavLink to="/dashboard/admin/tuitions" className={linkStyle}><FaBook /> Tuition Management</NavLink>
              <NavLink to="/dashboard/admin/reports" className={linkStyle}><FaChartLine /> Reports & Analytics</NavLink>
            </>
          )}

          <div className="my-4 border-t border-base-300"></div>
          <NavLink to="student/profile" className={linkStyle}><FaCog /> Profile Settings</NavLink>
          <NavLink to="/" className={linkStyle}><FaHome /> Back to Home</NavLink>
        </nav>

        {/* User Info */}
        <div className="p-4 m-4 bg-base-200 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
            {user?.displayName?.charAt(0) || "U"}
          </div>
          <div>
            <p className="text-sm font-bold truncate">{user?.displayName || "User"}</p>
            <p className="text-[10px] uppercase font-bold opacity-60">{role}</p>
          </div>
        </div>
      </aside>

      {/* --- Main --- */}
      <main className="flex-1 ml-64 md:ml-72 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-20 bg-base-100 border-b border-base-300 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-xl font-bold capitalize">
            {location.pathname.split("/").pop().replace("-", " ")}
          </h1>

          {/* 🌗 Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-ghost"
            title="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </header>

        {/* Content */}
        <div className="p-8 grow">
          <div className="bg-base-100 rounded-xl p-8 border border-base-300 min-h-full">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
