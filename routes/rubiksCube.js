var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  /*var ip = req.headers['x-forwarded-for'] || 
   req.connection.remoteAddress || 
   req.socket.remoteAddress ||
   req.connection.socket.remoteAddress;*/
  res.render('rubiksCube.hbs', { title: 'Rubik\'s Cube Page'});
});

module.exports = router;
