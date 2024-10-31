import React from "react";
import { projectData } from "@/projectdata";
import Image from "next/image";

const PreviewGrid = () => {
  const filteredData = projectData.slice(0, 4);

  return (
    <div className="m-auto grid w-11/12 grid-cols-1 gap-16 pb-40 md:w-full md:grid-cols-2">
      {filteredData.map((project) => (
        <div key={project.id} className="w-full">
          <div
            style={{ backgroundColor: project.bgColor }}
            className="mb-4 flex h-[360px] items-center justify-center md:mb-0 md:h-[600px]"
          >
            <div className="flex h-[170px] w-full items-center justify-center md:h-[300px]">
              <Image
                src={project.image}
                alt={project.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-10/12 object-cover"
              />
            </div>
          </div>

          <div className="group m-auto flex w-full cursor-pointer flex-col items-center justify-between pt-4 md:pt-12">
            <p className="w-full border-b-2 pb-2 text-3xl group-hover:text-gray-400 md:pb-6 md:text-3xl">
              {project.name}
            </p>
            <div className="flex w-full items-center justify-between pt-4 md:pt-6">
              <p className="text-lg group-hover:text-gray-400">
                {project.classification}
              </p>
              <p className="text-lg">{project.year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewGrid;
