import { otpDescp } from "@/api/OtpVerify";
import { SendOtp, SingUp } from "@/services/Operations/MainApiOperation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdLockReset } from "react-icons/md";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
const OtpVerify = () => {
  //otp statesf
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { singupData } = useSelector((state) => state.Carts);
  const navigate = useNavigate();

  // iF users not singup then ,
  useEffect(() => {
    if (!singupData) {
      navigate("/Singup");
    }
  }, []);
  // final submit of otp
  const HandleOnSubmit = (e) => {
    e.preventDefault();
    //singupdata
    const { fullName, email, password, confirmPassword } = singupData;
    // Singup function apply there
    dispatch(SingUp(fullName, email, password, confirmPassword, otp, navigate));
  };
  return (
    <div className="   bg-slate-900 flex flex-col  h-screen  w-full m-auto justify-center  items-center ">
      <div className=" container  lg:w-[50%]  sm:w-[23rem]">
        {/* otp descp map applied */}
        {otpDescp.map((data) => (
          <>
            <div>
              <h1 key={data.id} className=" font-bold text-2xl text-white">{data.title}</h1>
            </div>
            <div className="  text-white">
              <span>{data.descp}</span>
            </div>
          </>
        ))}
        <br />
        {/* Form submission  apply here  */}
        <form onSubmit={HandleOnSubmit}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>--</span>}
            renderInput={(props) => <input {...props} />}
            className=" rounded-md p-2"
          />
          <div className="  p-2 ">
            <div>
              <button
                type="submit"
                className=" rounded-md  w-full bg-yellow-500 p-2 "
              >
                Verify Email
              </button>
            </div>
            <br />

            {/* Move to the login page */}
            <div className=" text-white flex justify-between  ">
              <NavLink to="/singup">
                <FaLongArrowAltLeft className=" text-2xl" />
              </NavLink>
            </div>
          </div>
        </form>

        {/* Resend  */}
        <button
          onClick={() => dispatch(SendOtp(singupData.email))}
          className=" flex-row flex   "
        >
          <MdLockReset className=" text-2xl" />
          Resend it
        </button>
      </div>
    </div>
  );
};
export default OtpVerify;
