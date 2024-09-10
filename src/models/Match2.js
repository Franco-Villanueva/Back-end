// src/models/MatchFortnite.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Match2', {
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
        playerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Players',
                key: 'id',
            },
        },
        kills: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    }, {
        timestamps: false,
    });
};