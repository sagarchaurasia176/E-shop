const express = require("express");
const {
  OtpController,
  SignupController,
  LoginController,
} = require("../controller/Auth/Authentication");
const router = express.Router();

// AUTH ROUTES
router.post("/api/singup", SignupController);
router.post("/api/otp", OtpController);
router.post ('/api/login' , LoginController);

module.exports = router;
