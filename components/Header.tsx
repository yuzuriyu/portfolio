"use client";
import React, { useContext, useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { PageContext } from "@/context/PageContext";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw Error("context undefined");
  }

  const { isMobileNavOpen, toggleMobileNav, setActivePage, activePage } =
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
          className="text-lg text-white"
          onClick={() => setActivePage("home")}
        >
          © Code by Cole
        </Link>
        <div>
          <p className="text-lg text-white md:hidden" onClick={toggleMobileNav}>
            Menu
          </p>
          <div className="hidden items-center md:flex">
            <Link
              href={"/work"}
              className="group relative mr-12 cursor-pointer text-lg text-white"
              onClick={() => setActivePage("work")}
            >
              Work
              <div
                className={`${
                  activePage === "work" ? "w-1/4" : "w-0 group-hover:w-full"
                } absolute bottom-0 left-0 border-b border-white transition-all duration-300 ease-in-out`}
              ></div>
            </Link>
            <Link
              href={"/about"}
              className="group relative mr-12 cursor-pointer text-lg text-white"
              onClick={() => setActivePage("about")}
            >
              About
              <div
                className={`${
                  activePage === "about" ? "w-1/4" : "w-0 group-hover:w-full"
                } absolute bottom-0 left-0 border-b border-white transition-all duration-300 ease-in-out`}
              ></div>
            </Link>
            <Link
              href={"/contact"}
              className="group relative cursor-pointer text-lg text-white"
              onClick={() => setActivePage("contact")}
            >
              Contact
              <div
                className={`${
                  activePage === "contact" ? "w-1/4" : "w-0 group-hover:w-full"
                } absolute bottom-0 left-0 border-b border-white transition-all duration-300 ease-in-out`}
              ></div>
            </Link>
          </div>
        </div>
      </div>
      {/* Conditionally render the SVG with a smoother out effect */}
      {!isMobileNavOpen && (
        <div
          className={`fixed right-4 top-4 z-20 flex h-[64px] w-[64px] cursor-pointer justify-center rounded-full border border-darkgray bg-gray-custom align-middle transition-all duration-500 ease-in-out md:top-8 md:h-[86px] md:w-[86px] ${
            isHeaderInView ? "scale-0" : "scale-100"
          } }`}
          onClick={toggleMobileNav}
        >
          <Image
            src={"/icons/menu--two-lines.svg"}
            alt=""
            height={30}
            width={30}
            className={`transform transition-transform duration-500 ease-in-out`}
          />
        </div>
      )}
    </>
  );
};

export default Header;
