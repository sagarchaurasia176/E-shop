const express = require("express");
const {
  OtpController,
  SignupController,
  LoginController,
} = require("../controller/Auth/Authentication");
const router = express.Router();

// AUTH ROUTES
router.post("/singup", SignupController);
router.post("/otp", OtpController);
router.post ('/login' , LoginController);

module.exports = router;
