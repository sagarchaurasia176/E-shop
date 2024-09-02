import { Reset } from "@/api/RestPassword";
// Passowrd
import { PasswordReseToken } from "@/services/Operations/MainApiOperation";
// import { setLoading } from "@/Store/Slice/CatalogSlice";
import { Spinner } from "@radix-ui/themes";
import React, { useState } from "react";
// import toast from "react-hot-toast";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const ResetPassword = () => {
  const { loading } = useSelector((state) => state.Carts);
  //depend upon this it show the page
  const [emailSent, setSent] = useState(false);

  // Input field email here
  const [email, setSentEmail] = useState("");
  //dispatch
  const dispatch = useDispatch();

  const EmailChangedHandler = (e) => {
    e.preventDefault();

    // dispatch(setLoading(true));
    dispatch(PasswordReseToken(email, setSent));
  };

  return (
    <div
      className=" bg-slate-900  flex justify-center items-center
       h-screen   w-screen  text-center"
    >
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <div className=" w-[30rem] ">
            <div className="">
              {!emailSent ? (
                <>
                  <span className=" text-white text-2xl font-bold">
                    Reset your password
                  </span>
                </>
              ) : (
                <>
                  <span className=" text-white text-2xl font-bold">
                    Check Your Email
                  </span>
                </>
              )}

              {/* see the desctiption */}
              {!emailSent ? (
                <>
                  {Reset.map((data) => {
                    return (
                      <span  key={data.id} className=" text-white p-1 block">{data.des}</span>
                    );
                  })}
                </>
              ) : (
                <>
                  <div>
                    {Reset.map((data) => {
                      return (
                        <span key={data.id} className=" text-white p-1">
                          {data.des1}
                          <p className=" text-white">{email}</p>
                        </span>
                      );
                    })}
                  </div>
                </>
              )}

              <br />
              <form onSubmit={EmailChangedHandler}>
                {!emailSent && (
                  <div className=" container flex flex-col  sm:flex-col">
                    <label
                      for="email"
                      className=" text-sm lg:flex   text-white dark:text-gray-300"
                    >
                      Email Address
                      <p className=" text-red-700">*</p>
                    </label>
                    <input
                      type="email"
                      placeholder="ehop@gmail.com"
                      name="email"
                      value={email}
                      required
                      onChange={(e) => setSentEmail(e.target.value)}
                      className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                    <br />

                    <button
                      type="submit"
                      className=" bg-orange-300 p-3 cursor-pointer hover:bg-slate-300 hover:transition-all w-full rounded-md "
                    >
                      {!emailSent ? (
                        <>
                          <div className="  flex justify-center items-center flex-wrap space-x-5">
                            <span className=" text-black">Submit</span>
                            <FaLongArrowAltRight className="  text-black text-2xl" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="  flex justify-center  items-center flex-wrap space-x-5">
                            <span className=" text-white">Change Password</span>
                            {/* <FaLongArrowAltRight className="  text-white text-2xl" /> */}
                          </div>
                        </>
                      )}
                    </button>
                    <br />

                    <NavLink to="/singup">
                      <div className="  flex space-x-5">
                        <FaLongArrowAltLeft className="  animate-pulse text-white text-2xl" />
                        <span className=" text-white">Back to Login</span>
                      </div>
                    </NavLink>
                  </div>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
