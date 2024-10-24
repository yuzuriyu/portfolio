import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative">
      <Image
        src={"/images/Banner.jpeg"}
        alt="Carey Cole Garcia Banner"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-screen object-cover"
      />
      {/* Scrolling text container */}
      <div className="absolute z-10 top-[280px] overflow-hidden w-full">
        {/* Flexbox for scrolling text */}
        <div className="flex w-[200%] animate-marquee">
          {/* First instance of text */}
          <p className="text-white text-[250px] whitespace-nowrap mr-8">
            Carey Cole —
          </p>
          {/* Duplicate instance for seamless scrolling */}
          <p className="text-white text-[250px] whitespace-nowrap mr-8">
            Carey Cole —
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
