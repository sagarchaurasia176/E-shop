import { otpDescp } from "@/api/OtpVerify";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdLockReset } from "react-icons/md";
import { NavLink } from "react-router-dom";

const OtpVerify = () => {
  return (
    <div className="   bg-slate-900 flex flex-col  h-screen  w-full m-auto justify-center  items-center ">
      <div className=" container  lg:w-[50%]  sm:w-[23rem]">
        {otpDescp.map((data) => (
          <>
            <div>
              <h1 className=" font-bold text-2xl text-white">{data.title}</h1>
            </div>
            <div className="  text-white">
              <span>{data.descp}</span>
            </div>
          </>
        ))}
        <br />
        <div className="  p-2 ">
          <div class="flex  justify-around">
            <input
              type="text"
              maxlength="1"
              required
              className="otp-input w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxlength="1"
              required

              className="otp-input w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxlength="1"
              required

              className="otp-input w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxlength="1"
              required
              
              className="otp-input w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxlength="1"
              required

              className="otp-input w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxlength="1"
              required
              className="otp-input w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <br />


        {/* Verify email button */}
        <div>
          <button className=" rounded-md  w-full bg-yellow-500 p-2 ">
            Verify Email
          </button>
        </div>
        <br />
        
        {/* Move to the login page */}
        <div className=" text-white flex justify-between  ">
          <NavLink to="/singup">
            <span>
              <FaLongArrowAltLeft className=" text-2xl" />
            </span>
          </NavLink>

          {/* reseend it  */}
          <span className=" flex-row flex   ">
            <MdLockReset className=" text-2xl" />
            Resend it
          </span>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
