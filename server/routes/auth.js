var APP_CONFIG = require('../app-config.js');
var User = require('../models/User');
var request = require('superagent');

//Middleware
var jwt = require('jsonwebtoken');
var passport = require('passport');
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-local').Strategy;

var google = require('googleapis');
var googlePlus = google.plus('v1');
var OAuth2 = google.auth.OAuth2;
var googleAuth = new OAuth2(
  APP_CONFIG.googleConfig.appID,
  APP_CONFIG.googleConfig.appSecret,
  APP_CONFIG.googleConfig.callbackUrl
);

//Serialize/deserialize
//Seriale user takes in a user object and passes the id to the callback function 'done'
passport.serializeUser(function(user,done){

  done(null, user.id);
});

//Given a user id, we search the database for the user and pass it to the callback function done
passport.deserializeUser(function(id, done){
  User.getUserById(id, function(err, user){
    done(err, user);
  });
});

//JWT Strategy is used to verify a client's JWT before accessing a 'secret' route
passport.use('jwt', new JwtStrategy(
  {
  jwtFromRequest  : ExtractJwt.fromBodyField('Authorization'),
  secretOrKey     : APP_CONFIG.jwtSecret
  },
  function(jwt_payload, done){
          
    User.getUserById(jwt_payload.id, function(error, user){

      console.log("USER = " + JSON.stringify(user));
      
      if(error){
        console.log("Throwing error: " + error);
        return done(error, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done("You are not authorized", false);
      }  
    });
    
  }
));

//THe following are strategies for logging in, all of which respond to the client with a JWT if succesful
passport.use('local',new LocalStrategy(
  function(username, password, done) {
    
    //Here, we create our own custom local strategy
    //We use custom functions from our User mongoose object to talk to the database
    //The process of our local strategy consists of
      //1. Verifying user exists
      //2. Check if password matches
    
    User.getUserByLocalUsername(username, function(err, user){

      if(err){
        console.log("Throwing error");
        throw err;
      }
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }

      User.comparePassword(password, user.local.password, function(err, isMatch){ //The callback function will be executed after the Mongo query
        if(err){
          console.log("Throwing error");
          throw err;
        }
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Invalid password'})
        }
      });
    });
}));

var googleAuth = function(socialtoken, done) {    

      //Profile : https://www.googleapis.com/oauth2/v2/userinfo
      //Email : https://www.googleapis.com/auth/userinfo.email

      request
      .get("https://www.googleapis.com/plus/v1/people/me")
      .query({"access_token":socialtoken})
      .set('Accept', 'application/json')        
      .end(function(err, res){
  
        if (err || !res.ok) { done(err); }
  
        User.getUserByGoogleId(res.id, function(err, user){
  
          if(err){
            console.log("Throwing error");
            throw err;
          }
          debugger;
          if(!user){
            var newUser = new User();
  
            newUser.email = "";
            newUser.name = res.displayName;
            newUser.reg_source = 'google';
            newUser.google.id = res.id;
            newUser.google.token = socialtoken;
      
            User.createGoogleUser(newUser, function(err, user){
              if(err) return done(err);
              return done(null, newUser);
            });
          }
          else{
            //User was found in DB
            return done(null, user);          
          }      
      });
      });
  };
  

//Routes
var express = require('express');
var router = express.Router();


router.post('/login/google', function(req, res) {
    
    googleAuth(req.body.socialtoken, function(err, user, info){
      if (err) {
        console.log(err);
        return res.status(403).json({message: err});
      }
      if (!user) { 
        return res.status(401).json(info);
      }
        var payload = {id: user._id};
        var token = jwt.sign(payload, APP_CONFIG.jwtSecret);  
        return res.status(200).json({message: 'User has been authorized', token: token});
      });
});


module.exports = router;