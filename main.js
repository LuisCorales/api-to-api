/**
 * API to get APIs
 * 
 * COMMANDS
 * npm install nodejs
 * npm install express --save
 * npm i node-fetch --save
 * node main.js
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
app.post('/add/', async (req, res) => {
  try {
    console.log('Fetching data from:', req.body.url);
    
    // Starts a request and awaits until it returns a promise as a Response object
    const response = await fetch(req.body.url);
    // Get the response and await until a JSON object is resolved
    const data = await response.json();
    // Send the JSON
    res.send(data);
  }
  catch(e) {
    console.log(e);
  }
});