// src/models/Match.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Match', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        matchType: {
            type: DataTypes.ENUM('Valorant', 'Fortnite', 'CS2'),
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
        },
        scoreA: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        scoreB: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};
