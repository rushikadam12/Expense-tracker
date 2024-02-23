const mongoose = require("mongoose");

// Define the Expense schema
const expenseSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: Date, required: true },
  month:{type:Number,require:true},
  year:{type:Number,require:true},
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  payment_method: { type: String },
});

// Create the Expense model
const Expense = mongoose.model("Expense", expenseSchema);

// Export the models for use in other parts of your application
module.exports = Expense;
