import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="m-auto w-11/12 pb-20 pt-44 md:w-8/12 md:pt-64">
        <p className="text-5xl md:pb-24 md:text-8xl">
          Coding to bring <br /> my aspirations to life
        </p>
      </div>
      <div className="m-auto flex w-11/12 flex-col gap-2 py-20 md:w-8/12 md:flex-row md:gap-20">
        <div className="md:w-1/3">
          <p className="text-lg">
            I assist businesses globally by providing customized solutions,
            consistently prioritizing quality above all.
          </p>
          <p className="pb-4 pt-8 text-gray-400">
            Always looking for a chance to be better.
          </p>
        </div>
        <div className="md:w-2/3">
          <Image
            src={"/images/casual.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="h-full max-h-[900px] w-full object-cover"
          />
        </div>
      </div>
      <div className="m-auto w-11/12 pb-32 md:w-10/12">
        <p className="pb-8 text-4xl md:text-7xl">I can help you with</p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="hidden pb-8 text-xs text-gray-400 md:block">01</p>
            <p className="border-t py-1 pb-8 pt-12 text-xl md:pb-12 md:text-3xl">
              Development
            </p>
            <p className="md:text-lg">
              As a dedicated developer, I create robust and user-friendly web
              applications tailored to your needs. (Specializing in full-stack
              development since 2024)
            </p>
          </div>
          <div>
            <p className="hidden pb-8 text-xs text-gray-400 md:block">02</p>
            <p className="border-t py-1 pb-8 pt-12 text-xl md:pb-12 md:text-3xl">
              Custom Solutions
            </p>
            <p className="md:text-lg">
              I build customized solutions that solve real problems and enhance
              user experiences. (Focused on bringing your ideas to life through
              code)
            </p>
          </div>
          <div>
            <p className="hidden pb-8 text-xs text-gray-400 md:block">03</p>
            <p className="border-t py-1 pb-8 pt-12 text-xl md:pb-12 md:text-3xl">
              Seamless Integration
            </p>
            <p className="md:text-lg">
              I ensure smooth integration of technologies, creating cohesive
              systems that drive results. (Committed to delivering functional
              and efficient web solutions)
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto flex w-11/12 flex-col gap-2 pb-40 md:w-8/12 md:flex-row md:gap-20">
        <div className="md:w-1/2">
          <Image
            src={"/images/portrait.jpg"}
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <p className="py-1 pb-8 pt-12 text-xl md:pb-12 md:text-3xl">
            Outside of coding
          </p>
          <p className="md:text-lg">
            I have a passion for reading manga and watching anime. I also play
            the guitar as a way to relax and express myself. Driven by my goals,
            I prioritize supporting myself and my family, while continuously
            striving to enhance my social skills and build meaningful
            connections with others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
