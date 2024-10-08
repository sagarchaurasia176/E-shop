import { setLoading, setSingupData } from "@/Store/Slice/CatalogSlice";
import React, { useState } from "react";
import toast from "react-hot-toast";
// import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SendOtp } from "@/services/Operations/MainApiOperation";

// import { FaLongArrowAltRight } from "react-icons/fa";

const SingupUi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //create an state which handl the for valid
  const [singupForm, setSingupForm] = useState({
    fullName: "",
    email: " ",
    password: "",
    confirmPassword: "",
  });
  //destruct the values
  const { fullName, email, password, confirmPassword } = singupForm;
  const [showPassword, setPassword] = useState(false);
  const [Confirm, setConfirm] = useState(false);
  // pending here 🤷‍♂️
  // onchagne methods where the users can type his data
  const singupInputField = (e) => {
    e.preventDefault();
    //now modified its
    setSingupForm({
      ...singupForm,
      [e.target.name]: e.target.value,
    });
  };
  //onsubmit form submission
  const FormSubmitted = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (password !== confirmPassword) {
        toast.error("Password not matched !");
        setLoading(false);
        return;
      }
      const singupData = {
        ...singupForm,
      };

      // Dispatch signup actions
      dispatch(setSingupData(singupData)); // Ensure this dispatch is awaited if it involves async actions
      dispatch(SendOtp(email, navigate)); // Ensure OTP dispatch is only done after successful signup

      setLoading(false);
      //but before otp verify
    } catch (er) {
      console.log("error while submitting !", er);
      toast.error("error at singupUi");
    }
  };

  return (
    <div>
      <div className=" bg-slate-900 h-screen flex justify-center items-center  overflow-x-hidden  overflow-y-hidden">
        <section className="max-w-4xl p-7   md:w-[50%] mx-auto  bg-slate-50 rounded-md shadow-md    dark:bg-gray-800">
          <h2 className="text-lg font-semibold capitalize flex items-center justify-center  text-black">
            <span className=" text-black font-semibold border-b-2 border-red-500 ">
              welcome to Ecomxy
            </span>
          </h2>

          {/* Main logics of form sdtart from there */}
          <form onSubmit={FormSubmitted}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="username"
                >
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={fullName}
                  required
                  autoComplete="fullName"
                  onChange={singupInputField}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
                 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                  focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  autoComplete="email"
                  onChange={singupInputField}
                  className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div className="">
                <label
                  className="text-gray-700  dark:text-gray-200"
                  for="password"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  required
                  autoComplete="password"
                  onChange={singupInputField}
                  className=" w-full  px-4 py-2 mt-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                  focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />

                <span
                  onClick={() => setPassword((pre) => !pre)}
                  className="  flex justify-end   text-black  lg:mt-[-2rem] lg:mr-[1rem] sm:mr-[1rem]  mt-2rem z-10 "
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              {/* Confirm password */}
              <div className="">
                <label
                  className="text-gray-700  dark:text-gray-200"
                  for="password"
                >
                  Confirm Password
                </label>
                <input
                  type={Confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  required
                  autoComplete="confirmPassword"
                  onChange={singupInputField}
                  className=" w-full  px-4 py-2 mt-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                  focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />

                <span
                  onClick={() => setConfirm((pre) => !pre)}
                  className="  flex justify-end   text-black  lg:mt-[-2rem] lg:mr-[1rem] sm:mr-[1rem]  mt-2rem z-10 "
                >
                  {Confirm ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              <br></br>
            </div>

            <div className="flex items-center  justify-between">
              <p className=" capitalize font-thin">
                If your already singup then please Login{" "}
              </p>

              <NavLink to="/">
                <button className="px-8 py-2.5 leading-5 text-black transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Login
                </button>
              </NavLink>

              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Create Account
              </button>
            </div>

            {/* singup */}
            <div className=" flex  justify-center"></div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SingupUi;
