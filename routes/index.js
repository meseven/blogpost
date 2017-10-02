var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ name: 'Mehmet', surname: "Seven", age: 24 });
});

module.exports = router;
