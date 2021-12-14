var DBSequelize = require('sequelize');
const sequelize = require('../dbService');
const {envLocal} = require('./config');

const DB_NAME =  envLocal.database// process.env.DB_NAME;
const DB_USERNAME = envLocal.username// process.env.DB_USERNAME;
const DB_PASSWORD = envLocal.password//process.env.DB_PASSWORD;

DBSequelize = new DBSequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: envLocal.host,
  dialect: 'mysql',
  port: envLocal.port,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
);
module.exports = DBSequelize;