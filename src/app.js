const cors = require('cors');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const expenseRoutes = require('./routes/expenseroutes');

const app = express();
app.use(cors());
app.use(express.json());

console.log(process.env.MONGO_URI);
console.log('\n\n\n\n************************');

mongoose.connect(process.env.MONGO_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', expenseRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
