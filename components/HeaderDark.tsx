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

  const { isMobileNavOpen, toggleMobileNav, activePage, setActivePage } =
    context;
  return (
    <>
      {isMobileNavOpen && <MobileNav />}
      <div className="absolute left-1/2 top-0 z-10 flex h-24 w-11/12 -translate-x-1/2 items-center justify-between">
        <Link href={"/"} className="text-lg" onClick={() => setActivePage("")}>
          © Code by Cole
        </Link>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill=""
            className="block md:hidden"
            onClick={toggleMobileNav}
          >
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
          </svg>
          <div className="hidden items-center md:flex">
            <Link href={"/work"}>
              <div
                className="group relative mr-12 cursor-pointer text-lg"
                onClick={() => setActivePage("work")}
              >
                Work
                <div
                  className={`${
                    activePage === "work" ? "w-1/4" : "w-0 group-hover:w-full"
                  } absolute bottom-0 left-0 border-b-2 border-black transition-all duration-300 ease-in-out`}
                ></div>
              </div>
            </Link>
            <Link href={"/about"}>
              <div
                className="group relative mr-12 cursor-pointer text-lg"
                onClick={() => setActivePage("about")}
              >
                About
                <div
                  className={`${
                    activePage === "about" ? "w-1/4" : "w-0 group-hover:w-full"
                  } absolute bottom-0 left-0 border-b-2 border-black transition-all duration-300 ease-in-out`}
                ></div>
              </div>
            </Link>
            <Link href={"/contact"}>
              <div
                className="group relative cursor-pointer text-lg"
                onClick={() => setActivePage("contact")}
              >
                Contact
                <div
                  className={`${
                    activePage === "contact"
                      ? "w-1/4"
                      : "w-0 group-hover:w-full"
                  } absolute bottom-0 left-0 border-b-2 border-black transition-all duration-300 ease-in-out`}
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
