'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Aluguels', [{
      dataInicio: new Date(),
      dataFim: new Date(),
      valor: 100.00,
      MotoId: 1,
      ClienteId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Aluguels', null, {});
  }
};