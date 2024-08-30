import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import AddCart from "@/page/AddCartIcons";
import { useSelector } from "react-redux";

// Navbar headers
const NavbarPage = () => {
  const Carts = useSelector((state) => state.Carts);
  return (
    <>
      <div className="  w-[100%]">
        {/* another div here  */}
        <div
          className=" flex   bg-slate-800  
          shadow-lg text-center   p-2 justify-around"
        >
          {/* div for main nav */}
          <div className=" w-[130px] ">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          {/* menu bar */}
          <div className="   hidden md:block   w-[816px] h-2  py-2 space-x-10">
            <Link
              to="/Products"
              className="   w-[70px] h-[32px]  space-x-10  font-thin text-white  size-16  justify-center"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="   w-[70px] h-[32px]  space-x-10 font-thin text-white  size-16  justify-center"
            >
              About
            </Link>
            <Link className="   w-[70px] h-[32px] p-1  space-x-10 font-thin text-white  size-16  justify-center">
              Contact
            </Link>
            <Link className="   w-[70px] h-[32px] p-1  space-x-10 font-thin text-white  size-16  justify-center">
              Products
            </Link>
          </div>
          <button
            className="   bg-slate-900 text-slate-200 border 
          border-dotted rounded-lg  px-[13px]"
          >
            Login
          </button>
          <button
            className="
           bg-slate-900 text-slate-200 border 
          border-dotted rounded-lg  px-[5px]
          "
          >
            Singup
          </button>
          {/* add carts */}
          <div>
            <NavLink to="/Carts">
              <AddCart />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
