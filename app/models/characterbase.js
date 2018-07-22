// let path = require("path");

// let User = sequelize.import(path.join(__dirname, "./user.js"));

let User = require("./user.js")

module.exports = function(sequelize, Sequelize) {
 
  const CharacterBase = sequelize.define('CharacterBase', {

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


  });

  CharacterBase.associate = function (models) {
    models.CharacterBase.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return CharacterBase;

}