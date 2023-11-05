// Import the Express framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello, World! This is the root route.');
});

// Define another route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Define a 404 route for any other route that doesn't match
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the Express server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});