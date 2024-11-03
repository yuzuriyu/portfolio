import React from "react";
import Header from "../components/Header";
import HeroBanner from "@/components/HeroBanner";
import Introductory from "@/components/Introductory";
import PreviewProjects from "@/components/PreviewProjects";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Introductory />
      <TechStack />
      <PreviewProjects />
      <Footer />
    </div>
  );
};

export default Home;
