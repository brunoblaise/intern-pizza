'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Pizza',
			[
				{
					name: 'Pepperoni',
					price: 10,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
				},
				{
					name: 'Klasik',
					price: 15,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
				},
				{
					name: 'Karışık',
					price: 20,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
				},
				{
					name: 'İtalyan',
					price: 25,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
				},
				{
					name: 'Akdeniz',
					price: 30,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Pizza', null, {});
	},
};
