require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../DB/register.js");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

const sendResetpassword = async (email, name, token) => {
  try {
    //SMTP setup
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset your password",
      html: `
        <p>Dear ${name},</p>
        <p>We hope this message finds you well.</p>
        <p>It appears that you've requested to reset your password for your Pennywise account. No worries, we're here to guide you through the process.</p>
        <p>To reset your password securely, simply click on the link below:</p>
        <a href="https://expense-tracker-rose-xi.vercel.app/forgetpassword/${token}">Reset Password</a>
        <p>If clicking the link doesn't work, you can copy and paste the following URL into your browser's address bar:</p>
        <p>https://expense-tracker-rose-xi.vercel.app/forgetpassword/${token}</p>
        <p>Please note that for security reasons, this link will expire after a short period. If you did not initiate this password reset request, you can safely disregard this email.</p>
        <p>Thank you for choosing Pennywise!</p>
        <p>Warm regards,</p>
        <p>The Pennywise Team</p>
      `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(info);
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, msg: error.message });
  }
};


router.post("/", async (req, res) => { 
  //find email and set token and send mail
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ msg: "Pls enter your email" });
  }
  try {
    const resp = await User.findOne({ email: email });
    if (resp) {
      const RString = randomstring.generate();
      const expiresAt = new Date(Date.now() + 1 * 60000);
      const response = await User.updateOne(
        { email: email },
        { $set: { token: RString, expiresAt: expiresAt } }
      );
      await sendResetpassword(resp.email, resp.username, RString);
      return res.status(200).send({ msg: "pls check your email inbox" });
    } else {
      return res.status(400).json({ msg: "Email does not exits" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
});

module.exports = router;
