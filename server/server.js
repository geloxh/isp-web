const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || 'http://localhost:4200' }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Telco ISP API is running');
});

// Routes
app.use('/api/products.routes', require('./routes/products.routes'));
app.use('/api/promos.routes', require('./routes/promos.routes'));
app.use('/api/orders.routes', require('./routes/orders.routes'));
app.use('/api/auth.routes', require('./routes/auth.routes'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
