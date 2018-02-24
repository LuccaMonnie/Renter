var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlAbout = require('../controllers/about')
//add more like this if we have more pages ^

//routes serve as mapping service

//pg 84

/* GET home page */
router.get('/', ctrlMain.index);

/* ABOUT pages*/
//define routes and map them to controller functions
router.get('/about', ctrlAbout.aboutInfo);

module.exports = router;
