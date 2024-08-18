const express = require("express");
const {
  OtpController,
  SignupController,
} = require("../controller/Auth/Authentication");
const router = express.Router();

// AUTH ROUTES
router.post("/api/singup", SignupController);
router.post("/api/otp", OtpController);

module.exports = router;
