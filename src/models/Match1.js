// src/models/Match1.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Match1', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // Genera un UUID por defecto
            primaryKey: true,
        },
        gameId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Games', // Nombre del modelo relacionado
              key: 'id',
            },
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
