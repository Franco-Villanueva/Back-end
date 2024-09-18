const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Game', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
};
