'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Motos', [{
      marca: 'Honda',
      modelo: 'CB500',
      ano: 2020,
      disponivel: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Motos', null, {});
  }
};
