var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('rubiksCube.hbs', { title: 'Rubik\'s Cube Page'});
});

module.exports = router;
