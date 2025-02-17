const mongoose = require('mongoose');

function connectToDb() {
    console.log('Attempting to connect to the database...');
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to DB');
        })
        .catch((err) => {
            console.error('Database connection error:', err.message);
        });
}

module.exports = connectToDb; // This exports the function
