const nodemailer = require('nodemailer');
require('dotenv').config();

// Mail transport to Gmail
const maileTranportToGmail = async (email, title, body) => {
    try {
        const transport = await nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const info = await transport.sendMail({
            from: `"${process.env.MAIL_USER}" <${process.env.MAIL_USER}>`, // From address with name
            to: email,
            subject: title,
            html: body,
        });

        console.log('Mail sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = maileTranportToGmail;