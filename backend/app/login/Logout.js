const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  const token = req.cookies.token;
  // console.log("yes i am visited")
  if (token) {
    res.clearCookie("token", { httpOnly: true, sameSite: "none", secure: true });
    res.status(200).send({ message: "logout" });
  }
});

module.exports = router;
