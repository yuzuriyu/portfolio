import React from "react";
import { projectData } from "@/projectdata";
import Image from "next/image";

const PreviewList = () => {
  const filteredData = projectData.slice(0, 4);
  return (
    <>
      {filteredData.map((project) => (
        <div key={project.id} className="w-full py-12 md:border-t">
          <div
            style={{ backgroundColor: project.bgColor }}
            className="mb-4 flex h-[360px] items-center justify-center bg-slate-200 md:hidden"
          >
            <div className="flex h-[170px] w-full items-center justify-center md:hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={0}
                height={0}
                sizes="100vw"
                className="block h-full w-10/12 object-cover md:hidden"
              />
            </div>
          </div>

          <div className="group m-auto flex w-full cursor-pointer flex-col items-center justify-between pt-4 md:w-[82%] md:flex-row">
            <p className="w-full border-b pb-4 text-3xl group-hover:text-gray-400 md:border-b-0 md:text-5xl">
              {project.name}
            </p>
            <div className="flex w-full items-center justify-between pt-4 md:justify-end">
              <p className="group-hover:text-gray-400 md:text-lg">
                {project.classification}
              </p>
              <p className="md:hidden md:text-lg">{project.year}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PreviewList;
