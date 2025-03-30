const {createProduct, getAllProducts} = require('./product.service')

const createProductHandler = async (req, res) => {
   try {
      const product = await createProduct(req.body);
      res.status(201).json(product);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

const getAllProductsHandler = async (req, res) => {
   console.log("tooooo", req.user.fullname)
   try {
      const products = await getAllProducts(req.query);
      res.json(products);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}

module.exports = {
   createProductHandler,
   getAllProductsHandler
}