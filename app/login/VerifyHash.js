// const bcrypt=require('bcrypt')

// const VerifyPassword=(Hpass,password)=>{
//     try{
//         const resp= bcrypt.compare(password,Hpass,(err,result)=>{
//             if(err){
//                 console.log(err)
//                 return err
//             }else if(result){
//                 console.log(result)
//                 return result 
//             }else{
//                 return ({error:"the object is not found"})
//             }
//         })
        
//     }catch(error){
//         console.log(error)
//         res.status(501).json({error:error})
//     }
// }
// module.exports=VerifyPassword