const dbConnection = require('../dbService')
// const DBSequelize = require("../Base/dbSequelize");
const Sequelize = require('sequelize');

const DoctorCategories = dbConnection().define('doctorCategories', {
    id: {
        type: Sequelize.INTEGER(12),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    tableName: 'doctorCategories',
    timestamps: false
});
module.exports = {
    DoctorCategories
}
