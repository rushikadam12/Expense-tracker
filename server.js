require('dotenv').config();
const express=require('express');
const connectDb=require('./app/DB/db.js')
const exp=require('./app/DB/exp.js')
const bodyParser=require('body-parser')
const cors=require('cors')
const Register=require('./app/login/Register.js')
const Login=require('./app/login/Login.js')
const session=require('express-session')
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
app.use("/api/Login",Login)


connectDb().then(()=>{
app.listen(process.env.PORT||3000,()=>{
    console.log('server is online')
})

})