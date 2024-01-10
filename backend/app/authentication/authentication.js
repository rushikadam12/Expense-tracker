const express=require('express')
const router=express.Router()
const verifyToken=require('../middleware/VerifyToken')

router.get("/",verifyToken,(req,res)=>{
    res.status(200).send({auth:true,status:"ok"})
})
module.exports=router