require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectToDb = require('./db/db'); // Ensure the path to db.js is correct

const port = process.env.PORT || 3000;

// Call the database connection function
connectToDb();

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
