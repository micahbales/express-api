const express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send("Well, that worked just fine!");
}).listen(3000);

console.log("Express listening on port 3000");
