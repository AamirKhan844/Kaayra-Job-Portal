import { Filter, FilterIcon } from "lucide-react";
import React from "react";

const FilterCard = () => {
  const filterData = [
    {
      filterType: "Location",
      array: ["Delhi NCR", "Banglore", "Hyderabad"],
    },
    {
      filterType: "Job Type",
      array: ["full-time", "part-time", "internship", "contact"],
    },
    {
      filterType: "Profile",
      array: [
        "Full-stack Developer",
        "Backend Developer",
        "Frontend developer",
      ],
    },
  ];
  return (
    <>
      <div className="bg-white p-4 shadow-lg rounded-lg fixed top:20  min-h-screen ">
        {/* Header */}
        {/* <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-700" />
          <h1 className="font-bold text-lg">Filter</h1>
        </div> */}
        <div className="flex items-center gap-2 mb-4">
          <FilterIcon className="w-5 h-5 text-gray-700" />
          <h1 className="font-bold text-lg ">Filter</h1>
        </div>
        {filterData.map((data, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-sm font-bold mb-2">{data.filterType}</h2>
            {data.array.map((item, i) => (
              <div key={i} className="flex items-center gap-4 mb-1">
                <input type="checkbox" />
                <label htmlFor="">{item}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterCard;
