const { loginAuth } = require("../../src/module/auth/auth.service");

describe("Login Service", () => {
  test("should login successfully", async () => {
    const loginData = { username: "johndoe", password: "password123" };
    const response = await loginAuth(loginData);
    console.log("masuk", response)
    expect(response?.user?.username).toBe("johndoe");
  });
});
