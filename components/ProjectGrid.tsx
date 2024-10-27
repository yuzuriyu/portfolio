import React from "react";
import Image from "next/image";

const ProjectGrid = () => {
  return (
    <div className="w-11/12 m-auto md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-16 pb-40">
      <div className="h-[600px] flex bg-slate-200 justify-center items-center">
        <div className="w-full h-[300px] flex items-center justify-center ">
          <Image
            src={"/images/NendoNest.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-10/12 object-cover h-full"
          />
        </div>
      </div>
      <div className="h-[600px] flex bg-slate-200 justify-center items-center">
        <div className="w-full h-[300px] flex items-center justify-center ">
          <Image
            src={"/images/IgniteFitter.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-10/12 object-cover h-full"
          />
        </div>
      </div>
      <div className="h-[600px] flex bg-slate-200 justify-center items-center">
        <div className="w-full h-[300px] flex items-center justify-center ">
          <Image
            src={"/images/SparkStep.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-10/12 object-cover h-full"
          />
        </div>
      </div>{" "}
      <div className="h-[600px] flex bg-slate-200 justify-center items-center">
        <div className="w-full h-[300px] flex items-center justify-center ">
          <Image
            src={"/images/ZeroCuisine.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-10/12 object-cover h-full"
          />
        </div>
      </div>{" "}
      <div className="h-[600px] flex bg-slate-200 justify-center items-center">
        <div className="w-full h-[300px] flex items-center justify-center ">
          <Image
            src={"/images/Pokedex.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-10/12 object-cover h-full"
          />
        </div>
      </div>{" "}
      <div className="h-[600px] flex bg-slate-200 justify-center items-center">
        <div className="w-full h-[300px] flex items-center justify-center ">
          <Image
            src={"/images/OUTLAND.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-10/12 object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
