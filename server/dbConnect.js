const mongoose = require('mongoose');
const URL = process.env.MONGO_URL;
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongo DB connection successful');
})
connection.on('error', (error) => {
    console.log(error);
})