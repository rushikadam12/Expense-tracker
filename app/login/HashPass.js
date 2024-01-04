require('dotenv').config();
const bcrypt=require('bcrypt')

const Hpassowrd=async(password)=>{
        try{
            const resp=bcrypt.hash(password, parseInt(process.env.SALT));
            return resp;
            
        }catch(error){
            console.log(err)
            throw error;
        }
}
module.exports=Hpassowrd