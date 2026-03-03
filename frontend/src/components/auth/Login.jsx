import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-center">Welcome Back</h2>
            <p className="text-center font-medium text-gray-500">
              Login to continue applying for Jobs!
            </p>
          </div>
          <form onSubmit={handleSubmit} action="" className="space-y-5">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={loginData.email}
                required
                placeholder="example@example.com"
                className="w-full px-3 rounded-lg h-11 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition "
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full px-3 rounded-lg h-11 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition "
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold  mb-1 text-gray-700"
                htmlFor="role"
              >
                Login as
              </label>
              <select
                name="role"
                id="role"
                value={loginData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 hover:outline-none hover:ring-2 hover:ring-black h-11 rounded-xl "
              >
                <option value="student">Student</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
            <div className="w-full ">
              <button
                type="submit"
                className="cursor-pointer bg-slate-900 p-2 rounded-xl w-full text-white hover:bg-slate-700"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-2">
            <p className="text-md font-semibold text-gray-700">
              Don't have an Account?{" "}
              <Link
                to={"/signup"}
                className="text-blue-600 hover:text-blue-700 hover:underline italic"
              >
                Signup
              </Link>
              <span> Instead!</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
