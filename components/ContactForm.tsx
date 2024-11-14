"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [buttonText, setButtonText] = useState("Send it!");
  const [buttonColor, setButtonColor] = useState("bg-burntSienna");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_i1s6m1b",
          "template_7bevjvf",
          form.current,
          "kdiydy5VGaUfRgEEU",
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setButtonText("Success");
            setButtonColor("bg-green-500");

            // Reset button text and color after 5 seconds
            setTimeout(() => {
              setButtonText("Send it!");
              setButtonColor("bg-burntSienna");
            }, 5000);
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="relative m-auto w-full md:w-3/4 md:pr-8"
    >
      <div className="border-t border-t-darkgray py-8">
        <div className="mb-3 flex items-start">
          <p className="mr-4 mt-2 text-xs text-gray-400">01</p>
          <div className="w-10/12">
            <p className="mb-2 text-lg text-white md:text-2xl">
              What&apos;s your name?
            </p>
            <input
              type="text"
              name="from_name"
              required
              className="w-full border-none bg-transparent text-lg text-darkgray placeholder:text-darkgray focus:outline-none md:text-2xl"
              placeholder="Carl *"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-t-darkgray py-8">
        <div className="mb-3 flex items-start">
          <p className="mr-4 mt-2 text-xs text-gray-400">02</p>
          <div className="w-10/12">
            <p className="mb-2 text-lg text-white md:text-2xl">
              What&apos;s your email?
            </p>
            <input
              type="email"
              name="from_email"
              required
              className="w-full border-none bg-transparent text-lg text-darkgray placeholder:text-darkgray focus:outline-none md:text-2xl"
              placeholder="carl@gmail.com *"
            />
          </div>
        </div>
      </div>
      <div className="border-b border-t border-b-darkgray border-t-darkgray py-8 pb-60">
        <div className="mb-3 flex items-start">
          <p className="mr-4 mt-2 text-xs text-gray-400">03</p>
          <div className="w-10/12">
            <p className="mb-2 text-lg text-white md:text-2xl">Your message</p>
            <textarea
              name="message"
              required
              className="w-full border-none bg-transparent text-lg text-darkgray placeholder:text-darkgray focus:outline-none md:text-2xl"
              placeholder="Hello Carl, can you help me with... *"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={`absolute -bottom-20 right-8 flex h-[144px] w-[144px] cursor-pointer items-center justify-center rounded-full ${buttonColor} hover:bg-darkerBurntSienna md:right-16 lg:h-[180px] lg:w-[180px]`}
      >
        <p className="font-bold text-white">{buttonText}</p>
      </button>
    </form>
  );
};

export default ContactForm;
