import { setRecruiterCompanies } from "@/store/companySlice";
import store from "@/store/store";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const useGetRecruiterCompanies = async () => {
  const { company } = useSelector((store) => store.company);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/`, {
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          dispatch(setRecruiterCompanies(res.data.companies));
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    getCompanies();
  }, []);
  return <div></div>;
};

export default useGetRecruiterCompanies;
