var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('arduino.hbs', { title: 'Arduino Project Page', arduino: 'active' });
});

module.exports = router;
