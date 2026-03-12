import React, { useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import store from "@/store/store";
import { useNavigate } from "react-router-dom";
import useGetRecruiterCompanies from "@/hooks/useGetRecruiterCompanies";

const Home = () => {
  const navigate = useNavigate();
  useGetAllJobs();

  const { user } = useSelector((store) => store.auth);
  if (user?.role === "recruiter") {
    useGetRecruiterCompanies();
  }
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  });
  return (
    <>
      <Navbar />
      <HeroSection />
      <LatestJobs />
      <Footer />
    </>
  );
};

export default Home;
