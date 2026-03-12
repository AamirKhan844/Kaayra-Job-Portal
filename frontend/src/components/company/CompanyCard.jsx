import {
  Delete,
  DeleteIcon,
  Edit,
  Edit2,
  EllipsisVertical,
} from "lucide-react";
import React from "react";

const CompanyCard = ({ company }) => {
  return (
    <>
      <div className="p-2 border-2 border-slate-500 rounded-xl shadow-xl  space-y-2 ">
        <div className="relative">
          <img
            className="rounded-lg  "
            src="https://www.jobfound.org/images/Company/CompanyImage9.png"
            alt=""
          />
          <div className="absolute top-2 right-2">
            <button className="bg-slate-800 text-white backdrop-blur-2xl p-1 rounded-lg cursor-pointer">
              <Edit2></Edit2>
            </button>
          </div>
          <div className="absolute top-15 right-2">
            <button className="bg-slate-800 text-white backdrop-blur-2xl p-1 rounded-lg cursor-pointer">
              <Delete />
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-600 text-center">
            {company?.name}
          </h1>
        </div>
        <div className="flex  justify-between">
          <p className="text-lg font-semibold text-gray-500 ">
            {company?.website}
          </p>
          <p className="text-lg font-semibold text-gray-500 ">
            {company?.location}
          </p>
        </div>
        <div className="w-full items-center">
          <button className="bg-red-500 p-2 rounded-lg w-full cursor-pointer hover:bg-red-600">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
