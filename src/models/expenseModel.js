const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    date: String,
    price: String,
    category: String,
    description: String,
    paymentMethod: String
});

module.exports = mongoose.model('Expense', expenseSchema);
