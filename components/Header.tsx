import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between h-24 items-center absolute top-0 z-10 w-11/12 left-1/2 -translate-x-1/2">
      <div className=" text-white text-lg">© Code by Cole</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="white"
          className="block md:hidden"
        >
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
        <ul className="md:flex items-center hidden">
          <li className="mr-12 text-white text-lg">Work</li>
          <li className="mr-12 text-white text-lg">About</li>
          <li className="text-white text-lg">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
