"use client";
import React, { useContext, useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { PageContext } from "@/context/PageContext";
import Link from "next/link";
import Image from "next/image";

const HeaderDark = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw Error("context undefined");
  }

  const { isMobileNavOpen, toggleMobileNav, activePage, setActivePage } =
    context;

  const [isHeaderInView, setIsHeaderInView] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderInView(window.scrollY < 96); // Adjust this based on the height of your header
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isMobileNavOpen && <MobileNav />}
      <div className="absolute left-1/2 top-0 z-10 flex h-24 w-11/12 -translate-x-1/2 items-center justify-between">
        <Link
          href={"/"}
          className="text-lg"
          onClick={() => setActivePage("home")}
        >
          © Code by Cole
        </Link>
        <div>
          <p className="text-lg md:hidden" onClick={toggleMobileNav}>
            Menu
          </p>
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
                  } absolute bottom-0 left-0 border-b border-black transition-all duration-300 ease-in-out`}
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
                  } absolute bottom-0 left-0 border-b border-black transition-all duration-300 ease-in-out`}
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
                  } absolute bottom-0 left-0 border-b border-black transition-all duration-300 ease-in-out`}
                ></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Conditionally render the SVG with a smoother out effect */}
      {!isMobileNavOpen && (
        <div
          className={`fixed right-4 top-8 z-20 hidden h-[86px] w-[86px] cursor-pointer justify-center rounded-full border border-darkgray bg-gray-custom align-middle transition-all duration-500 ease-in-out lg:flex ${
            isHeaderInView ? "scale-0" : "scale-100"
          }`}
          onClick={toggleMobileNav}
        >
          <Image
            src={"/icons/menu--two-lines.svg"}
            alt=""
            height={30}
            width={30}
            className="transform transition-transform duration-500 ease-in-out"
          />
        </div>
      )}
    </>
  );
};

export default HeaderDark;
