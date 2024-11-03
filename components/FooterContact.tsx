import React from "react";
import LocalTime from "./LocalTime";
import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="w-full bg-gray-custom pb-6 pt-32">
      <div className="m-auto flex flex-col items-center md:w-10/12 md:flex-row">
        <div className="m-auto flex w-11/12 flex-col border-b border-darkgray pb-8 md:flex-1 md:border-b-0 md:pb-0">
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
        <div className="flex w-full items-center justify-between md:w-[320px]">
          <div className="m-auto flex w-11/12 items-center justify-between md:m-0 md:justify-end md:gap-8">
            <div className="w-[150px] text-left md:w-1/2">
              <p className="mb-4 mt-4 text-xs text-darkgray md:mt-0">VERSION</p>
              <p className="font-bold text-white">2024 © Edition</p>
            </div>
            <div className="w-[150px] text-left md:w-1/2">
              <p className="mb-4 mt-4 text-xs text-darkgray md:mt-0">
                LOCAL TIME
              </p>
              <LocalTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
