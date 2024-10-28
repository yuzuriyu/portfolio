import React from "react";
import Header from "../components/Header";
import HeroBanner from "@/components/HeroBanner";
import Introductory from "@/components/Introductory";
import PreviewProjects from "@/components/PreviewProjects";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Introductory />
      <PreviewProjects />
      <Footer />
    </div>
  );
};

export default Home;
