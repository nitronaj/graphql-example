const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct(_, args) {
      const { id, description, price } = args;
      return productsModel.addNewProduct(id, description, price);
    },

    addNewProductReview(_, args) {
      const { id, rating, comment } = args;
      return productsModel.addNewProductReview(id, rating, comment);
    },
  },
};
