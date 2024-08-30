const AuthsSchema = require("../../model/AuthenticationSchema");
const OTP = require("../../model/OtpSchema");
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

    //password gener
    let otpGenarates = otpGenerate.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("otp generate", otpGenarates);

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
    const { fullName, email, password, confirmPassword, role, otp } = req.body;
    if (!fullName || !email || !password || !confirmPassword || !role || !otp) {
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
    const recentOtpIndetify = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log("recent otp is this  - ", recentOtpIndetify);
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
    } else {
      console.log("otp works perfectly  !");
    }

    //create the entry into the db
    const entryCreatedIntoTheDb = await AuthsSchema.create({
      fullName,
      email,
      password,
      confirmPassword,
      role,
      otp,
    });
    return res.status(200).json({
      success: true,
      message: "Singup succesfull done !",
      data: entryCreatedIntoTheDb,
    });

    // catch part apply there so we get !
  } catch (er) {
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
        message: "empty filled",
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
    const passwordCompared = bycrypt.compare(password, checkInDb.password);
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

