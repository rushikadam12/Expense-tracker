require('../DB/db')
const User = require('../DB/register')
const express = require("express");
const router = express.Router();
const Hpassword=require('../login/HashPass')

const containsNumber=(str)=>{
  return /\d/.test(str);
}

router.post("/", async (req, res) => {
  const { username, email, password, budget } = req.body;
  
  // console.log(req.body);
  try {
    if (!username || !email || !budget || !password) {
      console.log("you visited post request");
      return res.send({ error: "pls enter your all fields" });
    }
    if(password.length<5){
      return res.status(400).send({error:'password is too short'})
    }
    if(!containsNumber(password)){
      return res.status(400).send({error:'pls use numbers and symbols'})
    }

    const existingUser = await User.findOne({ email: email })//search for email in database
    if (existingUser) {
      return res.status(422).send({ message: "email already present" });
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
