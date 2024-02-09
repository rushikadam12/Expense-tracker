const express=require('express')
const router=express.Router()
const verifyToken=require('../middleware/VerifyToken')

router.get("/",verifyToken,(req,res)=>{
    // console.log('yes i am visited')
   return  res.status(200).send({auth:true,status:"ok"})
})
module.exports=router