require('../DB/db')
const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require('../DB/register')
//const verifyToken=require('../middleware/VerifyToken')
router.get('/',async(req,res)=>{
     const {email,password}=req.body;
     try{
      const user=await User.findOne({email:email})
      if(!user){
        return res.status(502).send({error:"pls enter correct email address"})
        //console.log(user)
      }
        bcrypt.compare(password,user.password,(err,result)=>{
             if(result){
                //res.status(201).json({password:result})
                const token=jwt.sign({id:user._id},process.env.SECURE_KEY,{expiresIn:"1h"})
                req.session.user=user._id
                if(token){
                    return res.send({token:token,status:"ok"})
                }

                // console.log(result)
            }else{
                res.send({password:result,message:'pls enter correct password'})
                // console.log(result)
            }
        })
    }catch(error){
        console.log(error)
    }
     


})



module.exports=router