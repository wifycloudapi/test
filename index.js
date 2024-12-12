// Import express module
const express = require('express');

// Create an express application
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Define a GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a POST route
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});

// Define a port and listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
