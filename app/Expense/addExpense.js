const express=require('express')
const router=express.Router()
const Expense=require('../models/ExpenseModel')
const verifyToken=require('../middleware/VerifyToken.js')

router.post('/',verifyToken,async(req,res)=>{
    const {amount,category,description,payment_method}=req.body;
    console.log('request made')
    if(!amount||!category||!description||!payment_method){
        return res.status(501).json({error:'pls fill all the field'})
    }
    try{
        const Id=req.userId;
        const result= new Expense({user_id:Id,date:new Date(),amount,category,description,payment_method})//create new expense
        const resp=await result.save()//save the values into collection
        return res.status(201).json({result:resp})
    }catch(error){
        console.log(error)
        return res.status(501).json({error:"Internal server error"})
    }
    

})

module.exports=router