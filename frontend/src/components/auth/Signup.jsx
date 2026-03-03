import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Signup = () => {
  const [signUpData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "student",
  });
  const handleChange = (e) => {
    setSignupData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100  flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white  rounded-2xl  shadow-2xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Create Your Account
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Join and Start Applying for Jobs
            </p>
          </div>
          <form onSubmit={handleSubmit} action="" className="space-y-5">
            <div>
              <input
                type="text"
                name="fullname"
                value={signUpData.fullname}
                id="name"
                onChange={handleChange}
                required
                placeholder="Enter your Name"
                className="w-full px-3 rounded-lg h-11 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition "
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={signUpData.email}
                required
                placeholder="example@example.com"
                className="w-full px-3 rounded-lg h-11 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition "
              />
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={handleChange}
                value={signUpData.phoneNumber}
                required
                placeholder="+91 84476xx439"
                className="w-full px-3 rounded-lg h-11 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition "
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={signUpData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full px-3 rounded-lg h-11 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition "
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Register As
              </label>
              <select
                name="role"
                id="role"
                value={signUpData.role}
                onChange={handleChange}
                className="w-full px-3 rounded-lg h-11 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition "
              >
                <option value="student">Student</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
            <div className="flex items-center justify-center w-full ">
              <button
                type="submit"
                className="w-[70%]  h-11 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-md font-medium text-zinc-700 pt-4 text-center italic">
            Already have an Account?{" "}
            <Link
              className="hover:underline hover:text-blue-700 text-blue-600"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
