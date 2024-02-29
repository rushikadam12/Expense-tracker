const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    budget:{
        type:Number,
        required:true
    },
    token:{
        type:String,
        default:''
    },
    expiresAt:{
        type:Date,
        default:''
    }
},{
    timestamp:true
})

const User=mongoose.model('User',userSchema);

module.exports=User