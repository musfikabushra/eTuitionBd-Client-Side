import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const finalizePayment = async () => {
      try {
        const res = await axiosSecure.patch("/payment-success", { sessionId });
        if (res.data.success) {
          toast.success("Payment successful! Tutor approved.");
        } else {
          toast.error("Payment verification failed.");
        }
      } catch (err) {
        console.error("Payment success error:", err);
        toast.error("Failed to finalize payment.");
      }
    };

    if (sessionId) finalizePayment();
  }, [sessionId, axiosSecure]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold text-emerald-600 mb-4">Payment Successful 🎉</h2>
      <p className="text-slate-600">Your tutor has been approved and tuition is now ongoing.</p>
    </div>
  );
};

export default PaymentSuccess;
