const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  let name = req.param('name', 'friend');
  let hi = `Hello, and welcome, ${name}!`
  res.send(hi);
  console.log(req.param('hi'));
});

module.exports = router;
