// import { useState } from "react";
// import toast from "react-hot-toast";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAuth from "../../hooks/useAuth";

// const ApplyModal = ({ tuitionId, closeModal }) => {
//   const [formData, setFormData] = useState({
//     qualifications: "",
//     experience: "",
//     expectedSalary: ""
//   });
  

//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth(); // ✅ logged-in tutor info

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const application = {
//       tutorId: user?.uid || "unknown", // fallback
//       tutorName: user?.displayName || user?.providerData?.[0]?.displayName,
//       tutorEmail: user?.email || user?.providerData?.[0]?.email,
//       tuitionId,
//       ...formData,
//       createdAt: new Date(),
//       status: "Pending"
//     };

//     try {
//       const res = await axiosSecure.post("/applications", application);
//       if (res.data.insertedId) {
//         toast.success("Application submitted!");
//         closeModal();
//       } else {
//         toast.error("Failed to submit application.");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error submitting application.");
//     }
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <h2 className="text-xl font-bold mb-4">Apply for Tuition</h2>
//           <p><strong>Name:</strong> {user?.displayName || "Anonymous Tutor"}</p>
//           <p><strong>Email:</strong> {user?.email || "no-email"}</p>

//           <input
//             type="text"
//             placeholder="Qualifications"
//             value={formData.qualifications}
//             onChange={e => setFormData({ ...formData, qualifications: e.target.value })}
//             className="input input-bordered w-full"
//             required
//           />

//           <input
//             type="text"
//             placeholder="Experience"
//             value={formData.experience}
//             onChange={e => setFormData({ ...formData, experience: e.target.value })}
//             className="input input-bordered w-full"
//             required
//           />

//           <input
//             type="number"
//             placeholder="Expected Salary"
//             value={formData.expectedSalary}
//             onChange={e => setFormData({ ...formData, expectedSalary: e.target.value })}
//             className="input input-bordered w-full"
//             required
//           />

//           <div className="modal-action">
//             <button type="submit" className="btn btn-primary">Submit</button>
//             <button type="button" className="btn" onClick={closeModal}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplyModal;