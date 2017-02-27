const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/rest_test');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));

app.listen(3000);

console.log("API is running on port 3000");
