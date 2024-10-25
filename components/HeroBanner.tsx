import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative">
      <Image
        src={"/images/Jisoo.jpg"}
        alt="Carey Cole Garcia Banner"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[130vh] md:h-screen object-cover"
      />
      <div className="hidden md:flex pl-12 bg-black absolute top-1/2 -translate-y-1/2 left-0 rounded-tr-full rounded-br-full items-center py-4 pr-4">
        <p className="text-white mr-16 tracking-wider">
          Located <br /> in the <br /> Philippines
        </p>
        <div className="bg-gray-500 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path>
          </svg>
        </div>
      </div>
      <Image
        src={"/icons/arrow-down-right.svg"}
        alt=""
        width={45}
        height={45}
        className="absolute bottom-[24%] left-4 md:left-auto md:top-[30%] md:bottom-0 md:right-[22%] z-10"
      />

      <div className=" w-11/12 absolute md:top-1/2 flex md:justify-end justify-start items-center left-1/2 -translate-x-1/2 text-left transform md:-translate-y-1/2 z-10 bottom-24">
        <div className="md:text-4xl text-2xl block text-white tracking-tight">
          <div className="md:text-4xl text-2xl block text-white mb-3 tracking-tight ">
            Freelance
          </div>
          Full Stack Developer
        </div>
      </div>

      {/* Scrolling text container */}
      <div className="absolute z-10 md:top-[430px] top-[320px] overflow-hidden w-full">
        {/* Flexbox for scrolling text */}
        <div className="flex w-[200%] animate-marquee">
          {/* First instance of text */}
          <p className="text-white text-[230px]  whitespace-nowrap mr-8">
            Carey Cole —
          </p>
          {/* Duplicate instance for seamless scrolling */}
          <p className="text-white text-[230px]  whitespace-nowrap mr-8">
            Carey Cole —
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
