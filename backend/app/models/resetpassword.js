const mongoose = require("mongoose");

// Define the Expense schema
const OTp= new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    code:{
        type:Number,
        require:true,
    },
    expireIn:{
        type:Number,
        require:true,
    },
   
});

// Create the Expense model
const OTPSchema = mongoose.model("OTP", OTp);

// Export the models for use in other parts of your application
module.exports = OTPSchema;
