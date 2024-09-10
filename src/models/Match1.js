// src/models/Match1.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Match1', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        competition: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        teamAId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Teams',
                key: 'id',
            },
        },
        teamBId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Teams',
                key: 'id',
            },
        },
        result: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
};
