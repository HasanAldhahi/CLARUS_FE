import React from "react";
import "../../index.css";
import clarus from "../../imgs/clarus_blue.png";
import { Link } from "react-router-dom";

import { useEffect } from "react";

const NavBar = ({ setIsDarkMode, isDarkMode }) => {
  //   if (isDarkMode) {
  //     setIsDarkMode(true);
  //   }

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.contains("dark-theme");
  //   }
  // }, [isDarkMode]);

  return (
    <div className="z-20 mobile:px-10 lg:px-100 lg: lg:text-[26px] lg:h-[100px] fixed   sm:text-[20px] mobile:h-[70px] w-full flex text-5xl items-center justify-between font-normal shadow-md fixed nav-light txt-light">
      <div className="cursor-pointer mobile:w-10 lg:w-80">
        <img id="logo" src={clarus} alt="" />
      </div>
      <ul className="justify-around items-center sm:flex hidden">
        <Link to="/">
          <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
            Home
          </li>
        </Link>

        <Link to="/about">
          <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
            App
          </li>
        </Link>
        <Link to="/Redux">
          <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
            Redux
          </li>
        </Link>

        {/* <li className="list-none mx-5 hover:border-b-4 border-blue-600 cursor-pointer mobile:text-xs lg:text-base p-2 transition-all">
            <button
              onClick={() => {
                setIsDarkMode(!isDarkMode);
              }}
              className="text-center justify-center flex"
            >
              {isDarkMode ? (
                <img
                  className="w-10 lg:w-16"
                  src="../../../public/assets/icons8-moon-100.png"
                  alt="sun"
                  id="icon"
                />
              ) : (
                <img
                  className="w-10 lg:w-16"
                  src="../../../public/assets/icons8-sun-100.png"
                  alt="sun"
                  id="icon"
                />
              )}
            </button>
          </li>
        </ul>
        <div className="justify-end items-center sm:hidden w-8">
          {isDarkMode ? (
            <img
              id="menu"
              alt="hamburger menu"
              src="../../public/assets/icons8-moon-100.png"
            />
          ) : (
            <img
              id="menu"
              alt="hamburger menu"
              src="../../public/assets/menu-light.png"
            />
          )}
        </div> */}
      </ul>
    </div>
  );
};

export default NavBar;
