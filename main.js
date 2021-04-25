/**
 * API to get APIs
 */
// Creates an Express application
const express = require('express');
const app = express();

const fetch = require('node-fetch');

// Set the port in the app settings
app.set('port', 5500);
const port = app.set('port');

// JavaScript object notation, to translate data
// Configures express to read and write json
app.use(express.json());

// Set up and run the API server
app.listen(port, () => {
  console.log('The API is running on port:', port)
});

// POST the requested API data
app.post('/add/', (req, res) => {
  console.log('Fetching data from:', req.body.url);
  fetch(req.body.url)
    //.then(response => response.json())
    .then(data => res.send(data))
});
