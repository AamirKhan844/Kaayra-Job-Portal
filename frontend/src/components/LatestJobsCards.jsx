import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { daysAgo } from "./JobDescription";
const LatestJobsCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/description/${job._id}`)}
        className=" rounded-xl shadow-lg border-b py-8 px-4 hover:cursor-pointer"
      >
        <div className="flex justify-between">
          <div className="flex  justify-center gap-4">
            <div className="">
              <img
                className="w-44 h-28 rounded-lg object-cover "
                src="https://www.jobfound.org/images/Company/CompanyImage3.png"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-lg font-semibold">
                {job?.company?.name} is hiring for {job?.title} |{" "}
                {job?.location}
              </p>
              <p className="text-sm text-slate-500 mt-2 ">
                Admin • {daysAgo(job?.createdAt)}
              </p>
              <div className="flex items-center gap-5 mt-2 ">
                <p className="bg-gray-200 text-sm font-semibold  rounded-full px-4 py-1">
                  {job?.jobType}
                </p>
                <p className="bg-gray-200 text-sm font-semibold  rounded-full px-4 py-1">
                  {job?.salary}Lpa
                </p>
                <p className="bg-gray-200 text-sm font-semibold  rounded-full px-4 py-1">
                  {job?.experienceLevel}
                </p>
              </div>
            </div>
          </div>
          <div className="p-1  rounded-full">
            <Button className="cursor-pointer " variant="ghost">
              <Bookmark size={20} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestJobsCards;
