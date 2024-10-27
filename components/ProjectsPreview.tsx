import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPreview = () => {
  return (
    <div className="w-11/12 m-auto md:w-10/12 pb-20">
      <p className="text-xs w-[82%] m-auto mb-12 text-gray-400">RECENT WORK</p>
      <div className="w-full md:border-t-2 py-12">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden  mb-4">
          <div className="w-full h-[170px] flex items-center justify-center md:hidden">
            <Image
              src={"/images/NendoNest.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-10/12 object-cover h-full block md:hidden"
            />
          </div>
        </div>

        <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4  md:w-[82%] w-full m-auto">
          <p className="group-hover:text-gray-400  md:block md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
            NendoNest
          </p>
          <div className="flex justify-between md:justify-end pt-4 items-center w-full">
            <p className="group-hover:text-gray-400  md:block ">E-commerce</p>
            <p className="md:hidden ">2024</p>
          </div>
        </div>
      </div>
      <div className="w-full md:border-t-2 py-12">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden mb-4">
          <div className="w-full h-[170px] flex items-center justify-center md:hidden">
            <Image
              src={"/images/IgniteFitter.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-10/12 object-cover h-full block md:hidden"
            />
          </div>
        </div>
        <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4  md:w-[82%] w-full m-auto">
          <p className="group-hover:text-gray-400  md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
            IgniteFitter
          </p>
          <div className="flex justify-between md:justify-end pt-4 items-center w-full">
            <p className="group-hover:text-gray-400 ">Personal Training</p>
            <p className="md:hidden ">2024</p>
          </div>
        </div>
      </div>
      <div className="w-full md:border-t-2 py-12">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden mb-4">
          <div className="w-full h-[170px] flex items-center justify-center md:hidden">
            <Image
              src={"/images/SparkStep.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-10/12 object-cover h-full block md:hidden"
            />
          </div>
        </div>
        <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4  md:w-[82%] w-full m-auto">
          <p className="group-hover:text-gray-400 k  md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
            SparkStep
          </p>
          <div className="flex justify-between md:justify-end pt-4 items-center w-full">
            <p className="group-hover:text-gray-400 ">Energy Monitoring</p>
            <p className="md:hidden">2024</p>
          </div>
        </div>
      </div>
      <div className="w-full md:border-t-2 py-12">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden mb-4">
          <div className="w-full h-[170px] flex items-center justify-center md:hidden">
            <Image
              src={"/images/ZeroCuisine.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-10/12 object-cover h-full block md:hidden"
            />
          </div>
        </div>
        <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4  md:w-[82%] w-full m-auto">
          <p className="group-hover:text-gray-400  md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
            ZeroCuisine
          </p>
          <div className=" flex justify-between md:justify-end pt-4 items-center w-full">
            <p className="group-hover:text-gray-400 ">Dining Services</p>
            <p className="md:hidden">2024</p>
          </div>
        </div>
      </div>
      <Link
        href={"/work"}
        className="flex w-[160px] border-2 rounded-full m-auto p-8 items-center justify-center"
      >
        <p className="">See More</p>
      </Link>
    </div>
  );
};

export default ProjectsPreview;
