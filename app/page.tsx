import React from "react";
import Header from "../components/Header";
import HeroBanner from "@/components/HeroBanner";
import Introductory from "@/components/Introductory";
import ProjectsPreview from "@/components/ProjectsPreview";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Introductory />
      <ProjectsPreview />
      <Footer />
    </div>
  );
};

export default Home;
