const express = require('express');
const { submitForm } = require('../controllers/expenseController');
const { getAllExpensesForm } = require('../controllers/expenseController');
const { deleteExpense } = require('../controllers/expenseController');
const router = express.Router();

router.post('/submit', submitForm);
router.get('/expenses/getAllExpenses', getAllExpensesForm);
// router.put('/update', updateExpense)
router.delete('/expenses/deleteExpense/:id', deleteExpense);

module.exports = router;