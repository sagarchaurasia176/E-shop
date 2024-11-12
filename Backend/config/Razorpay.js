const Razorpay = require("razorpay");

require("dotenv").config();
// const uuid = require("uuid");

// rzorpay config file
const RazorpayInstance = new Razorpay({
  key_id: process.env.RAZOR_ID,
  key_secret: process.env.RAZOR_SECRET,
});

module.exports = RazorpayInstance;
