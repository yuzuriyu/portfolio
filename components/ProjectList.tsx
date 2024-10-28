import React from "react";
import Image from "next/image";
import { projectData } from "@/projectdata";

const ProjectList = () => {
  return (
    <div className="pb-40">
      <div className="justify-between pt-4 pb-12 items-center w-full md:w-8/12 m-auto md:grid grid-cols-5">
        <div className="text-gray-400 text-xs col-start-1 col-end-3">
          PROJECT NAME
        </div>
        <div className="text-gray-400 text-xs col-start-3 col-end-4 ">
          TECHNOLOGIES
        </div>
        <div className=" text-gray-400 text-xs col-start-4 col-end-5 ">
          CLASSIFICATION
        </div>
        <div className=" text-gray-400 text-xs col-start-5 col-end-6 text-right">
          YEAR
        </div>
      </div>
      {projectData.map((data) => (
        <div
          className="w-11/12 md:w-10/12 m-auto md:border-t-2 py-8"
          key={data.id}
        >
          <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden  mb-4">
            <div className="w-full h-[170px] flex items-center justify-center md:hidden">
              <Image
                src={data.image}
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
              {data.name}
            </div>
            <div className="group-hover:text-gray-400   col-start-3 col-end-4  ">
              <div className="flex items-center gap-2 w-full">
                {data.technologies.map((technology) => (
                  <Image
                    key={technology}
                    src={`/icons/${technology}.svg`}
                    alt={technology}
                    height={20}
                    width={20}
                  />
                ))}
              </div>
            </div>
            <div className="group-hover:text-gray-400 col-start-4 col-end-5 ">
              {data.classification}
            </div>
            <div className="col-start-5 col-end-6 text-right group-hover:text-gray-400 ">
              {data.year}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
