// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting the current user
  app.get("/api/currentUser", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll().then(function(dbUser) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  app.get("/sessionData",function(req,res){
    res.json(req.session)
    console.log(req.session.passport)
  })
}