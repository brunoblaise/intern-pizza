'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInert(
			'User',
			[
				{
					name: 'John Doe',
					email: 'johndoe90@gmail.com',
					paswword: '123456',
				},
				{
					name: 'John',
					email: 'johndoe93@gmail.com',
					paswword: '123456',
				},
				{
					name: 'Doe',
					email: 'johndoe9@gmail.com',
					paswword: '123456',
				},
				{
					name: 'John Doe',
					email: 'johndoe90@gmail.com',
					paswword: '123456',
				},
				{
					name: 'John Doe',
					email: 'johndoe@gmail.com',
					paswword: '123456',
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('User', null, {});
	},
};
