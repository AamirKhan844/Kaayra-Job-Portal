import React from "react";
import LatestJobsCards from "./LatestJobsCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  // const randomJobs = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">
          Latest & <span className="text-red-500">Top Job Openings!</span>
        </h1>
        {/* latest jobs cards */}
        <div className="grid grid-cols-2 gap-10 my-5">
          {allJobs.slice(0, 6).map((job, index) => {
            return <LatestJobsCards job={job} key={job._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
