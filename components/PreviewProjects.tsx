"use client";

import Link from "next/link";
import { projectData } from "@/projectdata";
import { useContext, useState } from "react";
import PreviewList from "./PreviewList";
import PreviewGrid from "./PreviewGrid";
import { PageContext } from "@/context/PageContext";

const PreviewProjects = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw Error("context undefined");
  }

  const { setActivePage } = context;
  const filteredData = projectData.slice(0, 4);
  const [activeViewMode, setActiveViewMode] = useState<string>("list");

  return (
    <div className="m-auto w-11/12 pb-20 md:w-10/12">
      <div className="m-auto mb-12 flex w-[82%] items-center justify-between">
        <p className="hidden text-xs text-gray-400 md:block">RECENT WORK</p>
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

      {activeViewMode === "list" && <PreviewList />}
      {activeViewMode === "grid" && <PreviewGrid />}

      <Link
        href={"/work"}
        className="m-auto flex w-[160px] items-center justify-center rounded-full border-2 p-8"
        onClick={() => setActivePage("work")}
      >
        <p className="">See More</p>
      </Link>
    </div>
  );
};

export default PreviewProjects;
