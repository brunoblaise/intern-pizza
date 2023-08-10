'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('pizzas', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: { type: Sequelize.STRING, allowNull: false },
			price: { type: Sequelize.INTEGER, allowNull: false },
			available: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
			image: { type: Sequelize.STRING, allowNull: false },
			description: { type: Sequelize.STRING, allowNull: false },
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
		await queryInterface.dropTable('pizzas', { cascade: true });
	},
	tableName: 'pizzas',
};
