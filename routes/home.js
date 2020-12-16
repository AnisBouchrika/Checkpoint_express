var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var d = new Date();
  var day = d.getDay();
  var hours = d.getHours();

  if (day === 0 || day === 6) {
    res.render('error')
  } else if (hours> 8 && hours < 17) {
    next();
  } else {
    res.render('error') 
  }}
  ,  function (req, res, next) 
  {  res.render('home')}
);
module.exports = router;
