const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  let defaultName = 'friend';
  let name = req.params.name || defaultName;
  let hi = `Hello, and welcome, ${name}!`
  res.send(hi);
  console.log(req.params.hi || defaultName);
});

module.exports = router;
