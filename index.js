const express = require('express');
require('dotenv').config();
console.log("MONGO URL:", process.env.MongoDB_URL);
const cors = require('cors');
const connectDB = require('./config/db');
const Routes = require('./routes/Routes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Connect to database
connectDB();

// Routes
app.use('/api/', Routes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});