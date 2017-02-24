const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send("Root Directory");
});

app.get('/users/:id', function(req, res) {
  let id = req.params.id;
  let color = req.query.color;

  res.send(`Yes? You asked for customer ${id} and passed the color ${color}.`)
});

app.listen(3000);

console.log("Express listening on port 3000");
