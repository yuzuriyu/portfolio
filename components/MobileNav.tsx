"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageContext } from "@/context/PageContext";

const MobileNav = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw Error("context undefined");
  }

  const { toggleMobileNav, setActivePage } = context;

  return (
    <div className="w-full h-screen fixed top-0 bg-gray-custom z-20 py-4">
      <div className="w-11/12 m-auto">
        <div
          className="w-16 h-16 flex justify-center items-center rounded-full bg-gray-500 ml-auto"
          onClick={toggleMobileNav}
        >
          <Image src={"/icons/close.svg"} alt="" width={35} height={35} />
        </div>
        <p className="py-6 border-b border-gray-500 text-gray-400 text-xs">
          NAVIGATION
        </p>
        <Link href={"/"}>
          <p
            className="text-white text-5xl my-4 pt-4"
            onClick={() => {
              setActivePage("Home");
              toggleMobileNav();
            }}
          >
            Home
          </p>
        </Link>
        <Link href={"/work"}>
          <p
            className="text-white text-5xl my-4"
            onClick={() => {
              setActivePage("Work");
              toggleMobileNav();
            }}
          >
            Work
          </p>
        </Link>
        <Link href={"/about"}>
          <p
            className="text-white text-5xl my-4"
            onClick={() => {
              setActivePage("About");
              toggleMobileNav();
            }}
          >
            About
          </p>
        </Link>
        <Link href={"/contact"}>
          <p
            className="text-white text-5xl my-4 pb-36"
            onClick={() => {
              setActivePage("Contact");
              toggleMobileNav();
            }}
          >
            Contact
          </p>
        </Link>

        <div className="flex-col md:flex-1 flex pt-6 border-t border-gray-500">
          <p className="text-xs text-gray-400 mb-4 ">SOCIALS</p>
          <div className="flex items-center">
            <p className="text-white mr-4 font-bold">Github</p>
            <p className="text-white font-bold">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
