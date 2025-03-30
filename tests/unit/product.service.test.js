const {createProduct, getAllProducts} = require('../../src/module/product/product.service');

describe('Product Service', () => {
  test('should create a product successfully', async () => {
    const productData = { name: 'Laptop', price: 2000, stock: 5, created_by: 1 };
    const newProduct = await createProduct(productData);
   console.log("first ret", newProduct?.dataValues)
    expect(newProduct?.dataValues?.name).toBe('Laptop');
  });

  test('should fetch all products', async () => {
    const products = await getAllProducts({});
    expect(Array.isArray(products?.data)).toBe(true);
  });
});