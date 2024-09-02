const express = require("express");
const {
  OtpController,
  LoginController,
  SignupController,
  changePassword,
} = require("../controller/Auth/Authentication");
const { resetPasswordToken, resetPassword } = require("../controller/Auth/ResetPassword");
const router = express.Router();
// AUTH ROUTES
router.post("/singup", SignupController);
router.post("/otp", OtpController);
router.post("/login", LoginController);
router.post("/update/password", changePassword);
router.post('/PasswordReseToken',resetPasswordToken);
router.post('/update-password', resetPassword);
// exports
module.exports = router;
