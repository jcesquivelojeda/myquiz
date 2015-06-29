var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('users');
 // res.send('ruta users');
});

module.exports = router;
