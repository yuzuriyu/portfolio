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
    <div className="fixed top-0 z-20 h-screen w-full bg-gray-custom py-4">
      <div className="m-auto w-11/12">
        <div
          className="bg-darkgray ml-auto flex h-16 w-16 items-center justify-center rounded-full"
          onClick={toggleMobileNav}
        >
          <Image src={"/icons/close.svg"} alt="" width={35} height={35} />
        </div>
        <p className="border-darkgray text-darkgray border-b py-6 text-xs">
          NAVIGATION
        </p>
        <Link href={"/"}>
          <p
            className="my-4 pt-4 text-5xl text-white"
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
            className="my-4 text-5xl text-white"
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
            className="my-4 text-5xl text-white"
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
            className="my-4 pb-36 text-5xl text-white"
            onClick={() => {
              setActivePage("Contact");
              toggleMobileNav();
            }}
          >
            Contact
          </p>
        </Link>

        <div className="border-darkgray flex flex-col border-t pt-6 md:flex-1">
          <p className="text-darkgray mb-4 text-xs">SOCIALS</p>
          <div className="flex items-center">
            <p className="mr-4 font-bold text-white">Github</p>
            <p className="font-bold text-white">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
