const dbConnection = require('../dbService')
// const DBSequelize = require("../Base/dbSequelize");
const Sequelize = require('sequelize');

const Users = dbConnection().define('users', {
    id: {
        type: Sequelize.INTEGER(12),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0

    },gender: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    }, phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    },
    country: {
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
    tableName: 'users',
    timestamps: false
});
module.exports = {
    Users
}
