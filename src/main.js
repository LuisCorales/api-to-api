// Load and run express
const express = require("express");
const api = express();

// Set up and run the API server
api.listen(5500, () => {
    console.log("The API is running...")
});

// Get a response from the API
api.get("/", (req, res) => {
    res.send("Hello world"); 
});

