require('dotenv').config();
const express=require('express');
const connectDb=require('./app/DB/db.js')
const bodyParser=require('body-parser')
const cors=require('cors')
const Register=require('./app/login/Register.js')
const Login=require('./app/login/Login.js')
const session=require('express-session')
const addExpense=require('./app/Expense/addExpense.js')
const ByDate=require('./app/Sort/ByDate.js')
const auth=require('./app/authentication/authentication.js')
const UserData=require('./app/login/UserData.js')
const verifyToken=require('./app/middleware/VerifyToken.js')
const deleteExpense=require('./app/Expense/deleteExpense.js')

app=express();
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({
    origin:['http://localhost:5171'],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));
app.use(session({
    key:"userId",
    secret:process.env.SECURE_KEY,
    resave:true,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
        
    },
}))


app.use("/api/Register",Register)
app.use("/api/Auth",auth)
app.use("/api/Login",Login)
app.use("/api/AddExpense",verifyToken,addExpense)
app.use("/api/Expenses",verifyToken,ByDate)
app.use("/api",verifyToken,UserData)
app.use("/api/Delete",verifyToken,deleteExpense)

connectDb().then(()=>{
app.listen(process.env.PORT||3000,()=>{
    console.log('server is online')
})

})