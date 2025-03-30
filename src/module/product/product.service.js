const Product = require('../../models/product.model');
const {productInclude} = require('../../includes/product.include');

const getAllProducts = async (query) => {
   const products = await Product.findAll({
      include: productInclude(query)
   });
   return products
};

const createProduct = async (values) => {
    const product = await Product.create(values);
    return product;
}

module.exports = { getAllProducts, createProduct };