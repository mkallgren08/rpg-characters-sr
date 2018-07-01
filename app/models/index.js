"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
//var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
//var config = require(__dirname + "/../config/config.json")[env];

let connectionURL = process.env.SHADOWDB_URL;

let config = {
  username: "jj24xrw3f9ews9y7",

  password: process.env.SHADOWPASS,

  database: "sequelize_passport",

  host: "alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

  dialect: "mysql"
}


console.log(connectionURL)

var sequelize = new Sequelize(connectionURL)

console.log("The development environment is: " + env);

var db = {};


fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;