"use client";
import React, { useContext } from "react";
import MobileNav from "./MobileNav";
import { PageContext } from "@/context/PageContext";
import Link from "next/link";

const Header = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw Error("context undefined");
  }

  const { isMobileNavOpen, toggleMobileNav, setActivePage } = context;
  return (
    <>
      {isMobileNavOpen && <MobileNav />}
      <div className="flex justify-between h-24 items-center absolute top-0 z-10 w-11/12 left-1/2 -translate-x-1/2">
        <Link href={"/"} className=" text-white text-lg">
          © Code by Cole
        </Link>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="white"
            className="block md:hidden"
            onClick={toggleMobileNav}
          >
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
          </svg>
          <div className="md:flex items-center hidden">
            <Link
              href={"/work"}
              className="mr-12 text-white text-lg relative group cursor-pointer"
              onClick={() => setActivePage("work")}
            >
              Work
              <div className="w-0 left-0 bottom-0 absolute transition-all ease-in-out duration-300 border-b-2 border-white group-hover:w-full"></div>
            </Link>
            <Link
              href={"/about"}
              className="mr-12 text-white text-lg relative group cursor-pointer"
              onClick={() => setActivePage("about")}
            >
              About
              <div className="w-0 left-0 bottom-0 absolute transition-all ease-in-out duration-300 border-b-2 border-white group-hover:w-full"></div>
            </Link>
            <Link
              href={"/contact"}
              className="text-white text-lg relative group cursor-pointer"
              onClick={() => setActivePage("contact")}
            >
              Contact
              <div className="w-0 left-0 bottom-0 absolute transition-all ease-in-out duration-300 border-b-2 border-white group-hover:w-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
