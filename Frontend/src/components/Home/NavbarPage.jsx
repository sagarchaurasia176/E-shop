import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import AddCart from "@/page/AddCartIcons";

// Navbar headers
const NavbarPage = () => {
  return (
    <>
      <div className="  w-full max-w-[1200px">
        {/* another div here  */}
        <div className=" flex  bg-slate-800  text-center p-2 justify-around">
          {/* div for main nav */}
          <div className=" p-2 w-[130px] ">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          {/* menu bar */}
          <div className="   hidden md:block   w-[816px] h-2 py-3  space-x-10">
            <Link to='/Products'
            className="   w-[70px] h-[32px]  space-x-10  font-thin text-white  size-16  justify-center">
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
          {/* last div for cart page */}

          <Link to="/" className=" w-20  p-2  text-white ">
            <FaRegUser className=" size-6" />
          </Link>
          {/* nex div */}
          <Link to="/Carts" className=" w-20  p-2  font-thin text-white ">
            <AddCart />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
