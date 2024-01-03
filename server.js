require('dotenv').config();
const express=require('express');
const connectDb=require('./app/DB/db.js')
const exp=require('./app/DB/exp.js')
const bodyParser=require('body-parser')
const cors=require('cors')
const Register=require('./app/login/Register.js')
app=express();
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


// app.get('/',async(req,res)=>{
//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleDateString('en-US');
//     const currentTime = currentDate.toLocaleTimeString('en-US', { hour12: false });
//     const food=new exp({
//         ExpenseType:"buy milk",
//         Date:formattedDate,
//         Time:currentTime,
//         cost:40
//     })
//     try{
//         await food.save();
//         res.send('Data added successfully')
//         console.log("data added")
//     }catch(error){
//         console.log(error)
//     }

// })
app.use("/api/Register",Register)
connectDb().then(()=>{

app.listen(process.env.PORT||3000,()=>{
    console.log('server is online')
})

})