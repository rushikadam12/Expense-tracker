require("dotenv").config();
const express = require("express");
const connectDb = require("./app/DB/db.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const Register = require("./app/login/Register.js");
const Login = require("./app/login/Login.js");
const addExpense = require("./app/Expense/addExpense.js");
const ByDate = require("./app/Sort/ByDate.js");
const auth = require("./app/authentication/authentication.js");
const UserData = require("./app/login/UserData.js");
const verifyToken = require("./app/middleware/VerifyToken.js");
const deleteExpense = require("./app/Expense/deleteExpense.js");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const Logout = require("./app/login/Logout.js");

app = express();
app.set('trust proxy', 1);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://expense-tracker-rose-xi.vercel.app",
    credentials: true,
  })
);

const limiter = rateLimit({
  //to limit the api request from user
  windowMs: 60 * 1000, // 1 minute
  max: 50, // max requests per minute
});
app.use(limiter);

app.use("/api/Register", Register);
app.use("/api/Auth", auth);
app.use("/api/Login", Login);
app.use("/api/logout", verifyToken, Logout);
app.use("/api/AddExpense", verifyToken, addExpense);
app.use("/api/Expenses", verifyToken, ByDate);
app.use("/api", verifyToken, UserData);
app.use("/api/Delete", verifyToken, deleteExpense);

connectDb().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("server is online");
  });
});
