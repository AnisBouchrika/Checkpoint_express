var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var d = new Date();
  var day = d.getDay();
  var days = [1,2,3,4,5]
  var acces = days.includes(day)

  acces ? res.render('contact') : res.render('error')

});

module.exports = router;
