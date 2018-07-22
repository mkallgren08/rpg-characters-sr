// let path = require("path");

// let User = sequelize.import(path.join(__dirname, "./user.js"));

let CharacterBase = require("./characterbase.js")
let SkillBase = require('./skillbase.js')

module.exports = function(sequelize, Sequelize) {
 
  const CharacterSkill = sequelize.define('CharacterSkill', {

      chaskillid: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },

      rating: {
        type: Sequelize.INTEGER,
        notEmpty: true
      },


  });

  CharacterSkill.associate = function (models) {
    models.CharacterSkill.belongsTo(models.CharacterBase, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.CharacterSkill.hasOne(models.SkillBase, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return CharacterSkill;

}