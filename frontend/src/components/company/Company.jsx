import React from "react";
import Navbar from "../Navbar";
// import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import CompanyCard from "./CompanyCard";
import { useSelector } from "react-redux";
import store from "@/store/store";
const Company = () => {
  const { getRecruiterCompanies } = useSelector((store) => store.company);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-4 py-10">
        <div className="max-w-5xl mx-auto w-[60%] bg-white rounded-xl shadow-xl p-4">
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-gray-800">
              Companies Registred By you!
            </h1>
          </div>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Search by Company Name..."
              className="w-1/3 rounded-lg p-2 focus:outline-none border border-gray-700"
            />
            <Link to={"/admin/companies/register"}>
              <button className="bg-red-500 text-white font-semibold p-2 rounded-xl cursor-pointer hover:bg-red-600">
                <Plus className="inline" /> New Company
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 my-5">
            {getRecruiterCompanies.map((company) => {
              return <CompanyCard company={company} key={company._id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
