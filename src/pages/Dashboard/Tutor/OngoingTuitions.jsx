import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const OngoingTuitions = () => {
  const [ongoing, setOngoing] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchOngoing = async () => {
      try {
        const res = await axiosSecure.get("/tuitions?status=Ongoing");
        setOngoing(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOngoing();
  }, [axiosSecure]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📖 Ongoing Tuitions</h2>
      {ongoing.length === 0 ? (
        <p className="text-gray-500">No ongoing tuitions yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {ongoing.map((t) => (
            <div key={t._id} className="p-6 border rounded-lg shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold">{t.subject}</h3>
              <p>Class: {t.class}</p>
              <p>Location: {t.location}</p>
              <p>Status: {t.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OngoingTuitions;
