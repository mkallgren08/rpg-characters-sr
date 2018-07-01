// let path = require("path");

// let User = sequelize.import(path.join(__dirname, "./user.js"));

let User = require("./user.js")

module.exports = function(sequelize, Sequelize) {
 
  const CharacterBase = sequelize.define('characterbase', {

      characterid: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },

      charactername: {
          type: Sequelize.STRING,
          notEmpty: true
      },
      
      userid: {
        type: Sequelize.INTEGER,
        notEmpty: true
      },

      raceid: {
          type: Sequelize.INTEGER,
          notEmpty: true
      },

      about: {
          type: Sequelize.TEXT
      },

      email: {
          type: Sequelize.STRING,
          validate: {
              isEmail: true
          }
      },


  });

  return CharacterBase;

}