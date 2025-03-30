const request = require("supertest");
const app = require("../../src/app"); // Sesuaikan path dengan app.js utama

const login = async () => {
  const loginResponse = await request(app).post("/auth/login").send({
    username: "johndoe",
    password: "password123",
  });

  return loginResponse.body.token;
};

module.exports = { login };
