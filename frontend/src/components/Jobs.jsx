import React from "react";
import Navbar from "./Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import LatestJobsCards from "./LatestJobsCards";

const Jobs = () => {
  const job = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <FilterCard />
          </div>
          <div className="col-span-9">
            {job.map((job, index) => {
              return (
                <div className="mb-4">
                  <LatestJobsCards />
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
