import { setAllJobs, setSingleJob } from "@/store/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const userGetSingleJob = (jobId) => {
  //   console.log(`job id is ${jobId}`);
  const dispatch = useDispatch();
  useEffect(() => {
    const getSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          console.log(res.data);
          console.log(`fetched job is ${res.data.job}`);
          toast.success(res.data.message);
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSingleJob();
  }, [jobId, dispatch]);
};

export default userGetSingleJob;
