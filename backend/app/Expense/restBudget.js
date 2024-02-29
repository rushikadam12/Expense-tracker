const express = require("express");
const router = express.Router();
const User = require("../DB/register.js");

router.patch("/", async (req, res) => {
  const { newamount } = req.body;
  
  if (!newamount || isNaN(newamount)) {
    return res.status(400).send({ msg: "pls fill all the field" });
  }
  try {
    const _id = req.userId;
    let amount = parseInt(newamount);

    const result = await User.updateOne({ _id }, { $set: { budget: amount } });
     
    if (result) {
      return res.status(200).send({ result });
    }
    return res.status(404).json({ msg: "User not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
});

module.exports = router;
