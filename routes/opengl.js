var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('opengl.hbs', { title: 'OpenGL Home Page', opengl: 'active' });
});

module.exports = router;
