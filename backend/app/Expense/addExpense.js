const express=require('express')
const router=express.Router()
const Expense=require('../models/ExpenseModel')
const User=require("../DB/register.js")

router.post('/',async(req,res)=>{
    const {amount,category,description,payment_method}=req.body;
    console.log('request made')
    if(!amount||!category||!description||!payment_method){
        return res.status(501).json({error:'pls fill all the field'})
    }
    try{
        const Id=req.userId;
        const result= new Expense({user_id:Id,date:new Date(),amount,category,description,payment_method})//create new expense
        const resp=await result.save()//save the values into collection
        const user=await User.findOne({_id:Id})
        if(user){
            user.budget-=amount
            await user.save();
            console.log(`Expense added successfully. Remaining budget: ${user.budget}`);
        }else{
            console.log("User not found")
        }
        return res.status(201).json({result:resp})
    }catch(error){
        console.log(error)
        return res.status(501).json({error:"Internal server error"})
    }
    

})

module.exports=router