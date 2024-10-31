import React from "react";
import Image from "next/image";
import { projectData } from "@/projectdata";

const ProjectList = () => {
  return (
    <div className="pb-40">
      <div className="m-auto w-full grid-cols-5 items-center justify-between pb-12 pt-4 md:grid md:w-8/12">
        <div className="col-start-1 col-end-3 text-xs text-gray-400">
          PROJECT NAME
        </div>
        <div className="col-start-3 col-end-4 text-xs text-gray-400">
          TECHNOLOGIES
        </div>
        <div className="col-start-4 col-end-5 text-xs text-gray-400">
          CLASSIFICATION
        </div>
        <div className="col-start-5 col-end-6 text-right text-xs text-gray-400">
          YEAR
        </div>
      </div>
      {projectData.map((data) => (
        <div
          className="m-auto w-11/12 py-8 md:w-10/12 md:border-t"
          key={data.id}
        >
          <div
            style={{ backgroundColor: data.bgColor }}
            className="mb-4 flex h-[360px] items-center justify-center md:hidden"
          >
            <div className="flex h-[170px] w-full items-center justify-center md:hidden">
              <Image
                src={data.image}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="block h-full w-10/12 object-cover md:hidden"
              />
            </div>
          </div>

          <div className="group m-auto hidden w-full cursor-pointer grid-cols-5 items-center justify-between pt-4 md:grid md:w-[82%]">
            <div className="col-start-1 col-end-3 w-full border-b pb-2 text-3xl group-hover:text-gray-400 md:border-b-0">
              {data.name}
            </div>
            <div className="col-start-3 col-end-4 group-hover:text-gray-400">
              <div className="flex w-full items-center gap-2">
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
            <div className="col-start-4 col-end-5 text-lg group-hover:text-gray-400">
              {data.classification}
            </div>
            <div className="col-start-5 col-end-6 text-right text-lg group-hover:text-gray-400">
              {data.year}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
