const dbConnection = require('../dbService')
// const DBSequelize = require("../Base/dbSequelize");
const Sequelize = require('sequelize');

const Hospitals = dbConnection().define('hospitals', {
    id: {
        type: Sequelize.INTEGER(12),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    startTime: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    },endTime: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    },address: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    }, phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    },

    description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ''
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.TINYINT,
        defaultValue: 1
    },
    country_id:{
        type: Sequelize.INTEGER(12),
    },
    city_id:{
        type: Sequelize.INTEGER(12),
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
    tableName: 'hospitals',
    timestamps: false
});
module.exports = {
    Hospitals
}
