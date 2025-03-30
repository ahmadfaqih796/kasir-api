const request = require('supertest');
const app = require('../../src/app');

describe('Product API Endpoints', () => {
  test('GET /products should return product list', async () => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('POST /products should create a product', async () => {
    const res = await request(app)
      .post('/products')
      .send({ name: 'Mouse', price: 20, stock: 50, created_by: 1 });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Mouse');
    expect(Object.keys(res.body).length).toBe(7);
  });
});
