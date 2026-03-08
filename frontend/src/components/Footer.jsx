import { X } from "lucide-react";
import React from "react";
import {
  FaInstagram,
  FaSquareInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1e2a3a] mt-20  ">
        <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-5 gap-10">
          <div className="col-span-1 space-y-3">
            <h1 className="text-white text-xl font-bold">
              Job<span className="text-red-500">Portal</span>{" "}
            </h1>
            <p className="text-sm leading-relaxed text-gray-400">
              Find your dream job at jobportal.org! We simplify job searches for
              graduates and career changers with opportunities in every field.
            </p>
            <div className="flex items-center gap-12 mt-4   text-white">
              <FaXTwitter size={20} className={`cursor-pointer }`} />
              <FaWhatsapp size={20} className=" cursor-pointer" />
              <FaInstagram size={20} className=" cursor-pointer" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-bold text-gray-300">Job Categories</h1>
            <ul className="text-gray-400 text-sm space-y-3 ">
              <li className="cursor-pointer hover:text-gray-300">
                Remote Jobs
              </li>
              <li className="cursor-pointer hover:text-gray-300">
                Freshers Jobs
              </li>
              <li className="cursor-pointer hover:text-gray-300">
                Amazon Jobs
              </li>
              <li className="cursor-pointer hover:text-gray-300">
                Experienced Jobs
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg font-semibold text-gray-300 ">
              Jobs By Location
            </h1>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="cursor-pointer hover:text-gray-300">US Jobs</li>
              <li className="cursor-pointer hover:text-gray-300">UK Jobs</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg text-gray-300 font-bold">Company</h1>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                About
              </li>
              <li className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                Blog
              </li>
              <li className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                Contact
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg text-gray-300 font-bold">Legal</h1>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                Terms of Services
              </li>
              <li className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center text-sm py-6 text-gray-400">
          © 2026 JobPortal. All rights reserved.
          <br />
          ❤️Developed By Aamir khan
        </div>
      </div>
    </>
  );
};

export default Footer;
