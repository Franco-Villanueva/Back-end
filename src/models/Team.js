
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
        },
        aka: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gameId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Games',
              key: 'id',
            },
          },
    }, {
        timestamps: false,
    });
};
