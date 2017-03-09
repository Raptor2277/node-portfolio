var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('csharp.hbs', { title: 'C# Project Page', csharp: 'active' });
});

module.exports = router;
