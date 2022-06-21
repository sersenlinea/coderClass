var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let mascotas=[
    {name:'Samy', org:'Digital Ocean', birth_year:2021},
    {name:'Tux', org:'Linux', birth_year:1996},
    {name:'Moby Dock', org:'Docker', birth_year:2013}
  ]
  let tagline="Algunas mascotas"
  res.render('index', {title:'ejs', mascotas:mascotas, tagline:tagline});
});

module.exports = router;
