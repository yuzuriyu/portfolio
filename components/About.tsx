import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="w-11/12 m-auto pb-20 pt-44 md:pt-64 md:w-8/12">
        <p className="md:text-7xl md:pb-24 text-5xl">
          Coding to <br /> bring my aspirations to life
        </p>
      </div>
      <div className="flex flex-col py-20 md:flex-row md:gap-20 gap-2 w-11/12 m-auto md:w-8/12">
        <div className="md:w-1/3 ">
          <p className="text-lg">
            I assist businesses globally by providing customized solutions,
            consistently prioritizing quality above all.
          </p>
          <p className="pt-8 pb-4 text-gray-400">
            Always looking for a chance to be better.
          </p>
        </div>
        <div className="md:w-2/3">
          <Image
            src={"/images/portrait.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover max-h-[900px]"
          />
        </div>
      </div>
      <div className="w-11/12 m-auto md:w-10/12 pb-32">
        <p className="md:text-7xl text-4xl pb-8 ">I can help you with</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs text-gray-400 pb-8  hidden md:block">01</p>
            <p className=" md:text-3xl text-xl py-1 border-t border-gray-400 pt-12 md:pb-12 pb-8">
              Development
            </p>
            <p className="md:text-lg">
              As a dedicated developer, I create robust and user-friendly web
              applications tailored to your needs. (Specializing in full-stack
              development since 2024)
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 pb-8  hidden md:block">02</p>
            <p className=" md:text-3xl text-xl py-1 border-t border-gray-400 pt-12 md:pb-12 pb-8">
              Custom Solutions
            </p>
            <p className="md:text-lg">
              I build customized solutions that solve real problems and enhance
              user experiences. (Focused on bringing your ideas to life through
              code)
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 pb-8  hidden md:block">03</p>
            <p className=" md:text-3xl text-xl py-1 border-t border-gray-400 pt-12 md:pb-12 pb-8">
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
      <div className="w-11/12 m-auto md:w-8/12 flex flex-col md:flex-row pb-20 md:gap-20 gap-2">
        <div className="md:w-1/2">
          <Image
            src={"/images/portrait-2.jpg"}
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            className="w-full h-full "
          />
        </div>
        <div className="md:w-1/2">
          <p className=" md:text-3xl text-xl py-1  pt-12 md:pb-12 pb-8">
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
