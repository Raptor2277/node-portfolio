var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('cpp.hbs', { title: 'C++ Project Page', cpp: 'active' });
});

module.exports = router;
