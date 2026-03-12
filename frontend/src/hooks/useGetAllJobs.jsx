import { setAllJobs } from "@/store/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/`, {
          withCredentials: true,
        });
        console.log(res.data);
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllJobs();
  }, []);
  return <></>;
};

export default useGetAllJobs;
