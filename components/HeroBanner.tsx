import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative">
      <Image
        src={"/images/photo.png"}
        alt="Carey Cole Garcia Banner"
        width={0}
        height={0}
        sizes="100vw"
        className="h-[130vh] w-full object-cover md:h-screen"
      />
      <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center rounded-br-full rounded-tr-full bg-black py-4 pl-12 pr-4 md:flex">
        <p className="mr-16 tracking-wider text-white">
          Located <br /> in the <br /> Philippines
        </p>
        <div className="rounded-full bg-[#c0c1c6] p-4">
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
        className="absolute bottom-[24%] left-4 z-10 md:bottom-0 md:left-auto md:right-[22%] md:top-[30%]"
      />

      <div className="absolute bottom-24 left-1/2 z-10 flex w-11/12 -translate-x-1/2 transform items-center justify-start text-left md:top-1/2 md:-translate-y-1/2 md:justify-end">
        <div className="text-2xl tracking-tight text-white md:text-4xl">
          <div className="mb-3 text-2xl tracking-tight text-white md:text-4xl">
            Freelance
          </div>
          Full Stack Developer
        </div>
      </div>

      {/* Scrolling text container */}
      <div className="absolute top-[320px] z-10 w-full overflow-hidden md:top-[430px]">
        {/* Flexbox for scrolling text */}
        <div className="flex w-[200%] animate-marquee">
          {/* First instance of text */}
          <p className="mr-8 whitespace-nowrap text-[230px] text-white">
            Carey Cole Garcia —
          </p>
          {/* Duplicate instance for seamless scrolling */}
          <p className="mr-8 whitespace-nowrap text-[230px] text-white">
            Carey Cole Garcia —
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
