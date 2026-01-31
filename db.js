const mongoose = require('mongoose');
const env = require("dotenv").config().parsed

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING);

const db = mongoose.connection;

// db.on('connected', () => {
//     console.log('Database connection successful');
// });

// db.on('error', (err) => {
//     console.error('Database connection error:', err);
// });

// db.on('disconnected', () => {
//     console.log('Database disconnected');
// });


module.exports = {

    mongoose
}