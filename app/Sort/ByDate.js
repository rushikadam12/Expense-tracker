const express=require('express')
const router = express.Router();
const verifyToken=require('../middleware/VerifyToken')
const Expense=require('../models/ExpenseModel')
router.get("/:sortField/:sortOrder",verifyToken,async(req,res)=>{
    const {sortField,sortOrder}=req.params;
    if(!sortField||!sortOrder){
        return res.status(501).send('pls enter params')
    }
    console.log("request is made")
    try{
            const user_id=req.userId
            const sortField=req.params.sortField||'date';
            const sortOrder=req.params.sortOrder.toLowerCase()==='desc'?-1:1;
            const resp=await Expense.find({user_id}).sort({[sortField]:sortOrder});
            const sum=resp.reduce((total,entry)=>{return total+entry.amount},0)
            console.log(sum)
            console.log(resp)
            return res.status(200).send({data:resp,totalExpense:sum})
    }catch(error){
        console.log(error)
        return res.status(500).json({error:"Internal server error"})
    }
})

module.exports=router;