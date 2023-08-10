'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'user' },
			name: { type: Sequelize.STRING, allowNull: false },
			email: { type: Sequelize.STRING, allowNull: false, unique: true },
			password: { type: Sequelize.STRING, allowNull: false },
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
		await queryInterface.dropTable('users', { cascade: true });
	},
	tableName: 'users',
};
