import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="w-full bg-gray-custom pt-40">
      <div className="m-auto flex w-11/12 items-end md:w-8/12">
        <div className="md:w-3/4 md:pr-8">
          <div className="m-auto flex w-full items-center border-gray-500 pb-2">
            <div className="flex items-center">
              <div className="h-12 w-12 overflow-hidden rounded-full md:hidden md:h-24 md:w-24">
                <Image
                  src="/images/Jisoo.jpg"
                  alt="Jisoo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="ml-4 text-5xl text-white md:ml-0 md:text-8xl">
                Let’s start a
              </p>
            </div>
          </div>
          <p className="mr-auto text-5xl text-white md:text-8xl">
            project together
          </p>
        </div>
        <div className="md:w-1/4">
          <div className="hidden h-12 w-12 md:ml-8 md:block md:h-28 md:w-28">
            <Image
              src="/images/Jisoo.jpg"
              alt="Jisoo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative m-auto h-[60px] w-8/12 pr-8 md:h-[180px]">
        <Image
          src={"/icons/arrow-down-right.svg"}
          alt=""
          width={35}
          height={35}
          className="absolute right-52 top-1/2 hidden -translate-y-1/2 md:block"
        />
      </div>

      <div className="m-auto flex w-11/12 flex-col md:hidden md:w-8/12 md:flex-row">
        <ContactInfo />
        <ContactForm />
      </div>
      <div className="m-auto hidden w-11/12 flex-col md:flex md:w-8/12 md:flex-row">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
