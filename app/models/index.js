"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
//var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var config = require(__dirname + "/../config/config.json")[env];

// if (env === "development") {
//   config = {
//     username: "root",

//     password: process.env.MYSQL_PASS,

//     database: "shadowrun_rpg",

//     host: "127.0.0.1",

//     dialect: "mysql"
//   }

//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// } else {
  
// }

if (process.env.NODE_ENV === "development"){
  var sequelize = new Sequelize(process.env.SHADOWDB_URL)
} else {
  var sequelize = new Sequelize(process.env.JAWSDB_URL)
}


console.log(env);
console.log(config);


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