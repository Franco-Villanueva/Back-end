const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('News', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
};
