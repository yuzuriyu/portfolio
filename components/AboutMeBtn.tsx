"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { PageContext } from "@/context/PageContext";
const AboutMeBtn = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw Error("context undefined");
  }

  const { setActivePage } = context;
  return (
    <Link
      href={"/about"}
      onClick={() => setActivePage("about")}
      className="flex h-[144px] w-[144px] cursor-pointer items-center justify-center self-start rounded-full bg-gray-custom hover:bg-burntSienna lg:h-[180px] lg:w-[180px]"
    >
      <p className="font-bold text-white">About me</p>
    </Link>
  );
};

export default AboutMeBtn;
