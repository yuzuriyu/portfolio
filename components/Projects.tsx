"use client";

import React, { useState, useEffect } from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [activeViewMode, setActiveViewMode] = useState<string>("list");

  useEffect(() => {
    // Check the screen width on initial render
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActiveViewMode("grid"); // Set to grid view for small screens
      } else {
        setActiveViewMode("list"); // Set to list view for medium screens and up
      }
    };

    handleResize(); // Call it once on mount
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <>
      <div className="m-auto w-11/12 pb-20 pt-44 md:w-8/12 md:pt-64">
        <p className="text-5xl md:pb-24 md:text-7xl">
          Building refined <br /> digital experiences
        </p>
        <div className="hidden items-center justify-end md:flex">
          <div
            className={`mr-2 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border ${
              activeViewMode === "list"
                ? "border bg-gray-custom"
                : "border-gray-400 bg-white"
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
              activeViewMode === "grid" ? "border bg-gray-custom" : "bg-white"
            } flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-gray-400`}
            onClick={() => setActiveViewMode("grid")}
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill={activeViewMode === "grid" ? "#FFFFFF" : "#000000"}
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
