const mongoose = require('mongoose');

async function connectDB() {
    const dbUri = "mongodb://localhost:27017/nykaa"

    try {
        await mongoose.connect(dbUri)
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error connecting to database',error);
        // throw error
    }
}

module.exports = connectDB;
