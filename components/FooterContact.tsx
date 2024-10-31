import React from "react";
import LocalTime from "./LocalTime";

const FooterContact = () => {
  return (
    <div className="w-full bg-gray-custom pb-6 pt-32">
      <div className="m-auto flex flex-col items-center md:w-10/12 md:flex-row">
        <div className="border-darkgray m-auto flex w-11/12 flex-col border-b pb-8 md:flex-1 md:border-b-0 md:pb-0">
          <p className="text-darkgray mb-4 text-xs">SOCIALS</p>
          <div className="flex items-center">
            <p className="mr-4 font-bold text-white">Github</p>
            <p className="font-bold text-white">LinkedIn</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:w-[320px]">
          <div className="m-auto flex w-11/12 items-center justify-between md:m-0 md:justify-end md:gap-8">
            <div className="w-[150px] text-left md:w-1/2">
              <p className="text-darkgray mb-4 mt-4 text-xs md:mt-0">VERSION</p>
              <p className="font-bold text-white">2024 © Edition</p>
            </div>
            <div className="w-[150px] text-left md:w-1/2">
              <p className="text-darkgray mb-4 mt-4 text-xs md:mt-0">
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
