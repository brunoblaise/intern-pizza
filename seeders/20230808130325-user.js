'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					name: 'John Doe',
					email: 'johndoe210@gmail.com',
					password: '123456',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'John',
					email: 'johndoe93@gmail.com',
					password: '123456',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Doe',
					email: 'johndoe9@gmail.com',
					password: '123456',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'John Doe',
					email: 'johndoe30@gmail.com',
					password: '123456',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'John Doe',
					email: 'johndoe@gmail.com',
					password: '123456',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('users', null, {});
	},
};
