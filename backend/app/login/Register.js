require('../DB/db')
const User = require('../DB/register')
const express = require("express");
const router = express.Router();
const Hpassword=require('../login/HashPass')

router.post("/", async (req, res) => {
  const { username, email, password, budget } = req.body;
  //console.log(req.body);
  try {
    if (!username || !email || !budget || !password) {
      console.log("you visited post request");
      return res.json({ error: "pls enter your all fields" });
    }

    const existingUser = await User.findOne({ email: email })//search for email in database
    if (existingUser) {
      return res.status(422).json({ error: "email already present" });
    }

    const hpass=await Hpassword(password);//function for convert into hash format
    const user =new User({ username, email, password:hpass, budget })//add the data

    const resp = await user.save();
    res.status(200).send({ message: "Data added successfully", resp: resp });
    console.log("data added");
  
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
});
module.exports = router;
