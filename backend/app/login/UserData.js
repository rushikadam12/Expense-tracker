const express=require('express')
const router=express.Router()
const User=require('../DB/register')

router.get("/User",async(req,res)=>{
    try{
        const _id=req.userId
        const resp=await User.findOne({_id}).select({_id:1,username:1,email:1,budget:1})
        if(!resp){
            return res.status(404).json({error:"User is not present database"})
        }
        res.status(200).json(resp)
        

    }catch(error){
        res.status(500).json({error})
    }
})

module.exports=router