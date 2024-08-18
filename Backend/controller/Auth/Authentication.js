const AuthsSchema = require("../../model/AuthenticationSchema");
const OtpSchema = require("../../model/OtpSchema");
const json = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const otpGenerate = require("otp-generator");

//otp Controller apply here
exports.OtpController = async (req, res) => {
  try {
    //email
    const { email } = req.body;
    //validtion
    if (!email) {
      return res.json({
        success: false,
        message: "Empty Field  !",
      });
    }
    // Its check in the authentication = controller and verify it
    const checkInDb = await AuthsSchema.findOne({ email: email });
    if (checkInDb) {
      return res.json({
        success: false,
        message: "Already registered email !",
      });
    }
    console.log("email ", checkInDb);
    //password gener
    let otpGenarates = await otpGenerate.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("otp generate", otpGenarates);

    // main catched apply there
    const otpStored = await OtpSchema.create({ email, otp: otpGenarates });
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully!",
      otpGenarates,
      otpStored,
    });
  } catch (er) {
    return res.status(404).json({
      success: false,
      message: "Error in Auth controller! in otp part",
      error: er.message,
    });
  }
};

// Signup - Controllers
exports.SignupController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role, otp } = req.body;
    if (!name || !email || !password || !confirmPassword || !role || !otp) {
      return res.status(200).json({
        success: false,
        message: "emapty field !",
      });
    }
    //email valid
    const checkInDb = await AuthsSchema.findOne({ email });
    if (checkInDb) {
      return res.json({
        success: false,
        message: "Already registered email !",
      });
    }
    //otp valid
    //password hash
    let hashPasword = await bycrypt.hash(password, 10);
    if (!hashPasword) {
      return res.json({
        success: false,
        message:
          "Soory your password not hash ! kindly change your password from google acc",
      });
    }

    // no compare the two password
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "password not matched",
      });
    }

    // Get the recent otp
    const recentOtpIndetify = await OtpSchema.find({ email })
      .sort({ createdAt: -1 })
      .limit(1)
      .exec();
    console.log("recent otp", recentOtpIndetify);
    //if otp empty
    if (recentOtpIndetify.length == 0) {
      return res.status(400).json({
        success: false,
        message: "otp not found",
      });
    } else if (otp !== recentOtpIndetify) {
      return res.status(400).json({
        success: false,
        message: "otp not matched !",
      });
    }

    //create entry
    const AuthDataStored = await AuthsSchema.create({
      name,
      email,
      password: hashPasword,
      confirmPassword: hashPasword,
      role,
      otp: recentOtpIndetify,
    });
    return res.status(200).json({
      success: true,
      message: "Signup successfully! welcome to e-shop mart",
      AuthDataStored,
    });
  } catch (er) {
    return res.status(400).json({
      success: false,
      message: "Signup not successfully done!",
    });
  }
};

// login
