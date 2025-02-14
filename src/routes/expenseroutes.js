const express = require('express');
const { submitForm, getAllExpensesForm, deleteExpense, updateExpense } = require('../controllers/expenseController');
const router = express.Router();

router.post('/submit', submitForm);
router.get('/expenses/getAllExpenses', getAllExpensesForm);
router.put('/expenses/updateExpense/:id', updateExpense);
router.delete('/expenses/deleteExpense/:id', deleteExpense);

module.exports = router;