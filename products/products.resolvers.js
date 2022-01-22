const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: (_, args) => {
      return productsModel.getAllProducts();
    },
  },
};
