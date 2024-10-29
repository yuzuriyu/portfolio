import React from "react";

const ContactForm = () => {
  return (
    <div className="relative m-auto w-full md:w-3/4 md:pr-8">
      <div className="border-t-2 border-t-gray-500 py-8">
        <div className="mb-3 flex items-start">
          <p className="mr-4 mt-2 text-xs text-gray-400">01</p>
          <div className="w-10/12">
            <p className="mb-2 text-lg text-white md:text-2xl">
              What's your name?
            </p>
            <input
              className="w-full border-none bg-transparent text-lg text-gray-400 focus:outline-none md:text-2xl"
              placeholder="Carl *"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-t-gray-500 py-8">
        <div className="mb-3 flex items-start">
          <p className="mr-4 mt-2 text-xs text-gray-400">02</p>
          <div className="w-10/12">
            <p className="mb-2 text-lg text-white md:text-2xl">
              What's your email?
            </p>
            <input
              className="w-full border-none bg-transparent text-lg text-gray-400 focus:outline-none md:text-2xl"
              placeholder="carl@gmail.com *"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-t-gray-500 py-8">
        <div className="mb-3 flex items-start">
          <p className="mr-4 mt-2 text-xs text-gray-400">03</p>
          <div className="w-10/12">
            <p className="mb-2 text-lg text-white md:text-2xl">
              What's the name of your organization?
            </p>
            <input
              className="w-full border-none bg-transparent text-lg text-gray-400 focus:outline-none md:text-2xl"
              placeholder="Kaiba Corp"
            />{" "}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-t-gray-500 py-8">
        <div className="mb-3 flex items-start">
          <p className="mr-4 mt-2 text-xs text-gray-400">04</p>
          <div className="w-10/12">
            <p className="mb-2 text-lg text-white md:text-2xl">
              What service are you looking for?
            </p>
            <input
              className="w-full border-none bg-transparent text-lg text-gray-400 focus:outline-none md:text-2xl"
              placeholder="Web Development, Code Review..."
            />
          </div>
        </div>
      </div>
      <div className="border-b-2 border-t-2 border-t-gray-500 py-8 pb-60">
        <div className="mb-3 flex items-start">
          <p className="mr-4 mt-2 text-xs text-gray-400">05</p>
          <div className="w-10/12">
            <p className="mb-2 text-lg text-white md:text-2xl">Your message</p>
            <input
              className="w-full border-none bg-transparent text-lg text-gray-400 focus:outline-none md:text-2xl"
              placeholder="Hello Carl, can you help me with... *"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 right-8 flex h-[144px] w-[144px] items-center justify-center rounded-full bg-white">
        <p className="">Send it!</p>
      </div>
    </div>
  );
};

export default ContactForm;
