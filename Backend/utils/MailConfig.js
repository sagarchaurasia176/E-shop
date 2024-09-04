const nodemailer = require("nodemailer");
require("dotenv").config();

// mail transport to gmail -
const maileTranportToGmail = async (email, title, body) => {
  try {
    let transport = await nodemailer.createTransport({
      host: process.env.HOST_NAME,
      debug: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    let info = await transport.sendMail({
      from: "welcome to e-shop", // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    });
    console.log("info ", info);
  } catch (er) {
    console.log("error at mailConfig in mailConfig page kindy checked !", er);
  }

  //   end funtion
};
module.exports = maileTranportToGmail;
