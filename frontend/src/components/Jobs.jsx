import React from "react";
import Navbar from "./Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import LatestJobsCards from "./LatestJobsCards";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <FilterCard />
          </div>
          <div className="col-span-9">
            {allJobs.map((job, index) => {
              return (
                <div className="mb-4">
                  <LatestJobsCards key={job._id} job={job} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
