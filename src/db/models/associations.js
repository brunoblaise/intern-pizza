// Import the models

const Order = require("./order.model");
const Pizza = require("./pizza.model");
const User = require("./user.model");

// Define the associations
User.hasMany(Order, {
	foreignKey: 'userId',
});

Order.belongsTo(User, {
	foreignKey: 'userId',
});

Pizza.hasMany(Order, {
	foreignKey: 'pizzaId',
});

Order.belongsTo(Pizza, {
	foreignKey: 'pizzaId',
});

// Export the associations
module.exports = { User, Pizza, Order };
