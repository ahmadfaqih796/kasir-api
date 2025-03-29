const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullname: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.ENUM('admin', 'owner', 'staff'),
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true
});

module.exports = User;
