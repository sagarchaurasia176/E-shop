import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SingupUi = () => {
  //create an state which handl the for valid
  const [singupForm, setSingupForm] = useState({});

  // pending here 🤷‍♂️
  // onchagne methods
  const singupInputField = () => {};

  return (
    <div>
      <div className=" bg-slate-900 h-screen flex justify-center items-center  overflow-x-hidden  overflow-y-hidden">
        <section className="max-w-4xl p-7   md:w-[50%] mx-auto  bg-slate-50 rounded-md shadow-md    dark:bg-gray-800">
          <h2 className="text-lg font-semibold capitalize flex items-center justify-center  dark:text-white">
            <span className=" text-black font-semibold border-b-2 border-red-500 ">
              welcome to Ecomxy
            </span>
          </h2>
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="username"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="fullName"
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
                  id="emailAddress"
                  type="email"
                  name="email"
                  onChange={singupInputField}
                  className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={singupInputField}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                  focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Password Confirmation
                </label>
                <input
                  id="passwordConfirmation"
                  type="confirmPassword"
                  name="confirmPassword"
                  onChange={singupInputField}
                  className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <br></br>

            <div className="flex items-center  justify-between">
              <p className=" capitalize font-thin">
                If your already singup then please Login{" "}
              </p>

              <NavLink to="/">
                <button className="px-8 py-2.5 leading-5 text-black transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Login
                </button>
              </NavLink>

              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Singup
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
