var config = require('../config.js');
var User = require(config.path + '/models/User');
var bcrypt = require('bcrypt');
const saltRounds = 10;



exports.save_signup = (req, res, next) => {
    console.log(req.body.userid);

    var password = req.body.password;
    var hashpassword;
    // Data from form is valid.
    var p = new Promise(function (resolve, reject) {

        bcrypt.hash(password, saltRounds).then(function (hash) {
            // Store hash in your password DB.
            hashpassword = hash;
            resolve('Success!');
            console.log(hashpassword);
        });


    });

    p.then(function () {
        console.log('then');
        var user = new User(
            {
                userid: req.body.userid,
                username: req.body.username,
                password: hashpassword,
            });
        console.log(user.password);

        user.save(function (err) {
            console.log(err);
            if (err) { return next(err); }
            console.log(`${user.userid},${user.username},${user.password}`);
            // Successful - redirect to new user record.
            res.json(`${user.userid},${user.username},${user.password}`);
            // res.redirect(user.url);
        });
        /* do something with the result */
    }).catch(function () {
        /* error :( */
    })


    // Create an User object with escaped and trimmed data.


}


exports.logging_in = ((req, res) => {
    var userid = req.body.userid;
    var password = req.body.password;
    console.log(userid);
    console.log(password);
    User.findOne({ 'userid': userid })
        .exec(function (err, userrecord) {
            if (err) { return next(err); }
            console.log('ssssssssssss');
            console.log(userrecord);
            if (userrecord) {
                bcrypt.compare(password, userrecord.password).then(function (response) {
                    if (response == true) {
                        //res.render('login_form', { title: 'Login',user:user,errors: errors.array() });
                      //  res.render('home');
                       res.render('home', { title: 'Home page',username:userrecord.username });
                       // res.redirect('/users/:' + userid);
                    } else {
                      
                        res.json({"message": "Incorrect password"});
                    }
                }).catch((err) => { console.log(err) });
            }
            else {
                res.json({"message":"Invalid User ID"});
            }

        });




}


// exports.homepage = ((req, res) => {
//     res.render('home');
// }

);