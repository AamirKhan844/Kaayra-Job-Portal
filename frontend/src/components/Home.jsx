import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";

const Home = () => {
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
