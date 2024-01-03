const mongoose=require('mongoose')
const ExpenseSchema=new mongoose.Schema({
    ExpenseType:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        required:true,
    },
    Time:{
        type:String,
        required:true,
    },
    cost:{
        type:Number,
        required:true,
    },
})


const Expense=mongoose.model("ExpenseSchema",ExpenseSchema)

module.exports=Expense