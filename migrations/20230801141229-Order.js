'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('orders', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			approved: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Reject' },
			userId: { type: Sequelize.INTEGER, allowNull: false },
			pizzaId: { type: Sequelize.INTEGER, allowNull: false },
			quantity: { type: Sequelize.INTEGER, allowNull: false },
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			// Add updatedAt column with a default value of current timestamp
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('orders', { cascade: true });
	},
	tableName: 'orders',
};
