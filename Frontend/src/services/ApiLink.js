const BASE_URL = import.meta.env.VITE_BASE_URL
// as we've to add the the urls so we get
export const authentications = {
    SINGUP : BASE_URL + "/api/singup",
    OTP : BASE_URL + "/api/otp",
    LOGIN : BASE_URL + '/api/login'
}



