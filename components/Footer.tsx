import Image from "next/image";
import LocalTime from "./LocalTime";
import Link from "next/link";
import ContactBtn from "./ContactBtn";
const Footer = () => {
  return (
    <div className="w-full bg-gray-custom pb-6 pt-36">
      <div className="relative m-auto flex w-11/12 items-center border-darkgray pb-2 md:w-8/12">
        <div className="flex items-center">
          <div className="h-12 w-12 overflow-hidden rounded-full md:h-24 md:w-24">
            <Image
              src="/images/Jisoo.jpg"
              alt="Jisoo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="ml-4 text-5xl text-white md:text-8xl">Let's work</p>
        </div>
        <ContactBtn />
      </div>
      <p className="m-auto w-11/12 border-b border-b-darkgray pb-24 text-5xl text-white md:w-8/12 md:text-8xl">
        together
      </p>

      <div className="m-auto w-11/12 pb-12 pt-24 md:w-8/12 md:py-20">
        <button className="m-auto mb-4 w-full cursor-text rounded-full border border-darkgray p-6 text-white lg:mr-4 lg:w-[270px]">
          biz.ccole@gmail.com
        </button>
        <button className="m-auto w-full cursor-text rounded-full border border-darkgray p-6 text-white lg:w-[240px]">
          +639062135528
        </button>
      </div>
      <div className="m-auto flex flex-col items-center md:w-10/12 md:flex-row">
        <div className="m-auto flex w-11/12 flex-col border-b border-darkgray pb-8 md:flex-1 md:border-b-0 md:pb-0">
          <p className="mb-4 text-xs text-darkgray">SOCIALS</p>
          <div className="flex items-center">
            <Link
              href={"https://github.com/yuzuriyu"}
              className="mr-4 font-bold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            <Link
              href={"https://www.linkedin.com/in/cole-undefined-89a674297/"}
              className="font-bold text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:w-[320px]">
          <div className="m-auto flex w-11/12 items-center justify-between md:m-0 md:justify-end md:gap-8">
            <div className="w-[150px] text-left md:w-1/2">
              <p className="mb-4 mt-4 text-xs text-darkgray md:mt-0">VERSION</p>
              <p className="font-bold text-white">2024 © Edition</p>
            </div>
            <div className="w-[150px] text-left md:w-1/2">
              <p className="mb-4 mt-4 text-xs text-darkgray md:mt-0">
                LOCAL TIME
              </p>
              <LocalTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
