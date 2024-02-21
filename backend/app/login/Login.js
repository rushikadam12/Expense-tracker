require("../DB/db");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../DB/register");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).send({ error: "Invalid credentials" });
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).send({ error: "pls enter correct email address" });
      //console.log(user)
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        //res.status(201).json({password:result})
        // console.log(result);
        const token = jwt.sign({ id: user._id }, process.env.SECURE_KEY, {
          expiresIn: "1d",
        });
        // req.session.user=user._id
        // console.log(token);

        if (token) {
          res.cookie("token", token, { httpOnly: true,sameSite:'none',secure:true }).json(user);
          // , sameSite: 'none',secure:true 
          // res.status(200).send({token:token,status:"ok",`})
        }
      } else {
        // console.log('visited')
        res.status(404).send({ error: "Invalid credentials" });
        // console.log(result)
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
