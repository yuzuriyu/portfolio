import React from "react";
import Image from "next/image";
import AboutMeBtn from "./AboutMeBtn";
const TechStack = () => {
  return (
    <div className="m-auto flex w-11/12 flex-col items-center justify-center gap-12 pb-0 md:w-8/12 md:flex-row md:pb-28">
      <div className="w-full md:w-2/3">
        <p className="text-xs text-gray-400">CORE STACK</p>
        <div className="m-auto grid w-full grid-cols-5 py-8 md:grid-cols-7">
          <div>
            <Image src={"/icons/nextjs.svg"} height={40} width={40} alt="" />
          </div>
          <div>
            <Image src={"/icons/mongodb.svg"} height={40} width={40} alt="" />
          </div>
          <div>
            <Image
              src={"/icons/tailwindcss.svg"}
              height={40}
              width={40}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"/icons/typescript.svg"}
              height={40}
              width={40}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"/icons/visual-studio-code.svg"}
              height={40}
              width={40}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"/icons/git.svg"}
              height={40}
              width={40}
              alt=""
              className="mt-4 md:mt-0"
            />
          </div>
          <div>
            <Image
              src={"/icons/postman.svg"}
              height={40}
              width={40}
              alt=""
              className="mt-4 md:mt-0"
            />
          </div>
        </div>
        <p className="text-xs text-gray-400">ADDITIONAL SKILLS</p>

        <div className="m-auto grid w-full grid-cols-5 py-8 md:grid-cols-7">
          <div>
            <Image src={"/icons/html.svg"} height={40} width={40} alt="" />
          </div>{" "}
          <div>
            <Image src={"/icons/css.svg"} height={40} width={40} alt="" />
          </div>{" "}
          <div>
            <Image
              src={"/icons/javascript.svg"}
              height={40}
              width={40}
              alt=""
            />
          </div>
          <div>
            <Image src={"/icons/react.svg"} height={40} width={40} alt="" />
          </div>
          <div>
            <Image src={"/icons/nodejs.svg"} height={40} width={40} alt="" />
          </div>
          <div>
            <Image
              src={"/icons/express.svg"}
              height={40}
              width={40}
              alt=""
              className="mt-4 md:mt-0"
            />
          </div>
        </div>
      </div>
      <div className="relative hidden justify-start self-baseline md:flex md:w-1/3">
        <AboutMeBtn />
      </div>
    </div>
  );
};

export default TechStack;
