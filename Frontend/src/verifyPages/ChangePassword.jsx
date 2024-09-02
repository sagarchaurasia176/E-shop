import { ChoosePassword } from "@/api/ChoosePassword";
import { Spinner } from "@radix-ui/themes";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {FaArrowLeft} from 'react-icons/fa'
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChangedPasswordBackendCall } from "@/services/Operations/MainApiOperation";

const ChangePassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Carts);
  const [isPassword, setIsPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = isPassword;

  // two mehtod for password - confirm password
  const [passwords, setPasswords] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  //destruct also here

  // ChangeHandler apply for onchanged
  const ChangeHandler = (e) => {
    e.preventDefault();
    setIsPassword({
      ...isPassword,
      //type - value
      [e.target.name]: e.target.value,
    });
  };

  const FormHandler = (e) => {
    e.preventDefault();
    //get the token from the mail
    const token = location.pathname.split("/").at(-1);
    dispatch(ChangedPasswordBackendCall(password, confirmPassword, token , navigate));
  };

  return (
    <div className=" flex  p-3 sm:items-center lg:justify-center  lg:items-baseline sm:justify-center   m-auto bg-slate-900 h-screen ">
      <div className=" p-3 mt-[1rem]">
        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          // choose passwrod
          <>
            <div className="  text-white ">
              {ChoosePassword.map((data) => (
                <>
                  <h1 className="  font-semibold p-2 text-2xl">
                    {data.heading}
                  </h1>
                  <div className=" p-2 flex  flex-wrap">
                    <p className="  text-yellow-50">{data.paragraph}</p>
                  </div>
                </>
              ))}
            </div>
            <br></br>
            {/* Form apply there */}
            <div>
              <form onSubmit={FormHandler}>
                <div className=" relative">
                  <label
                    for="password"
                    class="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    New Password <sup className=" text-red-600">*</sup>
                  </label>

                  <input
                    type={passwords ? "text" : "password"}
                    placeholder="******"
                    name="password"
                    value={password}
                    onChange={ChangeHandler}
                    className="block w-full bg-gray-100 dark:bg-gray-800 mt-1 p-3 rounded-md border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {/* password */}
                  <span
                    onClick={() => setPasswords((pre) => !pre)}
                    className="absolute  inset-y-[43px] right-4 flex items-center cursor-pointer text-gray-600 dark:text-gray-400"
                  >
                    {passwords ? (
                      <>
                        <FaRegEye />
                      </>
                    ) : (
                      <>
                        <FaRegEyeSlash />
                      </>
                    )}
                  </span>
                </div>
                <br></br>
                {/* Confirm passwords */}
                <div>
                  <div className="relative">
                    <label
                      labelFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Confirm Password <sup className="text-red-600">*</sup>
                    </label>
                    <input
                      type={confirm ? "text" : "password"}
                      name="confirmPassword"
                      value={confirmPassword}
                      placeholder="******"
                      onChange={ChangeHandler}
                      className="block w-full bg-gray-100 dark:bg-gray-800 mt-1 p-3 rounded-md border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                      onClick={() => setConfirm((prev) => !prev)}
                      className="absolute  inset-y-[43px] right-4 flex items-center cursor-pointer text-gray-600 dark:text-gray-400"
                    >
                      {confirm ? (
                        <FaRegEye size={18} />
                      ) : (
                        <FaRegEyeSlash size={18} />
                      )}
                    </span>
                  </div>
                </div>
                <br></br>
                <div className=" w-full p-3 rounded-lg text-center cursor-pointer   bg-yellow-500 ">
                    <button type="submit">Reset Password</button>
                </div>
              </form>
              <br />

              <NavLink to='/'>
              <div className=" text-white ">
                <span className=" flex  space-x-3">
                  <FaArrowLeft className=" animate-bounce"/>
                  <span>Back to login</span>
                </span>
              </div>
              </NavLink>
             
            </div>
            
            {/* special password characeters */}
            <div></div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
