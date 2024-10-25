import React from "react";
import Image from "next/image";

const ProjectsPreview = () => {
  return (
    <div className="w-11/12 m-auto md:w-10/12">
      <div className="w-full md:border-t-2 py-12">
        <Image
          src={"/images/NendoNest.jpg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover block md:hidden"
        />
        <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4  md:w-[82%] w-full m-auto">
          <p className="group-hover:text-gray-400  md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
            NendoNest
          </p>
          <div className="flex justify-between md:justify-end pt-4 items-center w-full">
            <p className="group-hover:text-gray-400 ">
              Interaction & Development
            </p>
            <p className="md:hidden">2024</p>
          </div>
        </div>
      </div>
      <div className="w-full md:border-t-2 py-12">
        <Image
          src={"/images/IgniteFitter.jpg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover md:hidden block"
        />
        <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4  md:w-[82%] w-full m-auto">
          <p className="group-hover:text-gray-400  md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
            IgniteFitter
          </p>
          <div className="flex justify-between md:justify-end pt-4 items-center w-full">
            <p className="group-hover:text-gray-400 ">
              Interaction & Development
            </p>
            <p className="md:hidden">2024</p>
          </div>
        </div>
      </div>
      <div className="w-full md:border-t-2 py-12">
        <Image
          src={"/images/SparkStep.jpg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover md:hidden block"
        />
        <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4  md:w-[82%] w-full m-auto">
          <p className="group-hover:text-gray-400  md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
            SparkStep
          </p>
          <div className="flex justify-between md:justify-end pt-4 items-center w-full">
            <p className="group-hover:text-gray-400 ">
              Interaction & Development
            </p>
            <p className="md:hidden">2024</p>
          </div>
        </div>
      </div>
      <div className="w-full md:border-t-2 py-12">
        <Image
          src={"/images/ZeroCuisine.jpg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover md:hidden block"
        />
        <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4  md:w-[82%] w-full m-auto">
          <p className="group-hover:text-gray-400 md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
            ZeroCuisine
          </p>
          <div className=" flex justify-between md:justify-end pt-4 items-center w-full">
            <p className="group-hover:text-gray-400 ">
              Interaction & Development
            </p>
            <p className="md:hidden">2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;
