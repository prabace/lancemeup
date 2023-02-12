import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import navlogo from "../Assets/navlogo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-main top-0 sticky drop-shadow-lg shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)]">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="w-[10rem] object-cover" src={navlogo} />
        </div>
        <div>
          <ul className="hidden laptop:flex gap-x-8 ">
            <li>
              <Link to="home" duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden laptop:flex pr-4">
          <button className="border-none bg-secondary text-black px-6 rounded-full mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="laptop:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-main justify-center items-center w-full px-8"
        }
      >
        <li className="hover:bg-secondary  p-3 text-center">
          <Link onClick={handleClose} to="home" duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:bg-secondary p-3 text-center">
          <Link onClick={handleClose} to="about" offset={-200} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:bg-secondary p-3 text-center">
          <Link onClick={handleClose} to="support" offset={-50} duration={500}>
            Support
          </Link>
        </li>
        <li className="hover:bg-secondary p-3 text-center">
          <Link
            onClick={handleClose}
            to="platforms"
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="hover:bg-secondary p-3 text-center">
          <Link onClick={handleClose} to="pricing" offset={-50} duration={500}>
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className=" text-indigo-600 px-8 py-3 mb-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
