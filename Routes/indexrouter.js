var express = require('express');
var router = express.Router();
var config = require('../config.js');
const controller = require(config.path + '/Controller/controllers.js');

// router.get('/', function(req, res) {
//   res.redirect('/userrouter/login');
// });


router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/signup', controller.signup);
router.post('/dosignup', controller.dosignup);
// router.post('/dosignup', function(req, res) {
//    res.redirect('/userrouter/dosignup');
//  });


module.exports = router;