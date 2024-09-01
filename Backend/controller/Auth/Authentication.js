const AuthsSchema = require("../../model/AuthenticationSchema");
const OTP = require("../../model/OtpSchema");
const json = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const otpGenerate = require("otp-generator");
const maileTranportToGmail = require("../../utils/MailConfig");
const UpdatePasswordTemplate = require("../../mail/UpdatePasswordTemplate");
// BACKEND CONTROLLER

//otp Controller apply here
exports.OtpController = async (req, res) => {
  try {
    //email
    const { email } = req.body;
    //validtion
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Empty Field not allowed !",
      });
    }

    // Its check in the authentication = controller and verify it
    const checkInDb = await AuthsSchema.findOne({ email: email });
    if (checkInDb === true) {
      return res.status(404).json({
        success: false,
        message: "Already registered email !",
      });
    }
   

    //password gener
    let otpGenarates = await otpGenerate.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    // main catched apply there
    const otpStored = await OTP.create({ email, otp: otpGenarates });
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully !",
      data: otpStored,
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
    const { fullName, email, password, confirmPassword, otp } = req.body;
    if (!fullName || !email || !password || !confirmPassword || !otp) {
      return res.status(404).json({
        success: false,
        message: "emapty field not allowed!",
      });
    }
    //email valid
    const checkInDb = await AuthsSchema.findOne({ email });
    if (checkInDb) {
      return res.status(404).json({
        success: false,
        message: "Already registered email !",
      });
    }
    //otp valid
    //password hash
    let hashPasword = await bycrypt.hash(password, 10);
    // no compare the two password
    if (password !== confirmPassword) {
      return res.status(404).json({
        success: false,
        message: "password not matched",
      });
    }
    // Get the recent otp
    const recentOtpIndetify = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);

    //if otp empty
    if (recentOtpIndetify.length === 0) {
      return res.status(400).json({
        success: false,
        message: " otp is not valid",
      });
    } else if (otp !== recentOtpIndetify[0].otp) {
      return res.status(400).json({
        success: false,
        message: "otp not valid!",
      });
    }

    const entryCreatedIntoTheDb = await AuthsSchema.create({
      fullName,
      email,
      password: hashPasword,
      confirmPassword: hashPasword,
      otp: recentOtpIndetify,
    });
    return res.status(200).json({
      success: true,
      message: "Singup succesfull done !",
      data: entryCreatedIntoTheDb,
    });

    // catch part apply there so we get !
  } catch (er) {
    console.error(er.message);
    return res.status(400).json({
      success: false,
      message: "Signup not successfully done!",
      error: er.message,
    });
  }
};

// login controller
exports.LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "empty filled not allowed",
      });
    }

    const checkInDb = await AuthsSchema.findOne({ email });
    if (!checkInDb) {
      return res.status(404).json({
        success: false,
        message: "Invalid email kindly registerd",
      });
    }
    // For password comapred here
    const passwordCompared = await bycrypt.compare(
      password,
      checkInDb.password
    );
    try {
      if (passwordCompared) {
        //create the jwt first
        const headers = {
          id: checkInDb._id,
          email: checkInDb._id,
        };

        let jwtCreatedToken = await json.sign(headers, process.env.JWT_Secret, {
          expiresIn: "1h",
        });
        console.log("jwt token", jwtCreatedToken);
        checkInDb.jwtCreatedToken = jwtCreatedToken;

        checkInDb.password = undefined;
        checkInDb.confirmPassword = undefined;

        return res.status(200).json({
          success: true,
          message: "Login successfully done ",
          data: checkInDb,
          jwtCreatedToken,
        });
      }

      // Catch apply here so we get
    } catch (er) {
      return res.status(404).json({
        success: false,
        message: "something went wrong kinly try again",
        error: er.message,
      });
    }

    // Login Failed apply here
  } catch (er) {
    return res.status(404).json({
      success: false,
      message: "Login Failed",
      error: er.message,
    });
  }
};

// change password from the users sides here so we get !
exports.changePassword = async (req, res) => {
  try {
    const identifyUsersFromHisId = await AuthsSchema.findById(
      req.entryCreatedIntoTheDb.id
    );
    const { password, confirmPassword } = req.body;
    const passwordComapared = await bycrypt.compare(
      password,
      identifyUsersFromHisId.password
    );
    if (!passwordComapared) {
      return res.status(404).json({
        success: false,
        message: "Password not matched",
        error: er.message,
      });
    }

    //hash the passd
    let hashPassword = await bycrypt.hash(password, 10);
    //upade the passd into the schema
    const updateUsersDetails = await AuthsSchema.findByIdAndUpdate(
      req.entryCreatedIntoTheDb.id,
      { password: hashPassword },
      { new: true }
    );
    // Send mail to the client
    try {
      const emailSendedToTheClient = await maileTranportToGmail(
        updateUsersDetails.id,
        "Password for your account has been updated",
        //body of the mail
        UpdatePasswordTemplate(
          updateUsersDetails.email,
          `Password updated successfully for ${updateUsersDetails.fullName}`
        )
      );
      console.log(emailSendedToTheClient);
    } catch (er) {
      //Now update the password here
      return res.status(404).json({
        success: false,
        message: "Password  not updated",
      });
    }
    //Now update the password here
    return res.status(200).json({
      success: true,
      message: "Password updated",
    });
  }   catch (er) {
    //Now update the password here
    return res.status(404).json({
      success: false,
      message: "Error occrued while updating the password",
      error: er.message,
    });
  }
};


