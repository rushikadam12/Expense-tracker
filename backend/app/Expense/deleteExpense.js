const express=require('express')
const router=express.Router()
const User=require('../DB/register.js')
const Expense=require('../models/ExpenseModel.js')

router.delete("/",async(req,res)=>{
    const {_id}=req.body;
    // console.log(_id);
    if(!_id){
        return res.status(400).send("Pls fill all the field")
    }
    try{    
            const user_id=req.userId;
            const user=await User.findOne({_id:user_id})//find user first
     
            const expense=await Expense.findOne({_id:_id})
            if(!expense||!user){
               return res.status(401).json({error:"no expense or user found in database"})
            }

            const result=await Expense.deleteOne({_id})
            if(result.deletedCount>0){
                
                user.budget+=expense.amount
                const resp=await user.save()
                if(resp){
                    //console.log({resp,amount:user.budget})
                    return res.status(200).send({resp,amount:user.budget,status:"ok",expenseID:_id})
                }
            }else{
                return res.status(400).json({error:"can't find the expense"})
            }
            

    }catch(error){
        console.log(error)
        return res.status(500).json({error:"Internal server error"})
    }
})

module.exports=router