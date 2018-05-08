var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var fs = require('fs');
var path = require('path');


exports.index = (req, res) => {
    console.log(__dirname+' index');
    res.sendFile(path.join(__dirname, '../views/index.html'));
  //  res.render('login');   
};

exports.login = (req, res) => {
    console.log(__dirname+' login');
    res.render('login');
   
};

exports.signup = (req, res) => {
    console.log(__dirname+' signup');
    res.render('signup');

};

exports.doologin = (req, res) => {
    console.log(__dirname+' doologin');
    res.json('Sucessfully logged in');

};

exports.dosignup = (req, res) => {
    console.log(__dirname+' dosignup');
    res.json('Sucessfully signed up');

};
