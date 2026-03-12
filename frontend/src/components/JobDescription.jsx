import React from "react";
import Navbar from "./Navbar";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import useGetSingleJob from "@/hooks/useGetSingleJob";
import { useDispatch, useSelector } from "react-redux";
import store from "@/store/store";
import axios from "axios";
import { APPLICATION_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { setSingleJob } from "@/store/jobSlice";

export const daysAgo = (createdAt_mongo) => {
  const createdAt = new Date(createdAt_mongo);
  console.log(`mongodb time ${createdAt}`);
  const currentDate = new Date();
  console.log(`current date ${currentDate}`);
  const timeDiff = currentDate - createdAt;
  console.log(`time diff= ${timeDiff}`);
  const daysDiff = Math.floor(timeDiff / (1000 * 24 * 60 * 60));
  return daysDiff === 0 ? "Today" : `${daysDiff} days ago`;
};
const JobDescription = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const params = useParams();
  console.log(params);
  const jobId = params.id;
  useGetSingleJob(jobId);
  const { singleJob } = useSelector((store) => store.job);
  const isApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id,
    ) || false;

  const handleApply = async () => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_ENDPOINT}/${jobId}`,
        {},
        {
          withCredentials: true,
        },
      );
      if (res.data.message) {
        const updatedJob = {
          ...singleJob,
          applications: [
            ...singleJob.applications,
            {
              applicant: user._id,
            },
          ],
        };
        dispatch(setSingleJob(updatedJob));

        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-2">
        <p className="text-sm font-semibold text-gray-600">
          {daysAgo(singleJob?.createdAt)}
        </p>
        <p className="text-4xl font-semibold tracking-wider">
          {singleJob?.company?.name} is hiring for {singleJob?.title}|{" "}
          {singleJob?.location}
        </p>
        <div className="flex gap-5 mt-5">
          <p className="bg-slate-900 text-gray-200 rounded-lg text-sm font-semibold py-1 px-2">
            {singleJob?.jobType}
          </p>
          <p className="bg-slate-900 text-gray-200 rounded-lg text-sm font-semibold py-1 px-2">
            {singleJob?.salary}LPA
          </p>
          <p className="bg-slate-900 text-gray-200 rounded-lg text-sm font-semibold py-1 px-2">
            {singleJob?.experienceLevel}{" "}
          </p>
          <p className="bg-slate-900 text-gray-200 rounded-lg text-sm font-semibold py-1 px-2">
            {singleJob?.vacancies} Positions
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
            onClick={isApplied ? "null" : handleApply}
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
