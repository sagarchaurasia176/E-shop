const mongoose = require("mongoose");
const maileTranportToGmail = require("../utils/MailConfig");
const { error } = require("console");
const otpTemplate = require("../mail/MailTemp");
// otp SCHEMAS
const otpSchemas = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expire: 60 * 5,
  },
});

//VERIFY form the server sides
async function mailVerification(email, otp) {
  try {
    const mailChecked = maileTranportToGmail(
      email,
      "welcome",
      otpTemplate(otp)
    );
    return mailChecked;
  } catch (er) {
    console.log("mail not goes " , er);
    throw new error();
  }
}

// IT MAILNY USED FOR VERIFY PURPOSED
otpSchemas.pre("save", async function (next) {
  try {
    await mailVerification(this.email, this.otp);
    next();
  } catch (er) {
    console.error("opt schemas at the function parts here so we get!", er);
    
  }
});

module.exports = mongoose.model("OTP", otpSchemas);
