'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'pizzas',
			[
				{
					name: 'Pepperoni',
					price: 10,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
					description:
						'The Margherita is Pomodoro or San Marzano tomatoes, mozzarella di Buffala, extra virgin olive oil',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Klasik',
					price: 15,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
					description:
						'The Margherita is Pomodoro or San Marzano tomatoes, mozzarella di Buffala, extra virgin olive oil',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Karışık',
					price: 20,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
					description:
						'The Margherita is Pomodoro or San Marzano tomatoes, mozzarella di Buffala, extra virgin olive oil',

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'İtalyan',
					price: 25,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
					description:
						'The Margherita is Pomodoro or San Marzano tomatoes, mozzarella di Buffala, extra virgin olive oil',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Akdeniz',
					price: 30,
					image:
						'https://cache.dominos.com/wam/prod/market/MU/_en/images/promo/b993df36-02b6-4246-a729-b5b4dde8bb58.jpg',
					description:
						'The Margherita is Pomodoro or San Marzano tomatoes, mozzarella di Buffala, extra virgin olive oil',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('pizzas', null, {});
	},
};
