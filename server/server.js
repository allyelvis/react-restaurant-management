const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Import routes
const posRoutes = require('./routes/pos');
const accountingRoutes = require('./routes/accounting');
const ecommerceRoutes = require('./routes/ecommerce');
const taxRoutes = require('./routes/tax');

// Use routes
app.use('/api/pos', posRoutes);
app.use('/api/accounting', accountingRoutes);
app.use('/api/ecommerce', ecommerceRoutes);
app.use('/api/tax', taxRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
