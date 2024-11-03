import React from "react";
import Image from "next/image";
import { projectData } from "@/projectdata";
import Link from "next/link";

const ProjectGrid = () => {
  return (
    <div className="m-auto grid w-11/12 grid-cols-1 gap-16 pb-40 md:w-10/12 md:grid-cols-2">
      {projectData.map((project) => (
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          key={project.id}
        >
          <div className="w-full">
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
              <p className="w-full border-b pb-4 text-3xl group-hover:text-gray-400 md:pb-6 md:text-3xl">
                {project.name}
              </p>
              <div className="flex w-full items-center justify-between pt-4 md:pt-6">
                <p className="group-hover:text-gray-400 md:text-lg">
                  {project.classification}
                </p>
                <p className="md:text-lg">{project.year}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
