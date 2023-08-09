'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Order', [
      {
        approved: 'Pending',
        userId: 1,
        pizzaId: 1,
        quantity: 1,
      },
      {
        approved: 'Pending',
        userId: 2,
        pizzaId: 2,
        quantity: 2,
      },
      {
        approved: 'Pending',
        userId: 3,
        pizzaId: 3,
        quantity: 3,
      },
      {
        approved: 'Pending',
        userId: 4,
        pizzaId: 4,
        quantity: 4,
      },
      {
        approved: 'Pending',
        userId: 5,
        pizzaId: 5,
        quantity: 5,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Order', null, {});
  }
};
