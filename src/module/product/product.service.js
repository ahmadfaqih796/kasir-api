const Product = require('../../models/product.model');
const User = require('../../models/user.model');

const getAllProducts = async () => {
   const products = await Product.findAll({
      include: [
         {
            model: User,
            as: 'creator',
            attributes: ['fullname']
         }
      ]
   });
   return products
};

const createProduct = async (values) => {
    const product = await Product.create(values);
    return product;
}

module.exports = { getAllProducts, createProduct };