'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Aluguel);
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};