const express = require("express");
const {
  OtpController,
  LoginController,
  SignupController,
} = require("../controller/Auth/Authentication");
const router = express.Router();

// AUTH ROUTES
router.post("/singup", SignupController );
router.post("/otp", OtpController);
router.post ('/login' , LoginController);

module.exports = router;


// singup not working well kinly checked it !