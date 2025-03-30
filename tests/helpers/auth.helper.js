const request = require("supertest");
const app = require("../../src/app");

const login = async () => {
  const loginResponse = await request(app).post("/auth/login").send({
    username: "johndoe",
    password: "password123",
  });

  return loginResponse.body.token;
};

module.exports = { login };
