var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.json({ name: 'Mehmet', surname: 'Seven', age: 24, location: 'Istanbul', job: 'jobless' });
});

module.exports = router;
