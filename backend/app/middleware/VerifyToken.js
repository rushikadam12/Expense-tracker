require('dotenv').config()
const jwt=require('jsonwebtoken')

module.exports=VerifyToken=(req,res,next)=>{
   
        //getting token form header
        
        if(!token){
            return res.status(498).json({error:"token not found"})
        }
        const resp= jwt.verify(req.cookies.token,process.env.SECURE_KEY,(err,result)=>{
            if(err){
                return res.status(401).json({error:"problem in verifying token pls check token if it is valid or expired"})
            }else{
                const userId=result.id;
                req.userId=userId
                next();
            }
        })

  

}