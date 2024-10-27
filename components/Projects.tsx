"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectGrid from "./ProjectGrid";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [activeViewMode, setActiveViewMode] = useState<string>("list");

  return (
    <>
      <div className="w-11/12 m-auto  pb-20 pt-64 md:w-8/12">
        <p className="md:text-7xl pb-24 text-5xl">
          Creating next level <br /> digital products
        </p>
        <div className="flex items-center justify-end">
          <div
            className={`w-20 h-20 border flex justify-center items-center rounded-full mr-2 cursor-pointer ${
              activeViewMode === "list"
                ? "border bg-gray-custom "
                : "bg-white border-gray-400"
            }`}
            onClick={() => setActiveViewMode("list")}
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke={activeViewMode === "list" ? "#FFFFFF" : "#000000"}
            >
              <line x1="16" y1="32" x2="48" y2="32" />
              <line x1="16" y1="20" x2="48" y2="20" />
              <line x1="16" y1="44" x2="48" y2="44" />
            </svg>
          </div>
          <div
            className={`${
              activeViewMode === "grid" ? "border bg-gray-custom" : "bg-whte"
            } w-20 h-20 border border-gray-400 flex justify-center items-center rounded-full cursor-pointer`}
            onClick={() => setActiveViewMode("grid")}
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill={activeViewMode === "grid" ? "#FFFFFF" : "#000000"} // Conditional color
            >
              <path d="M2 11h9V2H2zm1-8h7v7H3zm10 8h9V2h-9zm1-8h7v7h-7zM2 22h9v-9H2zm1-8h7v7H3zm10 8h9v-9h-9zm1-8h7v7h-7z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </div>
        </div>
      </div>
      {activeViewMode === "grid" && <ProjectGrid />}
      {activeViewMode === "list" && <ProjectList />}
    </>
  );
};

export default Projects;
