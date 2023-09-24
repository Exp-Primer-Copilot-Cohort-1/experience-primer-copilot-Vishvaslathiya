// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// Set response headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});
// Array of comments
const comments = [
  {
    id: '1',
    name: 'John',
    comment: 'Hello World!'
    },
    {  id: '2',
    name: 'Jane',
    comment: 'Hi, there!'
    }
    ];
    