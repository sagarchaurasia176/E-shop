import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import AddCart from "@/page/AddCartIcons";
import { useSelector } from "react-redux";

// Navbar headers
const NavbarPage = () => {
  const Carts = useSelector((state)=>state.Carts);
  return (
    <>
      <div className="">
        {/* another div here  */}
        <div className=" flex  bg-slate-600  text-center justify-around">
          {/* div for main nav */}
          <div className= " p-3 w-[130px] ">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          {/* menu bar */}
          <div className="   hidden md:block   w-[816px] h-2 py-5  space-x-10">
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
        
          <Link to="/Carts" className=" w-20  p-2 font-thin text-white ">
            <sub  className="  bg-green-500 p-1 rounded-full text-1xl">{Carts.length}</sub>
            <AddCart />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
