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

  const { toggleMobileNav, setActivePage, activePage } = context;

  return (
    <div className="fixed right-0 top-0 z-20 h-screen w-full bg-gray-custom py-4 lg:w-1/3 lg:pl-20 lg:shadow-2xl">
      <div className="m-auto w-11/12">
        <div
          className="ml-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-burntSienna hover:bg-darkerBurntSienna lg:mt-4 lg:h-[86px] lg:w-[86px]"
          onClick={toggleMobileNav}
        >
          <Image src={"/icons/close.svg"} alt="" width={35} height={35} />
        </div>
        <p className="border-b border-darkgray py-6 text-xs text-darkgray">
          NAVIGATION
        </p>
        <Link href={"/"}>
          <div
            className="relative my-4 pt-4 text-5xl text-white lg:my-5 lg:text-7xl"
            onClick={() => {
              setActivePage("home");
              toggleMobileNav();
            }}
          >
            Home
            <div
              className={`${
                activePage === "home" ? "w-1/6" : "w-0 group-hover:w-full"
              } absolute bottom-0 left-0 border-b border-darkgray transition-all duration-300 ease-in-out`}
            ></div>
          </div>
        </Link>
        <Link href={"/work"}>
          <div
            className="relative my-4 text-5xl text-white lg:my-5 lg:text-7xl"
            onClick={() => {
              setActivePage("work");
              toggleMobileNav();
            }}
          >
            Work
            <div
              className={`${
                activePage === "work" ? "w-1/6" : "w-0 group-hover:w-full"
              } absolute bottom-0 left-0 border-b border-darkgray transition-all duration-300 ease-in-out`}
            ></div>
          </div>
        </Link>
        <Link href={"/about"}>
          <div
            className="relative my-4 text-5xl text-white lg:my-5 lg:text-7xl"
            onClick={() => {
              setActivePage("about");
              toggleMobileNav();
            }}
          >
            About
            <div
              className={`${
                activePage === "about" ? "w-1/6" : "w-0 group-hover:w-full"
              } absolute bottom-0 left-0 border-b border-darkgray transition-all duration-300 ease-in-out`}
            ></div>
          </div>
        </Link>
        <Link href={"/contact"}>
          <div
            className="relative my-4 mb-36 text-5xl text-white lg:my-5 lg:mb-16 lg:text-7xl"
            onClick={() => {
              setActivePage("contact");
              toggleMobileNav();
            }}
          >
            Contact
            <div
              className={`${
                activePage === "contact" ? "w-1/6" : "w-0 group-hover:w-full"
              } absolute bottom-0 left-0 border-b border-darkgray transition-all duration-300 ease-in-out`}
            ></div>
          </div>
        </Link>

        <div className="flex flex-col pt-6 md:flex-1">
          <p className="mb-4 text-xs text-darkgray">SOCIALS</p>
          <div className="flex items-center">
            <Link
              href={"https://github.com/yuzuriyu"}
              className="mr-4 font-bold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            <Link
              href={"https://www.linkedin.com/in/cole-undefined-89a674297/"}
              className="font-bold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
