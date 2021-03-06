const dbConnection = require('../dbService');
// const DBSequelize = require("../Base/dbSequelize");
const Sequelize = require('sequelize');

const Cities = dbConnection().define(
  'cities',
  {
    id: {
      type: Sequelize.INTEGER(12),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: '',
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.TINYINT,

      defaultValue: 1,
    },
    country_id: {
      type: Sequelize.INTEGER(12),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp'),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp'),
    },
  },
  {
    tableName: 'cities',
    timestamps: false,
  }
);
module.exports = {
  Cities,
};
