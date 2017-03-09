var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('solarSystem.hbs', { title: 'Solar System Page'});
});

module.exports = router;
