import React from "react";
import Image from "next/image";
import LocalTime from "./LocalTime";

const Footer = () => {
  return (
    <div className="bg-gray-custom w-full pt-24 pb-6">
      <div className="w-11/12 md:w-8/12 m-auto flex items-center pb-2 border-gray-500">
        <div className="flex items-center">
          <div className="md:w-24 md:h-24 w-12 h-12 overflow-hidden rounded-full">
            <Image
              src="/images/Jisoo.jpg"
              alt="Jisoo"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-full h-full "
            />
          </div>
          <p className="text-5xl md:text-8xl ml-4 text-white">Let’s work</p>
        </div>
      </div>
      <p className="text-5xl md:text-8xl w-11/12 text-white md:w-8/12 m-auto border-b pb-12">
        together
      </p>

      <div className="pb-12 pt-16 md:py-20 w-11/12 md:w-8/12 m-auto">
        <button className=" border border-gray-500 rounded-full m-auto p-6 text-white w-full lg:w-[270px] lg:mr-4 mb-4">
          biz.ccole@gmail.com
        </button>
        <button className=" border border-gray-500 rounded-full m-auto p-6 text-white w-full lg:w-[240px]">
          +63-906-213-****
        </button>
      </div>
      <div className="flex-col flex items-center md:flex-row md:w-10/12 m-auto">
        <div className="flex-col md:flex-1 flex w-11/12 m-auto md:pb-0 pb-8 border-b border-gray-500 md:border-b-0">
          <p className="text-xs text-gray-400 mb-4">SOCIALS</p>
          <div className="flex items-center">
            <p className="text-white mr-4  font-bold">Github</p>
            <p className="text-white  font-bold">LinkedIn</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full md:w-[320px] ">
          <div className=" m-auto md:m-0 flex items-center justify-between md:justify-end md:gap-8 w-11/12 ">
            <div className="w-1/3 md:w-1/2 text-left ">
              <p className="text-xs text-gray-400 mt-4 mb-4 md:mt-0">VERSION</p>
              <p className="text-white font-bold">2024 © Edition</p>
            </div>
            <div className="w-1/3 md:w-1/2 text-left">
              <p className="text-xs text-gray-400 mt-4 mb-4 md:mt-0">
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

export default Footer;
