const Expense = require('../models/expenseModel');

exports.submitForm = async (req, res) => {
    const formData = new Expense(req.body);
    console.log(formData)
    try {
        await formData.save();
        res.status(201).send(formData);
    } catch (error) {
        res.status(400).send('Error saving data');
    }
};


exports.getAllExpensesForm = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data' });
    }
};

// exports.deleteExpense =  async (req,res) => {
//     try {
        
//     } catch (error) {
        
//     }
// }