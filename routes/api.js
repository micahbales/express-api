const express = require('express');
const router = express.Router();

router.get('/products', function (req, res) {
  res.send('api is working');
});

module.exports = router;
