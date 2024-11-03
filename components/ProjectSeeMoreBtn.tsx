"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { PageContext } from "@/context/PageContext";

const ProjectSeeMoreBtn = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw Error("context undefined");
  }
  const { setActivePage } = context;

  return (
    <Link
      href={"/work"}
      className="m-auto flex w-[160px] items-center justify-center rounded-full border-2 p-8"
      onClick={() => setActivePage("work")}
    >
      <p className="">See More</p>
    </Link>
  );
};

export default ProjectSeeMoreBtn;
