const mongoose = require("mongoose");
require('../DB/db')
const User = require('../DB/register')
const express = require("express");
const router = express.Router();
router.post("/", async (req, res) => {
  const { username, email, password, budget } = req.body;
  console.log(req.body);
  try {
    if (!username || !email || !budget || !password) {
      console.log("you visited post request");
      return res.json({ error: "pls enter your all fields" });
    }

    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
      return res.status(422).json({ error: "email already present" });
    }
    const user = new User({ username, email, password, budget })
    const resp = await user.save();
    res.send({ message: "Data added successfully", resp: resp });
    console.log("data added");
    //.then(()=>{
    //     res.status(200).json({message:'data added successfully'})
    // }).catch((err)=>{
    //     console.log(error)
    //     res.status(500).json({error:err})
    // })
  } catch (error) {
    console.log(error);
    res.send({ error: error });
  }
});
module.exports = router;
