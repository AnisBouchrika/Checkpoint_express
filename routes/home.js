var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var d = new Date();
  var day = d.getDay();
  var days = [1,2,3,4,5]
  var acces = days.includes(day)
  console.log(acces)
  acces ? res.render('home') : res.render('error')
});
module.exports = router;
