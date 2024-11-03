"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { PageContext } from "@/context/PageContext";

const ContactBtn = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw Error("context undefied");
  }

  const { setActivePage } = context;
  return (
    <Link
      href={"/contact"}
      onClick={() => setActivePage("contact")}
      className="absolute -bottom-[288px] right-8 hidden h-[144px] w-[144px] cursor-pointer items-center justify-center rounded-full bg-burntSienna hover:bg-darkerBurntSienna md:right-24 lg:flex lg:h-[186px] lg:w-[186px]"
    >
      <p className="font-bold text-white">Get in touch</p>
    </Link>
  );
};

export default ContactBtn;
