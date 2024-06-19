'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Moto extends Model {
    static associate(models) {
      Moto.hasMany(models.Aluguel);
    }
  }
  Moto.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    disponivel: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Moto',
  });
  return Moto;
};