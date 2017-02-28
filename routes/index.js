var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.connection.remoteAddressIpv4);
  res.end("hello world");
});

module.exports = router;
