const express = require("express");
const {
  OtpController,
  LoginController,
  SignupController,
  changePassword,
} = require("../controller/Auth/Authentication");
const { resetPasswordToken } = require("../controller/Auth/ResetPassword");
const router = express.Router();
// AUTH ROUTES
router.post("/singup", SignupController);
router.post("/otp", OtpController);
router.post("/login", LoginController);
router.post("/update/password", changePassword);
router.post('/PasswordReseToken',resetPasswordToken);
// exports
module.exports = router;
