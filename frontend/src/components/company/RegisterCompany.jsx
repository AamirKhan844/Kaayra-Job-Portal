import React, { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCompany } from "@/store/companySlice";

const RegisterCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState({
    name: "",
    location: "",
    website: "",
    description: "",
    logo: null,
  });
  const handleChange = (e) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogoChange = (e) => {
    setCompanyData({
      ...companyData,
      logo: e.target.files[0],
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", companyData.name);
      formData.append("location", companyData.location);
      formData.append("website", companyData.website);
      formData.append("description", companyData.description);
      formData.append("logo", companyData.logo);
      const res = await axios.post(`${COMPANY_API_ENDPOINT}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        // console.log(res.data);
        console.log(res.data.company);
        dispatch(addCompany(res.data.company));

        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen  px-4 py-6">
        <div className="max-w-2xl w-full mx-auto h-full p-8  ">
          <div>
            <form
              onSubmit={handleSubmit}
              action=""
              className=" bg-white rounded-xl p-4 shadow-xl space-y-6 mt-4"
            >
              <div className="text-center">
                <h1 className="text-xl font-bold tracking-tight">
                  Register Your Company!
                </h1>
                <p className="text-muted-foreground tracking-wide font-semibold">
                  Be the Future and the best Recruiter!
                </p>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={companyData.name}
                  onChange={handleChange}
                  id="name"
                  placeholder="Company Name "
                  className="p-2 rounded-xl w-full focus:outline-none focus:ring-0  border border-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="description"
                  value={companyData.description}
                  onChange={handleChange}
                  id="description"
                  placeholder="Description.... "
                  className="p-2 rounded-xl w-full focus:outline-none focus:ring-0  border border-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="location"
                  value={companyData.location}
                  onChange={handleChange}
                  id="location"
                  placeholder="Location... "
                  className="p-2 rounded-xl w-full focus:outline-none focus:ring-0  border border-gray-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="website"
                  id="website"
                  value={companyData.website}
                  onChange={handleChange}
                  placeholder="www.xyz.com "
                  className="p-2 rounded-xl w-full focus:outline-none focus:ring-0  border border-gray-500"
                />
              </div>
              <div className="flex gap-5">
                <label className="bg-green-500 rounded-lg p-1" htmlFor="logo">
                  Logo
                </label>
                <input
                  type="file"
                  accept=".jpg,.png"
                  //   value={companyData.logo}
                  onChange={handleLogoChange}
                  name="logo"
                  id="logo"
                />
              </div>
              <div className="w-full">
                <button
                  className="bg-slate-800 rounded-lg p-1 w-full cursor-pointer text-white px-2 "
                  type="submit"
                >
                  Register Company
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterCompany;
