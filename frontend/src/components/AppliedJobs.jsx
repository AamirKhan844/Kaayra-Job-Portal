import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppliedJobs = () => {
  const appliedJobs = [
    {
      id: 1,
      company: "Uber",
      role: "Software Engineer",
      location: "Bangalore",
      salary: "30 LPA",
      status: "Pending",
      date: "12 Mar 2026",
    },
    {
      id: 2,
      company: "Adobe",
      role: "Frontend Developer",
      location: "Hyderabad",
      salary: "25 LPA",
      status: "Rejected",
      date: "10 Mar 2026",
    },
    {
      id: 3,
      company: "Google",
      role: "Backend Developer",
      location: "Pune",
      salary: "40 LPA",
      status: "Selected",
      date: "8 Mar 2026",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="mt-6">
        <h2 className="text-xl text-center font-bold mb-4 tracking-wider">
          Applied Jobs
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 shadow-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Salary</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Applied Date</th>
              </tr>
            </thead>

            <tbody>
              {appliedJobs.map((job) => (
                <tr key={job.id} className="border-t">
                  <td className="p-3">{job.company}</td>
                  <td className="p-3">{job.role}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">{job.salary}</td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-sm 
                    ${
                      job.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : job.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                    }`}
                    >
                      {job.status}
                    </span>
                  </td>

                  <td className="p-3">{job.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppliedJobs;
