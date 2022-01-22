const products = [
  {
    id: 'redshoe',
    description: 'Red shoe',
    price: 42.12,
  },
  {
    id: 'bluejean',
    description: 'Blue Jean',
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductsById(id) {
  return products.find((product) => product.id === id);
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
};
