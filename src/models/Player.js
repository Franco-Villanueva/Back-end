// src/models/Player.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Player', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        teamId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Teams',  // Nombre de la tabla que contiene los equipos
              key: 'id',       // Llave primaria de la tabla de equipos
            }
          }
    }, {
        timestamps: false,
    });
};
