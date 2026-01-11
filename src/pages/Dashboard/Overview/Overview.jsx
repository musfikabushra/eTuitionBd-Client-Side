import React from "react";
import { FaBook, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { Line, Bar, Pie } from "react-chartjs-2";

// Chart.js imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register all chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,   // ✅ Pie/Doughnut chart এর জন্য দরকার
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  const stats = { tuitions: 120, tutors: 80, revenue: 45000 };

  // Line chart data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "New Tuitions",
        data: [12, 19, 15, 22, 30],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99,102,241,0.2)",
        tension: 0.3,
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: ["Math", "English", "Science", "ICT", "Bangla"],
    datasets: [
      {
        label: "Subject Demand",
        data: [25, 18, 30, 12, 20],
        backgroundColor: "#10B981",
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ["Dhaka", "Chattogram", "Sylhet", "Rajshahi"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#6366F1", "#F59E0B", "#10B981", "#EF4444"],
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" p-6 rounded-xl shadow-md flex items-center gap-4">
          <FaBook className="text-indigo-600 text-3xl" />
          <div>
            <p className="text-2xl font-bold">{stats.tuitions}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Tuitions</p>
          </div>
        </div>
        <div className=" p-6 rounded-xl shadow-md flex items-center gap-4">
          <FaUsers className="text-green-600 text-3xl" />
          <div>
            <p className="text-2xl font-bold">{stats.tutors}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active Tutors</p>
          </div>
        </div>
        <div className=" p-6 rounded-xl shadow-md flex items-center gap-4">
          <FaMoneyBillWave className="text-amber-500 text-3xl" />
          <div>
            <p className="text-2xl font-bold">${stats.revenue}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className=" p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-bold mb-4">Monthly Tuitions</h2>
          <Line data={lineData} />
        </div>
        <div className=" p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-bold mb-4">Subject Demand</h2>
          <Bar data={barData} />
        </div>
      </div>

      <div className=" p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-bold mb-4">City Distribution</h2>
        <Pie data={pieData} />
      </div>

      {/* Data Table */}
      <div className=" p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-bold mb-4">Recent Tuitions</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-2">Subject</th>
              <th className="py-2">Class</th>
              <th className="py-2">Location</th>
              <th className="py-2">Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-2">Math</td>
              <td className="py-2">Class 9</td>
              <td className="py-2">Dhaka</td>
              <td className="py-2">$50</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-2">English</td>
              <td className="py-2">Class 8</td>
              <td className="py-2">Sylhet</td>
              <td className="py-2">$40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
