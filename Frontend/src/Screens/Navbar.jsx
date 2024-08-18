import React from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import AddCart from "../page/AddCartIcons";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-900 shadow-md p-5">
        {/* navbar-start page apply here */}
        <div className=" flex justify-between    navbar">
          <NavLink to="/">
            <img className=" w-20" src={logo} alt="" />
          </NavLink>

          {/* add cart page here  */}
          <NavLink to='/cartPage'>
            <AddCart />
          </NavLink>

          {/* belows of the text apply here  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
