const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const path = require('path');

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// MongoDB Connection
const URL = process.env.MONGO_URL;
if (!URL) {
    console.error("Error: MONGO_URL is undefined. Check your .env file.");
    process.exit(1);
}

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB connection successful');
});

connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

// Routes
const userRoute = require('./routes/userRoute');
app.use('/api/user/', userRoute);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    });
}

// Basic route
app.get('/', (req, res) => res.send('Hello, World!'));

// Start server
app.listen(port, () => console.log(`App listening on port ${port}`));
