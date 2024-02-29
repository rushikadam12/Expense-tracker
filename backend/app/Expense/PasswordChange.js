const express = require("express");
const router = express.Router();
const User = require("../DB/register");
const Hpass = require("../login/HashPass");
router.post("/", async (req, res) => {
  try {
    const { token, password } = req.body;
    console.log({toke,password})
    if (!token) {
      return res.status(400).send({ msg: "This link has been expire" });
    }
    if (!password) {
      return res.status(400).send({ msg: "pls enter all the fields" });
    }
    const tokenData = await User.findOne({ token: token });
    
    if (tokenData && tokenData.expiresAt > new Date()) {
      if (!password) {
        return res.status(400).send({ msg: "pls fill all the fields" });
      }

    
      const newpass = await Hpass(password);
      const userData = await User.findByIdAndUpdate(
        { _id: tokenData._id },
        { $set: { password: newpass, token: "" } },
        { new: true }
      );
      if (!userData) {
        return res.status(400).send({ msg: "pls check your password" });
      }
      return res.status(200).send({ success: true, data: userData });
    } else {
      return res.status(400).send({ msg: "This link has been expired" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error.message });
  }
});

module.exports = router;
