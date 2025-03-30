const request = require("supertest");
const app = require("../../src/app");
const { login } = require("../helpers/auth.helper");

let token;

beforeAll(async () => {
   token = await login();
   console.log("first ret", token)
});

describe("Product API Endpoints", () => {
  test("POST /products should create a product", async () => {
    const res = await request(app)
      .post("/products")
      .send({ name: "Mouse", price: 20, stock: 50, created_by: 1 });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Mouse");
    expect(Object.keys(res.body).length).toBe(7);
    expect({
      created_by: res.body.created_by,
      name: res.body.name,
      price: res.body.price,
      stock: res.body.stock,
    }).toMatchSnapshot();
  });

  test("GET /products should return product list", async () => {
    const res = await request(app).get("/products").set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    // expect(res.body.data).toMatchSnapshot();
  });
});
