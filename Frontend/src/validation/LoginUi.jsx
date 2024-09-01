import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "@/Store/Slice/CatalogSlice";
const LoginUi = () => {
  //form valid
  const [logins, setLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = logins;
  // handler - Onchange
  const LoginHandler = (e) => {
    e.preventDefault();
    //get all the data form the login page and modify it
    setLogin({
      ...logins,
      [e.target.name]: e.target.value,
    });
    // name && val will wrap
  };
  const dispatch = useDispatch();

  // Login Submit
  const LoginSubmit = () => {
    dispatch(setLoading(true));
  };
  //loading
  //links
  //dispatch

  return (
    <div className="   flex items-center min-h-svh bg-slate-800 justify-center">
      <div className="sm:w-[25rem] border  lg:w-[30%] sm:px-[3rem] bg-slate-800 py-12 m-auto mx-auto rounded-lg dark:bg-gray-800">
        <div className="">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
          </div>

          <form onSubmit={LoginSubmit} className="mt-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm  text-white dark:text-gray-200"
              >
                Enter Your Email
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={LoginHandler}
                className="block w-full px-4 py-2 mt-2  text-black bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm  text-white dark:text-gray-200"
                >
                  Enter your Password
                </label>
                <Link  to='/ResetPassword' className="text-xs  text-white dark:text-gray-400 hover:underline">
                Forget Password?
                </Link>
                
              </div>

              <input
                type="password"
                name="passwod"
                value={password}
                onChange={LoginHandler}
                className="block w-full px-4 py-2 mt-2   text-white bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            {/* Providers */}
            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or login with Social Media
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <div className="flex items-center mt-6 -mx-2">
            <button
              type="button"
              className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-black transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
            >
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>

              <span className="hidden mx-2 sm:inline">Sign in with Google</span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <p className="mt-8 text-xs font-light text-center text-gray-400">
              {" "}
              Don't have an account?{" "}
              <NavLink to="/Singup">
                <p className="cursor-pointer font-medium text-black dark:text-gray-200 hover:underline">
                  Create One
                </p>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUi;
