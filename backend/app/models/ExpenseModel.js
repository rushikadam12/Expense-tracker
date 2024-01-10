const mongoose = require("mongoose");

// Define the Expense schema
const expenseSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  payment_method: { type: String },
});

// Create the Expense model
const Expense = mongoose.model("Expense", expenseSchema);

// Export the models for use in other parts of your application
module.exports = Expense
