import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import navlogo from "../Assets/navlogo.png";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../Redux/slices/userSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const dispatch = useDispatch()
 
  const isLoggedIn = useSelector(
    (state) => state.users.isLoggedIn
    )

  console.log(isLoggedIn)
    const admin= useSelector(
      (state) => state.users.admin
      )
console.log(admin)


  return (
    <div className="w-screen h-[80px] z-10 bg-main top-0 sticky drop-shadow-lg shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)]">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="w-[10rem] object-cover" src={navlogo} />
        </div>
        <div>
          <ul className="hidden laptop:flex gap-x-8 ">

          {!admin && isLoggedIn &&
            <li>
              <Link to="/product" offset={-50} duration={500}>
                Products
              </Link>
            </li>}

            {admin && isLoggedIn &&
            <li className="">
              <Link to="/admin" offset={-50} duration={500}>
                Items
              </Link>
            </li>}
           
        
          </ul>
        </div>
        
        <div className="hidden laptop:flex pr-4 gap-x-4">
          {!isLoggedIn &&
          <div className="flex gap-x-5">
         <Link to="/signin"> <button className="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white px-8 py-4 rounded-full ">
            Sign In
          </button></Link>
          <Link to="/registration"><button className="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white px-8 py-4 rounded-full ">
            Sign Up
            </button></Link>
            </div>}
            {isLoggedIn &&
            <Link to="/signin"><button 
            onClick={()=>{
              dispatch(setIsLoggedIn(false))
            }}
            className="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white px-8 py-4 rounded-full ">
            Log Out
            </button></Link>}
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
          <Link onClick={handleClose} to="product" duration={500}>
            Product
          </Link>
        </li>
     

        <div className="flex flex-col my-4 gap-y-4">
          <Link to ="/signin"><button className=" bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white px-8 py-4 w-full rounded-full ">Sign In</button></Link>
          <Link to ="/registration"> <button className="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white w-full px-8 py-4 rounded-full ">Sign Up</button></Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
