
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Team', {
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
        game: {
            type: DataTypes.ENUM('Valorant', 'Fortnite', 'CS2'),
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};
