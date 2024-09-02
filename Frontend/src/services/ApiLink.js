const BASE_URL = import.meta.env.VITE_BASE_URL;
// as we've to add the the urls so we get
export const authentications = {
  SINGUP: BASE_URL + "/singup",
  OTP: BASE_URL + "/otp",
  LOGIN: BASE_URL + "/login",
  UPDATEPASSWORD : BASE_URL + "/update-password",
  RESETPASSWORDTOKEN  : BASE_URL + "/PasswordReseToken"
};
