'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [{
      nome: 'João da Silva',
      email: 'joao@example.com',
      telefone: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};