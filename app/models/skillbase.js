// let path = require("path");

let CharacterSkill = require('./characterskill.js')

module.exports = function(sequelize, Sequelize) {
 
  const SkillBase = sequelize.define('SkillBase', {

      skillid: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },

      name: {
          type: Sequelize.STRING,
          notEmpty: true
      },
      
      att: {
        type: Sequelize.STRING,
        notEmpty: true
      },

      candefault: {
          type: Sequelize.BOOLEAN,
          notEmpty: true,
          defaultValue: true
      },

      pageref: {
        type: Sequelize.INTEGER,
        notEmpty: false
      },

      skilltype: {
        type: Sequelize.STRING,
        notEmpty:true
      }


  });

  return SkillBase;

}