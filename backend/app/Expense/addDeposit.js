const express = require("express");
const router = express.Router();
const User = require("../DB/register.js");

router.patch("/", async (req, res) => {
  const { newamount } = req.body;
  if (!newamount ||parseInt(newamount)<1 ) {
    return res.status(400).send({ msg: "pls fill all the field" });
  }
  try {
    const _id = req.userId;

    const userData = await User.findOne({ _id });
    let amount = parseInt(userData.budget) + parseInt(newamount);

    const result = await User.updateOne({ _id }, { $set: { budget: amount } });
    if (result) {
      return res.status(200).send({ result });
    }
    return res.status(404).send({ msg: "User not found" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

module.exports = router;
