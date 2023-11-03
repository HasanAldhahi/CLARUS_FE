import React from "react";

import clarus from "../../imgs/clarus_blue.png";
import { Link } from "react-router-dom";

const NavBar = ({ setIsDarkMode }) => {
  return (
    <div className="z-20 mobile:px-10 lg:px-100 lg: lg:text-[26px] lg:h-[100px]  sm:text-[20px] mobile:h-[70px] w-full flex text-5xl items-center justify-between font-normal shadow-md fixed nav-light txt-light">
      <div className="cursor-pointer mobile:w-10 lg:w-80">
        <img id="logo" src={clarus} alt="" />
      </div>
      <ul className="justify-around items-center sm:flex hidden">
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
          <Link to="#">Home</Link>
        </li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
          App
        </li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
          About Us
        </li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
          Contact Us
        </li>
        <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
          <button
            onClick={() => {
              setIsDarkMode(true);
              window["theme"]();
            }}
            className="text-center justify-center flex"
          >
            <img
              className="w-10 lg:w-16"
              src="../../../public/assets/icons8-sun-100.png"
              alt="sun"
              id="icon"
            />
          </button>
        </li>
      </ul>
      <div className="justify-end items-center sm:hidden w-8">
        <img
          id="menu"
          alt="hamburger menu"
          src="../../public/assets/menu-light.png"
        />
      </div>
    </div>
  );
};

export default NavBar;
