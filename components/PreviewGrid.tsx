import React from "react";
import { projectData } from "@/projectdata";
import Image from "next/image";

const PreviewGrid = () => {
  const filteredData = projectData.slice(0, 4);

  return (
    <div className="w-11/12 m-auto md:w-full grid grid-cols-1 md:grid-cols-2 gap-16 pb-40">
      {filteredData.map((project) => (
        <div key={project.id} className="w-full">
          <div
            style={{ backgroundColor: project.bgColor }}
            className="h-[360px] md:h-[600px] flex justify-center items-center md:mb-0 mb-4"
          >
            <div className="w-full h-[170px] md:h-[300px] flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-10/12 object-cover h-full"
              />
            </div>
          </div>

          <div className="cursor-pointer group flex flex-col md:flex-row justify-between items-center pt-4 md:w-[82%] w-full m-auto md:hidden">
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
    </div>
  );
};

export default PreviewGrid;
