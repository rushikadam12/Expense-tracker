require('dotenv').config()
const jwt=require('jsonwebtoken')
module.exports=VerifyToken=(req,res,next)=>{
   
        const token=req.headers["x-access-token"]//getting token form header
        if(!token){
            return res.status(201).json({error:"token not found pls pass token to headers"})
        }
        const resp= jwt.verify(token,process.env.SECURE_KEY,(err,result)=>{
            if(err){
                return res.status(201).json({error:"problem in verifying token pls check token if it is valid or expired"})
            }else{
                const userId=result.id;
                req.userId=userId
                next();
            }
        })

  

}