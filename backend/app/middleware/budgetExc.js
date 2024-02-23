const User = require("../DB/register");
module.exports = budgetExc = async (req, res, next) => {
  const { amount } = req.body;
  try {
    console.log("yes i am invoked")
    const _id = req.userId;
    const resp = await User.findOne({ _id });
    // if (!resp) {
    //   return res.status(400).status({ msg: "User not found" });
    // }
    if (resp.budget < amount) {
      return res
        .status(400)
        .send({ error: "amount is not sufficient" });
    }
    next();
  } catch (error) {
    return res.status(500).send({ error: "!server error" });
    
  }
};
