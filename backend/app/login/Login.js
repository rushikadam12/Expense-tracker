require('../DB/db')
const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require('../DB/register')
//const verifyToken=require('../middleware/VerifyToken')
router.post('/',async(req,res)=>{
     const {email,password}=req.body;
     if(!email||!password){
        return res.status(201).send({message:'Invalid credentials'})
     }
     try{
      const user=await User.findOne({email:email})
      if(!user){
        return res.status(201).send({error:"pls enter correct email address"})
        //console.log(user)
      }
        bcrypt.compare(password,user.password,(err,result)=>{
             if(result){
                //res.status(201).json({password:result})
                const token=jwt.sign({id:user._id},process.env.SECURE_KEY,{expiresIn:"1d"})
                req.session.user=user._id
                if(token){
                    return res.status(200).send({token:token,status:"ok",message:'welcome!'})
                }

                // console.log(result)
            }else{
                return res.status(201).send({password:result,message:'Invalid credentials'})
                // console.log(result)
            }
        })
    }catch(error){
        console.log(error)
    }
     
})



module.exports=router