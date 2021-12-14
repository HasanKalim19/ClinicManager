const dbConnection = require('../dbService')
// const DBSequelize = require("../Base/dbSequelize");
const Sequelize = require('sequelize');

const Countries = dbConnection().define('countries', {
    id: {
        type: Sequelize.INTEGER(12),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    iso: {
        type: Sequelize.CHAR(3),
        allowNull: false

    },
    nice_name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ''
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iso3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_code: {
        type: Sequelize.SMALLINT(6),
        defaultValue: 1
    },
    phone_code: {
        type: Sequelize.INTEGER(5),

        defaultValue: 1
    },
    status: {
        type: Sequelize.TINYINT,

        defaultValue: 1
    },

    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('current_timestamp')
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('current_timestamp')
    }
}, {
    tableName: 'countries',
    timestamps: false
});
module.exports = {
    Countries
}
