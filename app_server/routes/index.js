
var express = require('express');
var router = express.Router();
// var ctrlMain = require('../controllers/main');
var ctrlLocations = require('../controllers/locations.js');
var ctrlOthers = require('../controllers/others.js');


/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);


/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET 'about' page */
module.exports.about = function(req, res){
res.render('index', { title: 'About' });
};



module.exports = router;
