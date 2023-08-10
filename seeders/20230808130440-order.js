'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'orders',
			[
				{
					approved: 'Pending',
					userId: 1,
					pizzaId: 1,
					quantity: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					approved: 'Pending',
					userId: 2,
					pizzaId: 2,
					quantity: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					approved: 'Pending',
					userId: 3,
					pizzaId: 3,
					quantity: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					approved: 'Pending',
					userId: 4,
					pizzaId: 4,
					quantity: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					approved: 'Pending',
					userId: 5,
					pizzaId: 5,
					quantity: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('orders', null, {});
	},
};
