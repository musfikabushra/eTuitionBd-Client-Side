import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Check, X } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AppliedTutors = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchApplications = async () => {
      try {
        const res = await axiosSecure.get(`/applications/student/${user.email}`);
        setApplications(res.data);
      } catch (err) {
        console.error("Failed to fetch applications:", err);
        toast.error("Failed to load applications.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [user?.email, axiosSecure]);

  // // Placeholder Payment handler
  // const handlePayment = (application) => {
  //   toast.success(`Payment button clicked for ${application.tutorName}`);
  //   // Later: integrate Stripe checkout here
  // };

// ✅ Payment handler with Stripe
const handlePayment = async (application) => {
  try {
    const res = await axiosSecure.post("/payment-checkout-session", {
      applicationId: application._id,
      expectedSalary: application.expectedSalary,
      tutorEmail: application.tutorEmail,
      tutorName: application.tutorName,
      subject: application.subject,
      // tuitionClass: application.class,
      tuitionClass: application.tuitionClass,
      tuitionId: application.tuitionId,
      studentEmail: user.email,
    }
  );
    

    window.location.assign(res.data.url); 
  } catch (err) {
    console.error("Checkout error:", err);
    toast.error("Failed to initiate payment.");
  }
};



  
  // Reject handler
  const handleReject = async (id) => {
    try {
      await axiosSecure.patch(`/applications/${id}`, { status: "Rejected" });
      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status: "Rejected" } : app))
      );
      toast.success("Application Rejected");
    } catch (err) {
      console.error("Reject failed:", err);
      toast.error("Failed to reject application.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-bold text-slate-700 mb-2">No Applications Found</h3>
        <p className="text-slate-500">You have not received any applications yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {applications.map((app) => (
        <motion.div
          key={app._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-slate-100 rounded-2xl p-6 shadow hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-bold  mb-2">{app.tutorName}</h3>
          <p className="text-sm text-slate-500 mb-4">
            Applied on: {new Date(app.createdAt).toLocaleDateString()}
          </p>
          <p className=" mb-2">
            <span className="font-bold">Subject:</span> {app.subject}
          </p>
          <p className=" mb-2">
            <span className="font-bold">Class:</span> {app.class}
          </p>
          <p className=" mb-2">
            <span className="font-bold">Qualifications:</span> {app.qualifications}
          </p>
          <p className=" mb-2">
            <span className="font-bold">Experience:</span> {app.experience}
          </p>
          <p className=" mb-4">
            <span className="font-bold">Expected Salary:</span> ৳{app.expectedSalary}
          </p>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-sm">Status:</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                app.status === "Approved"
                  ? "bg-emerald-100 text-emerald-600"
                  : app.status === "Rejected"
                  ? "bg-rose-100 text-rose-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {app.status || "Pending"}
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handlePayment(app)}
              disabled={app.status === "Approved"}
              className="flex-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 py-2 rounded-lg flex items-center justify-center gap-2 font-bold text-sm disabled:opacity-50"
            >
              <Check size={16} /> Payment
            </button>
            <button
              onClick={() => handleReject(app._id)}
              disabled={app.status === "Rejected"}
              className="flex-1 bg-rose-50 text-rose-600 hover:bg-rose-100 py-2 rounded-lg flex items-center justify-center gap-2 font-bold text-sm disabled:opacity-50"
            >
              <X size={16} /> Reject
            </button>
          </div>
        </motion.div>
      ))}
    </div>


  );
};

export default AppliedTutors;