const express = require('express');
const { submitForm } = require('../controllers/expenseController');
const { getAllExpensesForm } = require('../controllers/expenseController');
const router = express.Router();

router.post('/submit', submitForm);
router.get('/expenses', getAllExpensesForm);
// router.put('/update', updateExpense)
// router.delete('/delete', deleteExpense)

module.exports = router;