import React from "react";
import { projectData } from "@/projectdata";
import Image from "next/image";

const PreviewList = () => {
  const filteredData = projectData.slice(0, 4);
  return (
    <>
      {filteredData.map((project) => (
        <div key={project.id} className="w-full md:border-t-2 py-12">
          <div className="h-[360px] flex bg-slate-200 justify-center items-center md:hidden mb-4">
            <div className="w-full h-[170px] flex items-center justify-center md:hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-10/12 object-cover h-full block md:hidden"
              />
            </div>
          </div>

          <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4 md:w-[82%] w-full m-auto">
            <p className="group-hover:text-gray-400 md:text-5xl text-3xl border-b-2 md:border-b-0 w-full pb-2">
              {project.name}
            </p>
            <div className="flex justify-between md:justify-end pt-4 items-center w-full">
              <p className="group-hover:text-gray-400">
                {project.classification}
              </p>
              <p className="md:hidden">{project.year}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PreviewList;
