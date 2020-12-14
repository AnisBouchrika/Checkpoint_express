var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var d = new Date();
    var days = [1,2,3,4,5]
    var day = d.getDay();
    var acces = days.includes(day)
    acces ? res.render('about') : res.render('error')

 
});

module.exports = router;
