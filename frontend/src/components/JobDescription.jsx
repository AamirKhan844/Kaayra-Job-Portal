import React from "react";
import Navbar from "./Navbar";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import Footer from "./Footer";

const JobDescription = () => {
  const isApplied = false;
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-2">
        <p className="text-sm font-semibold text-gray-600">08 March 2026</p>
        <p className="text-4xl font-semibold tracking-wider">
          Tesla, Inc. is hiring for Frontend Software Engineer | Delhi
        </p>
        <div className="flex gap-5 mt-5">
          <p className="bg-slate-900 text-gray-200 rounded-lg text-sm font-semibold py-1 px-2">
            full-time
          </p>
          <p className="bg-slate-900 text-gray-200 rounded-lg text-sm font-semibold py-1 px-2">
            15LPA
          </p>
          <p className="bg-slate-900 text-gray-200 rounded-lg text-sm font-semibold py-1 px-2">
            0Years{" "}
          </p>
          <p className="bg-slate-900 text-gray-200 rounded-lg text-sm font-semibold py-1 px-2">
            10 Positions
          </p>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <FaXTwitter
            size={30}
            className={`cursor-pointer rounded-full bg-slate-800 text-white p-1  }`}
          />
          <FaWhatsapp
            size={30}
            className=" cursor-pointer rounded-full bg-green-500 text-white p-1 "
          />
          <FaInstagram
            size={30}
            className=" cursor-pointer rounded-full bg-pink-400 text-white p-1 "
          />
        </div>
        <div className="flex justify-center mt-5">
          <img
            className="rounded-xl  h-70 "
            src="https://www.jobfound.org/images/Company/CompanyImage10.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-700 mt-5">Description</h1>
          <p className="text-lg text-gray-600 tracking-wider">
            Tesla, Inc. is hiring for the role of Frontend Software Engineer!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste hic
            incidunt nobis iure, provident omnis commodi magni autem cumque
            ducimus totam culpa, in vero eveniet quasi doloremque molestias eius
            sed blanditiis exercitationem atque ea? Sequi iure eveniet,
            architecto neque odit maiores suscipit magnam corporis praesentium
            inventore at dicta repudiandae labore aliquid repellendus, quae,
            doloribus voluptatum excepturi! Voluptatum maiores, accusantium
            aliquid cum ab ipsum totam hic reiciendis illum similique laborum
            consequuntur eaque iure expedita adipisci sint praesentium assumenda
            quo deleniti ex ad delectus optio? Similique, facere eos quod beatae
            unde voluptatum corporis perferendis, rerum magni eveniet expedita
            sequi, provident sapiente laudantium!
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl text-gray-700 font-semibold">Requirements</h1>
          <p className="text-lg text-gray-700 ">
            Degree in Computer Science or related field, or equivalent
            experience Solid understanding of fundamental web technologies such
            as HTTP, REST, AJAX and JSON. Strong proficiency in HTML, CSS and
            JavaScript / ES6, including DOM manipulation and the JS object model
            Solid understanding of database principles, particularly how to
            query and update SQL databases Thorough understanding of REST
            principles and best practices of building and using RESTful APIs
            Thorough understanding of core design principles and common design
            patterns of Angular Experience with common front-end development
            tools such as Vite, NPM, Yarn, etc. Experience with GraphQL is a big
            plus
          </p>
        </div>
        <div className="text-center mt-4">
          <Button
            className={`${isApplied ? "cursor-not-allowed bg-gray-600" : "cursor-pointer"}`}
          >
            {isApplied ? "Already Applied" : "Apply to This Job"}
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDescription;
