'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Order', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			approved: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Reject' },
			userId: { type: Sequelize.INTEGER, allowNull: false },
			pizzaId: { type: Sequelize.INTEGER, allowNull: false },
			quantity: { type: Sequelize.INTEGER, allowNull: false },
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Order');
	},
	tableName: 'Order',
};
