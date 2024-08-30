import { setLoading } from "@/Store/Slice/CatalogSlice";
import { Check } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { apiConnector } from "../ApiConnector";
import { authentications } from "../ApiLink";

//API - END POINTS of the API link pages
const { SINGUP, OTP, LOGIN } = authentications;
// SingupCallOperateions
export function SingUp(
  fullName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    //send the req to the server
    const toasId = toast.loading("loading....");
    dispatch(setLoading(true));
    //Passed the method req to the clients
    try {
      const response = await apiConnector("POST", SINGUP, {
        //WHAT I WANT FROM THE CLIENTS
        fullName,
        email,
        password,
        confirmPassword,
        otp,
      });

      //check the respone
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      console.log(response.data.success);
      toast.success("Singup succesful");
      //naviage to the login page
      navigate("/");
    } catch (er) {
      toast.error("Failed to Singup");
      console.log(er);
      navigate("/Singup");
    }

    dispatch(setLoading(false));
    toast.dismiss(toasId);
  };
}

// --- otp apply there so we get ---
export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("loading....");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", OTP, {
        email,
        checkInDb: true,
      });
      console.log("response checked it from opt sides", response);
      if (!response.data.message) {
        throw new Error(response.data.message);
      }
      toast.success("Otp sent succesfull");
      navigate("/OtpVerify");
    } catch (er) {
      toast.error("Otp not sent ! kindly try again");
      throw new Error(er.message);
      
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}


// verify password 
//
