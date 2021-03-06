const mongoose = require('mongoose');
const Product = require('../models/product.model');
const productsData = require('../data/products.json');

require('../config/db.config');

mongoose.connection.once('open', () => {
  console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);
  mongoose.connection.db.dropDatabase()
    .then(() => console.log(`- Database dropped`))
    .then(() => Product.create(productsData))
    .then(posts => console.info(`- Added ${posts.length} products`))
    .then(() => console.info(`- All data created!`))
    .catch(error => console.error(error))
    .then(() => process.exit(0))
})

