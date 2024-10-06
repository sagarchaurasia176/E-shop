import { setLoading, setToken } from "@/Store/Slice/CatalogSlice";
import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { apiConnector } from "../ApiConnector";
import { authentications } from "../ApiLink";

//API - END POINTS of the API link pages
const { SINGUP, OTP, LOGIN, RESETPASSWORDTOKEN, UPDATEPASSWORD } =
  authentications;
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
      throw new Error(er.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toasId);
  };
}

// --- otp apply there so we get ---
export function SendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("loading....");
    dispatch(setLoading(true));
    if (!email) {
      toast.error("Empty field not allowed");
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
    try {
      const response = await apiConnector("POST", OTP, {
        email,
        checkInDb: true,
      });
      console.log("otp api dataa", response.data.message);
      if (!response.data.message) {
        throw new Error(response.data.message);
      }
      toast.success("Otp sent succesfull");
      dispatch(setLoading(false));
      navigate("/OtpVerify");

      // Catch apply there so we get
    } catch (er) {
      console.log("otp main api error", er);
      toast.error("error occured from otp server!");
      throw new Error(er.message);
    }
    toast.dismiss(toastId);
  };
}

// ----- PASSWORD RESET TOKEN APPLY THERE ---
export const PasswordReseToken = (email, setSent) => {
  return async (dispatch) => {
    const toastId = toast.loading("loading....");
    dispatch(setLoading(true));
    try {
      //api called to the backen
      const passwordResetCallToBackend = await apiConnector(
        "POST",
        RESETPASSWORDTOKEN,
        { email }
      );
      //password token apply here so we get
      if (!passwordResetCallToBackend.data.message) {
        throw new Error(passwordResetCallToBackend.data.message);
      }
      setSent(true);
      dispatch(setLoading(false));
    } catch (er) {
      console.error(er);
      toast.error("Email is expired kindly login again");
    }
    toast.dismiss(toastId);
  };
};

// Update password
export const ChangedPasswordBackendCall = (
  password,
  confirmPassword,
  token,
  navigate
) => {
  const toastID = toast.loading("loading....");
  //write the main logic of change password
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      //call to the backend
      const requestSendToBackend = await apiConnector("POST", UPDATEPASSWORD, {
        password,
        confirmPassword,
        token,
      });

      if (password !== confirmPassword) {
        toast.error("password not matched , try again");
      }
      if (!requestSendToBackend.data.message) {
        throw new Error(requestSendToBackend.data.message);
      }
      toast.success("password reset succesfull");
      navigate("/");
      dispatch(setLoading(false));
    } catch (er) {
      console.error(er);
      toast.error("Password not matched kindly reset again !");
      navigate("/OtpVerify");
    }
    toast.dismiss(toastID);
  };
};

// login operations apply here so we get it
export const LoginOperations = (email, password, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("loading....");
    try {
      dispatch(setLoading(true));
      // Log before sending the request
      console.log("Sending login request with:", { email, password });

      const response = await apiConnector("POST", LOGIN, { email, password });

      // Log response data

      if (!response.data.token) {
        console.log(response.data.message);
        throw new Error("Missing token in response");
      }

      try {
        dispatch(setToken(response.data.token));
        console.log("API Response: token value", response.data.token);
      } catch (er) {
        console.log("error at the setToken part", er);
      }

      navigate("/Products");
      localStorage.setItem("token", JSON.stringify(response.data.token));

      toast.success("Login successful");
      dispatch(setLoading(false));

      //Catched appled there so we get
    } catch (er) {
      console.error("Error during login:", er);
      toast.error("Login failed ");
      navigate("/");
    } finally {
      dispatch(setLoading(false)); // Ensure loading is stopped
      toast.dismiss(toastId);
    }
  };
};
