import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between h-24 items-center absolute top-0 z-10 w-11/12 left-1/2 -translate-x-1/2">
      <div className="font-bold text-white">Cole</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
