import React from "react";
import Image from "next/image";

const ProjectList = () => {
  return (
    <>
      <div className="hidden justify-between md:justify-between pt-4 pb-12 items-center w-full md:w-8/12 m-auto md:grid grid-cols-5">
        <div className="text-gray-400 text-xs col-start-1 col-end-3">
          PROJECT NAME
        </div>
        <div className="text-gray-400 text-xs col-start-3 col-end-4 ">
          Technologies
        </div>
        <div className=" text-gray-400 text-xs col-start-4 col-end-5 ">
          CLASSIFICATION
        </div>
        <div className=" text-gray-400 text-xs col-start-5 col-end-6 text-right">
          YEAR
        </div>
      </div>
      <div className="text-gray-400 text-xs col-start-1 col-end-3 w-11/12 m-auto md:hidden pb-4">
        PROJECTS
      </div>

      <div className="w-11/12 md:w-10/12 m-auto md:border-t-2 py-8">
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

        <div className="cursor-pointer group justify-between items-center pt-4  md:w-[82%] w-full m-auto md:grid grid-cols-5 hidden">
          <div className="group-hover:text-gray-400  text-3xl border-b-2 md:border-b-0 w-full pb-2 col-start-1 col-end-3">
            NendoNest
          </div>
          <div className="group-hover:text-gray-400   col-start-3 col-end-4  ">
            <div className="flex items-center gap-2 w-full">
              <Image src={"/icons/react.svg"} alt="" height={20} width={20} />
              <Image
                src={"/icons/tailwindcss.svg"}
                alt=""
                height={20}
                width={20}
              />
              <Image
                src={"/icons/firebase.svg"}
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="group-hover:text-gray-400 col-start-4 col-end-5 ">
            E-commerce
          </div>
          <div className="col-start-5 col-end-6 text-right ">2024</div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 m-auto md:border-t-2 py-8">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden  mb-4">
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

        <div className="cursor-pointer group justify-between items-center pt-4  md:w-[82%] w-full m-auto md:grid grid-cols-5 hidden">
          <div className="group-hover:text-gray-400  md:block  text-3xl border-b-2 md:border-b-0 w-full pb-2 col-start-1 col-end-3">
            IgniteFitter
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-3 col-end-4  ">
            <div className="flex items-center gap-2 w-full">
              <Image src={"/icons/react.svg"} alt="" height={20} width={20} />
              <Image
                src={"/icons/tailwindcss.svg"}
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-4 col-end-5 ">
            Personal Training
          </div>
          <div className="col-start-5 col-end-6 text-right ">2024</div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 m-auto md:border-t-2 py-8">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden  mb-4">
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

        <div className="cursor-pointer group justify-between items-center pt-4  md:w-[82%] w-full m-auto md:grid hidden grid-cols-5">
          <div className="group-hover:text-gray-400  md:block  text-3xl border-b-2 md:border-b-0 w-full pb-2 col-start-1 col-end-3">
            SparkStep
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-3 col-end-4  ">
            <div className="flex items-center gap-2 w-full">
              <Image src={"/icons/nextjs.svg"} alt="" height={20} width={20} />
              <Image
                src={"/icons/tailwindcss.svg"}
                alt=""
                height={20}
                width={20}
              />
              <Image
                src={"/icons/typescript.svg"}
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-4 col-end-5 ">
            Energy Monitoring
          </div>
          <div className="col-start-5 col-end-6 text-right ">2024</div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 m-auto md:border-t-2 py-8">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden  mb-4">
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

        <div className="cursor-pointer group justify-between items-center pt-4  md:w-[82%] w-full m-auto md:grid grid-cols-5 hidden">
          <div className="group-hover:text-gray-400  md:block  text-3xl border-b-2 md:border-b-0 w-full pb-2 col-start-1 col-end-3">
            ZeroCuisine
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-3 col-end-4  ">
            <div className="flex items-center gap-2 w-full">
              <Image src={"/icons/react.svg"} alt="" height={20} width={20} />
              <Image
                src={"/icons/tailwindcss.svg"}
                alt=""
                height={20}
                width={20}
              />
              <Image src={"/icons/nodejs.svg"} alt="" height={20} width={20} />
              <Image src={"/icons/express.svg"} alt="" height={20} width={20} />
            </div>
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-4 col-end-5 ">
            Dining Service
          </div>
          <div className="col-start-5 col-end-6 text-right ">2024</div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 m-auto md:border-t-2 py-8">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden  mb-4">
          <div className="w-full h-[170px] flex items-center justify-center md:hidden">
            <Image
              src={"/images/Pokedex.JPG"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-10/12 object-cover h-full block md:hidden"
            />
          </div>
        </div>

        <div className="cursor-pointer group justify-between items-center pt-4  md:w-[82%] w-full m-auto md:grid grid-cols-5 hidden">
          <div className="group-hover:text-gray-400  md:block  text-3xl border-b-2 md:border-b-0 w-full pb-2 col-start-1 col-end-3">
            Pokedex
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-3 col-end-4  ">
            <div className="flex items-center gap-2 w-full">
              <Image src={"/icons/nextjs.svg"} alt="" height={20} width={20} />
              <Image
                src={"/icons/tailwindcss.svg"}
                alt=""
                height={20}
                width={20}
              />
              <Image
                src={"/icons/typescript.svg"}
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-4 col-end-5 ">
            Digital Encyclopedia
          </div>
          <div className="col-start-5 col-end-6 text-right ">2024</div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 m-auto md:border-t-2 py-8 mb-20">
        <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden  mb-4">
          <div className="w-full h-[170px] flex items-center justify-center md:hidden">
            <Image
              src={"/images/OUTLAND.JPG"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-10/12 object-cover h-full block md:hidden"
            />
          </div>
        </div>

        <div className="cursor-pointer group justify-between items-center pt-4  md:w-[82%] w-full m-auto md:grid grid-cols-5 hidden">
          <div className="group-hover:text-gray-400  md:block  text-3xl border-b-2 md:border-b-0 w-full pb-2 col-start-1 col-end-3">
            OUTLAND
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-3 col-end-4  ">
            <div className="flex items-center gap-2 w-full">
              <Image src={"/icons/react.svg"} alt="" height={20} width={20} />
              <Image
                src={"/icons/tailwindcss.svg"}
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="group-hover:text-gray-400  md:block col-start-4 col-end-5 ">
            Adventure Planning
          </div>
          <div className="col-start-5 col-end-6 text-right ">2024</div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
