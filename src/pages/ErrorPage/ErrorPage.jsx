import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <Frown size={64} className="text-rose-500 mb-4" />
      <h1 className="text-4xl font-bold text-rose-600 mb-2">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className=" text-white px-6 py-2 rounded-lg hover:scale-105 bg-gradient-to-r from-primary via-indigo-500 to-primary transition font-semibold"
      >
        ⬅️ Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
