// Create web server
// Create API
// Create a route to handle POST request
// Create a route to handle GET request
// Create a route to handle DELETE request
// Create a route to handle PUT request
// Create a route to handle PATCH request
// Create a route to handle OPTIONS request

// Importing modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API
app.post('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    const comments = JSON.parse(data);
    const newComment = {
      id: Date.now(),