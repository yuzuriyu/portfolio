"use client";
import React, { useContext } from "react";
import MobileNav from "./MobileNav";
import { PageContext } from "@/context/PageContext";
import Link from "next/link";

const HeaderDark = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw Error("context undefined");
  }

  const { isMobileNavOpen, toggleMobileNav, activePage } = context;
  return (
    <>
      {isMobileNavOpen && <MobileNav />}
      <div className="flex justify-between h-24 items-center absolute top-0 z-10 w-11/12 left-1/2 -translate-x-1/2">
        <Link href={"/"} className="text-lg">
          © Code by Cole
        </Link>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill=""
            className="block md:hidden"
            onClick={toggleMobileNav}
          >
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
          </svg>
          <div className="md:flex items-center hidden">
            <Link href={"/work"}>
              <div className="mr-12 text-lg relative group cursor-pointer">
                Work
                <div
                  className={`${
                    activePage === "work" ? "w-1/4" : "w-0 group-hover:w-full"
                  } left-0 bottom-0 absolute transition-all ease-in-out duration-300 border-b-2 border-black`}
                ></div>
              </div>
            </Link>
            <Link href={"/about"}>
              <div className="mr-12 text-lg relative group cursor-pointer">
                About
                <div
                  className={`${
                    activePage === "about" ? "w-1/4" : "w-0 group-hover:w-full"
                  } left-0 bottom-0 absolute transition-all ease-in-out duration-300 border-b-2 border-black`}
                ></div>
              </div>
            </Link>
            <Link href={"/contact"}>
              <div className="text-lg relative group cursor-pointer">
                Contact
                <div
                  className={`${
                    activePage === "contact"
                      ? "w-1/4"
                      : "w-0 group-hover:w-full"
                  } left-0 bottom-0 absolute transition-all ease-in-out duration-300 border-b-2 border-black`}
                ></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDark;
