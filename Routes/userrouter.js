var express = require('express');
var user_controller = require('../Controller/usercontroller');
var router = express.Router();


// router.post('/doologin', function(req, res) {
//   res.redirect('/userrouter/dosignup');
// });

router.post('/dosignup', user_controller.save_signup);
router.post('/doologin', user_controller.logging_in);




module.exports = router;