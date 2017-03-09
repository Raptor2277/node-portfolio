var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('java.hbs', { title: 'Java Home Page', java: 'active' });
});

module.exports = router;
