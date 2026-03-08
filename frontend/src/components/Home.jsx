import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LatestJobs />
    </>
  );
};

export default Home;
