'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluguel extends Model {
    static associate(models) {
      Aluguel.belongsTo(models.Moto);
      Aluguel.belongsTo(models.Cliente);
    }
  }
  Aluguel.init({
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    valor: DataTypes.FLOAT,
    MotoId: DataTypes.INTEGER,
    ClienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluguel',
  });
  return Aluguel;
};