const AuthsSchema = require("../../model/AuthenticationSchema");
const maileTranportToGmail = require("../../utils/MailConfig");
const bcrypt = require("bcrypt");
require("dotenv").config();

// reset password token
exports.resetPasswordToken = async (req, res) => {
  try {
    const {email} = req.body;
    const users = await AuthsSchema.findOne({ email: email });

    if (!users) {
      return res.status(404).json({
        success: false,
        message: `This email : ${email} is not registerd with us enater a valid email `,
      });
    }
    const token = crypto.randomUUID();
    //upadate this into the uuid

    const updateTheTokenIntoAuthSchema = await AuthsSchema.findOneAndUpdate(
      { email: email },
      { token: token, resetPassword: Date.now() + 5 * 60 * 1000 },
      { new: true }
    );
    console.log("update the password", updateTheTokenIntoAuthSchema);
    //create  the random url of forntend
    const url = `http://localhost:5173/update-password/${token}`;
    //send mail with the url
    await maileTranportToGmail(
      email,
      "Password reset link",
      `Password url  ${url}`
    );

    return res.json({
      success: true,
      message: "Token reset done",
      data: updateTheTokenIntoAuthSchema,
    });
  } catch (er) {
    return res.status(404).json({
      success: false,
      message: "Token not updated",
      error: er.message,
    });
  }
};

// Reset Password from the ui
exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;
    //validation
    if (password !== confirmPassword) {
      return res.status(404).json({
        success: false,
        message: "Password not matched ",
      });
    }

    //get users details from the db
    const usersDetail = await AuthsSchema.findOne({ token });
    if (!usersDetail) {
      return res.status(404).json({
        success: false,
        message: "Token is Invalid !",
      });
    }

    //token time check
    if (usersDetail.passwordExpire < Date.now()) {
      return res.status(404).json({
        success: false,
        message: "Password expired!",
      });
    }

    //hash the password
    let passwordHash = await bcrypt.hash(password, 10);
    //update the password
    await AuthsSchema.findOneAndUpdate(
      { token: token },
      { password: passwordHash },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Password reset Succesfully ",
    });

    // catch apply there
  } catch (er) {
    return res.status(400).json({
      success: false,
      message: "Password not reset ",
      error : er.message
    });
  }
};
